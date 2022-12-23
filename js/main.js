
const init = async () => {
  let pokeArray = [];
  const myDiv$$ = document.querySelector(".pokedex"); // div dónde pintamos los pokemnons
  const btn2 = document.querySelector("#btn2"); // cambiar imagen de las cartas

  let arrayOriginal = await GetAllPokemons(); // tiene que usar promiseAll para que termine.
  pokeArray = [...arrayOriginal];

  // le pasamos el array y el div donde pintarlo
  // y el botón con la imagen a mostrar A o B
  printAllPokemons(pokeArray, myDiv$$, btn2);

  addEvents(pokeArray,arrayOriginal,myDiv$$,btn2); // carga los botones
  
};

init();
