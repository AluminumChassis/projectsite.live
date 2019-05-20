const url = "https://beans.projectsite.live/submit"
const post = new XMLHttpRequest();
post.onreadystatechange = function() {
	d = document.createElement("div");
	d.className = "clickable bar"
	d.innerText = "Success"
	document.getElementById("suggestions").appendChild(d)
}
function submit(id, file){
	file = document.getElementById(id).files[0].name + "," + file
	console.log(file)
	post.open("POST", url);
	post.send(file);
}
function s(id){
	document.getElementById(id).value
	const reader = new FileReader()
	reader.onload = event => submit(id, event.target.result) // desired file content
	reader.onerror = error => reject(error)
	reader.readAsText(document.getElementById(id).files[0])
}