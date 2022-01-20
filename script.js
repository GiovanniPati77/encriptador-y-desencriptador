// encriptar codigo
function encriptar() {
    var texto = document.getElementById("input-texto").value;
    var resultado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");

    entradaTexto.value = resultado;
    resultado.value = "";
}
// Desencriptar codigo
function desEncriptar() {
    var texto2 = document.getElementById("input-texto").value;
    var desEncriptado = texto2.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");

    entradaTexto.value = desEncriptado;
    resultado.value = "";
}

// Copiar
function copy() {
    var copiarTexto = document.getElementById("msg");
    copiarTexto.select()
    document.execCommand("copy")

}
document.querySelector("#btn-copy").addEventListener("click", copy)

var entradaTexto = document.getElementById("msg")
var button = document.getElementById('btn-encriptar');
button.onclick = encriptar
var boton = document.getElementById('btn-desencriptar');
boton.onclick = desEncriptar;
