//fetch  --> peticion --> nos devuelve una promesa
//then --> obtenemos response a esa promesa, esta response la necesitamos convertir en un objeto que entendamos --> RESPONSE.json() --> nueva promesa
//then --> resolvemos la nueva promesa y obtenemos un objeto en formato json

const iniPos=1;


let myArray = [];
fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then((response) => response.json())
    .then((responseJson) => {
        myArray = [...myArray, responseJson]
        console.log(myArray)
    })

const getPokemon = async (name) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const responseJson = await response.json();
  console.log(responseJson);
  myArray = [...myArray, responseJson];
};

const init = async () => {
  for(let i=iniPos;i<iniPos+11;i++){
    await getPokemon(i);  
  }

  console.log(myArray);
  for (const pokemon of myArray) {
    const myDiv$$ = document.querySelector(".pokedex");
    const elementList$$ = document.createElement("li");
    elementList$$.className="pokeCard"
    myDiv$$.appendChild(elementList$$);
    const pokeName$$ = document.createElement("h3");
    pokeName$$.textContent=pokemon.name;
    elementList$$.appendChild(pokeName$$);
    const pokeImg$$ = document.createElement("img");
    pokeImg$$.className="pokeImg";
    pokeImg$$.src=pokemon.sprites.front_default;
    elementList$$.appendChild(pokeImg$$);    
  }
};

init();
