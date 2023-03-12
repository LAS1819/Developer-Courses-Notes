let hello = "   Hello, World!  ";
let wsRegex = (/^\s+|\s+$/gi); // Obtain only the first and the end of empty spaces
let result = hello.replace(wsRegex,"");




// DEBUG
console.log(hello.match(wsRegex));
console.log(result);