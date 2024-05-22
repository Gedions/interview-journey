/* 
*   Author: Job Gedions Orungo
*   Interviewer: Davis Mutinda Mutuku
*   Date of Interview: 22/05/2024 0940hours
*   Task Duration: 5 minutes
*   
*   Question:
*   `````````
*   Given Array let x =[2,2,3,5,6,5,7,7,9,4,4,3];
*   Task 1: Return an array of repeated elements.
*   Task 2: Return an array of repeated elements that appear consecutively.
*   
*   Solution Approach
*   `````````````````
*   - Initialize variables to hold repeated Elements/items, elements that appear repeated conecutively,
*     a previous element, and the count of elements in the array.
*   - Loop through the array once,(observing O(n)), checking for repeated elements and those that appear
*     consecutively.
*   - since I am using a method, return an object with an array of repeated Elements and those that 
*     consecutively appear after each other.*   
*   
*   Result
*   ``````
*   {repeatedElements: [ 2, 5, 7, 4, 3 ],consecutivelyRepeatedElements: [ 2, 7, 4 ]}
*
*/

// MY SOLUTION.
let x = [2, 2, 3, 5, 6, 5, 7, 7, 9, 4, 4, 3];

function repeatedElements(myArray) {
    let rptElm = [];
    let itemCounts = {};
    let consecutive = [];
    let prev = 0;

    for (let i = 0; i < myArray.length; i++) {
        const item = myArray[i];
        if (prev === myArray[i]) {
            consecutive.push(myArray[i]);
        }
        if (itemCounts[item] === undefined) {
            itemCounts[item] = 1;
        } else {
            itemCounts[item]++;
        }

        if (itemCounts[item] > 1) {
            rptElm.push(item);
        }

        prev = myArray[i];
    }

    return { 'repeatedElements': rptElm, 'consecutivelyRepeatedElements': consecutive };
}

console.log(repeatedElements(x));

