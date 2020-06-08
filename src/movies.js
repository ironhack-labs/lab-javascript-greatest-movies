// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
     
// function getAllDirectors(movies){

//     const directors = movies.map(elm => elm.director)
    
//     return directors
// }

const getAllDirectors = (movies) => movies.map(elm => elm.director)  // Optimizada

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

// function howManyMovies(movies){

//     const stevenDramaMovies = movies.filter(elm => elm.director === "Steven Spielberg" && elm.genre.includes("Drama"))

//     return stevenDramaMovies.length
// }


const howManyMovies = (movies) => movies.filter(elm => elm.director === "Steven Spielberg" && elm.genre.includes("Drama")).length                               // Optimizada



// Iteration 3: All rates average - Get the average of all rates with 2 decimals


function ratesAverage(movies){

    const sumRates = movies.reduce((acc, elm) => {

        if (elm.rate){

            return acc + elm.rate

        } else {

            return acc
        }

    }, 0)

    const aveRate = sumRates / movies.length

    if (movies.length > 0){

        return Math.round(aveRate*100)/100

    } else {

        return 0
    }
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies){

    const dramaMovies = movies.filter(elm => elm.genre.includes("Drama"))

    const sumDramaRates = dramaMovies.reduce((acc, elm) => acc + elm.rate, 0)

    const aveDramaRate = sumDramaRates / dramaMovies.length

    if (dramaMovies.length >0){

        return Math.round(aveDramaRate*100)/100

    } else {
        
        return 0
    }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies){

    const movieYears = [...movies].sort((a, b) =>{

        if (a.year === b.year){

            if (a.title < b.title){

                return -1
            }

        } else {

            return a.year - b.year
        }
    }) 

    return movieYears
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles



function orderAlphabetically(movies){

    const movieAlphab = [...movies].sort((a, b) =>{

        if (a.title < b.title){

            return -1
            
        } else {

            return 1
        }
    })

    const movieAlphabTitles = movieAlphab.map(elm => elm.title)

    return movieAlphabTitles.slice(0, 20)
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes


function turnHoursToMinutes(movies) {

    const toMinutes = [...movies].map(elm => {

        let hours = elm.duration.charAt(0)
        let minutes = elm.duration.slice(3, 5)

        if ( elm.duration.charAt(1) === 'h'){

            let newDuration = (hours*60)+Number(minutes)

            return {
                 ...elm,
                 duration: newDuration
            }
        }   else {

            let newDuration = Number(elm.duration.slice(0, 2))

            return {
                ...elm,
                duration: newDuration
           }
        }
    })

    return toMinutes
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

