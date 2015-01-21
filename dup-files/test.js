/**
 * Created by ptdecker on 2015-01-07
 */

/**
 * Problem Statement (from Interview Cake, http://www.interviewcake.com)
 *
 * You left your computer unlocked and your friend decided to troll you by copying a lot of your files to random spots
 * all over your file system. Even worse, she saved the duplicate files with random, embarrassing names
 * ("this_is_like_a_digital_wedgie.txt" was clever, I'll give her that).
 *
 * Write a function that returns a list of all the duplicate files. We'll check them by hand before actually
 * deleting them, since programmatically deleting files is really scary. To help us confirm that two files are
 * actually duplicates, make the returned list a list of tuples, where:
 *
 * the first item is the duplicate file
 * the second item is the original file
 *
 * For example:
 *
 * [('/tmp/parker_is_dumb.mpg', '/home/parker/secret_puppy_dance.mpg'), ('/home/trololol.mov', '/etc/apache2/httpd.conf')]
 */

"use strict";

console.log(require('./finddupfiles.js').findDuplicateFiles("/users/ptdecker/Code"));

