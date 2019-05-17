const url = "http://projectsiteback-env.d8mzdpwcvn.us-east-2.elasticbeanstalk.com/"
const Http = new XMLHttpRequest();
Http.open("GET", url);
Http.send();
var e
suggestions = document.getElementById('suggestions')
suggestion = document.getElementById('suggestion')
Http.onreadystatechange = function() {
	suggestions.innerHTML = ""
	e=this.responseText.split(",")
	e.pop()
	console.log(this.responseText)
	for (var i in e) {
		d = document.createElement("div");
		d.className = "clickable bar"
		d.innerHTML = e[i]
		document.getElementById("suggestions").appendChild(d)
	}
}
function submit(){
	Http.open("POST", url);
	Http.send(suggestion.value);
	suggestion.value = ""

}
