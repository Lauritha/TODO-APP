var texto = document.getElementById("inputText").value;
var listaTarea = document.getElementById("listaTarea");
var inputText = document.getElementById("inputText");

function agregarTarea() {
    var texto = document.getElementById("inputText").value;
   
    if(texto != ""){
    	var div = document.createElement("div");
		listaTarea.appendChild(div);
		div.innerHTML = texto;
		inputText.innerHTML = "";
    }else{
    	alert("No es posible ingresar la tarea, debe contener al menos 2 caracteres")
    }
}
function limpiarTarea() {
    var texto = document.getElementById("inputText").value;
   
    if(texto == ""){
		div.innerHTML = texto;
		inputText.innerHTML = "";
    }else{
    	alert("No es posible ingresar la tarea, debe contener al menos 2 caracteres")
    }
}
var clean = function() {
	var inputBox = document.getElementById("inputBox");
	inputBox.value = "";
	inputBox.focus();
}
