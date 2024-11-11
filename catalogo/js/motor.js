const abecedario = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const fotosInicio = ["img/rapunzel.jpg", "img/barbie2.jpg", "img/yorobot.jpg", "img/multiple.jpg", "img/minions.jpg"];

const peliculas = [{
    titulo: "Ahora o Nunca",
    director: "Maria Ripoll",
    ano: 2015,
    sinopsis: "Un grupo de amigos intenta cumplir su último deseo antes de que uno de ellos se mude a otro país.",
    valoracion: 6.3,
    imagen: "img/ahoraonunca.jpg"
  },
  {
    titulo: "Ant-Man",
    director: "Peyton Reed",
    ano: 2015,
    sinopsis: "Un ladrón se convierte en un héroe cuando utiliza un traje que le permite reducir su tamano, pero aumentar su fuerza.",
    valoracion: 7.3,
    imagen: "img/antman.jpg"
  },
  {
    titulo: "Batman",
    director: "Tim Burton",
    ano: 1989,
    sinopsis: "El Caballero Oscuro se enfrenta al Joker en su lucha por proteger Gotham City.",
    valoracion: 7.5,
    imagen: "img/batman.jpg"
  },
  {
    titulo: "Black Panther",
    director: "Ryan Coogler",
    ano: 2018,
    sinopsis: "T'Challa se convierte en el nuevo rey de Wakanda, pero debe luchar por su lugar en el trono.",
    valoracion: 7.3,
    imagen: "img/blackpanther.jpg"
  },
  {
    titulo: "Casablanca",
    director: "Michael Curtiz",
    ano: 1942,
    sinopsis: "Durante la Segunda Guerra Mundial, un dueño de un café en Casablanca debe elegir entre su amor por una mujer y ayudar a su marido a escapar del nazismo.",
    valoracion: 8.5,
    imagen: "img/casablanca.jpg"
  },
  {
    titulo: "Creed",
    director: "Ryan Coogler",
    ano: 2015,
    sinopsis: "Adonis Johnson, hijo de Apollo Creed, busca el legado de su padre entrenando bajo la tutela de Rocky Balboa.",
    valoracion: 7.6,
    imagen: "img/creed.jpg"
  },
  {
    titulo: "Django Desencadenado",
    director: "Quentin Tarantino",
    ano: 2012,
    sinopsis: "Un esclavo liberado y un cazador de recompensas unen fuerzas para liberar a la esposa del esclavo.",
    valoracion: 8.4,
    imagen: "img/django.jpg"
  },
  {
    titulo: "Dumbo",
    director: "Tim Burton",
    ano: 2019,
    sinopsis: "Un elefante con grandes orejas se convierte en una estrella de circo mientras su dueño intenta salvar el circo.",
    valoracion: 6.3,
    imagen: "img/dumbo.jpg"
  },
  {
    titulo: "E.T. el Extraterrestre",
    director: "Steven Spielberg",
    ano: 1982,
    sinopsis: "Un niño ayuda a un extraterrestre a escapar de la Tierra para regresar a su hogar.",
    valoracion: 7.8,
    imagen: "img/et.jpg"
  },
  {
    titulo: "Enredados",
    director: "Nathan Greno, Byron Howard",
    ano: 2010,
    sinopsis: "Rapunzel, una princesa con un largo cabello mágico, se embarca en una aventura para escapar de la torre donde ha vivido toda su vida.",
    valoracion: 7.7,
    imagen: "img/rapunzel.jpg"
  },
  {
    titulo: "Forrest Gump",
    director: "Robert Zemeckis",
    ano: 1994,
    sinopsis: "La vida extraordinaria de un hombre común que vivió eventos históricos sin darse cuenta de su importancia.",
    valoracion: 8.8,
    imagen: "img/forest.jpg"
  },
  {
    titulo: "Frozen",
    director: "Chris Buck, Jennifer Lee",
    ano: 2013,
    sinopsis: "Una joven princesa busca a su hermana que ha congelado todo el reino con un poder misterioso.",
    valoracion: 7.4,
    imagen: "img/frozen.jpg"
  },
  {
    titulo: "Gladiator",
    director: "Ridley Scott",
    ano: 2000,
    sinopsis: "Un general romano es traicionado y obligado a luchar como gladiador para vengar la muerte de su familia y restaurar su honor.",
    valoracion: 8.5,
    imagen: "img/gladiador.jpg"
  },
  {
    titulo: "Godzilla",
    director: "Gareth Edwards",
    ano: 2014,
    sinopsis: "Un monstruo prehistórico se desata sobre las ciudades del mundo mientras los humanos luchan por sobrevivir.",
    valoracion: 6.4,
    imagen: "img/godzilla.jpg"
  },
  {
    titulo: "Harry Potter y la orden del Fénix",
    director: "David Yates",
    ano: 2007,
    sinopsis: "Harry Potter lucha contra la creciente amenaza de Lord Voldemort mientras se enfrenta a nuevas adversidades en la escuela Hogwarts.",
    valoracion: 7.5,
    imagen: "img/harrypotter.jpg"
  },
  {
    titulo: "Her",
    director: "Spike Jonze",
    ano: 2013,
    sinopsis: "Un hombre solitario se enamora de un sistema operativo con inteligencia artificial que tiene una voz femenina.",
    valoracion: 8.0,
    imagen: "img/her.jpg"
  },
  {
    titulo: "Interstellar",
    director: "Christopher Nolan",
    ano: 2014,
    sinopsis: "Un grupo de astronautas viaja a través de un agujero de gusano en busca de un nuevo hogar para la humanidad.",
    valoracion: 8.6,
    imagen: "img/interestellar.jpg"
  },
  {
    titulo: "IT",
    director: "Andy Muschietti",
    ano: 2017,
    sinopsis: "Un grupo de niños enfrentan a una entidad maligna que toma la forma de un payaso llamado Pennywise.",
    valoracion: 7.3,
    imagen: "img/it.jpg"
  },
  {
    titulo: "Joker",
    director: "Todd Phillips",
    ano: 2019,
    sinopsis: "Un hombre marginado, tras una serie de tragedias personales, se convierte en el infame villano conocido como el Joker.",
    valoracion: 8.4,
    imagen: "img/joker.jpg"    
  },
  {
    titulo: "Jumanji",
    director: "Joe Johnston",
    ano: 1995,
    sinopsis: "Dos niños encuentran un misterioso juego de mesa que trae a la vida todo tipo de criaturas y peligros.",
    valoracion: 7.0,
    imagen: "img/jumanji.jpg"
  },
  {
    titulo: "Laberinto del Fauno",
    director: "Guillermo del Toro",
    ano: 2006,
    sinopsis: "es un cuento de fantasía oscuro en el que una niña, mientras vive bajo la tiranía de un capitán franquista, debe cumplir tres pruebas para regresar a un reino subterráneo, fusionando la realidad de la guerra con lo fantástico.",
    valoracion: 7.3,
    imagen: "img/laberintodelfauno.jpg"
  },
  {
    titulo: "La La Land",
    director: "Damien Chazelle",
    ano: 2016,
    sinopsis: "Un músico y una actriz luchan por encontrar el equilibrio entre sus sueños y su relación en Los Ángeles.",
    valoracion: 8.0,
    imagen: "img/lalaland.jpg"
  },
  {
    titulo: "Mad Max: Furia en la carretera",
    director: "George Miller",
    ano: 2015,
    sinopsis: "En un futuro post-apocalíptico, Max ayuda a un grupo de mujeres a escapar de un tirano en un mundo devastado.",
    valoracion: 8.1,
    imagen: "img/madmax.jpg"
  },
  {
    titulo: "Memento",
    director: "Christopher Nolan",
    ano: 2000,
    sinopsis: "Un hombre con amnesia a corto plazo usa notas y tatuajes para buscar al asesino de su esposa.",
    valoracion: 8.4,
    imagen: "img/memento.jpg"
  },
  {
    titulo: "Nerve",
    director: "Henry Joost, Ariel Schulman",
    ano: 2016,
    sinopsis: "Una adolescente se ve envuelta en un peligroso juego de retos en línea en el que pone en riesgo su vida.",
    valoracion: 6.5,
    imagen: "img/nerve.jpg"
  },
  {
    titulo: "Noche en el Museo",
    director: "Shawn Levy",
    ano: 2006,
    sinopsis: "Un vigilante nocturno descubre que las exhibiciones de un museo cobran vida durante la noche.",
    valoracion: 6.4,
    imagen: "img/nocheenelmuseo.jpg"
  },
  {
    titulo: "Ocean's Eleven",
    director: "Steven Soderbergh",
    ano: 2001,
    sinopsis: "Un grupo de criminales planea un robo en tres de los casinos más grandes de Las Vegas.",
    valoracion: 7.8,
    imagen: "img/oceans11.jpg"
  },
  {
    titulo: "Origen",
    director: "Christopher Nolan",
    ano: 2010,
    sinopsis: "Un ladrón especializado en el robo de secretos mediante el uso de la tecnología de sueños infiltrados recibe una tarea de redención.",
    valoracion: 8.8,
    imagen:"img/origen.jpg"
  },
  {
    titulo: "Parásitos",
    director: "Bong Joon-ho",
    ano: 2019,
    sinopsis: "Una familia pobre se infiltra en la vida de una familia rica, desencadenando una serie de eventos que cambian sus destinos.",
    valoracion: 8.6,
    imagen: "img/parasitos.jpg"
  },
  {
    titulo: "Pulp Fiction",
    director: "Quentin Tarantino",
    ano: 1994,
    sinopsis: "Las vidas de varios personajes se entrelazan en una historia de crimen y redención en Los Ángeles.",
    valoracion: 8.9,
    imagen: "img/pulpfiction.jpg"
  },
  {
    titulo: "Reservoir Dogs",
    director: "Quentin Tarantino",
    ano: 1992,
    sinopsis: "Un grupo de criminales se enfrenta a una traición tras un fallido robo.",
    valoracion: 8.3,
    imagen: "img/reservoirdogs.jpg"
  },
  {
    titulo: "Rocky",
    director: "John G. Avildsen",
    ano: 1976,
    sinopsis: "Un boxeador de clase baja tiene la oportunidad de pelear por el título mundial en un combate con el campeón.",
    valoracion: 8.1,
    imagen: "img/rocky.jpg"
  },
  {
    titulo: "Seven",
    director: "David Fincher",
    año: 1995,
    sinopsis: "Un detective veterano y su joven compañero persiguen a un asesino en serie que utiliza los siete pecados capitales como motivo para sus crímenes.",
    valoracion: 8.6,
    imagen: "img/seven.jpg" 
  },
  {
    titulo: "Spider-Man",
    director: "Sam Raimi",
    año: 2002,
    sinopsis: "Peter Parker se convierte en Spider-Man, un superhéroe que lucha contra el crimen mientras enfrenta su vida como estudiante y joven adulto.",
    valoracion: 7.3,
    imagen: "img/spiderman.jpg" 
  },
  {
    titulo: "Ted",
    director: "Seth MacFarlane",
    año: 2012,
    sinopsis: "Un hombre adulto y su oso de peluche, que cobra vida, se ven envueltos en situaciones cómicas mientras intentan llevar una vida normal.",
    valoracion: 6.9,
    imagen: "img/ted.jpg"
  },
  {
    titulo: "Tom y Jerry",
    director: "Tim Story",
    año: 2021,
    sinopsis: "Tom y Jerry, los célebres personajes de dibujos animados, se ven envueltos en un conflicto cómico mientras intentan sobrevivir en el mundo moderno.",
    valoracion: 5.3,
    imagen: "img/tomyjerry.jpg"
  },
  {
    titulo: "V de Vendetta",
    director: "James McTeigue",
    año: 2005,
    sinopsis: "En un futuro distópico, un hombre enmascarado conocido como V lucha contra un régimen totalitario, mientras busca vengarse de quienes lo torturaron.",
    valoracion: 8.2,
    imagen: "img/vendetta.jpg"
  },
  {
    titulo: "Vértigo",
    director: "Alfred Hitchcock",
    año: 1958,
    sinopsis: "Un detective retirado sufre de acrofobia mientras investiga el extraño comportamiento de la esposa de un hombre que ha sido secuestrada.",
    valoracion: 8.3,
    imagen: "img/vertigo.jpg"
  },
  {
    titulo: "Yesterday",
    director: "Danny Boyle",
    año: 2019,
    sinopsis: "Un hombre despierta en un mundo en el que los Beatles nunca existieron, y decide hacerse pasar por su creador mientras vive las consecuencias de su éxito.",
    valoracion: 6.8,
    imagen: "img/yesterday.jpg"
  },
  {
    titulo: "Yo, Robot",
    director: "Alex Proyas",
    año: 2004,
    sinopsis: "En un futuro en el que los robots son parte del día a día, un detective investiga el posible asesinato de un humano a manos de un robot.",
    valoracion: 7.1, 
    imagen:"img/yorobot.jpg"
  },
  {
    titulo: "Zathura",
    director: "Jon Favreau",
    año: 2005,
    sinopsis: "Dos hermanos encuentran un misterioso juego de mesa que los transporta al espacio exterior, donde deben enfrentarse a desafíos para regresar a casa.",
    valoracion: 6.2,
    imagen: "img/zathura.jpg" 
  },
  {
    titulo: "Zootropolis",
    director: "Byron Howard, Rich Moore",
    año: 2016,
    sinopsis: "En una ciudad habitada por animales, una coneja policía y un zorro estafador se unen para resolver un misterio relacionado con la desaparición de varios animales.",
    valoracion: 8.0,
    imagen: "img/zootropolis.jpg"
  }
];

// Div contenedor
const contenedor = document.createElement("div");
contenedor.className ="contenedor";
document.body.appendChild(contenedor);

// Div titulo
const titulo = document.createElement("a");
titulo.className = "titulo";
titulo.setAttribute("href", "index.html");
titulo.textContent = "CATÁLOGO DE PELÍCULAS";
contenedor.appendChild(titulo);

// Div con el abecedario
const letras = document.createElement("div");
letras.className = "letras";
for(let i = 0; i < abecedario.length; i++)
    {
        const letra = document.createElement("div");
        letra.className = "letra";
        letra.id = abecedario[i];
        letra.textContent = abecedario[i];
        letras.appendChild(letra);

        letra.addEventListener("click", function() {
          // Eliminar la clase de color de la letra seleccionada
          const letrasSeleccionadas = document.querySelectorAll(".letraSeleccionada");
          letrasSeleccionadas.forEach(function(letrasSeleccionada) 
          {
            letrasSeleccionada.classList.remove("letraSeleccionada");
          });
        
          // Añadir la clase de color activo a la letra seleccionada
          letra.classList.add("letraSeleccionada");
        
          if (letra.id === "K" || letra.id === "Q" || letra.id === "W" || letra.id === "X" || letra.id === "Ñ" || letra.id === "U") {
            noHayFotos();
          } else {
            cambiarFotos(letra.id);
          }
        });
    }
contenedor.appendChild(letras);

// Div con las fotos del inicio
const fotosPrincipales = document.createElement("div");
fotosPrincipales.className = "fotosPrincipales";
for(let i = 0; i < fotosInicio.length; i++)
    {
        const foto1 = document.createElement("img");
        foto1.className = "foto" + i;
        foto1.id= "foto1" + i;
        foto1.setAttribute("src", fotosInicio[i]);
        fotosPrincipales.appendChild(foto1);
    }
contenedor.appendChild(fotosPrincipales);

// Div pie
const piePagina = document.createElement("div");
piePagina.className = "piePagina";
    const pie1 = document.createElement("div");
    pie1.className = "pie";
    pie1.textContent = "Términos y Condiciones";
    const pie2 = document.createElement("div");
    pie2.className = "pie";
    pie2.textContent = "Preguntas Frecuentes";
    const pie3 = document.createElement("div");
    pie3.className = "pie";
    pie3.textContent = "Cuenta";
piePagina.appendChild(pie1);
piePagina.appendChild(pie2);
piePagina.appendChild(pie3);
contenedor.appendChild(piePagina);


// Función para cambiar fotos según la letra seleccionada
function cambiarFotos(letraId) 
{
    // Eliminar todas las fotos existentes
    while (fotosPrincipales.firstChild) 
    {
        fotosPrincipales.removeChild(fotosPrincipales.firstChild);
    }

    for (let j = 0; j < peliculas.length; j++) 
    {

        // Comprobar si el título de la película comienza con la letra seleccionada
        if (peliculas[j].titulo[0].toUpperCase() === letraId) 
        {
          
            // Crear un contenedor para la foto y la descripción
            const contenedorPelicula = document.createElement("div");
            contenedorPelicula.className = "contenedorPelicula";

            // Crear la foto de la película
            const foto = document.createElement("img");
            foto.setAttribute("src", peliculas[j].imagen);
            foto.className = "fotoPelis";

            // Div para la descripción, que se muestra sobre la foto
            const descripcionDiv = document.createElement("div");
            descripcionDiv.className = "descripcion";
            descripcionDiv.style.display = "none"; // Ocultar al inicio

            const tituloPeli = document.createElement("p");
            tituloPeli.className = "tituloPeli";
            tituloPeli.textContent = peliculas[j].titulo;
            descripcionDiv.appendChild(tituloPeli);

            const divDirector = document.createElement("div");
            divDirector.className = "divDirector";
            const directorPeli = document.createElement("p");
            directorPeli.className = "directorPeli";
            directorPeli.textContent = "Director: " + peliculas[j].director;
            divDirector.appendChild(directorPeli);
            descripcionDiv.appendChild(divDirector);

            const divAno = document.createElement("div");
            divAno.className = "divAno";
            const anoPeli = document.createElement("p");
            anoPeli.className = "anoPeli";
            anoPeli.textContent = "Año: " + peliculas[j].ano;
            divAno.appendChild(anoPeli);
            descripcionDiv.appendChild(divAno);

            const divSinopsis = document.createElement("div");
            divSinopsis.className = "divSinopsis";
            const sinopsisPeli = document.createElement("p");
            sinopsisPeli.className = "sinopsisPeli";
            sinopsisPeli.textContent = "Sinopsis: " + peliculas[j].sinopsis;
            divSinopsis.appendChild(sinopsisPeli);
            descripcionDiv.appendChild(divSinopsis);

            const divValoracion = document.createElement("div");
            divValoracion.className = "divValoracion";
            const valoracionPeli = document.createElement("p");
            valoracionPeli.className = "valoracionPeli";
            valoracionPeli.textContent = "Valoración: "+  peliculas[j].valoracion;
            divValoracion.appendChild(valoracionPeli);
            descripcionDiv.appendChild(divValoracion);

            // Agregar la foto y la descripción al contenedor de la película
            contenedorPelicula.appendChild(foto);
            contenedorPelicula.appendChild(descripcionDiv);

            // Agregar eventos para mostrar y ocultar la descripción
            foto.addEventListener("mouseover", function () {
                descripcionDiv.style.display = "block"; // Mostrar la descripción
            });
            foto.addEventListener("mouseout", function () {
                descripcionDiv.style.display = "none"; // Ocultar la descripción
            });

            // Agregar el contenedor de la película al contenedor principal de fotos
            fotosPrincipales.appendChild(contenedorPelicula);
        }
    }

}

function noHayFotos()
{
  while (fotosPrincipales.firstChild) 
    {
        fotosPrincipales.removeChild(fotosPrincipales.firstChild);
    }
  const sinFotos = document.createElement("p");
  sinFotos.className = "sinFotos";
  sinFotos.textContent = "Lo sentimos, no hay contenido de películas en la letra seleccionada. Por favor, selecciona otra letra."
  fotosPrincipales.appendChild(sinFotos);
}