var Pokedex = require('pokedex'),
    pokedex = new Pokedex();
 
console.log( pokedex.pokemon('pikachu') );
console.log( pokedex.pokemon(89) );