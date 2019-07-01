dropDown = document.getElementById('dropDown')
clickOut = document.getElementById('clickOut')
login = document.getElementById('login')
let doSignOut
content = document.getElementById('content')
backend = "https://8713297occ.execute-api.us-east-1.amazonaws.com/backend"
login?login.onclick = function () {
	dropDown.style.top = "25vh"
	clickOut.style.display = "block"
}:0
clickOut?clickOut.onclick = function() {
	dropDown.style.top = "-50vh"
	clickOut.style.display = "none"
}:0
function onSignIn(googleUser){
	doSignOut.style.display = "block"
	clickOut.onclick()
	document.getElementById('signInRequest').style.display = "none";
	if(content){
		content.style.display="block"
	}
  	console.log(googleUser)
  	var id_token = googleUser.getAuthResponse().id_token;
  	console.log(id_token)
  	sendIDToken(id_token, function (response) {
  		console.log(this.responseText)
  	})
}
function sendIDToken(id_token, callback){
	var xhr = new XMLHttpRequest();
	xhr.open('POST', backend);
	xhr.onload = callback
	console.log(id_token)
	xhr.send(JSON.stringify({token: id_token}));
}
function signOut() {
	var auth2 = gapi.auth2.getAuthInstance();
	auth2.signOut().then(function () {
	  console.log('User signed out.');
	});
	window.location.reload()
}
fetch('/nav.html')
	.then(function(response) {
		return response.text();
	})
	.then(function(body) {
		document.getElementById("menuHolder").innerHTML = body;
		doSignOut = document.getElementById('signOut')
	});