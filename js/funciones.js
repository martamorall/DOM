let cajaPedidos=document.getElementById("cajaPedidos");
let salto=document.createElement("br");

//Creación del primer contenedor
let cajaArticulo=document.createElement("div");
cajaArticulo.setAttribute("id", "cajaArticulo1");

//Botón V
let botonV=document.createElement("button");
let letraV=document.createTextNode("V");
botonV.appendChild(letraV);

//Botón X
let botonX=document.createElement("button");
let letraX=document.createTextNode("X");
botonX.setAttribute("id", "botonX");
botonX.appendChild(letraX);

//Nombre del artículo
let articulo=document.createElement("p");
let ptexto=document.createTextNode("Camisetas azules. 2x1");
articulo.appendChild(ptexto);

//Número de artículo
let numero=document.createElement("input");
numero.setAttribute("type", "number");
numero.setAttribute("min", "0");

//Estrella
let iconoEstrella=document.createTextNode("✩");

//Medidor con ticks
let irange=document.createElement("input");
irange.setAttribute("type", "range");
irange.setAttribute("min", "1");
irange.setAttribute("max", "5");
irange.setAttribute("list", "tickmarks");

//Salida del número del medidor
let outputDato=document.createElement("output");

//Al cambiar el cursor del medidor, cambia el número y lo muestra en el HTML
irange.setAttribute("onchange", "irange.nextElementSibling.innerHTML=irange.value");

//Asignación de todos los componentes al contenedor del primer artículo  
cajaArticulo.appendChild(botonV);
cajaArticulo.appendChild(botonX);
cajaArticulo.appendChild(articulo);
cajaArticulo.appendChild(numero);
cajaArticulo.appendChild(iconoEstrella);
cajaArticulo.appendChild(irange);
cajaArticulo.appendChild(outputDato);
cajaArticulo.appendChild(salto);


//Clonación del segundo contenedor
let cajaArticulo2=cajaArticulo.cloneNode(true);
cajaArticulo2.setAttribute("id", "cajaArticulo2");

//Eliminación del nombre del artículo
let articulo2=cajaArticulo2.childNodes[2];
cajaArticulo2.removeChild(articulo2);

let botonX2=cajaArticulo2.childNodes[1];
//Inserción del nuevo nombre del artículo
botonX2.insertAdjacentHTML("afterend", "<p>Vestido negro. Etiqueta</p>");

//Al cambiar el cursor del medidor, cambia el número y lo muestra en el HTML
let irange2=cajaArticulo2.childNodes[5];
irange2.setAttribute("onchange", "irange2.nextElementSibling.innerHTML=irange2.value");


//Clonación del tercer contenedor
let cajaArticulo3=cajaArticulo.cloneNode(true);
cajaArticulo3.setAttribute("id", "cajaArticulo3");

//Al cambiar el cursor del medidor, cambia el número y lo muestra en el HTML
let irange3=cajaArticulo3.childNodes[5];
irange3.setAttribute("onchange", "irange3.nextElementSibling.innerHTML=irange3.value");


//Asignación de los tres contenedores en la cajaPedidos
cajaPedidos.appendChild(cajaArticulo);
cajaPedidos.appendChild(cajaArticulo2);
cajaPedidos.appendChild(cajaArticulo3);

