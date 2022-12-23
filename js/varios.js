// DEFINICIÓN DE EVENTOS EN BOTONES
const addEvents = (pokeArray,arrayOriginal,myDiv$$,btn2) =>{

  const filtra = (pokeArray) => {
    pokeArray = [...arrayOriginal];
    pokeArray = filtrar(pokeArray); 
    printAllPokemons(pokeArray, myDiv$$, btn2);     
    console.log(pokeArray.length);
    return pokeArray
  };

  const btn4 = document.querySelector("#filtrar"); // filtrar  
  btn4.addEventListener("click",()=>filtra(pokeArray));

  const changeImages = (pokeArray) => {    
    pokeArray = filtra(pokeArray);
    pokeArray = ordenar(pokeArray,btn3);    
    changeImage(pokeArray, btn2);
  }       
  btn2.addEventListener("click",()=>changeImages(pokeArray,btn2));

  const sortPokemonList = (pokeArray,btn) => {
    pokeArray = filtra(pokeArray);
    let btnTxt = btn.textContent;    
    btnTxt ==='A-Z' ? btnTxt='Nº' : btnTxt = 'A-Z';
    btn.textContent = btnTxt;
    pokeArray = ordenar(pokeArray,btn3);
    printAllPokemons(pokeArray, myDiv$$, btn2);     
    console.log(pokeArray.length);
    return pokeArray;
  };
  
  const btn3 = document.querySelector('#sort'); // cambiar orden
  btn3.addEventListener("click",()=>sortPokemonList(pokeArray,btn3));

 

  
  // quita filtro y muestra todos los pokemons
  const todos = (pokeArray, myDiv$$, btn2) => {
    const search = document.querySelector(".search").value='';
    filtra(pokeArray);
    pokeArray = ordenar(pokeArray,btn3);
    printAllPokemons(pokeArray, myDiv$$, btn2);  
  };
  
  const btn1 = document.querySelector("#todos"); // quitar filtros
  btn1.onclick = () => todos(pokeArray, myDiv$$, btn2);

}





// devuelve un número completado a ceros.
function zeroFill( number, width )
{
  width -= number.toString().length;
  if ( width > 0 )
  {
    return new Array( width + (/\./.test( number ) ? 2 : 1) ).join( '0' ) + number;
  }
  return number + ""; // siempre devuelve tipo cadena
}

// usa un interruptor para cambiar de url de imagen
const changeImage = (array, button$$) => {
  let imagen = button$$.textContent;
  imagen==='A' ? imagen='B' : imagen = 'A';
  button$$.textContent = imagen;
  console.log(array.length);
  for(i=0 ; i < array.length ; i++){
    const pokemon = array[i];
    miImg$$ = document.getElementById('img__'+i);
    if (imagen ==='A') {
      miImg$$.src = pokemon.sprites.front_default;
    } else {
      miImg$$.src = pokemon.sprites.other.dream_world.front_default;
    }    
  }  
}


//
// FUNCIONES PRINCIPALES
//
//

// filtra usando el array auxiliar y la función filter
// usa el .name y .types  para filtrar.
const filtrar = (array) =>{
  let filteredArray = [];  
  const search = document.querySelector(".search").value;
  if(search ===''){
    filteredArray = [...array];
  } else { 
    filteredArray = array.filter(
          (element) => {
            if(element.name.toLowerCase().includes(search.toLowerCase())){
                return element;
              }
            if(element.types[0].type.name.toLowerCase().includes(search.toLowerCase())){
              return element;
              }
            if(element.types[1]?.type.name.toLowerCase().includes(search.toLowerCase())){
              return element;
              }
      });
  } 
  return filteredArray;
}

// para ordenar usamos .sort
// usa un interruptor. ordena por nombre o por número.
const ordenar=(pokeArray,btn)=>{   
  btnTxt = btn.textContent;
  if(btnTxt==='Nº'){
      pokeArray.sort ((a, b) => a.name > b.name ? 1 : a.name < b.name ? -1:0);
  }else{
      pokeArray.sort((a, b)=> parseInt(a.id) - parseInt(b.id) );      
  } 
  return pokeArray;  
}


// limpiar el div
const cleanDiv=(div)=>{
  div.innerHTML='';
}

// función que pinta todos los pokemons 
const printAllPokemons = (pokeArray,myDiv$$,btn2) => {
  // limpia el contenedor y luego pinta los pokemons  
  cleanDiv(myDiv$$);  
  const imagen = btn2.textContent;
  for (let j = 0; j < pokeArray.length ; j++) {         
    const card$$ = newCard(j) // vamos creando divs tipo card y en cada div imprimimos un pokemon.
    myDiv$$.appendChild(card$$); // añadimos la carta al contenedor
    printPokemon(pokeArray,j,card$$,imagen);   // función que pinta el pokemon j en un div y con imagen A o B
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
  pokeImg$$.id = 'img__'+j;
  if (imagen ==='A') {
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




