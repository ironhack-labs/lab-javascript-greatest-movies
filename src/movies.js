// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies) {
    let allDirectors = movies.map(movie => movie.director);
    return allDirectors;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
    return movies.filter(i => i.genre.includes("Drama") && i.director === "Steven Spielberg").length;
  } 

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

const allRates = movies.map(item => item.rate)

function ratesAverage(allRates) {
    const sum = allRates.reduce((totalRate, singleRate) => totalRate + singleRate)
    return +(sum / allRates.length).toFixed(2);
    console.log(sum)
  }
  
  ratesAverage(allRates)

// let allMovieRatings = movies.map(item => item.rate)

// function ratesAverage(allMovieRatings){
//   const average = allMovieRatings.reduce((totalRate, singleRate) => totalRate + singleRate)
//   return (average / allMovieRatings.length).toFixed(2);
//         console.log(average)
// }



// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
    const dramaArr = movies.filter(films => films.genre.includes("Drama"))  
    const dramaRates = dramaArr.map(films => films.rate);

    console.log(dramaRates);

    const sum = dramaRates.reduce((totalRate, singleRate) => totalRate + singleRate)
    return +(sum / dramaRates.length).toFixed(2);
  
    console.log(sum);
  }
  

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// function orderByYear(movies) {
//     return movies.sort(function (x, y) {
//      return x.year - y.year;
//    });
//    }

//    console.log(orderByYear(movies))

function orderByYear(movies) {
    movies.sort((a,b) => {
      let yearCompare = a.year - b.year;
      if(yearCompare === 0) {
          yearCompare = a.title.localeCompare(b.title)
      }
      return yearCompare;
    });
      return movies
   }

console.log(orderByYear(movies))


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = ((movies) => {
    let moviesTitleList = [...movies];
    
    let sortedTitleList = moviesTitleList.sort((a, b) => {
      if (a.title > b.title){
          return 1;
      } else if (b.title > a.title) {
        return -1
      } else {
        return 0
      }
    })
  
    let onlyTitleList = sortedTitleList.map (items => items.title);
      moviesTitleList = onlyTitleList.slice(0,20);
  
    console.log(moviesTitleList)
  })
  
  orderAlphabetically(movies)

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
