/*const $head = document.querySelector("#head");
const $body = document.querySelector("body");
const $footer = document.querySelector(".footer");*/

//$footer.classList.add("color-fuente");

const $header = document.querySelector("#header");
const $main = document.querySelector("#main");
const $footer = document.querySelector("#footer");
const $a = document.querySelector("#a-item");
const $a1 = document.querySelector("#a-item1");

$a.classList.add("a");
$a1.classList.add("a1");
$header.classList.add("header");

const $repositorio = document.querySelector("#repositorio");
const $parrafo = document.querySelector(".p");

const $section = document.querySelector(".flex-section");

$parrafo.setAttribute("id", "p2");
console.log($repositorio.getAttribute("href"));

const $agregarParrafo = document.querySelector(".addP");

function addParrafo() { 
    let parrafo2 = document.createElement("p");
    let infoP = document.createTextNode("PARRAFO PARRAFO");
    parrafo2.appendChild(infoP);
    parrafo2.setAttribute("class", "parrafo2");
    $section.appendChild(parrafo2);
}

$agregarParrafo.addEventListener("click", addParrafo);

const $section2 = document.querySelector(".flex-section1");

//let dias = ['lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo']

//let ul = document.createElement("ul");

//$section2.appendChild(ul);

/*dias.forEach(item =>{
    let li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
})*/

let meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

let ul = document.createElement("ul");
$section2.appendChild(ul);
let fragmento = document.createDocumentFragment();

meses.forEach(item =>{
    let li = document.createElement("li");
    li.textContent = item;
    fragmento.appendChild(li);
})

ul.appendChild(fragmento);