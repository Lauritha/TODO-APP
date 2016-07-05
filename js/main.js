var texto = document.getElementById("inputText").value;
var listaTarea = document.getElementById("listaTarea");
var inputText = document.getElementById("inputText");
var campoTarea = document.getElementById("campoTarea");

function agregarTarea() {
    var texto = document.getElementById("inputText").value;
    if(texto != ""){
    	var div = document.createElement("div");
        div.setAttribute("class", "caja");
        var contenido = document.createElement("span");
        var check = document.createElement("input");
        var btn = document.createElement("span");
        btn.setAttribute("class", "fa fa-trash-o basurero");
        check.setAttribute("type", "checkbox");
        btn.addEventListener('click', borrarTarea);
		check.onclick = function() {
            if(this.checked == true){
                contenido.setAttribute("class", "tachar");
            } else {
                contenido.removeAttribute("class");
            }
        }
        listaTarea.appendChild(div);
		contenido.innerHTML = texto;
        div.appendChild(contenido);
        div.appendChild(check);
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
function borrarTarea(e) {
    var div = e.target.parentNode;
    listaTarea.removeChild(div);
}
