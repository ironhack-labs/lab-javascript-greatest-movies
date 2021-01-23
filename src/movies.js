// let movies = [
//     {
//         "title": "The Shawshank Redemption",
//         "year": 1994,
//         "director": "Frank Darabont",
//         "duration": "2h 22min",
//         "genre": [
//           "Crime",
//           "Drama"
//         ],
//         "rate": 9.3
//       },
//       {
//         "title": "The Godfather",
//         "year": 1972,
//         "director": "Francis Ford Coppola",
//         "duration": "2h 55min",
//         "genre": [
//           "Crime",
//           "Drama"
//         ],
//         "rate": 9.2
//       },
//       {
//         "title": "The Godfather: Part II",
//         "year": 1974,
//         "director": "Francis Ford Coppola",
//         "duration": "3h 22min",
//         "genre": [
//           "Crime",
//           "Drama"
//         ],
//         "rate": 9
//       }
    
// ]

// // Iteration 1: All directors? - Get the array of all directors.

// const getAllDirectors = moviesArray => {
//     return  moviesArray.map((movie) => {
//         return movie.director
//     })    
// }

// console.log(getAllDirectors(movies))



// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies = moviesArray => {
    let spielbergDramas = moviesArray.filter((movie) => {
        return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')         
    })

    return spielbergDramas.length;
}

// console.log(howManyMovies(movies));
// let arr = [{'genre': ['crime', 'drama']}]

// console.log(arr[0].genre.includes('rama'))

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
const ratesAverage = moviesArray => {    
    return moviesArray.reduce((acc, movie, i, arr) => {
        if (!movie.rate && i < arr.length - 1) {
            return acc;
        } else if (!movie.rate && i === arr.length - 1) {
            return acc / arr.length
        }

        if (movie.rate && i === arr.length -1) {
            acc += movie.rate;
            return Math.round(acc / arr.length * 100) / 100;
            // console.log(acc, i, arr.length)
        }

        return acc += movie.rate;        
    }, 0)

    // return Math.round(totalRate / moviesArray.length * 100) / 100
}

// console.log(ratesAverage(movies))

// Iteration 4: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = moviesArray => {
    const dramaMovies = moviesArray.filter((movie) => {       
        return movie.genre.includes('Drama')
    })    

    return dramaMovies.reduce((acc, movie, i, arr) => {
        if (!movie.rate && i < arr.length - 1) {
            return acc;
        } else if (!movie.rate && i === arr.length - 1) {
            return acc / arr.length
        }

        if (movie.rate && i === arr.length -1) {
            acc += movie.rate;
            return Math.round(acc / arr.length * 100) / 100;
            // console.log(acc, i, arr.length)
        }

        return acc += movie.rate;   
    }, 0)
}

// console.log(dramaMoviesRate(movies))

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = moviesArray => {    
    const copiedArray = Object.assign([], moviesArray)
    return copiedArray.sort((firstMovie, secondMovie) => {      
        if (firstMovie.year === secondMovie.year) {
            return firstMovie.title < secondMovie.title ? -1 : 1
        } else {
            return firstMovie.year < secondMovie.year ? -1 : 1
        }
    })
}

// console.log(orderByYear(movies))


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = moviesArray => {
    let copiedArray = Object.assign([], moviesArray)
    
    copiedArray.sort((firstMovie, secondMovie) => {
        return firstMovie.title < secondMovie.title ? -1 : 1
    })

    if (copiedArray.length > 20) {
        copiedArray.splice(20, (copiedArray.length - 20))        
    } 
    
    return copiedArray.map((movie) => {
        return movie.title;
    })

//    console.log(copiedArray)
}

console.log(orderAlphabetically(movies))

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
