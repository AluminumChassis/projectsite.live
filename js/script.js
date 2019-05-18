const url = "http://projectsiteback-env.d8mzdpwcvn.us-east-2.elasticbeanstalk.com/"
const searchURL = "https://search-resorch-vwcs6cz6izfgw6tb6nwoz4grly.us-east-2.es.amazonaws.com/main/_search?q="
const site = "projectsite.live/"
const post = new XMLHttpRequest();
const lookup = new XMLHttpRequest();
post.open("GET", url);
post.send();
var e
var search = true
suggestions = document.getElementById('suggestions')
suggestion = document.getElementById('suggestion')
s = document.getElementById('search')
post.onreadystatechange = function() {
	suggestions.innerHTML = ""
	e=this.responseText.split(",")
	e.pop()
	console.log(this.responseText)
	for (var i in e) {
		d = document.createElement("div");
		d.className = "clickable bar"
		d.innerText = e[i]
		document.getElementById("suggestions").appendChild(d)
	}
}
lookup.onreadystatechange = function() {
	e=JSON.parse(this.responseText)
	h = e.hits.hits
	clearSearch()
	for (var i in h) {
		a = document.createElement("a");
		a.href = h[i]._source.Id
		a.innerText = h[i]._source.ProjectName
		a.className = "clickable bar result"
		document.getElementById("searchBar").appendChild(a)
	}
}
function submit(){
	post.open("POST", url);
	post.send(suggestion.value);
	suggestion.value = ""
}
function clearSearch() {
	results = document.getElementsByClassName("clickable bar result")
	for (var i = results.length - 1; i >= 0; i--) {
		results[i].parentNode.removeChild(results[i])
	}
}
function searchProjects(){
	search = false
	setTimeout(
		function(){
			if(!search) {
				lookup.open("GET", searchURL + s.value + "*");
				console.log(searchURL + s.value)
				lookup.send()
			}
			search = true
		}
	,200)
	
}