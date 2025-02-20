const getUrlOriginal = document.getElementById("urlOriginal");
const resultadoDiv = document.getElementById("resultado");

function cortarUrl(){
	fetch();
	method: "GET"

}

//function encurtarURL(){
	//const input = document.getElementById("urlOriginal");
	//const resultadoUrl = document.getElementById("resultado");
	//const urlOriginal = input.value.trim();

	//if (!urlOriginal) {
		//resultadoUrl.innerHTML = "<p style = 'color: red;'>Por favor, insira uma URL válida.</p>";
		//return;
	//}

	//const urlCurta = cortarUrl(urlOriginal);

	//resultadoUrl.innerHTML = `
		//<p>URL nova: <a href = "${urlCurta}" target = "_blank"> ${urlCurta}</a></p>`;
	
	//input.value = "";
//}

//document.getElementById("cortar").addEventListener("click", encurtarURL);