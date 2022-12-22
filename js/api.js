// llamada a fetch para traer los datos de un pokemon por número
const getPokemon = async (numero)=> {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${numero}`);
  const responseJson = await response.json();
  return responseJson;  
}

// función con bucle de 151 posiciones para cargar cada pokemon.
const GetAllPokemons = async () => {
  let  ArrayPromesas=[]; // definimos un array de promesas para esperar a que estén todas resueltas.
  console.log('GetAllPokemons')
  for (let i = 1; i <= 151; i++) {
    let pokemon = await getPokemon(i);
    console.log('Get un pokemons')
    ArrayPromesas.push(pokemon);  
  }  
  return await Promise.all(ArrayPromesas);
}

// limpiar el div
const cleanDiv=(div)=>{
  div.innerHTML='';
}

// función que pinta todos los pokemons 
const printAllPokemons = (pokeArray,myDiv$$,imagen) => {  
  for (let j = 0; j < pokeArray.length ; j++) {         
    const card$$ = newCard(j) // vamos creando divs tipo card y en cada div imprimimos un pokemon.
    myDiv$$.appendChild(card$$); // añadimos la carta al contenedor
    printPokemon(pokeArray,j,card$$,imagen);   // función que pinta el pokemon j en un div y con imagen A o B
  }
};

// crea una carta pokemon.
const newCard = (index) =>{  
  const card$$ = document.createElement("div");
  // asigna la clase pokecard
  card$$.className = "pokeCard";
  card$$.onclick =() => masDatos(index);   
  return card$$;  
}

// función que pinta un popkemon
const printPokemon = (pokeArray,j,card$$,imagen) => {
  pokemon = pokeArray[j];
  // añade imagen. depende de la resolución se muestra una url u otra
  const pokeImg$$ = document.createElement("img");
  pokeImg$$.className = "pokeImg";
  pokeImg$$.id = j;
  if (imagen ==='imagen A') {
    pokeImg$$.src = pokemon.sprites.front_default;
  } else {
    pokeImg$$.src = pokemon.sprites.other.dream_world.front_default;
  }
  card$$.appendChild(pokeImg$$);
  // añade el nombre
  const pokeId$$ = document.createElement("h5");
  pokeId$$.textContent = "N.º" + zeroFill(pokemon.id, 3);
  card$$.appendChild(pokeId$$);
  const pokeName$$ = document.createElement("h4");
  pokeName$$.textContent = pokemon.name;
  card$$.appendChild(pokeName$$);
  const pokePie$$ = document.createElement("div");

  // añade el pie para poner el/los tipos de pokemon
  pokePie$$.className = "cardPie";
  card$$.appendChild(pokePie$$);


  for (const type of pokemon.types) {    
    const pokeSlot1$$ = document.createElement("div");  
    pokeSlot1$$.classList.add("cardSlot");
    pokeSlot1$$.classList.add(type.type.name);
    pokeSlot1$$.textContent = type.type.name; // poner el tipo
    pokePie$$.appendChild(pokeSlot1$$);
  }
};



// función que cierra pop up con más información del pokemon pulsado
const cerrarPopUp=()=>{    
  popUp.className="PopInvisible" // sustituir por classlist.add
}

const abrirPopUp=()=>{
  popUp.className="PopVisible"
}  


// función que muestra el pop up con más información del pokemon pulsado
const masDatos = (array,index) =>{  
pokemon = array[index];  
contenido='<div>'  
contenido += "Nombre: "+pokemon.name+"<br><br>";
contenido += "Abilities: "+pokemon.abilities[0].ability.name+"<br><br>";
contenido += "base_experience: "+pokemon.base_experience+"<br><br>";
contenido += "height: "+pokemon.height+"<br><br>";
contenido += "weight: "+pokemon.weight+"<br><br>";
contenido += "moves: "+pokemon.moves[0].move.name+"<br><br>";
contenido +='</div>'
popUp.innerHTML = contenido;  
}


