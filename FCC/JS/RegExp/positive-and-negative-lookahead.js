let sampleWord = "astronaut11"; // Test user name
let pwRegex = /(?=\w{6})(?=\D*\d{2})/; // Match passwords that are greater than 5 characters long, and have two consecutive digits
let result = pwRegex.test(sampleWord); // Return True
console.log(result); // True