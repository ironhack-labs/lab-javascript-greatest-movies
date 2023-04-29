// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map(movies=>movies.director)
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {    
    let spielbergMovies = moviesArray.filter(function(movie){
        if (movie.director==="Steven Spielberg"){return movie}
    })
    let spielbergDramas = spielbergMovies.filter(function(movie){
        if (movie.genre.includes("Drama")){
            return movie
        }
    })
    return spielbergDramas.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    
    if (moviesArray.length===0){
        return 0
    }   
    
    let sum = moviesArray.reduce(function(accum, movie){
        if (!movie.score){
            return accum
        }else {return accum + movie.score}
    },0)
    
    let avg = sum/moviesArray.length;
    return Math.round(avg*100)/100
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    
    let dramaMovies = moviesArray.filter(function(movie){
        if (movie.genre.includes("Drama")){
            return movie
        }
    })
    if (dramaMovies.length===0){
        return 0
    }
    sum = dramaMovies.reduce(function(acc, movie){
        return acc + movie.score
    },0);
    let avg = sum/dramaMovies.length
    return Math.floor(avg*100)/100
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let sortedMovies = JSON.parse(JSON.stringify(moviesArray))
    
    sortedMovies.sort(function(a,b){
        if (a.year!==b.year){
            return a.year-b.year
        }else {
          if(!a.title&&!b.title){
            return a.score-b.score
          }else if (!a.title) {
            return -1 
          } else if (!b.title) {
            return 1 
          } else {
            return a.title.localeCompare(b.title)
          }
       }
    })
    return sortedMovies
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let copy = JSON.parse(JSON.stringify(moviesArray))
    
    let movieTitles = copy.map(copy => copy.title)
    movieTitles.sort(function(a,b){return a.localeCompare(b)})
    return movieTitles.slice(0,20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    let copy = JSON.parse(JSON.stringify(moviesArray))
    return copy.map(function(movie){
        const durationParts = movie.duration.split(" ")       
        let hours = parseInt(durationParts[0]) 
        let minutes
        if (durationParts.length===1){
            minutes = 0
        }else {minutes = parseInt(durationParts[1])}        
        
        const durationInMinutes = hours*60+ minutes
        return {...movie,
                duration:durationInMinutes}
    })    
}


// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    let moviesByYear
    if (moviesArray.length===0) {return null}
    else{
        moviesByYear=orderByYear(moviesArray);
    }
    const result ={}
    
    yearGroups= moviesByYear.reduce((acc, movie) => {
            const year = movie.year;
            const score = movie.score;

            if (year in acc){
                acc[year].push(score)
            } else {
                acc[year]=[score]
            }

            return acc
        },result);
        
    let avgScoresByYear = Object.keys(yearGroups).reduce((acc, year)=>{
        let moviesForYear = yearGroups[year]
        let totalScore = moviesForYear.reduce((sum, score)=>{
            return sum += score
        },0)
        let yearAvgScore= totalScore/moviesForYear.length
        acc[year] = yearAvgScore
      return acc
    },{});
  
    let bestYear
    let bestScore
    if(Object.keys(avgScoresByYear).length===1){
        bestYear = Object.keys(avgScoresByYear)[0]
        bestScore = avgScoresByYear[bestYear]
    } else {
       let bestYears = []
        for (let year in avgScoresByYear){         
        if (bestScore===undefined||avgScoresByYear[year]>bestScore){
            bestYear = year
            bestScore = avgScoresByYear[bestYear]
            bestYears = [bestYear]
          } else if(avgScoresByYear[year]===bestScore){
            bestYears.push(year)
        }
           
    }
   bestYear=bestYears.sort()[0]
}
  return `The best year was ${bestYear} with an average score of ${bestScore}`
}