interview-cake-answers-javascript
=================================

My answers in JavaScript to InterviewCake (https://www.interviewcake.com) Weekly Problems

Each solution can be found in its own directory and generally includes a package containing the guts of the solution
plus a test script that runs through the test cases presented by the Interview Cake assignment.

Solutions:

* 01 'Apple Stocks' - Found low and high inflection points in the data then returned largest gap
* 02 'Product of every integer in an array except integer at that index'
* 03 'Product of the three largest integers in an array' - Implemented the 'bonus' generic solution of product of 'x' largest integers
* 04 'Merging Meeting Times' - Implemented by sorting tuples then walking down them O(nlog(n))
* 05 'Making Change' - Implemented using O(n * m) time, O(n) space, bottom-up non-recursive approach
* 06 'Rectangular Love' - Finds the intersection of two rectangles
* 10 'Second Largest' - Implemented a BST library and added to it the ability to return the next to the 2nd largest. Implemented in a generic way to return the nth to the last element in the tree.
* 16 'Cake Thief' - Solved using a dynamic programming solution to the unbounded knapsack problem
* 22 'Delete Node' - Solved by using a single linked list
* 25 'kth To The Last Node in a Singly-Linked List' - Solved by using a second offset sliding pointer
* 27 'Reverse Words' - Solved using a recursive approach. Converted to an array to satisfy mutability requirement.
* 29 'Bracket Validator' - Solved the main problem, but haven't yet figured out the bonus.
* 35 'In-Place Shuffle' - Solved by using the Fisher-Yates in-place shuffle algorithm
* 36 'Single Riffle Check' - Solved by writing a riffle shuffle function and corresponding checks
* 41 'Find Duplicate Files' - Solved by building a multi-map hash map based upon CRC-32 signatures for each file
* 42 'Merge Sorted Arrays' - Solved using in O(n+m) time and O(2(n+m)) space using indexes for each array w/BONUS solved
