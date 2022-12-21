const pokeInfo={
Nombre: "En negrita, indica el nombre de la carta de Pokémon.",
HitPoints: "Es la cantidad de vida de un Pokémon, no su fuerza. Indica cuanto puede aguantar un Pokémon.",
Ilustracion: "La imágen del Pokémon.",
TipoPokemon:"La bola al lado de la vida es un simbolo que indica cual es el tipo de Pokémon. Puede ser Oscuro, Psíquico, Metal, Agua, Fuego, Eléctrico, Planta, Incoloro o Lucha.",
Evolucion: "Un pequeño Pokémon en la parte superior derecha de la carta. Indica que Pokémon precede en la linea evolutiva a este Pokémon, o si es un Pokémon BASICO.",
Ataque: "Los ataques de los Pokémon, indica cuantas cartas de energia necesita un Pokémon para realizar este ataque, su nombre (que suele estar basado en los que el pokemon realiza en el videojuego) y el efecto que causará en su rival.",
DebilidadResistencia: "En la parte inferior de la cara podemos ver la Debilidad y Resistencia de este Pokémon, indicada con simbolos como el tipo de Pokémon. El Pokemon tendra ventaja sobre unos tipos y desventaja frente a otros.",
CosteRetirada: "El numero de bolas estrella bajo el epígrafe retreat o retirada indica cuanto le cuesta al Pokémon escapar del combate.",
SimboloRarezaNumeroExpansion: "Estos tres elementos no tienen efecto en el juego de cartas, pero son LA CLAVE para identificar las cartas Pokémon, por lo que les dedidaremos la próxima sección.",
}

function zeroFill( number, width )
{
  width -= number.toString().length;
  if ( width > 0 )
  {
    return new Array( width + (/\./.test( number ) ? 2 : 1) ).join( '0' ) + number;
  }
  return number + ""; // siempre devuelve tipo cadena
}

const capi=(word)=>{
  return word.charAt(0).toUpperCase()+word.slice(1);
}

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

const cambiaResolucionUno = (index) => {       
    miImg$$ = document.getElementById(index+1);
    if(!altaRes){
      miImg$$.src = prArray[index].sprites.alta;  
    }else{
      miImg$$.src = prArray[index].sprites.other.dream_world.front_default;  
    }    
    
}


