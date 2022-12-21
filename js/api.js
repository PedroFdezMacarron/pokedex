async function getPokemon(name) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const responseJson = await response.json();
  // pokeArray = [...pokeArray, responseJson];
  pokeArray.push(responseJson);
}

const cargarPokemons = async (position, numElementos) => {
  for (let i = actualPos; i <= actualPos + 150; i++) {
    await getPokemon(i);
  }
  prArray = [...pokeArray];
  numElementos = prArray.length;

  for (i = 0; i < prArray.length; i++) {
    prArray[i].sprites.alta =
      "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/" +
      zeroFill(i + 1, 3) +
      ".png";
  }
  // filtrar();
  prPokemons();
};

const prPokemons = () => {
  for (let j = 1; j <= numElementos; j++) {
    printPokemon(j);
  }
};

const printPokemon = (j) => {
  let posArray = j - 1;
  pokemon = prArray[posArray];
  const myDiv$$ = document.querySelector(".pokedex");
  const elementList$$ = document.createElement("div");
  elementList$$.className = "pokeCard";
  myDiv$$.appendChild(elementList$$);

  const pokeImg$$ = document.createElement("img");
  pokeImg$$.className = "pokeImg";
  pokeImg$$.id = j;
  if (altaRes) {
    pokeImg$$.src = pokemon.sprites.alta;
  } else {
    pokeImg$$.src = pokemon.sprites.front_default;
  }
  elementList$$.appendChild(pokeImg$$);
  const pokeId$$ = document.createElement("h5");
  pokeId$$.textContent = "N.º" + zeroFill(pokemon.id, 3);
  elementList$$.appendChild(pokeId$$);
  const pokeName$$ = document.createElement("h4");
  pokeName$$.textContent = capi(pokemon.name);
  elementList$$.appendChild(pokeName$$);
  const pokePie$$ = document.createElement("div");
  pokePie$$.className = "cardPie";
  elementList$$.appendChild(pokePie$$);
  const pokeSlot1$$ = document.createElement("div");
  pokeSlot1$$.classList.add("cardSlot");
  pokeSlot1$$.classList.add(pokemon.types[0].type.name);
  pokeSlot1$$.textContent = capi(pokemon.types[0].type.name); // poner el tipo
  pokePie$$.appendChild(pokeSlot1$$);
  if (pokemon.types[1]) {
    const pokeSlot2$$ = document.createElement("div");
    pokeSlot2$$.classList.add("cardSlot");
    pokeSlot2$$.classList.add(pokemon.types[1].type.name);
    pokeSlot2$$.textContent = capi(pokemon.types[1].type.name); // poner el tipo
    pokePie$$.appendChild(pokeSlot2$$);
  }
};
