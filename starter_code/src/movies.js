/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 

 
// Iteration 2: Drama movies - Get the average of Drama Movies


// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)


// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct


// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average

//Calcular a média e arredondar duas casas decimais
/*
let movies = [
    {
      title: 'The Shawshank Redemption',
      year: '1994',
      director: 'Frank Darabont',
      duration: '2h 22min',
      genre: ['Crime', 'Drama'],
      rate: '9.3'
    },
    {
      title: 'The Godfather',
      year: '1972',
      director: 'Francis Ford Coppola',
      duration: '2h 55min',
      genre: ['Crime', 'Drama'],
      rate: '9.2'
    },
    {
      title: 'The Godfather: Part II',
      year: '1974',
      director: 'Francis Ford Coppola',
      duration: '3h 22min',
      genre: ['Crime', 'Drama'],
      rate: '9.0'
    }
]
*/
function ratesAverage(array) {
    let averageRate = array.reduce((acc, item) => {
        return acc + parseFloat(item.rate)
    },0)

    return parseFloat((averageRate / array.length).toFixed(2));
}

function dramaMoviesRate(array) {
    
    let filteredArray = array.filter(function(movie) {
        return movie.genre.includes('Drama')});
     
    let dramaRate = filteredArray.reduce((acc, item) => {
        return acc + parseFloat(item.rate)
    }, 0)
    return parseFloat((dramaRate / array.length).toFixed(2));

};

/* function orderByDuration (array) {
  let arrayOrderedByDuration = [""];
  array.sort(function (a, b) {
    a.duration - b.duration;
    }) 
} */
function orderByDuration (array) {
    const orderingByDuration = [""];
    array.sort(function(a, b) {
    orderingByDuration.push(a.duration - b.duration);
      if(a.duration === b.duration) {
        array.sort(function(a, b) {
         orderingByDuration.push(a.title - b.title);
            //localecompare para ordenar por ordem alfabética
      
        })
    }
  })


  return orderingByDuration;
  
}

 
console.log(orderingByDuration);
