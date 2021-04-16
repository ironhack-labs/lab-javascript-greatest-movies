// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(array){
    const directores = array.map((element) => {
        return element.director
    })
    return directores
}
//console.log(getAllDirectors(movies))

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(array){
    const spielberg = array.filter(element => {
        return element.director === "Steven Spielberg" && element.genre.includes('Drama')
    })
    return spielberg.length
}

//console.log(howManyMovies(movies))

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies){
    if (movies.length === 0){
        return 0
    }else{
        let counter = 0
        let rateMovies = movies.reduce(function(rateacc, movie) {
            if(movie.rate == '' || movie.hasOwnProperty('rate') === false){
                counter++
                return rateacc + 0
            } else{
                counter++
                return rateacc + movie.rate
            }
        }, 0)
        let averageRate = rateMovies / counter
        return Math.round(averageRate * 100) / 100
    }   
}
    

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies){
    const dramaMovies = movies.filter(movie => movie.genre.includes('Drama'));
    if(dramaMovies.length === 0){return 0}
    let rateDramaMovies = dramaMovies.reduce(function(rate, movie) {
        return rate + movie.rate;
    }, 0);
    let averageRate = rateDramaMovies / dramaMovies.length
        return Math.round(averageRate * 100) / 100
    }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies){
    const moviesToOrder = [...movies]
    const orderByYears = moviesToOrder.sort(function (a, b) {
        if (a.year > b.year) {
          return 1
        }
        if (a.year < b.year) {
          return -1
        }
        if(a.year === b.year){
           if (a.title > b.title){
               return 1
           }
           if (a.title < b.title){
               return -1
           }
        }
      })
      return orderByYears
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies){
    const moviesToOrder = [...movies]
    const orderByTitle = moviesToOrder.sort(function (a,b){
        if (a.title > b.title){
            return 1
        }
        if (a.title < b.title){
            return -1
        }
    })
    let movieArray = []
    orderByTitle.forEach(movie => {
        movieArray.push(movie.title)
    })
    let twentyArray = []
    if(movieArray.length >= 20){
        for(i = 0; i < 20; i++){
            twentyArray.push(movieArray[i])
        }
    } else{
        for(i = 0; i < movieArray.length; i++){
            twentyArray.push(movieArray[i])
        }
    }
    return twentyArray
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
