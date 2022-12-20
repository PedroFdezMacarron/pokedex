let actualPos=1;
let pokeArray = [];
let imgHigh=[];
let imgLow=[];
let altaRes = false;

const cargarMas = () => {
  actualPos = actualPos + 12;
  init(actualPos,11); 
}

const cambiaResolucion = () => {
  altaRes = !altaRes;
  for(i=0;i<pokeArray.length;i++){
    miImg$$ = document.getElementById(i+1);    
    if(altaRes){
      miImg$$.src = imgHigh[i];  
    }else{
      miImg$$.src = imgLow[i];  
    }    
  }  
}

const cargarTodos = () =>{
  console.log("cargar todos",actualPos,150-actualPos-12)
  actualPos = actualPos + 12;
  init(actualPos,150-actualPos);   
}


const btn1 = document.querySelector('#btn1');
btn1.onclick = cargarMas;  

const btn2 = document.querySelector('#btn2');
btn2.onclick = cambiaResolucion;  

const btn3 = document.querySelector('#btn3');
btn3.onclick = cargarTodos;  

init(1,11);
