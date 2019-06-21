dropDown = document.getElementById('dropDown')
clickOut = document.getElementById('clickOut')
login = document.getElementById('login')
content = document.getElementById('content')
login.onclick = function () {
	dropDown.style.top = "25vh"
	clickOut.style.display = "block"
}
clickOut.onclick = function() {
	dropDown.style.top = "-50vh"
	clickOut.style.display = "none"
}
function onSignIn(){
	clickOut.onclick()
	document.getElementById('signInRequest').style.display = "none";
	if(content){
		content.style.display="block"
	}
}