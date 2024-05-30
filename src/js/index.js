let captura = document.getElementById('captura');
let capturado = document.getElementById('capturado');

class pokedex {
    constructor (id, nombre, tipo) {
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
    }
    mensaje () {
        console.log(this.id, this.nombre, this.tipo);
        capturado.textContent = `¡Capturaste un ${this.nombre}!`;
    }
}

async function capturarPokemon(id) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();
        let a = new pokedex(data.id, data.name, (data.type, data.types));
        a.mensaje();
        return data;
    } catch (error) {
        console.log(error);
    }
}

captura.addEventListener('click', function () {
    let id = Math.floor(Math.random() * 1026);
    console.log(capturarPokemon(id));
})