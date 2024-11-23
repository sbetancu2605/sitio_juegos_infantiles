// Declarar variables gobales 
//let NombreJugador = prompt("Digite el Nombre del Jugador")
//alert("Por favor Ingresa tu Nombre y luego click al Boton Iniciar");

let imgN1 = [
    { nombre: "C-America", url: "imagen/C-America.webp"},
    { nombre: "Thor", url: "imagen/Thor.jpg"},
    { nombre: "Gamora", url: "imagen/Gamora.webp"},
    { nombre: "H-Araña", url: "imagen/H-Araña.jpg"},
    { nombre: "Hulk", url: "imagen/Hulk.jpg"},
    { nombre: "IroMan", url: "imagen/IroMan.jpg"},
    { nombre: "C-America", url: "imagen/C-America.webp"},
    { nombre: "Thor", url: "imagen/Thor.jpg"},
    { nombre: "Gamora", url: "imagen/Gamora.webp"},
    { nombre: "H-Araña", url: "imagen/H-Araña.jpg"},
    { nombre: "Hulk", url: "imagen/Hulk.jpg"},
    { nombre: "IroMan", url: "imagen/IroMan.jpg"}
];

let imgN2 = [
    { nombre: "C-America", url: "imagen/C-America.webp"},
    { nombre: "Thor", url: "imagen/Thor.jpg"},
    { nombre: "Gamora", url: "imagen/Gamora.webp"},
    { nombre: "H-Araña", url: "imagen/H-Araña.jpg"},
    { nombre: "Hulk", url: "imagen/Hulk.jpg"},
    { nombre: "IroMan", url: "imagen/IroMan.jpg"},
    { nombre: "P-Negra", url: "imagen/P-Negra.jpg"},
    { nombre: "Hormiga", url: "imagen/Hormiga.jpg"},
    { nombre: "C-America", url: "imagen/C-America.webp"},
    { nombre: "Thor", url: "imagen/Thor.jpg"},
    { nombre: "Gamora", url: "imagen/Gamora.webp"},
    { nombre: "H-Araña", url: "imagen/H-Araña.jpg"},
    { nombre: "Hulk", url: "imagen/Hulk.jpg"},
    { nombre: "IroMan", url: "imagen/IroMan.jpg"},
    { nombre: "P-Negra", url: "imagen/P-Negra.jpg"},
    { nombre: "Hormiga", url: "imagen/Hormiga.jpg"}
]

let imgN3 = [
    { nombre: "C-America", url: "imagen/C-America.webp"},
    { nombre: "Thor", url: "imagen/Thor.jpg"},
    { nombre: "Gamora", url: "imagen/Gamora.webp"},
    { nombre: "H-Araña", url: "imagen/H-Araña.jpg"},
    { nombre: "Hulk", url: "imagen/Hulk.jpg"},
    { nombre: "IroMan", url: "imagen/IroMan.jpg"},
    { nombre: "P-Negra", url: "imagen/P-Negra.jpg"},
    { nombre: "Hormiga", url: "imagen/Hormiga.jpg"},
    { nombre: "Groot", url: "imagen/Groot.jpg"},
    { nombre: "Stalord", url: "imagen/Starlord.jpg"},
    { nombre: "C-America", url: "imagen/C-America.webp"},
    { nombre: "Thor", url: "imagen/Thor.jpg"},
    { nombre: "Gamora", url: "imagen/Gamora.webp"},
    { nombre: "H-Araña", url: "imagen/H-Araña.jpg"},
    { nombre: "Hulk", url: "imagen/Hulk.jpg"},
    { nombre: "IroMan", url: "imagen/IroMan.jpg"},
    { nombre: "P-Negra", url: "imagen/P-Negra.jpg"},
    { nombre: "Hormiga", url: "imagen/Hormiga.jpg"},
    { nombre: "Groot", url: "imagen/Groot.jpg"},
    { nombre: "Stalord", url: "imagen/Starlord.jpg"}
]

let imgN4 = [
    { nombre: "C-America", url: "imagen/C-America.webp"},
    { nombre: "Thor", url: "imagen/Thor.jpg"},
    { nombre: "Gamora", url: "imagen/Gamora.webp"},
    { nombre: "H-Araña", url: "imagen/H-Araña.jpg"},
    { nombre: "Hulk", url: "imagen/Hulk.jpg"},
    { nombre: "IroMan", url: "imagen/IroMan.jpg"},
    { nombre: "P-Negra", url: "imagen/P-Negra.jpg"},
    { nombre: "Hormiga", url: "imagen/Hormiga.jpg"},
    { nombre: "Groot", url: "imagen/Groot.jpg"},
    { nombre: "Stalord", url: "imagen/Starlord.jpg"},
    { nombre: "G-Infinitas", url: "imagen/G-Infinitas.jpg"},
    { nombre: "Vision", url: "imagen/Vision.jpg"},
    { nombre: "C-America", url:"imagen/C-America.webp"},
    { nombre: "Thor", url: "imagen/Thor.jpg"},
    { nombre: "Gamora", url: "imagen/Gamora.webp"},
    { nombre: "H-Araña", url: "imagen/H-Araña.jpg"},
    { nombre: "Hulk", url: "imagen/Hulk.jpg"},
    { nombre: "IroMan", url: "imagen/IroMan.jpg"},
    { nombre: "P-Negra", url: "imagen/P-Negra.jpg"},
    { nombre: "Hormiga", url: "imagen/Hormiga.jpg"},
    { nombre: "Groot", url: "imagen/Groot.jpg"},
    { nombre: "Stalord", url: "imagen/Starlord.jpg"},
    { nombre: "G-Infinitas", url: "imagen/G-Infinitas.jpg"},
    { nombre: "Vision", url: "imagen/Vision.jpg"}
]


// Variables globales
const d = document;
let tablero = d.querySelector(".tablero");
let imagenNommbre = []; // Guardar nombres de imagenes 
let imagenID = []; // Guardar posiciones de imagenes 
let aciertos = 0;
let intentos = 0;
let tiempo = 40;
let nivel = 1;
let mostrarNivel = d.querySelector(".nivel");
let mostrarIntentos = d.querySelector(".intentos");
let mostrarAciertos = d.querySelector(".aciertos");
let mostrarTiempo = d.querySelector(".tiempo");
let tiempoTranscurrido;
let bnt_iniciar = d.querySelector(".btn-iniciar");
let imagenNivel;
let btnHabilitar = false;
let sonidoSeleccionar = new Audio("sonido/seleccion.wav");
let sonidoGameOver = new Audio("sonido/gameover.mp3");
let sonidoFinish = new Audio("sonido/finish.mp3");
let sonidoGood = new Audio("sonido/good2.wav");
let ticTac = new Audio("sonido/TicTac.mp3");

let conteoTiempo;
let tiempoAcumulado = 0;
let tabla = d.querySelector(".table tbody");
let intentosAcumulados = 0;

// Limpiar localStorage  --- Usar solo 1 vez o cuando sea necesario borrar todos los datos almacenados 
//localStorage.removeItem("datosPlayer");

// Inicialización de variables
let datosGuardados = JSON.parse(localStorage.getItem("datosPlayer")) || [];

console.log(nivel);
// Agregar evento al boton para iniciar el juego
bnt_iniciar.addEventListener("click",function(){
    // Controlar el tiempo del juego
    if(btnHabilitar == false && nivel == 1){
        btnHabilitar = true;
        nivel1();
   }else if(btnHabilitar == false && nivel == 2){
        btnHabilitar = true;
        nivel2();
   }else if(btnHabilitar == false&& nivel == 3){
        btnHabilitar = true;
        nivel3();
   }else if(btnHabilitar == false&& nivel == 4){
        btnHabilitar = true;
        nivel4();
   }
});

// Mostrar Tiempo
//setTimeout()  Se ejecuta una sola vez 
//setInterval() Funcion para el tiempo, se ejecuta dustante cierto tiempo


// Poner las Imagenes aleatorias 
imgN1.sort(()=>Math.random()- 0.5);
imgN2.sort(()=>Math.random()- 0.5);
imgN3.sort(()=>Math.random()- 0.5);
imgN4.sort(()=>Math.random()- 0.5);

// Funcion para colocar las imagenes en el tablero
function colocarImagenes() {
    // Agregar imagenes dependiemdo del nivel
    if(nivel == 1){
        imagenNivel = imgN1;
    }else if(nivel == 2){
        imagenNivel = imgN2;
    }else if(nivel == 3){
        imagenNivel = imgN3;
    }else if(nivel == 4){
        imagenNivel = imgN4;
    }

    // Recorere con un forEach las imagenes que estan en el array
    imagenNivel.forEach((imagen, i)=>{
        let div = d.createElement("div"); // Crear la etiqueta div
        div.className = "col-3"; // Agregar la clase 
        let img = d.createElement("img"); // Crar etiqueta img
        img.className = "img-fluid altura-img"; // Agregar la clase img-fluid  Clase para la altura de las img (altura-img)
        img.src = "imagen/logo1.jpg"; // Agragr url a la etiqueta
        img.id = i; // Enumerar las imagenes por medio de un id 
        img.addEventListener("click",  mostrarImg); // Agregar evento click a la imagen
        div.appendChild(img); // La imagen se está colocando en el div
        tablero.appendChild(div); // El div se está agregando en el tablero
    });
}

//  Funcion para mostrar las imagenes ocultas
function mostrarImg() {
    // sonido
    sonidoSeleccionar.play();
    // Obtener posicion de la imagen
    let imgID = this.getAttribute("id");
    //alert("Numero de imagen "+imgID);
    this.src = imagenNivel [imgID].url; // Modificar la url de la immagen
    imagenNommbre.push( imagenNivel[imgID].nombre ); // Guardar los nombres de la imagen
    imagenID.push(imgID); // Guardar la posicon de la imagen 

    if(imagenNommbre.length == 2){
        setTimeout( compararImg, 300 );  
    }
}

// Funcion para comparar imagenes 
function compararImg() {
    let imaganesTabero = d.querySelectorAll(".tablero  div  img");

    if(imagenNommbre[0] == imagenNommbre[1]){
        if(imagenID[0]!= imagenID[1]){
            sonidoGood.play();
            //alert("Felicitaciones, Adivinaste una imagen");
            imaganesTabero[imagenID[0]].src = "imagen/chuloverde.png";
            imaganesTabero[imagenID[1]].src = "imagen/chuloverde.png";
            imaganesTabero[imagenID[0]].removeEventListener("click",mostrarImg);
            imaganesTabero[imagenID[1]].removeEventListener("click",mostrarImg);
            aciertos++;
            mostrarAciertos.textContent = aciertos;
        }else{
            alert("Debes escoger otra imagen");
            imaganesTabero[imagenID[0]].src = "imagen/logo1.jpg";
            imaganesTabero[imagenID[1]].src = "imagen/logo1.jpg";
            intentos++;
            intentosAcumulados++;
            mostrarIntentos.textContent = intentos;
        }
    }else{
        //alert("Fallaste, las imagenes son diferentes");
        imaganesTabero[imagenID[0]].src = "imagen/logo1.jpg";
        imaganesTabero[imagenID[1]].src = "imagen/logo1.jpg";
        intentos++;
        intentosAcumulados++;
        mostrarIntentos.textContent = intentos;
    }
    imagenNommbre = [];
    imagenID = [];

    // Detectar cuando se equivocaron todas las imagenes
    if(nivel == 1 && aciertos == 6){
        ticTac.pause();
        mostrarTiempo.classList.remove("tiempo-agotado");
        sonidoFinish.play();
        //alert("Has pasado de nivel");
        clearInterval(tiempoTranscurrido);
        btnHabilitar = false;
        nivel++;
        mostrarNivel.textContent = nivel;
        intentos = 0;
        mostrarIntentos.textContent = intentos;
        aciertos = 0;
        mostrarAciertos.textContent = aciertos;
        tiempo = 50;
        mostrarTiempo.textContent = tiempo;
        quitarImg();
    }else if(nivel == 2 && aciertos == 8){
        mostrarTiempo.classList.remove("tiempo-agotado");
        ticTac.pause();
        sonidoFinish.play();
        //alert("Has pasado de nivel");
        clearInterval(tiempoTranscurrido);
        btnHabilitar = false;
        nivel++;
        mostrarNivel.textContent = nivel;
        intentos = 0;
        mostrarIntentos.textContent = intentos;
        aciertos = 0;
        mostrarAciertos.textContent = aciertos;
        tiempo = 55;
        mostrarTiempo.textContent = tiempo;
        quitarImg();
    }else if(nivel == 3 && aciertos == 10){
        ticTac.pause();
        mostrarTiempo.classList.remove("tiempo-agotado");
        sonidoGood.play();
        clearInterval(tiempoTranscurrido);
        btnHabilitar = false;
        nivel++;
        mostrarNivel.textContent = nivel;
        intentos = 0;
        mostrarIntentos.textContent = intentos;
        aciertos = 0;
        mostrarAciertos.textContent = aciertos;
        tiempo = 60;
        mostrarTiempo.textContent = tiempo;
        quitarImg();
    }else if(nivel == 4 && aciertos == 12){
        ticTac.pause();
        //alert("Felicitaciones, has pasado el juego");
        clearInterval(tiempoTranscurrido);
        mostrarFelicitaciones();
    }
}

// Funciones de niveles
function nivel1() {
    //Agregar la imagenes al tablero
    colocarImagenes();
    mostrarNivel.textContent = nivel;
    tiempoDeJuego();
}

function nivel2() {
    //Agregar la imagenes al tablero
    colocarImagenes();
    tiempoDeJuego();
}

function nivel3() {
    //Agregar la imagenes al tablero
    colocarImagenes();
    tiempoDeJuego();
}

function nivel4() {
    //Agregar la imagenes al tablero
    colocarImagenes();
    tiempoDeJuego();
}

function tiempoDeJuego() {
    tiempoTranscurrido = setInterval(()=>{
        tiempo--;
        tiempoAcumulado++;
        mostrarTiempo.textContent = tiempo;
        if(tiempo == 10){
            ticTac.play();
            mostrarTiempo.classList.add("tiempo-agotado");
            //alert("Rapido !! El tiempo se está agotando");
        }else if(tiempo == 1){
            sonidoGameOver.play();
        }else if(tiempo == 0){
            alert("Se agotó el tiempo, perdiste");
            clearInterval(tiempoTranscurrido);
            location.reload();
        }
    },1000); 
}

// Funcion para quitar las imagenes del tablero
function quitarImg() {
   let imagenesTablero = d.querySelectorAll(".tablero div"); 
   imagenesTablero.forEach((img)=>{
    img.remove();
   })
}

// Función para guardar datos en localStorage
function guardarDatosEnLocalStorage() {
    let datosPlayer = {
        nombre: nombrePlayer,
        intentos: intentosAcumulados || 0,  // Si intentos no está definido, establece el valor predeterminado a 0
        tiempo: tiempoAcumulado
    };

    datosGuardados.push(datosPlayer);
    localStorage.setItem("datosPlayer", JSON.stringify(datosGuardados));
}


datosGuardados.sort((a, b) => {
    
    // Si a.tiempo es igual a b.tiempo, ordenar por intentos ascendentes
    if (a.tiempo === b.tiempo) {
        return a.intentos - b.intentos;
    }
    // Ordenar por tiempo ascendente
    return a.tiempo - b.tiempo;
});

// Mostrar datos ordenados en la tabla
mostrarDatosGuardados();

function mostrarDatosGuardados() {
    tabla.innerHTML = "";

    datosGuardados.forEach((datos, index) => {
        // Verificar si datos es un objeto antes de acceder a propiedades
        if (datos && typeof datos === 'object' && 'nombre' in datos && 'intentos' in datos && 'tiempo' in datos) {
            let fila = tabla.insertRow();
            let celdaNumero = fila.insertCell(0);
            let celdaNombre = fila.insertCell(1);
            let celdaIntentos = fila.insertCell(2);
            let celdaTiempo = fila.insertCell(3);

            celdaNumero.textContent = index + 1;
            celdaNombre.textContent = datos.nombre;
            celdaIntentos.textContent = datos.intentos;
            celdaTiempo.textContent = datos.tiempo ? datos.tiempo + "s" : "Tiempo no disponible";
        } else {
            console.error("Los datos guardados en el índice", index, "no tienen la estructura esperada.");
        }
    });
}


function mostrarFelicitaciones() {
     alert("¡Felicitaciones!, has pasado el juego");
    
    // Guardar datos en localStorage
    guardarDatosEnLocalStorage();
    
    // Mostrar datos guardados en la tabla
    mostrarDatosGuardados();
}

// Al final del script, mostrar datos guardados al cargar la página
mostrarDatosGuardados();

let nombre_jugador = 'Juan';


function guardarResultado() {
    console.log("Guardando resultado..."); // Agrega este log
    fetch('/guardar_resultado', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nombre_jugador: nombreJugador,  // Nombre del jugador
            aciertos: aciertos,            // Número de aciertos
            intentos: intentos,            // Número de intentos
            tiempo: tiempo,                // Tiempo total en segundos
            nivel: nivel                   // Nivel actual
        })
    }).then(response => response.json())
      .then(data => {
          console.log("Resultado guardado correctamente", data);
      }).catch(error => {
          console.error("Error al guardar resultado", error);
      });
}


