// llamada a fetch para traer los datos de un pokemon por número
const getPokemon = async (numero)=> {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${numero}`);
  const responseJson = await response.json();
  return responseJson;  
}

// función con bucle de 151 posiciones para cargar cada pokemon.
const GetAllPokemons = async () => {
  let  ArrayPromesas=[]; // definimos un array de promesas para esperar a que estén todas resueltas.  
  for (let i = 1; i <= 151; i++) {
    let pokemon = await getPokemon(i);  
    ArrayPromesas.push(pokemon);  
  }  
  return Promise.all(ArrayPromesas);
}
