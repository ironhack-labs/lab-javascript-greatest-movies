/* eslint no-restricted-globals: 'off' */



// Iteration 1: Ordering by year - Order by year, ascending (in growing order)



function orderByYear(array){
    const newArray = [...array];
    newArray.sort((a,b) => {
        if (a.year === b.year){
            if (a.title < b.title){
                return -1
            } else if (a.title > b.title){
                return 1
            } else {
                return 0
            }
        } else {
            return a.year - b.year
        }
    })
    return newArray
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(array){
    if (array.length === 0){
        return 0
    }
    const newArr = [...array];
    const filtro = newArr.filter(function(peli){
        return peli.director === "Steven Spielberg" && peli.genre.includes("Drama")
    }
    )
    return filtro.length;
}

howManyMovies(movies);

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array){
    const newArray = JSON.parse(JSON.stringify(array));
    const titulos = newArray.map(peli => peli.title);
    titulos.sort();
    return titulos.slice(0,20)
  } 
  
   orderAlphabetically(movies);

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(array){
    if (array.length === 0){ return 0};
    const newArray = JSON.parse(JSON.stringify(array));
    let nota = newArray.map(peli => peli.rate);
    nota = nota.filter(rates => rates > 0);
    const avg = nota.reduce((a, b) => a + b)/array.length;
    
    return Math.round(avg * 100)/100;
  } 

  ratesAverage(movies);

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array){
    if (array.length === 0){ return 0};
    const newArray = JSON.parse(JSON.stringify(array));
    let dramaMovies = newArray.filter(gener => gener.genre.includes("Drama"));
    if (dramaMovies.length === 0){ return 0 };
    let rates = dramaMovies.map(peli => peli.rate);
    rates = rates.filter(nota => nota > 0);
    const avg = rates.reduce((a, b) => a + b)/dramaMovies.length;
    
    return Math.round(avg * 100)/100;
  } 

  dramaMoviesRate(movies);

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes



// BONUS Iteration: Best yearly rate average - Best yearly rate average

