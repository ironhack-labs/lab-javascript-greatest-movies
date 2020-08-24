// Iteration 1



function getAllDirectors(movies) {
    const newArrayDirectors = movies.map(elm => elm.director)
    return newArrayDirectors
}

// _Bonus_: It seems some of the directors had directed multiple 
//movies so they will pop up multiple times in the array of 
//directors.How could you "clean" a bit this array and make it 
//unified(without duplicates) ?



// Iteration 2: Steven Spielberg. The best? - 
//How many drama movies did STEVEN SPIELBERG direct ?

howManyMovies = (movies) => {

    return movies.filter(elm => elm.genre.includes("Drama") && elm.director === "Steven Spielberg").length
    // if (!movies.length || movies.filter(elm => elm.director !== "Steven Spielberg")) {
    //     return 0
    // } else {

    //     // const movSpiel = movies.filter(elm => elm.director === "Steven Spielberg")

    //     // const movSpielDrama = movSpiel.filter(elm => elm.genre.includes("Drama"))

    //     //return movSpielDrama.length
    // }

}
howManyMovies(movies)



//Iteration 3: All rates average - Get the average of all rates with 2 decimals

// ratesAverage = (movies) => {


//     if (!movies.length) {
//         return 0
//     } else {
//         let average = movies.reduce((acc, elm) => {
//             if (!elm.rate) {
//                // elm.rate = 0
//                 acc + 0
//             } else {
//                 acc + elm.rate
//             }
//         }, 0) / movies.length


//         return Math.round(average * 100) / 100
//     }


// }


ratesAverage = (movies) => {
    const ratedDramaFilms = movies.filter(elm => typeof elm.genre === 'number' && elm.genre.includes("Drama"))
    const average = ratedDramaFilms.reduce((acc, elm) => acc + elm.rate, 0) / ratedDramaFilms.length
    return Math.round(average * 100) / 100


}

ratesAverage(movies)




// Iteration 4: Drama movies - Get the average of Drama Movies


// dramaMoviesRate = (movies) => {
//     if (!movies.filter(elm => elm.genre.includes("Drama"))) {
//         return 0
//     } else {
//         const arrayDramaMov = movies.filter(elm => elm.genre.includes("Drama"))
//         const dramaSum = arrayDramaMov.reduce((acc, elm) => acc + elm.rate, 0)
//         const average = dramaSum / arrayDramaMov.length
//         average = Math.round(average * 100) / 100
//         return average

//     }
// }

dramaMoviesRate = movies => {
    const dramaMov = movies.filter(elm => elm.genre.includes("Drama"))

    if (!dramaMov.length) {
        return 0
    } else {
        const rates = dramaMov.reduce((acc, elm) => acc + elm.rate, 0)
        const average = rates / dramaMov.length
        return +average.toFixed(2)
    }
}

dramaMoviesRate(movies)



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// orderByYear = (movies) => {

//     const moviesCopy = [...movies]

//     moviesCopy.sort((film1, film2) => {

//             if (film1["year"] === film2["year"]) {
//                 //si las pelis son del mismo año van a ordenarse por título
//                 moviesCopy.sort((film1, film2) => {
//                     if (film1[title] > film2[title]) {
//                         return -1;
//                     }

//                     if (film1[title] < b.title) {
//                         return 1;
//                     }

//                     return 0;
//                 });
//                 // acaba la ordenación por título
//             } else {
//                 //si no son del mismo año siguen por año
//             return film1["year"] - film2["year"]);
//         }
//         return moviesCopy
//     }
// }


// orderByYear = (movies) => {
//     const moviesCopy = [...movies]
//     moviesCopy.sort((a, b) => {
//             if (a.year > b.year) {
//                 return -1;
//             }

//             if (a.year < b.year) {
//                 return 1;
//             }

//             if (a.year === name.year) {

//                 if (film1.title > film2.title) {
//                     return -1;
//                 }

//                 if (film1.title < b.title) {
//                     return 1;
//                 }

//                 return 0;
//             }
//         }
//     })
// return moviesCopy




function orderByYear(movies) {
    const moviesCopy = [...movies]
    moviesCopy.sort(function (a, b) {
        if (a.year > b.year) {
            return 1
        }
        if (a.year < b.year) {
            return -1
        }
        if (a.year === b.year) {
            if (a.title > b.title) {
                return 1
            }
            if (a.title < b.title) {
                return -1
            }
            if (a.title === b.title) {
                return 0
            }
        }
    })
    return moviesCopy
}



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
    moviesCopy = [...movies]
    let moviesArray = moviesCopy.map(elm => elm.title)
    moviesArray.sort((a, b) => {
        if (a > b) {
            return 1;
        }

        if (a < b) {
            return -1;
        }

        return 0;
    });

    return moviesArray.slice(0, 20)
}
console.log(orderAlphabetically(movies))

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average