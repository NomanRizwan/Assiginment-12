// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

// var city = prompt("enter city name");

// if(city === "karachi"){
//     document.write("Welcome to city of lights")
// }else{
//     document.write("......")
// }

// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

// var gender = prompt("Enter Your gender");
// var gender= gender.toLowerCase();
// if(gender ==="male"){
//     document.write("Good Morning Sir");
// } if ( gender === "female"){
//     document.write("Good Morning Ma’am.");
// }
// else{
//     document.write(".......")
// }
    


// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:
// Signal color Message
// Red Must Stop
// Yellow Ready to move
// Green Move now

// var signal = prompt("enter your signal color Green / Red / Yellow");
// var signal = signal.toLowerCase();

// if(signal === 'green'){
//     document.write("Move Now");

// }else if(signal === 'yellow'){
//     document.write("Ready to Move");

// }else if(signal === 'red'){
//     document.write("Must Stop");

// }
// else{
//     document.write("Alert");
// }

// 4. Write a program to take input remaining fuel in car (in
// litres) from user. If the current fuel is less than 0.25litres,
// show the message “Please refill the fuel in your car”

// var fuel = parseFloat(prompt("check fuel car"));
// if(fuel <= 0.25){
//     document.write('Please refill the fuel in your car');
// }
// else{
//     document.write(" full fuel in car");
// }

// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.

//  var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// User Input & Conditional Statement | JAVASCRIPT
// Page 2 of 4


 //var b = 82;
// if (b+1 === 83){
// alert("given condition for variable b is true");
// }


 var c = 12;
// if (c+1 === 13){
// alert("condition 1 is true");
// }
// if (++c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c !== 14){
// alert("condition 4 is true");
// }


//  var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }


//  if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }

// User Input & Conditional Statement | JAVASCRIPT
// Page 3 of 4


//  if("car" === "cat"){
// alert("cat is smaller than car");
// }


// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:
// Show the total marks, marks obtained, percentage, grade &
// remarks like:
// User Input & Conditional Statement | JAVASCRIPT
// Page 4 of 4

// var english = parseInt(prompt("enter English number"));
// var Math = parseInt(prompt("Enter Math Number"));
// var Urdu = parseInt(prompt("Enter Urdu Number"));

// var singleTotal = 100;
// total = 300;
// var totalSubject = english+Math+Urdu;
// var persentage = totalSubject / total *100

// var singleEng = english / singleTotal *100; 
// var singleMath = Math / singleTotal *100; 
// var singleUrdu = Urdu / singleTotal *100; 
// document.write("Mark Sheet <br><br>")
// document.write("English: "+ singleEng+"%"  + "<br>" + "Math: " + singleMath+"%"  + "<br>" + "Urdu: " + singleUrdu+"%" );
// document.write("<br> Total Marks: " + totalSubject + "<br>" + "Toatal Marks: " + total +"<br>"+ "Persetage: " + persentage.toFixed(2)+"% <br><br>" ); 

// if(persentage >= 80){
//     document.write("Grade: A-One <br>" + "Remarks: Excellent")
// }else if(persentage >= 70){
//     document.write("Grade: A <br>" + "Remarks: Good")
// }else if(persentage >= 60){
//     document.write("Grade: B <br>" + "Remarks: you need to improve ")
// }else{
//     document.write("Grade:  Fail <br>" + "Remarks: Sorry")
    
// }


// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.

// a. If user guesses the same number, show “Bingo! Correct
// answer”.


// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.


// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.


// 9. Write a program that checks whether the given input is an
// even number or an odd number.

// var whether = prompt("Enter a weather");
// if(whether % 2 == 0){
// document.write("The number is even");
// } 
// else{
// document.write("The number is odd");

// }


// 10. Write a program that takes temperature as input and
// shows a message based on following criteria

// var temp = prompt("Enter a Temperature");

// // a. T > 40 then “It is too hot outside.”
// if(temp >40){
//     document.write("It is too hot outside")
// }
// // b. T > 30 then “The Weather today is Normal.”
// else if(temp >30){
//     document.write("The Weather today is Normal")
// }
// // c. T > 20 then “Today’s Weather is cool.”
// else if(temp >20){
//     document.write("Today’s Weather is cool")
// }
// // d. T > 10 then “OMG! Today’s weather is so Cool.”
// else if(temp >10){
//     document.write("OMG! Today’s weather is so Cool")
// }
// else{
//     document.write("OMG! Today’s weather is Realy so Cool")
// }

// 11. Write a program to create a calculator for +,-,*, / & %

//using if statements. Take the following input:

// var Firstnumber = +prompt("calculate the First number")
// var Operation = prompt("use operator + - * / %")
// var Secondnumber = +prompt("calculate the Second number")

// // a. First number

// // b. Second number

// // c. Operation (+, -, *, /, %)

// // Compute & show the calculated result to user
//  if(Operation  == "+" ){
//      document.write(Firstnumber + Secondnumber)
//  }
//  else if(Operation  == "-" ){
//     document.write(Firstnumber - Secondnumber)
// }
// else if(Operation  == "*" ){
//     document.write(Firstnumber * Secondnumber)
// }
// else if(Operation  == "%" ){
//     document.write(Firstnumber % Secondnumber)
// }

// else if(Operation  == "/" ){
//     document.write(Firstnumber / Secondnumber)
// }

// else{
//     document.write("operator is not use")
// }