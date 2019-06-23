dropDown = document.getElementById('dropDown')
clickOut = document.getElementById('clickOut')
login = document.getElementById('login')
content = document.getElementById('content')
backend = "https://95kwq5a3x0.execute-api.us-east-1.amazonaws.com/Functional"
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
  	var id_token = googleUser.getAuthResponse().id_token;
  	sendIDToken(id_token, function (response) {
  		console.log(this.responseText)
  	})
}
function sendIDToken(id_token, callback){
	var xhr = new XMLHttpRequest();
	xhr.open('POST', backend);
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	xhr.onload = callback
	xhr.send('idtoken=' + id_token);
}
function signOut() {
	var auth2 = gapi.auth2.getAuthInstance();
	auth2.signOut().then(function () {
	  console.log('User signed out.');
	});
}
fetch('/nav.html')
	.then(function(response) {
		return response.text();
	})
	.then(function(body) {
		document.getElementById("menuHolder").innerHTML += body;
	});