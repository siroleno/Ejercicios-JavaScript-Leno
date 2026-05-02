console.log("Guía JavaScript iniciada");

const nombre = "Facundo";      // string
let edad = 21;              
let vida = 100;             
let puntaje = 67;            
let activo = true;         

console.log(nombre, edad, vida, puntaje, activo);

// Puntaje

let puntosBase = 100;
let bonus = 50;
let penalizacion = 20;

let puntajeFinal = puntosBase + bonus - penalizacion;

console.log("Puntaje final:", puntajeFinal);

//  Valor a numero
const input = document.getElementById("dato");
const boton = document.getElementById("btn");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", function () {
  const valor = input.value;

  const numero = Number(valor);

  const resultado = numero + 10;

  mensaje.textContent = "Resultado: " + resultado;
});

//Edad para jugar

let edad = 12;

if (edad >= 13) {
  console.log("Puede jugar");
} else {
  console.log("No puede jugar todavía");
}

// Variante vida 

let vida = 100;

if (vida > 70) {
  console.log("Jugador en buen estado");
} else if (vida >= 30 && vida <= 70) {
  console.log("Jugador herido");
} else if (vida >= 1 && vida <= 29) {
  console.log("Jugador en peligro.");
} else if (vida === 0) {
  console.log("Game Over");
}
 
// Menu

let opcion = "iniciar";

switch (opcion) {
  case "iniciar":
    console.log("Iniciando juego...");
    break;

  case "configuracion":
    console.log("Abriendo configuración...");
    break;


  case "salir":
    console.log("Saliendo del juego...");
    break;

}

// Cuenta regresiva 
for (let i = 3; i >= 1; i--) {
  console.log(i);
}

console.log("¡Comienza!");

//  Puntajes
let puntajeTotal = 0;

for (let ronda = 1; ronda <= 5; ronda++) {
  puntajeTotal += 10; // suma 10 puntos en cada ronda
}

console.log(puntajeTotal);

// Arrays

import { inventario } from "./data.js";

// Primer objeto
console.log("Primer objeto:", inventario[0]);

// Último objeto
console.log("Último objeto:", inventario[inventario.length - 1]);

// Cantidad total
console.log("Cantidad de objetos:", inventario.length);

//

