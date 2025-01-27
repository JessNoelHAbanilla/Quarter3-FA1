    alert("Problem #2");  
    var first_name = prompt("Enter first name: ", "0");
	var last_name = prompt("Enter last name: ", "0");
	var year = prompt("Enter birth year: ", "0");
	
	var age = 2025 - year;
	
	document.getElementById("class").innerHTML = " Hello " + first_name + " " + last_name + "! How does it feel to be " + age + " years old?";