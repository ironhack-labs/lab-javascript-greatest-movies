// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors (moviesArray) {
    return moviesArray.map(function(element) {
        return element.director;
    });
}

console.log(getAllDirectors(movies));

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArray) {
    const stevenArray = moviesArray.filter(function(movie) {
        return movie.director === "Steven Spielberg" && movie.genre.includes("Drama");
    }),
    return stevenArray.length;
};

console.log(howManyMovies(movies));

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

//const arrAvg = arr => arr.reduce((a,b) => a + b, 0) / arr.length

function ratesAverage (moviesArray) {
    if(moviesArray.length === 0) {
        return 0;
    }
    const averageRate = moviesArray.reduce(function(acc, element) {
        if (!element.rate) {
            return acc + 0;
        }
        return acc + element.rate;
    }, 0) / moviesArray.length;
    
   
    return +averageRate.toFixed(2);

};

console.log(ratesAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = moviesArray => {
    if(moviesArray.length === 0) {
        return 0;
    }
  const dramaAvg = moviesArray.reduce((acc, movie) => {
    if (movie.genre.includes('Drama')) {
        acc.ratesSum +=  movie.rate;
        acc.dramaMoviesQuantity += 1;

        return acc;
    }

    return acc;
  }, {ratesSum: 0, dramaMoviesQuantity: 0 }); 
  
  if (dramaAvg.dramaMoviesQuantity === 0) {
      return 0;
  }

  const averageDramaMovies = (dramaAvg.ratesSum / dramaAvg.dramaMoviesQuantity).toFixed(2);
  
  return +averageDramaMovies;
};

dramaMoviesRate(movies);

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

//classificar os filmes em ordem crescente por ano de lançamento;
//If two movies have the same year, order them in alphabetical order by their title;

function orderByYear (moviesArray) {

    const moviesArrayCopy = JSON.parse(JSON.stringify(moviesArray));

    const newSortedArray = moviesArrayCopy.sort(function(value1, value2){
        if (value1.year < value2.year) {
            return -1;
        } 

        else if (value2.year > value2.year) {
            return 1;
        } 

        else if (value1.year === value2.year) {
            return value1.title.localeCompare(value2.title);
        }
        
    });
    return newSortedArray;
}

console.log(orderByYear(movies));


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

//sort them alphabetically using the title key
//we only need to print the title of the first 20
//returns an array of first 20 titles, alphabetically ordered

function orderAlphabetically(moviesArray) {

    const moviesArrayCopy = JSON.parse(JSON.stringify(moviesArray));

    const titlesArray = moviesArrayCopy.map(function(element) {
        return element.title;
    });

    const firstTwentyMoviesArray = titlesArray.sort(function(element1, element2){

        return element1.localeCompare(element2);
    });

    return firstTwentyMoviesArray.slice(0,20);

}

console.log(firstTwentyMoviesArray(movies));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
//retornar um array novo!
//duracao do filme precisa ser um numero
//
const turnHoursToMinutes = moviesArray => {
    const newArrayHourstoMinutes = moviesArray.map((element) => {
        element.duration
    })
}


// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
