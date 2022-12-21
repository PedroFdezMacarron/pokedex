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

!altaRes ? document.querySelector('#btn2').textContent='Alta resolución' : document.querySelector('#btn2').textContent='Baja resolución';

!ordenNum ? document.querySelector('#sort').textContent='Nº' : document.querySelector('#sort').textContent='A-Z';

const cambiaResolucion = () => {  
  altaRes = !altaRes;
  !altaRes ? document.querySelector('#btn2').textContent='Alta resolución' : document.querySelector('#btn2').textContent='Baja resolución';
  for(i=0 ; i < prArray.length ; i++){
    miImg$$ = document.getElementById(i+1);
    if(altaRes){
      miImg$$.src = prArray[i].sprites.alta;  
    }else{
      miImg$$.src = prArray[i].sprites.front_default;  
    }    
  }  
}


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
  myDiv$$.innerHTML='';   
  numElementos = prArray.length;
  prPokemons(1);
}

const todos = () =>{
  document.querySelector(".search").value='';
  filtrar();  
}

const mostrarMas =() =>{
  myDiv$$.innerHTML='';   
  numElementos += 12;
  prPokemons(1);
}

const ordenar=()=>{   
  ordenNum = !ordenNum;
  !ordenNum ? document.querySelector('#sort').textContent='Nº' : document.querySelector('#sort').textContent='A-Z';
  if(!ordenNum){
  pokeArray.sort(function (a, b) {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });
  } else{
    pokeArray.sort(function (a, b) {
      if (a.id > b.id) {
        return 1;
      }
      if (a.id < b.id) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });



  }
  prArray=[...pokeArray];
  filtrar();
  // myDiv$$.innerHTML='';   
  // numElementos = prArray.length;
  // prPokemons(1);

}

const btn2 = document.querySelector('#btn2');
btn2.onclick = cambiaResolucion;  

const btn1 = document.querySelector('#todos');
btn1.onclick = todos;  

const btn3 = document.querySelector('#sort');
btn3.onclick = ordenar;  

const btn4 = document.querySelector('#filtrar');
btn4.onclick = filtrar;  

cargarPokemons(1,12);





