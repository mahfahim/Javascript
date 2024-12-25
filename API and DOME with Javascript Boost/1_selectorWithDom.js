// JavaScript provides several methods to select elements from the 
// DOM (Document Object Model) to manipulate or interact with them.
//  Below are the most commonly used selectors in JavaScript:



// 1. Selecting by ID
// Use the getElementById method to select an element by its unique ID.

const element = document.getElementById("myId");
console.log(element);


// 2. Selecting by Class Name
// Use the getElementsByClassName method to select all elements
//  with a specific class name. It returns an HTMLCollection.

const elements2 = document.getElementsByClassName("myClass");
console.log(element[0]); // Access the first element with the class


// 3. Selecting by Tag Name
// Use the getElementsByTagName method to select all elements
// with a specific tag name. It also returns an HTMLCollection.

const elements3 = document.getElementsByTagName("div");
console.log(element3);


// 4. Query Selectors
// a. querySelector
// Selects the first element that matches a CSS selector

const element4 = document.querySelector(".myClass");
console.log(element4);

