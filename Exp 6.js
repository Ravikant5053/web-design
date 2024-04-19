document.getElementById("forBtn").addEventListener("click", function() {
    calculateSum("for");
});

document.getElementById("whileBtn").addEventListener("click", function() {
    calculateSum("while");
});

function calculateSum(loopType) {
    var sum = 0;
    if (loopType === 'for') {
        for (var i = 0; i < 5; i++) {
            var number = parseInt(prompt("Enter an integer number:"));
            sum += number;
        }
        document.getElementById("sumResult").innerHTML = "<h1>Sum using for loop: " + sum + "</h1>";
    } else if (loopType === 'while') {
        var count = 0;
        while (count < 5) {
            var number = parseInt(prompt("Enter an integer number:"));
            sum += number;
            count++;
        }
        document.getElementById("sumResult").innerHTML = "<h1>Sum using while loop: " + sum + "</h1>";
    } else {
        document.getElementById("sumResult").innerHTML = "<h1>Invalid choice!</h1>";
    }
}
