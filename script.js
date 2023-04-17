function go(){
	var name=document.getElementById("name").value;
	var email=document.getElementById("email").value;
	document.getElementById("hide").style.display = "none";	
	document.getElementById("span1").innerHTML = name;
	document.getElementById("span2").innerHTML = email;
	document.getElementById("show").style.display = "block";	
}