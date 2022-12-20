async function getPokemon(name) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const responseJson = await response.json();
    // console.log(responseJson);
    pokeArray = [...pokeArray, responseJson];
  }


const init = async (position,numElementos) => {
  
    for(let i=position;i<=position+numElementos;i++){
      await getPokemon(i);  
    }
  
    // console.log(pokeArray);
  
    let x=position;
    for (let j=(position-1);j< pokeArray.length;j++) {
      pokemon = pokeArray[j];
      const myDiv$$ = document.querySelector(".pokedex");
      const elementList$$ = document.createElement("li");
      elementList$$.className="pokeCard"
      myDiv$$.appendChild(elementList$$);
      
      let imagenBuena="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"+ zeroFill(x,3) +".png"
      x++
      imgHigh.push(imagenBuena)
      imgLow.push(pokemon.sprites.front_default)
      
      const pokeImg$$ = document.createElement("img");
      pokeImg$$.className="pokeImg";
      pokeImg$$.id=x-1
  
      if(altaRes){        
        pokeImg$$.src=imgHigh[j]
      }else{
        pokeImg$$.src = imgLow[j];  
      }    

      // pokeImg$$.src=pokemon.sprites.front_default;    
      elementList$$.appendChild(pokeImg$$);    

  
      const pokeId$$ = document.createElement("h5");
      pokeId$$.textContent="N.º"+zeroFill(pokemon.id,3);
      elementList$$.appendChild(pokeId$$);
  
      const pokeName$$ = document.createElement("h4");
      pokeName$$.textContent=pokemon.name;
      elementList$$.appendChild(pokeName$$);

      const pokePie$$ = document.createElement("div");
      pokePie$$.className='cardPie'
      elementList$$.appendChild(pokePie$$);

      const pokeSlot1$$ = document.createElement("div");
      pokeSlot1$$.className='cardSlot'+ pokemon.types[0].type.name ;
      pokeSlot1$$.textContent =pokemon.types[0].type.name ; // poner el tipo
      pokePie$$.appendChild(pokeSlot1$$);

      if(pokemon.types[1]){
        const pokeSlot2$$ = document.createElement("div");
        pokeSlot2$$.className='cardSlot'+ pokemon.types[0].type.name ;
        pokeSlot2$$.textContent =pokemon.types[1].type.name ; // poner el tipo
        pokePie$$.appendChild(pokeSlot2$$);
      }
        
  
    }
  };