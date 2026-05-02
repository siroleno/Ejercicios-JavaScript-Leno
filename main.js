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


import { inventario } from "./data.js";

console.log("Primer objeto:", inventario[0]);

console.log("Último objeto:", inventario[inventario.length - 1]);

console.log("Cantidad de objetos:", inventario.length);

// Recorrer inventario

const inventario = ["espada", "poción", "llave", "escudo"];

for (let i = 0; i < inventario.length; i++) {
  console.log(inventario[i]);
}

// Agregar inventario

let mochila = [];

mochila.push("linterna");
mochila.push("comida");
mochila.push("mapa");

mochila.pop();

console.log(mochila);


// Chequear inventario
let inventario = ["espada", "poción", "llave", "escudo"];

if (inventario.includes("llave")) {
  console.log("La puerta se abre");
} else {
  console.log("Necesitás una llave");
}

//  Saludar usuario

function saludarUsuario(nombre) {
  console.log("Bienvenido/a, " + nombre);
}

saludarUsuario("Milo");

// Calculr daño a la vida

function calcularVidaRestante(vida, danio) {
  return vida - danio;
}

let resultado = calcularVidaRestante(100, 30);
console.log(resultado);

// Arrow

const sumar = (a, b) => {
  return a + b;
};

console.log(sumar(10, 5));

// Crear objeto jugador

const jugador = {
  nombre: "Luna",
  vida: 100,
  energia: 80,
  nivel: 1,
  inventario: ["espada", "poción"]
};

console.log("Nombre:", jugador.nombre);
console.log("Vida:", jugador.vida);
console.log("Energía:", jugador.energia);
console.log("Nivel:", jugador.nivel);
console.log("Inventario:", jugador.inventario);

// Modificar objeto

const jugador = {
  nombre: "Kai",
  nivel: 1,
  monedas: 0
};

jugador.nivel += 1;

jugador.monedas += 50;

console.log(jugador);


// Array de objetos

import { personajes } from "./data.js";

for (let i = 0; i < personajes.length; i++) {
  const p = personajes[i];
  console.log(`${p.nombre} es un/a ${p.tipo}, nivel ${p.nivel} con ${p.vida} de vida.`);
}

// Filtrar personajes por nivel

import { personajes } from "./data.js";

const personajesFuertes = personajes.filter((personaje) => {
  return personaje.nivel >= 3;
});

console.log(personajesFuertes);

// Obtener solo los nombres

import { personajes } from "./data.js";

const nombres = personajes.map((personaje) => {
  return personaje.nombre;
});

console.log(nombres);

// Buscar un personaje

import { personajes } from "./data.js";

const personajeEncontrado = personajes.find((personaje) => {
  return personaje.nombre === "Kai";
});

console.log(personajeEncontrado);

//  Msj en html
const mensaje = document.getElementById("mensaje");

mensaje.textContent = "Bienvenido a la guía de JavaScript";

// Botón que suma puntos

const boton = document.getElementById("btn");
const mensaje = document.getElementById("mensaje");

let puntos = 0;

boton.addEventListener("click", function () {

  puntos += 10;

  mensaje.textContent = "Puntaje: " + puntos;
});

// Validar nombre de usuario

const input = document.getElementById("dato");
const boton = document.getElementById("btn");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", function () {
  const nombre = input.value;

  if (nombre === "") {
    mensaje.textContent = "Ingresá un nombre para continuar";
  } else {
    mensaje.textContent = "Bienvenido/a, " + nombre;
  }
});

//  Puntaje local store

const jugador = {
  nombre: "Luna",
  puntaje: 1500
};

localStorage.setItem("jugador", JSON.stringify(jugador));

const jugadorGuardado = JSON.parse(localStorage.getItem("jugador"));

console.log(jugadorGuardado);

//