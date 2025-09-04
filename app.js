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





// Q7 Guess the Secret Number game:
// Store a secret number (ranging from 1 to 10) in a variable. prompt user to guess the secret number.
// a. If user guessess the same number, show "Bingo! Correct answer"
// b. If user guessed number +1 is the secret is the secret number, show "Close enough to the correct answer".

// Answer
// var secretNum = 7;
// var userGuessed = prompt(("Guess the secret Number 1 to 10"));
// if (secretNum == userGuessed) {
//     document.write("Bingo! Correct answer");
// } else if (userGuessed == ++secretNum) {
//     document.write("Close enough to the correct answer");
// } else if (userGuessed < 10 && userGuessed > 1) {
//     document.write("Better Luck Next Time");
// } else {
//     document.write("Please! Input correct number");
// }





// Q8 Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.

// Answer
// var numByUser = prompt(("Give a number and I wil tell you its divisible by 3 or not."));
// if (numByUser % 3 == 0) {
//     document.write("The number is Divisible by 3.");
// } else {
//     document.write("The number is <b>not</b> Divisible by 3.");
// }






// Q9 Write a program that checks whether the given input is an even number or an odd number.

// Answer
// var numByUser = prompt(("Give a number and I wil tell you it even or odd number"));
// if (numByUser % 2 == 0) {
//     document.write("The given number is Even");
// } else {
//     document.write("The given number is Odd");
// }





// Q10 Write a program that takes temperature as input and shows a message based on following criteria
// a. T > 40 then "It is too hot outside."
// b. T > 30 then "The Weather today is Normal."
// c. T > 20 then "Today's Weather is cool."
// d. T > 10 then "OMG! Today's Weather is so Cool."

// Answer
// var T = prompt(("Give me temperature and I will tell you its cold or not"));
// if (T > 60 || T < -10) {
//     document.write("It's impressive you are still alive");
// } else if (T > 50) {
//     document.write("Your Cooked.");
// } else if (T > 40) {
//     document.write("It is too hot outside.");
// } else if (T > 30) {
//     document.write("The Weather today is Normal.");
// } else if (T > 20) {
//     document.write("Today's Weather is cool.");
// } else if (T > 10 || T > -10) {
//     document.write("OMG! Today's Weather is so cool.");
// } else if (T < -10) {
//     document.write("Its impressive you are still alive.");
// } else {
//     document.write("Please Enter the Numbers only.");
// }





// Q11 Write a program to create a calculator for +, -, *, / & % using if statements. Take the following input:
// a. First Number
// b. Second number
// c. Operation (+, -, *, / & %)
// Compute & show the calculated result to user.

// Answer
var num1 = prompt(("Enter First Number"));
var symbols = prompt(("Enter Number base on: \n 1 = Addition \n 2 = Subtract \n 3 = Multiple \n 4 = Divide \n 5 = For Division Remainder \n 6 = To Find Percentage"));
var num2 = prompt(("Enter Second Number"));
if (num1 == "" || num2 == "" || symbols == "") {
    document.write("Please fill all field.");
} else if (num1.trim() == "" || num2.trim() == "" || symbols.trim() == "") {
    document.write("What is wrong with you? <b> ARE YOU CRAZY! </b><br /> Why did you input Spaces?");
} else if (isNaN(num1) || isNaN(num2) || isNaN(symbols)) {
    document.write("Please Enter the Numbers only.");
} else {
    if (symbols === "1") {
        var equal = Number(num1) + Number(num2);
        document.write(equal);
    } else if (symbols === "2") {
        var equal = Number(num1) - Number(num2);
        document.write(equal);
    } else if (symbols === "3") {
        var equal = Number(num1) * Number(num2);
        document.write(equal);
    } else if (symbols === "4") {
        var equal = Number(num1) / Number(num2);
        document.write(equal);
    } else if (symbols === "5") {
        var equal = Number(num1) % Number(num2);
        document.write(equal);
    } else if (symbols === "6") {
        var equal = Number(num1) * Number(num2) / 100;
        document.write(equal);
    } else {
        document.write("Please select symbols number from given options!");
    }
}