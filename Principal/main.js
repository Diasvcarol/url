const getUrlOriginal = document.querySelector('#urlOriginal').value
const resultadoDiv = document.querySelector('#resultado')

function cortarUrl(){
	console.log(getUrlOriginal())
	fetch('/encurtador', {
		method: 'POST',
		body: JSON.stringify({ url: getUrlOriginal() }),
		headers: { 'Content-Type': 'application/json' }
	}).then(res => res.json())
	.then((resposta) => {
		resultadoDiv.innerHTML = `<p>URL nova: <a href = "${resposta.url}" target = "_blank"> ${resposta.url}</a></p>`
	})

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