    alert("Problem #1");   
	var nickname = prompt("Enter nickname: ", "0");
    var height = prompt("Enter height in inches: ", "0");
    var weight = prompt("Enter weight in kilograms: ", "0");
         
    var inch = height % 12;
    Math.round(inch);
    var foot = (height - inch) / 12;
    Math.round(foot);
    var lbs = weight * 2.205;
    Math.round(lbs);
         
    alert("Name: " + nickname + "\nHeight: " + foot + "'" + inch + "''" + "\nWeight: " + lbs);