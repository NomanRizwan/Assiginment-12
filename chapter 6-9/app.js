// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

// var a = 10;
// document.write("Result: <br> The value of a is: " + a + "<br>" + ".........................................<br><br>")
// var num = 10;

// var preInc = ++num;
// document.write("The value of ++a is: " + preInc +"<br>" +"Now the value of a is " + preInc + "<br><br>");

// var postInc = num+1;
// document.write("The value of a++ is: " + preInc +"<br>" +"Now the value of a is " + postInc + "<br><br>");

// var preDec = --postInc
// document.write("The value of --a is: " + postInc +"<br>" +"Now the value of a is " + preDec + "<br><br>");

// var postDec = preDec-1;
// document.write("The value of a-- is: " + preDec +"<br>" +"Now the value of a is " + postDec + "<br><br>");



// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

// var a = 2;
// var b = 1;

// document.write(--a + "<br>");
// document.write(--a - --b+ "<br>");
// document.write(--a - --b + ++b+ "<br>");
//document.write(--a - --b + ++b + b-- + "<br>");






// 3. Write a program that takes input a name from user &
// greet the user.

// var a = prompt("what is your Name" ," ");
//  alert("Welcome to "+a);

// 4.
// 5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.

// var a = parseInt(prompt("Enter a Table number" ));
// var range = parseInt(prompt("enter Your Range"));

// for(var i = 1; i<= range;  i++){
//     document.write(`${a} x ${i}  = ${a*i} <br> `)
// }

// 6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable


// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)

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

// document.write("English: "+ singleEng+"%"  + "<br>" + "Math: " + singleMath+"%"  + "<br>" + "Urdu: " + singleUrdu+"%" );

// document.write("<br> Total Marks: " + totalSubject + "<br>" + "Toatal Marks: " + total +"<br>"+ "Persetage: " + persentage.toFixed(2)+"%" ); 







