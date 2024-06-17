
/// Constantes configuracion
const resnow = document.getElementById('resnow');
const showmenu = document.getElementById('showmenu');
const realdom = document.getElementById('realdom');
const changeTheme = document.getElementById('changeTheme');
const desShow = document.getElementById('desShow');
const actShow = document.getElementById('envMenu');
const showCar = document.getElementById('showCar');
const quitCar1 = document.getElementById('quitCar1');

/// Fuctions llamados.

changeTheme.addEventListener('click', (e) => {
    ThemeCh();
});

showCar.addEventListener('click', (e) => {
    carShow();
})

quitCar1.addEventListener('click', (e) => {
    carDesShow();
})

desShow.addEventListener('click', (e) => {
    quitShow();
});
actShow.addEventListener('click', (e) => {
    addShow();
});
showmenu.addEventListener('click', (e) => {
    envMenu1();
})

/// Fuction config

function ThemeCh() {

    var boton = document.getElementById("miMain");
    var boton2 = document.getElementById("miTitle");
    var boton3 = document.getElementById("miTitle2");

    if (boton.className === "mcl-1") {

        boton.className = "mos-1";
        boton2.className = "op-1c";
        boton3.className = "op-2c";

        console.log("Modo claro activado")

    } else if (boton.className === "mos-1") {

        boton.className = "mcl-1";
        boton2.className = "op-1";
        boton3.className = "op-2";

        console.log("Modo claro desactivado")

    }

}

function quitShow() {

    var most1 = document.getElementById("miShow");

    most1.className = "shw-mn-des";
    console.log("Menu desactivado")

}

function addShow() {

    var most1 = document.getElementById("miShow");
    most1.className = "shw-mn-act";
    console.log("Menu activado")

}

function carShow() {

    var carroObj1 = document.getElementById("carroObj");
    carroObj1.className = "sh-car-act";
    console.log("Carro activado")

}

function carDesShow() {

    var carroObj1 = document.getElementById("carroObj");
    carroObj1.className = "sh-car-des";
    console.log("Carro desactivado")

}

function envMenu1() {
    location.href = "/Views/Productos/productos.html";
}
