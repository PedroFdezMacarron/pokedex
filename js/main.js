// inicializa variables
// let actualPos=1;
// let pokeArray = [];
// let prArray = [];
// let imgHigh = [];
// let imgLow =[];
// let altaRes = true;
// let ordenNum = true;
// let numElementos = 151;
// const myDiv$$ = document.querySelector(".pokedex");
// const search = document.querySelector(".search").value;
// const popUp = document.querySelector("#popUp1");
// !altaRes ? document.querySelector('#btn2').textContent='Imagen A' : document.querySelector('#btn2').textContent='Imagen B';
// !ordenNum ? document.querySelector('#sort').textContent='Nº' : document.querySelector('#sort').textContent='A-Z';
// carga inicial de todos los pokemons


addEvents();  // carga los botones

const init = async () => {  
  let myDiv$$ = document.querySelector(".pokedex");  // div dónde pintamos los pokemnons  
  let pokeArray =[];
  pokeArray = await GetAllPokemons(); // tiene que usar promiseAll para que termine.
  console.log(pokeArray[1]);
  cleanDiv(myDiv$$); // limpìar el DIV
  printAllPokemons(pokeArray, myDiv$$, 'imagen A');   // le pasamos el array a pintar, el div y la imagen a cargar.  
}

init();