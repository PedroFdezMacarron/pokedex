// inicializa variables
let actualPos=1;
let pokeArray = [];
let prArray = [];
let imgHigh = [];
let imgLow =[];
let altaRes = true;
let ordenNum = true;
let numElementos = 151;
const myDiv$$ = document.querySelector(".pokedex");
const search = document.querySelector(".search").value;
const popUp = document.querySelector("#popUp1");
!altaRes ? document.querySelector('#btn2').textContent='Imagen A' : document.querySelector('#btn2').textContent='Imagen B';
!ordenNum ? document.querySelector('#sort').textContent='Nº' : document.querySelector('#sort').textContent='A-Z';

// carga inicial de todos los pokemons
cargarPokemons(1,12);



//
// FUNCIONES PRINCIPALES
//
//
// filtra usando el array auxiliar.
// usa el nombre y los 2 tipos para filtrar.
const filtrar = () =>{
  const search = document.querySelector(".search").value;
  if(search ===''){
    prArray=[...pokeArray];
  } else { 
      prArray = pokeArray.filter(
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
  // limpia el contenedor y luego pinta los pokemons
  myDiv$$.innerHTML='';   
  numElementos = prArray.length;
  prPokemons(1);
}

// quita filtro y muestra todos los pokemons
const todos = () =>{
  document.querySelector(".search").value='';
  filtrar();  
}

// para ordenar usamos .sort
// usa un interruptor. ordena por nombre o por número.
const ordenar=()=>{   
  ordenNum = !ordenNum;
  !ordenNum ? document.querySelector('#sort').textContent='Nº' : document.querySelector('#sort').textContent='A-Z';
  if(!ordenNum){
    prArray.sort ((a, b) => a.name > b.name ? 1 : a.name < b.name ? -1:0);    
  } else{
    prArray.sort((a, b)=> parseInt(a.id) - parseInt(b.id) );
  }
  myDiv$$.innerHTML='';  
  prPokemons(1); 
}

// DEFINICIÓN DE EVENTOS EN BOTONES
const btn2 = document.querySelector('#btn2'); // cambiar resolución
btn2.onclick = cambiaResolucion;  
const btn4 = document.querySelector('#filtrar'); // filtrar
btn4.onclick = filtrar;
const btn1 = document.querySelector('#todos'); // quitar filtros
btn1.onclick = todos;  
const btn3 = document.querySelector('#sort'); // cambiar orden
btn3.onclick = ordenar;
