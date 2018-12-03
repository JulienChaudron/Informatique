function validateForm(){
	var rightNow = new Date(document.lastModified);
	var dateArrive = new Date(document.forms[0].arrive.value);
	if(rightNow > dateArrive){
		alert("SVP rentrer la bonne date.");
		return false;
	}
}





