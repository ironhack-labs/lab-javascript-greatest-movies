// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies) {
      
    const allDirectors = movies.map( elm => {
        const directors = elm.director
        return directors
    
    })
    return allDirectors
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {

    const spielbergDrama = movies.filter(elm=> elm.director === "Steven Spielberg" &&  elm.genre.indexOf("Drama") > -1)

    return spielbergDrama.length
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {

    if (movies.length === 0){

        return 0
        
    } else {

        movies.forEach(element => {

            if (typeof element.rate !== "number"){
                
                element.rate = 0
            
            }            
        });

        const sumRates = movies.reduce((acc,elm) => {

            return acc + elm.rate
        
        }, 0)

        const averageRate = sumRates/movies.length

        return Math.round(averageRate * 100) / 100
    }
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies){

    const dramaMovies = movies.filter(elm=> elm.genre.indexOf("Drama") > -1)

    if (dramaMovies.length === 0) {

        return 0

    } else {

        const sumDramaRate = dramaMovies.reduce((acc, elm) => {

            return acc + elm.rate

        }, 0)

        const averageDramaRate = sumDramaRate/dramaMovies.length

        return Math.round(averageDramaRate * 100) / 100
    }

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear (movies) {

    const yearOrder = [...movies].sort((a, b) => {

        if (a.year > b.year){

            return 1

        } else if (a.year < b.year) {

            return -1
        
        } else {
    
            if (a.title > b.title) {

                return 1

            } else {

                return -1
            }
        }
    })

    return yearOrder   
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {

    const orderMovies = [...movies].sort((a, b) => a.title.localeCompare(b.title))

    const first20Movies = orderMovies.splice(0, 20)

    const titles = first20Movies.map(elm => elm.title)

    return titles

}

console.log(orderAlphabetically([
    { title: 'aab' },
    { title: 'bab' },
    { title: 'acb' },
    { title: 'aaa' },
    { title: 'bbb' },
    { title: 'anc' },
    { title: 'kns' },
    { title: 'zds' },
    { title: 'pow' },
    { title: 'gda' },
    { title: 'res' },
    { title: 'ter' },
    { title: 'bca' },
    { title: 'ccc' },
    { title: 'bbt' },
    { title: 'qas' },
    { title: 'kmn' },
    { title: 'frt' },
    { title: 'afb' },
    { title: 'agb' },
    { title: 'apo' },
    { title: 'poa' },
    { title: 'cdf' },
    { title: 'sea' },
    { title: 'lom' },
    { title: 'acs' },
    { title: 'qas' },
    { title: 'mns' },
    { title: 'bvc' },
    { title: 'gha' },
    { title: 'lkj' },
    { title: 'era' },
    { title: 'ert' },
    { title: 'tex' },
    { title: 'zas' },
    { title: 'pol' }
  ]))

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
