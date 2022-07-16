// 1. Declare an _empty_ array;
console.log('1');
const emptyArray = Array();
console.log(emptyArray);

// 2. Declare an array with more than 5 number of elements
console.log('2');
const emptyArrayFive = Array(6);
const arrayFive = Array(10).fill(true);
const arrayFiveMishMash = [true, 42, 'Frodo', {
    subject: 'calculus',
    interesting: 'derivation'
}, 'Euler', 'foo', 'bar'];

// 3. Find the length of your array
console.log('3');
const LENGTH_OF_ARRAY = arrayFiveMishMash.length;
console.log(LENGTH_OF_ARRAY);

// 4. Get the first item, the middle item and the last item of the array
console.log('4');
console.log(arrayFiveMishMash[0],
    arrayFiveMishMash[Math.round(arrayFiveMishMash.length / 2)], arrayFiveMishMash[arrayFiveMishMash.length - 1]);

// 5. Declare an array called _mixedDataTypes_, put different data types in the array and find the length of the array. The array size should be greater than 5
console.log('5');
const mixedDataTypes = [42, 'mix', [2, 3, 5], false, NaN, -1, "", 0];
console.log(mixedDataTypes.length);

// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
console.log('6');
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// 7. Print the array using _console.log()_
console.log('7');
console.log(itCompanies);

// 8. Print the number of companies in the array
console.log('8');
console.log(itCompanies.length);

// 9. Print the first company, middle and last company
console.log('9');
console.log(itCompanies[0],
    itCompanies[Math.round(itCompanies.length / 2)],
    itCompanies[itCompanies.length]);

// 10. Print out each company
console.log('10');
itCompanies.map((comp) => console.log(comp));


// 11. Change each company name to uppercase one by one and print them out
console.log('11');
itCompanies.map((comp) => console.log(comp.toUpperCase()));

// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon are big IT companies.
console.log('12');
let tempItCompanies = [...itCompanies];
console.log(tempItCompanies.splice(0, itCompanies.length - 2).join(", ") + " and " + itCompanies[itCompanies.length - 1] + ' are the big Companies.');

// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is _not found_
console.log('13');
itCompanies.includes('name of company') ? 'name of company' : 'not found';

// 14. Filter out companies which have more than one 'o' without the filter method
console.log('14');
tempItCompanies = [...itCompanies];
console.log()

function testO(arr) {
    let howManyO = 0;
    const newArr = [];
    for (let h = 0; h < arr.length; h++) {
        howManyO = 0;
        for (let i = 0; i < arr[h].length; i++) {
            if (arr[h][i] == 'o') {
                howManyO++;
            }
        }
        if (howManyO < 2) {
            newArr.push(arr[h]);
        }
    }
    return newArr;
}
console.log('14');
console.log('Companies without more o ', testO(tempItCompanies));



// 15. Sort the array using _sort()_ method
console.log('15');
console.log(itCompanies.sort());

// 16. Reverse the array using _reverse()_ method
console.log('16');
console.log(itCompanies.reverse());

// 17. Slice out the first 3 companies from the array
console.log('17');
console.log(itCompanies.slice(0, 4));

// 18. Slice out the last 3 companies from the array
console.log('18');
console.log(itCompanies.slice(itCompanies.length-3, itCompanies.length));

// 19. Slice out the middle IT company or companies from the array
console.log('19');
console.log(itCompanies.slice(Math.floor(itCompanies.length/2), Math.ceil(itCompanies.length/2)));

// 20. Remove the first IT company from the array
console.log('20');
console.log(itCompanies.shift());

// 21. Remove the middle IT company or companies from the array
console.log('21');
console.log(itCompanies.splice(Math.floor(itCompanies.length/2)-1, 1));


// 22. Remove the last IT company from the array
console.log('22');
console.log(itCompanies.pop());

// 23. Remove all IT companies
console.log('23');
console.log(itCompanies);
for (let i = 0; i < itCompanies.length; i++) {
    itCompanies.pop();
}
console.log(itCompanies);