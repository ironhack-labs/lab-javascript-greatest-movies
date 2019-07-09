const moviesCopy = [...movies];

//----------- PRIMERA ITERACIÓN----------------


function turnHoursToMinutes(originalArray) {
  let durArr = originalArray.map(elm => {
    const arrTimes = elm.duration.split(" ");

    let durInMinutes = 0;
    durInMinutes = parseInt(arrTimes[0]) * 60;

    if (elm.lenght > 2) {
      let minutes = parseInt(arrTimes[1]);
      durInMinutes += minutes;
    }

    const output = { ...elm, duration: durInMinutes };
    return output;
  });

  return durArr;
}
//console.log(turnHoursToMinutes(moviesCopy));

// ---------------SEGUNDA ITERACIÓN -----------------


// No entiendo esto: en teoría si miras el array movie, el dato de rate es una string pero sin embargo
// si uso un parseFloat a las string me da fallo y Lucía me ha enseñado que si trato el dato como cadena sí que sale 
// y de hecho tal y como está los test se pasan pero la consola retorna un NaN con el console.log  y sin él  lo que 
// te sale es que originalArray.reduce no es una función.

// Y también he intentado el método que tengo comentado en la función y no me sale y Lucía me ha mostrado un métodomás rudimentario de la cuenta de la vieja, pero que funciona 

function ratesAverage (originalArray)  {

let sumRates = originalArray.reduce((acc,elm)=>{return acc + elm.rate},0)
return Math.round(sumRates*100/originalArray.length)/100
//let average = parseFloat((sumRates / originalArray.lenght).toFixed(2))
//console.log(typeof(average))
//return average
}



//----------- TERCERA ITERACIÓN-----------------

// Si hago un console.log(findDrama) me sale el array, pero evidentemente al usar la función dramaMoviesRate de la
// iteración anterior que parece estar mal, me da error.

let findDrama
function dramaMoviesRate (arr) {
  let dramaMoviesRate = arr.filter(elm => {
    findDrama = elm.genre.find(function(elm) {
      return elm === 'Drama'
    })
    return findDrama
  })

  return ratesAverage(findDrama)
  
}
console.log(dramaMoviesRate(moviesCopy))


/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes

// Get the average of all rates with 2 decimals

// Get the average of Drama Movies

// Order by time duration, in growing order

// How many movies did STEVEN SPIELBERG

// Order by title and print the first 20 titles

// Best yearly rate average
