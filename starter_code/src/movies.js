
/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array){
    const newArr = [...array];
    newArr.sort((a,b) => {
      if(a.year == b.year) {
        if(a.title > b.title){
          return 1;
        } else if (a.title < b.title){
          return -1;
        } else {
          return 0;
        };
      } else {
        return a.year - b.year;
      };
    });
    return newArr;
  }

  console.log(orderByYear(movies));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(array) {
  const newArray = [...array];
  const filtro = newArray.filter(function(peli){
    return peli.director === "Steven Spielberg" && peli.genre.includes("Drama")
  });
  return filtro.length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array) {
    const newArr = JSON.parse(JSON.stringify(array));
    const titulos = newArr.map(peli => peli.title);
    titulos.sort();
    if (titulos.length <= 20) {
    return titulos;
    };
    return titulos.slice(0,20);
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(array) {
  if (array.length === 0) {return 0;}
  let newArray = JSON.parse(JSON.stringify(array));
  let rates = newArray.map(peli => peli.rate);
  rates = rates.filter(nota => nota > 0);
  let avg = rates.reduce((a,b) => a + b)/array.length;
  
  return Math.round(avg * 100) / 100;
}

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array) {
  let newArray = JSON.parse(JSON.stringify(array));
  let dramaMovies = newArray.filter(peli => peli.genre.includes("Drama"));
  if (dramaMovies.length === 0) {return 0;}
  let rates = dramaMovies.map(peli => peli.rate);
  rates = rates.filter(nota => nota > 0);
  let avg = rates.reduce((a,b) => a + b)/dramaMovies.length;
  
  return Math.round(avg * 100) / 100;
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
