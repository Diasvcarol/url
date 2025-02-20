
const armazenarUrl = {};

function cortarUrl(urlOriginal){

	const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
	let urlCurta = "";

	for (let i = 0; i < 10; i++){
		const randomIndex = Math.floor(Math.random() *caracteres.length);
		urlCurta += caracteres[randomIndex];
	}

	armazenarUrl[urlCurta] = urlOriginal;

	return `https://urlnova.com/${urlCurta}`;

}

function encurtarURL(){
	const input = document.getElementById("urlOriginal");
	const resultadoUrl = document.getElementById("resultado");
	const urlOriginal = input.value.trim();

	if (!urlOriginal) {
		resultadoUrl.innerHTML = "<p style = 'color: red;'>Por favor, insira uma URL válida.</p>";
		return;
	}

	const urlCurta = cortarUrl(urlOriginal);

	resultadoUrl.innerHTML = `
		<p>URL nova: <a href = "${urlCurta}" target = "_blank"> ${urlCurta}</a></p>`;
	
	input.value = "";
}

document.getElementById("cortar").addEventListener("click", encurtarURL);