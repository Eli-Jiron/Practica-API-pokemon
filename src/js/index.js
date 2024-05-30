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
        if (this.tipo.length === 1) {
            capturado.textContent = `¡Capturaste un ${this.nombre}! Tipo: ${this.tipo[0].type.name}`;
        } else {
            capturado.textContent = `¡Capturaste un ${this.nombre}! Tipo: ${this.tipo[0].type.name}, ${this.tipo[1].type.name}`;
        }
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