console.log(document);

//const $flexItem = document.getElementsByClassName("flex-item");
const $flexItem1 = document.querySelector(".flex-item");
const $flexItem2 = document.getElementById("flex-item1");
//console.log($flexItem);
//console.log($flexItem1);

const $a1 = document.querySelector("#a1");
console.log($a1);



const $enviar = document.querySelector("#enviar");

function cambiarNombre() {
    let edad = 1

    if(edad == 0){
        $a1.textContent = "youtube";
    }else{
        $a1.textContent = "facebook";
    }
}

//$enviar.addEventListener("click", cambiarNombre);
const $body = document.querySelector("#cuerpo")

function cambioColor() {
    $a1.style.backgroundColor = "white";
    $a1.classList.add("scale");
    //$flexItem1.classList.add("center");
    //$flexItem1.classList.remove("flex-item");
    //$flexItem1.classList.toggle("rotate");
    $body.classList.toggle("body");
}

$enviar.addEventListener("click", cambioColor);
console.log($enviar.style);