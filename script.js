function myFunction() {
	var x = document.getElementById("menu_burger");
	if (x.className === "container") {
		x.className += "responsive";
	} else {
		x.className = "container";
	}
}