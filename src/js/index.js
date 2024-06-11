import { get } from "./fetch.js";

let capturado = document.getElementById("capturado");

class pokedex {
  constructor(id, nombre, tipo) {
    this.id = id;
    this.nombre = nombre;
    this.tipo = tipo;
  }
  mensaje() {
    console.log(this.id, this.nombre, this.tipo);
    if (this.tipo.length === 1) {
      capturado.textContent = `¡Capturaste un ${this.nombre}! Tipo: ${this.tipo[0].type.name}`;
    } else {
      capturado.textContent = `¡Capturaste un ${this.nombre}! Tipo: ${this.tipo[0].type.name}, ${this.tipo[1].type.name}`;
    }
  }
}

document.getElementById("btnCaptura").addEventListener("click", async () => {
  const promise = await get(Math.floor(Math.random() * 1026));
  if (promise !== undefined) {
    let captura = new pokedex(promise.id, promise.name, (promise.type, promise.types));
    captura.mensaje();
  } else {
    alert("Ha ocurrido un error de servidor");
  } 
});
