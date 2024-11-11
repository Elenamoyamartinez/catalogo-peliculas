const imagenes = 
{
    'Portugal': 'img/portugal.jpg',
    'Francia': 'img/francia.jpg',
    'Alemania': 'img/alemania.jpg',
    'Italia': 'img/italia.jpg',
    'España': 'img/sevilla.jpg'
};


const listaPaises = document.getElementById('lista');
const imagenPrincipal = document.getElementById('imagenPrincipal');
const resultado = document.getElementById('resultado')
const titulo1 = document.getElementById('titulo1')

listaPaises.addEventListener('change', function() {
    
    const paisSeleccionado = listaPaises.value;

    imagenPrincipal.src = imagenes[paisSeleccionado];
    
    resultado.innerHTML = "Su destino es: " + paisSeleccionado;
    titulo1.innerHTML = "";
    
});