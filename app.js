// USER INPUT & CONDITIONAL STATEMENT

// Q1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

// Answer
// var defaultCityName = "karachi";
// var cityName = prompt("Insert your city name:" , defaultCityName);
// document.write("Welcome to " + cityName + " of light");



// Q2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.

// Answer
// var gender = prompt("Input your gender: (male/female)");
// gender = gender.toLowerCase();
// if (gender === "male") {
//     document.write("Good Morning Sir");
// }else if (gender === "female") {
//     document.writeIn("Good Morning Ma'am");
// }else {
//     document.write("Input gender correctly!");
// }



// Q3. Write a program to take input color of road traffic signal  from the user & show the message according to this table:

// Answer
// var signalColor = prompt("Enter current signal color");
// signalColor = signalColor.toLowerCase();
// if (signalColor === "red") {
//     document.write("Must Stop");
// } else if (signalColor === "yellow") {
//     document.write("Ready to move");
// } else if (signalColor === "green") {
//     document.write("Move now");
// } else {
//     document.write("Insert Signal Color");
// }



// Q4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”

// Answer
// var fuel = prompt();
// if (fuel <= 0.25) {
//     document.write("Please refill the fuel in your car");
// } else if (fuel > 0.25) {
//     document.write("You are good to go");
// } else {
//     document.write("Please input correct value");
// }



// Q5. Run this script, & check whether alert message would be displayed or not. Record the outputs.

// Answer
// a. 
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }   // true
// // b. 
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }   // false
// // c. 
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }   // false
// if (c === 13){
// alert("condition 2 is true"); 
// }   // true
// if (++c < 14){
// alert("condition 3 is true");
// }   // false
// if(c === 14){
// alert("condition 4 is true");
// }   // true
// // d. 
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }    // true
// // e. 
// if (true){
// alert("True");
// }    // true
// if (false){
// alert("False");
// }   // false
// // f. 
// if("car" < "cat"){
// alert("car is smaller than cat");
// }    // true



// Q6. Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table:

// Answer
// var marksObtained = prompt(("Write Obtained Marks"));
// var totalMarks = prompt(("Write Total Marks"));
// var percentage = (totalMarks * marksObtained) / 100;
// document.write("Total marks : " + totalMarks + "<br />");
// document.write("Marks obtained : " + marksObtained + "<br />");
// document.write("Percentage : " + percentage + "%<br />");
// if (percentage > 79) {
//     document.write("Grade : A-one<br />");
//     document.write("Remarks : Excellent<br />");
// } else if (percentage > 70) {
//     document.write("Grade : A<br />");
//     document.write("Remarks : Good<br />");
// } else {
//     document.write("Grade : F<br />");
//     document.write("Remarks : Sorry, better luck next time");
// }



