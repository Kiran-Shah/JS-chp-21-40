//Chapter 21(Changing Case)
//Correct the Statement:
var allLower = userInput.toLowerCase();

//Convert String to Lower-Case:
x = x.toLowerCase();

// Convert String to Upper-Case:

y = y.toUpperCase();

//Convert String to Lower - Case and Assign to a New Variable:

var newVar = someVariable.toLowerCase();

//Convert Array Element to Lower-Case and Assign to a New Variable:


var newVar = array[index].toLowerCase();

//Display Upper-Case Version in an Alert:


alert(someVariable.toUpperCase());

//Capitalization of the First Letter and Lowercase the Rest:
var cityName = "kaRacHi";
var formattedCityName = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();

//Chapter 22-25 (Strings)
Slice "ap"
from "captain":

    var sameWords = "captain";
var slicedWord = sameWords.slice(1, 3);

//Assign the Number of Characters to a Variable:

var strLength = someString.length;

//Slice the Four Middle Characters from "elephant":

var animal = "elephant";
var seg = animal.slice(2, 6);

//Find the Number of Characters and Assign to Another Variable:


var strLength = someString.length;

//Measure Characters and Slice All But First and Last 3 Characters:


var strLength = someString.length;
var newStr = someString.slice(1, -3);

//Find the Index of "be" (First Instance):


var text = "To be or not to be.";
var indx = text.indexOf("be"); // indx = 3


//Find the Index of "be" (Last Instance):


var text = "To be or not to be.";
var indx = text.lastIndexOf("be"); // indx = 16

//Find the Index of the First Character of the Last Instance of "go":


var indx = text.lastIndexOf("go");

//First Line of an If Statement to Test Index:

if (indexNum !== -1)

//Character at Index 2 in "abcde":

    var char = "abcde".charAt(2); // char = "c"

//Find the 10th Character and Assign to cha:

var cha = text.charAt(9);

//Find the Last Character in the String and Assign to x:

var x = str.charAt(str.length - 1);

//Find the 5th Character in input and Assign to cha:

var cha = input.charAt(4);

//If Statement to Test the 3rd Character:

if (someString.charAt(2) === 'specificCharacter') {

    //For Loop to Assign Characters to Array:


    var array = [];
    for (var i = 0; i < someString.length; i++) {
        array[i] = someString.charAt(i);
    }

    //Replace the First Instance of "no" with "yes":

    var revisedReply = reply.replace("no", "yes");

    //Replace the First Instance of "1" with "one":


    var newStr = str.replace("1", "one");

    //Replace All Instances of "a" with "z":


    var y = x.replace(/a/g, "z");

    //Chapter 26 (Rounding Numbers)
    Round a Number to the Nearest Integer:


        var roundedNum = Math.round(number);

    //Round Up and Assign to roundNum:

    var roundNum = Math.ceil(origNum);

    //Round Down and Assign to roundNum:


    var roundNum = Math.floor(origNum);

    //ound a Number and Assign to a New Variable:

    var newNum = Math.round(someNum);

    //Round 0.5 to 0:


    var roundedNum = Math.floor(0.5);

    //Chapter 27 (Random Numbers)
    Convert a Random Number to a Range of 1 to 50:


        var randomNum = Math.floor(Math.random() * 50) + 1;

    //Generate a Random Number and Assign to a Variable:


    var randomNum = Math.random();

    //Create a Dice (1-6):


    var diceRoll = Math.floor(Math.random() * 6) + 1;

    //Create a Coin Toss (Head/Tail):
    var toss = Math.random() < 0.5 ? 'Heads' : 'Tails';

    //Chapter 28, 29 (Converting Strings)
    Convert a String to an Integer:


        var num = parseInt(someString);

    //Convert the String "123" to an Integer:

    var num = parseInt("123");

    //Convert a String to a Floating-Point Number:


    var floatNum = parseFloat(someString);

    //Check if a String Can Be Converted to an Integer or Decimal:


    if (!isNaN(someString)) {
        var num = parseFloat(someString);
    }

    //Convert a Number to a String:


    var str = someNumber.toString();

    //Convert the Number 42 to a String:


    var str = (42).toString();

    //Convert a Decimal String to an Integer:


    var intNum = parseInt("3.14");


    //Chapter 30 (Controlling the Length of Decimals)
    Round a Number to 4 Decimal Places, Convert to String, and Assign:


        var newNum = num.toFixed(4).toString();

    //Round a Number to 2 Decimal Places, Convert to String, Convert Back to Number, and Assign:


    variable = parseFloat(variable.toFixed(2));

    //First Line of an If Statement to Test Whether Rounded Number Has More Than 4 Characters:

    if (num.toFixed(2).toString().length > 4) {

        //Assign a Number with Many Decimal Places to a Variable and Alert Rounded to 2 Decimal Places:


        var num = 123.456789;
        alert(num.toFixed(2).toString());

        //Chapter 31-34 (Date & Time)
        Create a New Date Object and Assign to dObj:


            var dObj = new Date();

        //Create a New Date Object, Convert to String, and Assign to dStr:


        var dStr = new Date().toString();

        //Extract the Day of the Week from a Date Object and Assign to day:

        var day = d.getDay();

        //Alert the Current Day Using Array Index:


        var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        alert(dayNames[d]);

        //Extract All Parts of the Date and Time and Assign to a Variable:

        javascript
        Copy code
        var dateInfo = {
            year: d.getFullYear(),
            month: d.getMonth(),
            date: d.getDate(),
            day: d.getDay(),
            hours: d.getHours(),
            minutes: d.getMinutes(),
            seconds: d.getSeconds(),
            milliseconds: d.getMilliseconds()
        };

        //Create a Date Object for the Last Day of the Last Month of 2020:


        var later = new Date(2020, 11, 31);

        //Create a Date Object for February 2, 1992:

        var date = new Date(1992, 1, 2);

        //Display Milliseconds Between the Reference Date and Beginning of 1980:

        alert(new Date("1980-01-01").getTime());

        //Change the Year of a Date in JavaScript:


        date.setFullYear(2024);

        //JavaScript Function to Change the Month of a Given Date to January:



        function changeToJanuary(date) {
            date.setMonth(0); // January is 0 in JavaScript
            return date;
        }

        //JavaScript Function to Change the Minutes of a Given Time:


        function changeMinutes(date, minutes) {
            date.setMinutes(minutes);
            return date;
        }

        //JavaScript Function to Add Hours to a Given Time:



        function addHours(date, hours) {
            date.setHours(date.getHours() + hours);
            return date;
        }

        //Create an Age Calculator in JavaScript:


        function calculateAge(birthDate) {
            var today = new Date();
            var age = today.getFullYear() - birthDate.getFullYear();
            var m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            return age;
        }

        //Chapter 35-37 (Functions)
        First Line of displayAlert Function:


            function displayAlert() {

                //Function askName to Prompt for a Name:

                javascript
                Copy code

                function askName() {
                    var userName = prompt("Enter name");
                }

                //Function that Calls Two Other Functions:



                function callTwoFunctions() {
                    functionOne();
                    functionTwo();
                }

                //Function to Prompt for Name and Display in Alert:



                function promptAndAlertName() {
                    var name = prompt("Enter name");
                    alert(name);
                }
                promptAndAlertName();

                //First Line of concat Function with 3 Parameters:


                function concat(a, b, c) {

                    //Function with Two Parameters that Concatenates and Assigns to a New Variable:



                    function concatenate(param1, param2) {
                        var result = param1 + param2;
                    }

                    //Function with Three Parameters that Multiplies Them and Assigns to a New Variable:


                    function multiply(a, b, c) {
                        var result = a * b * c;
                    }

                    //Function to Calculate the Average of an Array of Numbers:


                    function calculateAverage(numbers) {
                        var sum = numbers.reduce((a, b) => a + b, 0);
                        return sum / numbers.length;
                    }

                    //Function that Takes Two Parameters and Returns Their Sum:



                    function sum(a, b) {
                        return a + b;
                    }

                    //Function to Calculate the Average of an Array of Numbers:


                    function calculateAverage(numbers) {
                        var sum = numbers.reduce((a, b) => a + b, 0);
                        return sum / numbers.length;
                    }

                    //Capture and Store the Returned Value from a Function:


                    var result = someFunction();

                    //Function to Count Letters in a Word:



                    function letterCount(word) {
                        var count = {};
                        for (var letter of word) {
                            count[letter] = (count[letter] || 0) + 1;
                        }
                        return count;
                    }

                    //Function to Set the Year in a Date Object:


                    function setYear(date, year) {
                        date.setFullYear(year);
                        return date;
                    }

                    //Function to Calculate the Age from Date of Birth:


                    function calculateAge(dateOfBirth) {
                        var today = new Date();
                        var age = today.getFullYear() - dateOfBirth.getFullYear();
                        var m = today.getMonth() - dateOfBirth.getMonth();
                        if (m < 0 || (m === 0 && today.getDate() < dateOfBirth.getDate())) {
                            age--;
                        }
                        return age;
                    }

                    //Function to Check the Presence of a Word in an Array:



                    function checkPresence(word) {
                        var array = ['zaid', 'haris', 'raza', 'abubakar', 'hassan', 'hussain', 'fatima'];
                        return array.includes(word);
                    }

                    //Function to Repeat a Letter 10 Times:



                    function repeatLetter(letter) {
                        return letter.repeat(10);
                    }

                    //Function to Reverse an Array:


                    function reverseArray() {
                        var arr = ['a', 'b', 'c', 'd', 'e'];
                        return arr.reverse();
                    }

                    //Chapter 38 (Local vs. Global Variables)
                    Function Demonstrating the Usage of a Local Variable:


                        function showLocalVariable() {
                            var localVar = "I'm local!";
                            console.log(localVar);
                        }

                    //Accessing a Global Variable Inside a Function:


                    var globalVar = "I'm global!";

                    function accessGlobal() {
                        console.log(globalVar);
                    }

                    //Chapter 39, 40 (Switch Statements)
                    Switch Statement to Check the Value of a Variable:


                        var someVar = "value";
                    switch (someVar) {
                        case "value1":
                            // Action for value1
                            break;
                        case "value2":
                            // Action for value2
                            break;

                    }

                    //Switch Statement to Check cityName Given by User:


                    var cityName = prompt("Enter city name:");
                    switch (cityName.toLowerCase()) {
                        case "karachi":
                            alert("Welcome to Karachi!");
                            break;
                        case "lahore":
                            alert("Welcome to Lahore!");
                            break;
                        default:
                            alert("City not recognized.");
                    }