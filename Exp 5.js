// Prompt the user to enter two integers
var num1 = parseInt(prompt("Enter the first integer:"));
var num2 = parseInt(prompt("Enter the second integer:"));

// Compare the numbers and display the result in an alert window
if (num1 > num2) {
    alert(num1 + " is greater than " + num2);
} else if (num1 < num2) {
    alert(num2 + " is greater than " + num1);
} else {
    alert("The two numbers are equal");
}
