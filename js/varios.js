// DEFINICIÓN DE EVENTOS EN BOTONES
const addEvents = () =>{
  const btn2 = document.querySelector('#btn2'); // cambiar resolución
  btn2.onclick = cambiaResolucion;  
  const btn4 = document.querySelector('#filtrar'); // filtrar
  btn4.onclick = filtrar;
  const btn1 = document.querySelector('#todos'); // quitar filtros
  btn1.onclick = todos;  
  const btn3 = document.querySelector('#sort'); // cambiar orden
  btn3.onclick = ordenar;
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

// dvuelve la primera en mayúsculas
// const capi=(word)=>{
//   return word.charAt(0).toUpperCase()+word.slice(1);
// }

// usa un interruptor para cambiar de url de imagen
const cambiaResolucion = () => {  
  altaRes = !altaRes;
  !altaRes ? document.querySelector('#btn2').textContent='Imagen A' : document.querySelector('#btn2').textContent='Imagen B';  
  for(i=0 ; i < prArray.length ; i++){
    miImg$$ = document.getElementById(i+1);
    if(altaRes){
      miImg$$.src = prArray[i].sprites.alta;  
    }else{
      miImg$$.src = prArray[i].sprites.other.dream_world.front_default;  
    }    
  }  
}

// cambia la imagen dentro de la carta.
const cambiaResolucionUno = (index) => {       
    miImg$$ = document.getElementById(index+1);
    if(!altaRes){
      miImg$$.src = prArray[index].sprites.alta;  
    }else{
      miImg$$.src = prArray[index].sprites.other.dream_world.front_default;  
    }    
    
}


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





