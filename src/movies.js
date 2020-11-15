// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// function getAllDirectors (movies) {
//     return movies.map(function (movie) {
//         return movie.director
//     }) 
// } 

function getAllDirectors(movies) {

    return movies.map(movie => {
        return movie.director
    })
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?



function howManyMovies(movies) {
    return movies.filter(movie => {
        return movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    }).length
}



// Iteration 3: All rates average - Get the average of all rates with 2 decimals



function ratesAverage (movies) {

if (movies.length === 0)  {return 0}

const foundRates = movies.map(movie => movie.rate);

const sumRates = foundRates.reduce(function(totalRate, rate) {
if (!rate) {return totalRate}
    return totalRate + rate 
})

  const average = sumRates / foundRates.length

  return Math.round(average*100)/100;
  }
// const movieWithRates = movies.filter(movie => {return movie.rate})

// const foundRates = movieWithRates.map(movie => movie.rate);
// const totalRates = foundRates.reduce((acc, val) => acc + val);
// return averageRate = Number((totalRates / foundRates.length).toFixed(2));

// }
// }
// if (movies.length === 0) {return 0}

// return Number(((movies
// .map (movie => movie.rate)
// .reduce ((acc, val) => acc + val) 
//  ) / movies.length).toFixed(2))

// }

    // let allRatings = movies.map (movie => {
    //     return movie.rate
    // });

    // let totalRate = allRatings.reduce((acc, currentVal) => {
    // return acc + currentVal;})

    // averageRate = totalRate /= movies.length
    // return averageRate

    // }



// Iteration 4: Drama movies - Get the average of Drama Movies


function dramaMoviesRate(movies) {


const dramaMovies = movies.filter(movie => {
return movie.genre.includes("Drama") 
});

const dramaRates = dramaMovies.map (movie => {
    return movie.rate
})

const dramaTotalRates = dramaRates.reduce ((acc, val) => {
    return acc + val
})

return Number((dramaTotalRates / dramaMovies.length).toFixed(2))

    }

    //     constTotal = movies.filter(movie => {
    //       return movie.genre.includes("Drama")
    //     }).map(movie => {
    //       return movie.rate
    //     }).reduce((acc, val) => {
    //       return acc + val
    //     })
        
    //     constLength = movies.filter(movie => {
    //         return movie.genre.includes("Drama")
    //     })
       
    //    return Math.round(constTotal*100)/100 / constLength.length
    //   }

// let dramaMovie = movies.filter(movie => {
//     return movie.genre.includes("Drama") })

// let dramaRates = dramaMovie.map (movie => {
//     return movie.rate })

// let totalDramaRates = dramaRates.reduce ((acc, currentVal) => {
//     return acc + currentVal;})

// let averageRateDrama = totalDramaRates / movies.length
// return Number(averageRateDrama.toFixed(2))





// Iteration 5: Ordering by year - Order by year, ascending (in growing order)function rates

function orderByYear (movies) {

    let arrByYear = [...movies]
return arrByYear.sort ((a, b) =>
(a.year > b.year) ? 1 : -1)

}

// let arrByYear = [...movies];

// return arrByYear.sort(function(a, b){
//     return a.year - b.year;
//   });

 
 orderAlphabetically
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically (movies) {
    return movies.map(movie => {
        return movie.title
    }).sort().slice(0,20)
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
