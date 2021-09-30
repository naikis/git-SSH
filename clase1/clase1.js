const scherelle = {
    nombre: 'Naika',
    apellido: 'Louijuste',
    edad: 19,
    mails: ['louijuste15@gmail.com', 'kikascherelle@gmail.com'],
}

const personajes = [
    {
        nombre: 'Homero',
        apellido: 'Simpson',
        trabajos: ['planta nuclear', 'don barredora']
    },
    {
        nombre: 'Marge',
        apellido: 'Simpson',
        trabajos: ['ama de casa']
    },
    {
        nombre: 'Bob',
        apellido: 'Esponja',
        trabajos: ['cocinero']
    },
    {
        nombre: 'Leo',
        apellido: 'Messi',
        trabajos: ['PSG']
    }
]

const getAll = (arrayDeObjetos) => {
    arrayDeObjetos.forEach(item => {
        let mas1Trabajo = false;
        if (item.trabajos.length > 1){
            mas1Trabajo = true;
        }
        console.log(`Nombre: ${item.nombre}. Apellido: ${item.apellido}. Tiene mas de un trabajo? ${mas1Trabajo ? 'SI': 'NO'}`)
    })
}

getAll(personajes)

///////////////////////////////////////////////

const axios = require('axios');

async function get(url) {
    const personajes = await axios.get(url);
    console.log(personajes);
}

get('https://breakingbadapi.com/api/characters')