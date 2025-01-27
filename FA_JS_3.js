    alert("Problem #3");  
	let consent = "Do you agree to share your personal information?";
        if (confirm(consent) == true) {
            alert("Name: " + nickname + "\nHeight: " + foot + "'" + inch + "''" + "\nWeight: " + lbs);
        } 
	    else {
            console.log("User does not wish to share his/her information.");
        }
  document.getElementById("consent").innerHTML = consent;