// JS - RegEx - Check for Mixed Grouping of Characters

// Test names
let nameTest1 = "Franklin D. Roosevelt"; // True
let nameTest2 = "Eleanor Roosevelt"; // True
let nameTest3 = "Franklin Roosevelt"; // False
let nameTest4 = "Frank Roosevelt"; // False
let nameTest5 = "FranklinRoosevelt"; // False
let nameTest6 = "EleanorRoosevelt"; // False

let myString = nameTest1;
let myRegex = /(Eleanor|Franklin .*) Roosevelt/g; 
let result = myRegex.test(myString);
let result2 = myString.match(myRegex);
// After passing the challenge experiment with myString and see how the grouping works

console.log(result);
console.log(result2);