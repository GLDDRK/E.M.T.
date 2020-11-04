window.onload = function() {
	var txt = document.getElementById("txt");
	txt.value = localStorage.getItem("txt");

	var button = document.getElementById("btn");
	button.addEventListener("click", saveData);

	function saveData () {
		localStorage.setItem("txt", txt.value);
	}
}

chrome.runtime.onInstalled.addListener(function(){
	alert("E.M.T. a bien été mis à jour")
})