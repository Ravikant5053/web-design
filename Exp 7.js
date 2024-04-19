function calculateCommission() {
    var salesInput = document.getElementById("salesInput").value;
    var salesArray = salesInput.split(",");
    
    var salaryRanges = [0, 0, 0, 0, 0, 0, 0, 0, 0];

    for (var i = 0; i < salesArray.length; i++) {
        var sales = parseFloat(salesArray[i]);
        var salary = 200 + (0.09 * sales);
        
        if (salary >= 200 && salary <= 299) {
            salaryRanges[0]++;
        } else if (salary >= 300 && salary <= 399) {
            salaryRanges[1]++;
        } else if (salary >= 400 && salary <= 499) {
            salaryRanges[2]++;
        } else if (salary >= 500 && salary <= 599) {
            salaryRanges[3]++;
        } else if (salary >= 600 && salary <= 699) {
            salaryRanges[4]++;
        } else if (salary >= 700 && salary <= 799) {
            salaryRanges[5]++;
        } else if (salary >= 800 && salary <= 899) {
            salaryRanges[6]++;
        } else if (salary >= 900 && salary <= 999) {
            salaryRanges[7]++;
        } else if (salary >= 1000) {
            salaryRanges[8]++;
        }
    }

    var result = "<h2>Number of employees in each salary range:</h2>";
    result += "<ul>";
    result += "<li>$200-299: " + salaryRanges[0] + "</li>";
    result += "<li>$300-399: " + salaryRanges[1] + "</li>";
    result += "<li>$400-499: " + salaryRanges[2] + "</li>";
    result += "<li>$500-599: " + salaryRanges[3] + "</li>";
    result += "<li>$600-699: " + salaryRanges[4] + "</li>";
    result += "<li>$700-799: " + salaryRanges[5] + "</li>";
    result += "<li>$800-899: " + salaryRanges[6] + "</li>";
    result += "<li>$900-999: " + salaryRanges[7] + "</li>";
    result += "<li>$1000 and over: " + salaryRanges[8] + "</li>";
    result += "</ul>";

    document.getElementById("result").innerHTML = result;
}
