/**
 * Created by ptdecker on 2015-01-17
 */

/**
 * Finds duplicate files within a files structure based upon CRC-32 signatures as opposed to other file
 * attributes and is thus able to find duplicate files that may have different file names, creation dates, etc.
 *
 * This modules works by crawling the directory structure starting from a specified path. As it walks the
 * structure, it calculates a CRC-32 signature for each file. Then, the module builds a multi-map using the
 * CRC-32 signature as the key. A multi-map is a hash map that allows storing multiple values for a given
 * hash key. The module then walks through the hash map and builds an array of entries that contain two or more
 * items for a given hash key and thus represent duplicate files. It then returns this array to the caller.
 *
 * Currently, this module is written using synchronous calls to the file system.
 *
 * */

"use strict";

var fs       = require('fs'),
    path     = require('path'),
    crc      = require('crc'),
    MultiMap = require('dsjslib').MultiMap;

/* getFilesSync
 *
 * Walks a specified directory adding to the 'files' array all the files found in the directory and adding to
 * the 'dirs' array all the sub-directories encountered. For each file, the file's attributes are also saved
 * along with a calculated CRC-32 value. Files that cannot be read due to access rights or other
 * constraints are logged in an errors array.
 *
 * Files system entries other than files or directories are ignored (i.e. devices, symbolic links, etc., are
 * ignored)
 *
 * This approach is currently implemented with synchronous calls to file system services.
 *
 * 'errors' - an array containing any error messages returned by the file system. 'getFilesSync' appends to
 * this array any errors it encounters while calling file system services then continues processing.
 * 'dirs' - an array containing a list of directory paths. 'getFileSync' appends to this array any
 * sub-directories encountered while reading the files contained in 'dir'.
 * 'files' - an array containing a set of objects. Each object contains the name, directory, file path,
 * file attributes, and calculated CRC-32 code for each file contained in 'dir'.
 * 'dir' - the path to the directory to be processed.
 */

function getFilesSync(errors, dirs, files, dir) {
    //Okay, so Douglas Crockford hates synchronous calls preferring to brand them 'stupid' within JSLint
    //checks. I don't like them either. But, I haven't given myself the time to figure out how to implement
    //this function using asynchronous versions of 'readdir', 'lstat', and 'readFile' yet. So, for now, we
    //will have JSLint tolerate my 'stupidity' in the eyes of Demigod Crockford.
    /*jslint stupid: true */
    try {
        fs.readdirSync(dir).forEach(function (item) {
            var filepath = path.join(dir, item),
                stats = fs.lstatSync(filepath),
                crccode;
            if (stats.isDirectory()) {
                dirs.push(filepath);
            } else if (stats.isFile()) {
                crccode = crc.crc32(fs.readFileSync(filepath, 'utf8')).toString(16);
                files.put(crccode, {
                    name: item,
                    dir: dir,
                    path: filepath,
                    stats: stats,
                    crc: crccode
                });
            }
        });
    } catch(err) {
        errors.push(err);
    }
    /*jslint stupid: false */
}

/* walkDirsSync
 *
 * Walk through the directory structure starting from 'dir' and return an array containing all
 * encountered files including the file name, directory, full path, file attributes, and CRC-32
 * for the file.
 *
 * This approach is currently implemented with synchronous calls to file system services.
 *
 * 'errors' - an array containing any error messages returned by the file system. 'getFilesSync' appends to
 * this array any errors it encounters while calling file system services then continues processing.
 * 'files' - an array containing a set of objects. Each object contains the name, directory, file path,
 * file attributes, and calculated CRC-32 code for each file contained in 'dir'.
 * 'dir' - the path to the directory to be processed.
 */

function walkDirsSync(errors, files, dir) {
    var dirs = [];
    dirs.push(dir);
    while (dirs.length > 0) {
        getFilesSync(errors, dirs, files, dirs.pop());
    }
}

/* findDuplicateFiles
 *
 * Takes in an array of file objects (containing file name, path, file attributes, and calculated CRC-32) and
 * returns another array containing tuples of the duplicate files regardless of their file name (based upon
 * the CRC-32)
 */

module.exports.findDuplicateFiles = function findDuplicateFiles(dir) {

    var files       = new MultiMap(),  // Multi-map hash map
        elements    = [],              // Array of hash map value elements for a given key
        errors      = [],              // Array of error messages
        duplicates  = [],              // Array of duplicate file sets
        keys,                          // Array of key-value elements from hash map
        pairs,                         // Array of individual duplicate files for a given key
        elementKey,                    // Hash map element key
        i, j;                          // Array indices

    // Get all the files we need to check for duplicates

    walkDirsSync(errors, files, dir);

    // Check for duplicates using a multi-map hash map

    keys = files.entries();
    for (i = 0; i < keys.length; i += 1) {
        elementKey = keys[i].key;
        elements = files.get(elementKey);
        if (elements.length > 1) {
            pairs = [];
            for (j = 0; j < elements.length; j += 1) {
                pairs.push(elements[j].path);
            }
            duplicates.push(pairs);
        }
    }

    return duplicates;
};