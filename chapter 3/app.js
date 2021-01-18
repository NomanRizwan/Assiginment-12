// 1. Declare a variable called age & assign to it your age. Show
// your age in an alert box.

var age = "i'm 15 year old";
alert(age);

// 2. Declare & initialize a variable to keep track of how many
// times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You
// have visited this site N times”.

var track = 'you have visited this site 14 times';

// 3. Declare a variable called birthYear & assign to it your
// birth year. Show the following message in your browser:

var birthYear = 1990;
document.write("My birth year is" + birthYear);
document.write("<br>")
document.write(typeof(birthYear));
document.write("<br>")
// 4. A visitor visits an online clothing store
// www.xyzClothing.com . Write a script to store in variables
// the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to
// order
// Show the following message in your browser: “John
// Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

var visitor = "John";
var order = "5 T-shirt(s)";
var title = "XYZ Clothing store"

document.write(visitor + " " + "ordered" + " " + order + " " + "on" + " " + title )
