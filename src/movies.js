
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
let directors = moviesArray.map(element => {
    return element.director
    })
//return directorsClean = new Set(directors)
return directors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    return moviesArray.filter(element =>
        element.director === "Steven Spielberg" && 
        element.genre.includes("Drama")
    ).length
}

// Iteration 3: All scores averageRounded - Get the averageRounded of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0
    }

    let scores = moviesArray.map( element => {
        if (Object.keys(element).length === 0 || element.score === undefined) {
            return null
        }
        return element.score
    })
    let scoresFixed = scores.filter(value => value !== null)

    return Number( (scoresFixed.reduce( (total, current) => total + current, 0) /scores.length).toFixed(2))
}


// Iteration 4: Drama movies - Get the averageRounded of Drama Movies
function dramaMoviesScore(moviesArray) {
let scores = []
moviesArray.forEach( element => {
    if (element.genre.includes("Drama")) {
        scores.push(element.score)
    }}
    )

    if (scores.length=== 0) {
        return 0
    }

    //return scores
    return Number( (scores.reduce( (total, current) => total + current, 0) /scores.length).toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
newArray = [... moviesArray]

    newArray.sort ( (a , b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }
    return a.year - b.year
    })
return newArray
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let newArray =[... moviesArray]    
    let titles = newArray.map(element => element.title)
    titles.sort( (a,b) => a.localeCompare(b))    
    return titles.slice(0,20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    let newArray = [];
    moviesArray.forEach(element => {        
        let newMovie = Object.assign({}, element);
        newArray.push(newMovie);
    });

function transform(string) {
    let separated = string.split(" ")
    let hours= Number(separated[0].slice(0,-1))
    let minutes = 0
    if (separated.length > 1) {
        minutes = Number(separated[1].slice(0,-3))
    }
    return (hours * 60) + minutes
}

newArray.forEach(element => {
    element.duration = transform(element.duration)
    })

console.log(newArray)

return newArray
}

// BONUS - Iteration 8: Best yearly score averageRounded - Best yearly score averageRounded
function bestYearAvg(moviesArray) {
    if (moviesArray.length=== 0){return null};
   
    let counter = {}
    
    for (let film of moviesArray) {
        let year = film.year
        if (year in counter) {
            counter[year].push(film.score);
        } else {
            counter[year]= [film.score];
        }
    }
    
    let bestScore = 0;
    let bestYear = '';
    
    for (year in counter) {
     let values = counter[year];
     const average = values.reduce((total, current) => total + current, 0) / values.length;
     let averageRounded = Math.round(average *10)/10
     console.log(`${year}: ${averageRounded}`)
    
     if (averageRounded > bestScore) {
        bestScore = averageRounded;
        bestYear = year;
     }
     
    }
    return `The best year was ${bestYear} with an average score of ${bestScore}`
}

