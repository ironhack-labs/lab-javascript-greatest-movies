// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies){
    const directors = movies.map(movie => movie.director)
    return directors
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies){
    let count = 0;
    const DramaMovies = movies.filter(movie => movie.genre.includes("Drama"))
    const spielbergDramaMovies = DramaMovies.filter(movie => movie.director === "Steven Spielberg")

    if(movies.length === 0 || spielbergDramaMovies.length === 0){
        return 0
    }
    spielbergDramaMovies.forEach(movie =>{
        count++
    })
    return count
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies){
    let avg = 0
    if(movies.length == 0){
        return 0
    }
    
    const sumRates = movies.reduce((acc, movie) => {
        /*if(typeof movie.rate !== Number ){
            movie.rate = 2
        }*/
        return acc + movie.rate
    },0)
    avg = (sumRates/movies.length)
    return parseFloat(avg.toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies){
    let avg = 0
    if(movies.length === 1){
        return parseFloat(movies[0].rate.toFixed(2))
    }
    const dramaMovies = movies.filter(movie => movie.genre.includes("Drama"))
    if(dramaMovies.length == 0){
        return 0
    }
    const rateDramaMovies = dramaMovies.reduce((acc, movie) =>{
        return acc + movie.rate
    }, 0)
    avg = (rateDramaMovies/dramaMovies.length)
    return parseFloat(avg.toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
    if(movies.length == 0){
        return []
    }

    const orderByYear = movies.sort((a, b) => {
        if (a.year === b.year) return a.title.localeCompare(b.title)
        return a.year - b.year
    })
    return orderByYear
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies){
    returnArray = []
    const newMovies = JSON.parse(JSON.stringify(movies))
    const orderedMovies = newMovies.sort((a,b) => {
        return a.title.localeCompare(b.title)
    })
    const titles = orderedMovies.map(movie => movie.title)
    if(titles.length < 20){
        return titles
    }else{
        //return titles.slice(0,20)
        for(let i = 0; i < 20; i++){
            returnArray.push(titles[i])
        }
        return returnArray
        
    }
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
