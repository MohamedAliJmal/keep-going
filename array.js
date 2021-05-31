/*global console, alert, prompt*/

// Example One

var friendOne = "Hassan",

  friendTwo = "Soha",

  friendThree = "Ahmed",

  friendFour = "Zahra",

  friendFive = "Hind";

var friends = new Array();

friends[0] = "Hassan";
friends[1] = "Soha";
friends[2] = "Ahmed";
friends[3] = "Zahra";
friends[4] = "Hind";

console.log(friends);

// Example Two

var friends = new Array("Hassan", "Soha", "Ahmed", "Zahra", "Hind");

var friends = new Array( // Formatted Code
  "Hassan",
  "Soha",
  "Ahmed",
  "Zahra",
  "Hind"
);

var friends = []; // Literal Way => Empty Array

// Fill The Array

friends[0] = "Hassan";
friends[1] = "Soha";
friends[2] = "Ahmed";

console.log(friends);

// The Good Syntax

var friends = ["Hassan", "Soha", "Ahmed", "Zahra", "Hind"];

var friends = [ // Formatted Code
  "Hassan",
  "Soha",
  "Ahmed",
  "Zahra",
  "Hind"
];

console.log(friends);

/*
  Syntax
  var arrayName = ["Element1", "Element2", "Element3"]
*/