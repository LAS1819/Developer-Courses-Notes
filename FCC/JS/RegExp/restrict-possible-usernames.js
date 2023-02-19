// Testing names
let username = "JackOfAllTrades";
let username2 = "JACK";
let username3 = "J";
let username4 = "Jo";
let username5 = "Oceans11"; // True
let username6 = "RegexGuru"; // True
let username7 = "007"; // False
let username8 = "9"; // False
let username9 = "A1"; // False
let username10 = "BadUs3rnam3"; // False
let username11 = "Z97"; // True
let username12 = "c57bT3"; // False
let username13 = "AB1"; // True
let username14 = "J%4"; // False

let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; // <-- Solution RegEx
let result = userCheck.test(username);

//console.log(result);

// User 2 -> JACK - True
let userCheck2 = /\w/ig;
console.log("username2 " + userCheck2.test(username2)); // True -> JACK
console.log(username2.match(userCheck2));

// User 3 -> J - False
let userCheck3 = /\w./ig;
console.log("username3 " + userCheck3.test(username3)); // False -> J
console.log(username3.match(userCheck3));

// User 4 -> Jo - True
let userCheck4 = /\w./ig;
console.log("username4 " + userCheck4.test(username4)); // True -> Jo
console.log(username4.match(userCheck4));

// User 5 -> Oceans11 - True
let userCheck5 = /\w./ig;
console.log("username5 " + userCheck5.test(username5)); // True -> Oceans11
console.log(username5.match(userCheck5));

// User 6 -> RegexGuru - True
let userCheck6 = /\w./ig;
console.log("username6 " + userCheck6.test(username6)); // True -> RegexGuru
console.log(username6.match(userCheck6));

// User 7 -> 007 - False
let userCheck7 = /[^\d][\w]./ig;
console.log("username7 " + userCheck7.test(username7)); // False -> 007
console.log(username7.match(userCheck7));

// User 8 -> 9 - False
let userCheck8 = /[^\d][\w]./ig;
console.log("username8 " + userCheck8.test(username8)); // False -> 9
console.log(username8.match(userCheck8));

// User 9 -> A1 - False - OK
let userCheck9 = /[^\d][\w]./ig;
console.log("username9: " + username9 + " -> " + userCheck9.test(username9));
console.log(username9.match(userCheck9));

// User 10 -> BadUs3rnam3 - False
let userCheck10 = /[^\d][\w][\d*$]./ig;
console.log("username10: " + username10 + " -> " + userCheck10.test(username10));
console.log(username10.match(userCheck10));


let regExResult = username.match(userCheck);

console.log(regExResult);