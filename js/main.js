var texto = document.getElementById("inputText").value;
var listaTarea = document.getElementById("listaTarea");
var inputText = document.getElementById("inputText");

function agregarTarea() {
    var texto = document.getElementById("inputText").value;
   
    if(texto != ""){
    	var div = document.createElement("div");
        var btn = document.createElement("button");
        btn.innerHTML = "eliminar";
        btn.addEventListener('click', limpiarTarea);
		listaTarea.appendChild(div);
		div.innerHTML = texto;
        div.appendChild(btn);
		document.getElementById("inputText").value = "";
    }else{
    	alert("La tarea no puede ser ingresada")
    }
}

function limpiarTarea() {
    var texto = document.getElementById("inputText").value;
   
    if(texto != ""){
		document.getElementById("inputText").value = "";
    }else{
    	alert("No es posible limpiar el área de texto porque esta vacía")
    }
}
function crearLista() {
    var campoTarea = document.getElementById("campoTarea");
    var tarea = document.createElement("div");
    tarea.campoTarea.appendChild(div);
}