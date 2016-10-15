function myFunction() {
	var x = document.getElementById("name").value;
    document.getElementById("result").innerHTML = "Hello, " + x + "!";}
function resetForm() {//clear the value in the txt field
    document.getElementById("name").value = "";}
