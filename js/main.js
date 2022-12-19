let actualPos=1;
let pokeArray = [];
let imgHigh=[];
let imgLow=[];
let altaRes = false;

const cargarMas = () => {
  actualPos = actualPos + 12;
 init(actualPos); 
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

const btn1 = document.querySelector('#btn1');
btn1.onclick = cargarMas;  

const btn2 = document.querySelector('#btn2');
btn2.onclick = cambiaResolucion;  

init(1);
