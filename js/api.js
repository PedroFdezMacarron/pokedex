// llamada a fetch para traer los datos de un pokemon por número
getPokemon = async (numero)=> {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${numero}`);
  const responseJson = await response.json();  
  pokeArray.push(responseJson);
}

// función con bucle de 151 posiciones para cargar cada pokemon.
const cargarPokemons = async (position, numElementos) => {
  for (let i = actualPos; i <= actualPos + 150; i++) {
    await getPokemon(i);
  }
  // creamos otro arra que es el que se muestra, filtra, ordena, etc.
  prArray = [...pokeArray];

  // variable para en un futuro controlar cuantos pokemons mostrar
  numElementos = prArray.length;

  // cargamos en el array una propiedad con las imágenes en mejor resolución.
  for (i = 0; i < prArray.length; i++) {
    prArray[i].sprites.alta ="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"+zeroFill(i + 1, 3)+".png";
  }
  // pintar todos los pokemons 
  prPokemons();
};

// función que pinta todos los pokemons 
const prPokemons = () => {
  for (let j = 1; j <= numElementos; j++) {
    // función que pinta un popkemon
    printPokemon(j);
  }
};

// función que cierra pop up con más información del pokemon pulsado
const cerrarPopUp=()=>{    
    popUp.className="PopInvisible"
    popUp.style.display = "none";
  }

const abrirPopUp=()=>{
    popUp.className="PopVisible"
    popUp.style.display = "flex";  
}  


// función que muestra el pop up con más información del pokemon pulsado
const masDatos = (index) =>{
  console.log("index",index);
  pokemon = prArray[index];  
  contenido='<div>'  // limpia contenido    
  contenido += "Nombre: "+capi(pokemon.name)+"<br><br>";
  contenido += "Abilities: "+pokemon.abilities[0].ability.name+"<br><br>";
  contenido += "base_experience: "+pokemon.base_experience+"<br><br>";
  contenido += "height: "+pokemon.height+"<br><br>";
  contenido += "weight: "+pokemon.weight+"<br><br>";
  contenido += "moves: "+pokemon.moves[0].move.name+"<br><br>";

  

  contenido +='</div>'

  popUp.innerHTML = contenido;
  miboton = document.createElement('button');
  miboton.textContent="cerrar";
  miboton.onclick = cerrarPopUp;
  popUp.appendChild(miboton);
  abrirPopUp();
}

// función que pinta un popkemon
const printPokemon = (j) => {

  // todo el tema de pos era para cargar de 12 en 12
  let posArray = j - 1;
  pokemon = prArray[posArray];

  // selecciona el contenedor y crea los div
  const myDiv$$ = document.querySelector(".pokedex");
  const elementList$$ = document.createElement("div");

  // asigna la clase pokecard
  elementList$$.className = "pokeCard";
  elementList$$.onclick =() => masDatos(j-1);   
  myDiv$$.appendChild(elementList$$);

  // añade imagen. depende de la resolución se muestra una url u otra
  const pokeImg$$ = document.createElement("img");
  pokeImg$$.className = "pokeImg";
  pokeImg$$.id = j;
  if (altaRes) {
    pokeImg$$.src = pokemon.sprites.alta;
  } else {
    pokeImg$$.src = pokemon.sprites.other.dream_world.front_default;
  }
  elementList$$.appendChild(pokeImg$$);

  



  // añade el nombre
  const pokeId$$ = document.createElement("h5");
  pokeId$$.textContent = "N.º" + zeroFill(pokemon.id, 3);
  elementList$$.appendChild(pokeId$$);
  const pokeName$$ = document.createElement("h4");
  pokeName$$.textContent = capi(pokemon.name);
  elementList$$.appendChild(pokeName$$);
  const pokePie$$ = document.createElement("div");

  // añade el pie para poner el/los tipos de pokemon
  pokePie$$.className = "cardPie";
  elementList$$.appendChild(pokePie$$);
  const pokeSlot1$$ = document.createElement("div");
  pokeSlot1$$.classList.add("cardSlot");
  pokeSlot1$$.classList.add(pokemon.types[0].type.name);
  pokeSlot1$$.textContent = capi(pokemon.types[0].type.name); // poner el tipo
  pokePie$$.appendChild(pokeSlot1$$);

  // si tiene el segundo tipo lo pinta.
  if (pokemon.types[1]) {
    const pokeSlot2$$ = document.createElement("div");
    pokeSlot2$$.classList.add("cardSlot");
    pokeSlot2$$.classList.add(pokemon.types[1].type.name);
    pokeSlot2$$.textContent = capi(pokemon.types[1].type.name); // poner el tipo
    pokePie$$.appendChild(pokeSlot2$$);
  }
};



