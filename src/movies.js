// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let result = moviesArray.map((movie)=>{return movie.director})
    return result
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let filteredArray = moviesArray.filter((movie)=>
    movie.director==="Steven Spielberg" && movie.genre.includes("Drama")
    )
    return filteredArray.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(!moviesArray.length){
        return 0
    }
    let onlyScores = moviesArray.map((movie)=>{return movie.score ? movie.score : 0})
    let sum = onlyScores.reduce((a,b)=>a+b)
    let num  = sum/moviesArray.length
    return +(Math.round(num + "e+2")  + "e-2");
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let filteredArray = moviesArray.filter((movie)=>
    movie.genre.includes("Drama")
    )
    if(!filteredArray.length){
        return 0
    }
    let scores = filteredArray.map((movie)=>movie.score)
    let sum = scores.reduce((a,b)=>a+b)
    let num = sum/scores.length
    return +(Math.round(num + "e+2")  + "e-2");
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let sorted = [...moviesArray].sort((a, b) => {
        const year1 = a.year
        const year2 = b.year
        if (year1 < year2) {
          return -1;
        }
        if (year1 > year2) {
          return 1;
        }
        if(year1===year2){
            if(a.title>b.title){
                return 1
            }else{
                return -1
            }
        }
    })
    return sorted
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let sorted = [...moviesArray].sort((a, b) => {
        const nameA = a.title.toUpperCase(); 
        const nameB = b.title.toUpperCase(); 
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      })
    if(moviesArray.length>20){
        let newArray = sorted.slice(0,20)
        let result = newArray.map((movie)=>movie.title)
        return result
    }else{
        let result = sorted.map((movie)=>movie.title)
        return result
    }

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    let changedArray = []
    moviesArray.forEach(element => {
        let strWithNoHr = element.duration.replace("h", "")
        if(strWithNoHr.includes("min")){
            let strWithNoMin = strWithNoHr.replace("min", "")
            let hourAndMinutes = strWithNoMin.split(" ")
            let hours = parseInt(hourAndMinutes[0])*60
            let duration = hours+parseInt(hourAndMinutes[1])
            changedArray.push({...element, duration:duration})
        }else{
            let duration = parseInt(strWithNoHr)*60
            changedArray.push({...element, duration:duration})
        }
    });
    return changedArray
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if(moviesArray.length===1){
        return `The best year was ${moviesArray[0].year} with an average score of ${moviesArray[0].score}`
    }else if (!moviesArray.length){
        return null
    }else{
    let yearsArray = []
    let yearsArrayWithscores = {}
    moviesArray.forEach(element => {
      if(!yearsArray.includes(element.year)){
        yearsArray.push(element.year)
        yearsArrayWithscores =  {...yearsArrayWithscores, [element.year]: {score: element.score, ave:1}}
      }
  else{
        yearsArrayWithscores = {...yearsArrayWithscores, [element.year]: {score: yearsArrayWithscores[element.year].score+=element.score, ave: yearsArrayWithscores[element.year].ave+=1 }}
      }})
    
    let yearsAndAverages = []
    for (const property in yearsArrayWithscores) {
        yearsAndAverages.push({
            year: property,
            ave: yearsArrayWithscores[property].score/yearsArrayWithscores[property].ave})
    }
    let movie = {year: 0, ave: 0}
    yearsAndAverages.forEach(function(element){if(element.ave>movie.ave){
        movie = {year: element.year, ave: element.ave}
    }})
    return `The best year was ${movie.year} with an average score of ${movie.ave}`}
}
