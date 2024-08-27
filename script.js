const inputTexto = document.querySelector(".input-text");
const mensaje = document.querySelector(".output-text");
var textoCopiado

function btnEncriptar(){
	const textoEncriptado = encriptar(inputTexto.value);
	mensaje.value = textoEncriptado;
	mensaje.style.backgroundImage = "none";
	inputTexto.value = "";
	let outputTexto = document.querySelector(".output-text").focus();
}

function encriptar(stringEncriptado) {
	let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
	stringEncriptado = stringEncriptado.toLowerCase();

	for(let i= 0; i < matrizCodigo.length; i++){
		if(stringEncriptado.includes(matrizCodigo[i][0])){
			stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
		}
	}
	return stringEncriptado;
}

function btnDesencriptar(){
	const textoEncriptado = desencriptar(inputTexto.value);
	mensaje.value = textoEncriptado;
	mensaje.style.backgroundImage = "none";
	inputTexto.value = "";
	document.querySelector(".output-text").focus();
}

function desencriptar(stringDesencriptado) {
	let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
	stringDesencriptado = stringDesencriptado.toLowerCase();

	for(let i= 0; i < matrizCodigo.length; i++){
		if(stringDesencriptado.includes(matrizCodigo[i][1])){
			stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
		}
	}
	return stringDesencriptado;
}

function copiar(){
	mensaje.select();
	document.getElementById("myHiddenInput").value = mensaje.value;
	mensaje.value = "";
	mensaje.style.backgroundImage = "url('assets/muñeco.svg')";
	let inputTexto = document.querySelector(".input-text").focus();
	alert("Texto Copiado")
}

function pegar() {
  navigator.clipboard.readText().then(texto => {
    inputTexto.value = document.getElementById("myHiddenInput").value;
  });
}