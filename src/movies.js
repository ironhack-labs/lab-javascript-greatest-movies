// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray){
    return moviesArray.map((movie)=>{
        return movie.director
    })
}
//Bonus - Iteration 1.1: Clean the array of directors
function getAllDirectorsUnified(moviesArray){
    const newArr = [];
    moviesArray.forEach(movie=>{
        if(!newArr.includes(movie)){
            newArr.push(movie)
        }
    })
    return newArr
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray){
    return moviesArray.filter(movie=>{
        return movie.director==="Steven Spielberg" && movie.genre.includes("Drama")
    }).length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray){
    if(moviesArray.length===0) return 0
    const total = moviesArray.reduce((acc, movie)=>{
        if(movie.score){
            return acc + movie.score
        }
        else{
            return acc + 0
        }
    }, 0) 

    const average = (total / moviesArray.length).toFixed(2)
    return Number(average)
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray){
    const dramaMovies = moviesArray.filter((movie)=>{
        return movie.genre.includes("Drama")
    }, 0)  
    if(dramaMovies.length===0) return 0 

    return scoresAverage(dramaMovies)
   
}



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray){
    const sorted = [...moviesArray].sort((a,b)=>{
        if(a.year === b.year){
            if(a.title > b.title){ return 1 }
            else{ return -1 }
        }
        else{ return a.year - b.year }
    })
    return sorted
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray){
    const sorted =  [...moviesArray].sort((a,b)=>{
        if(a.title > b.title){ return 1 }
        else{ return -1 }
    })

    const mapped =  sorted.map((movie)=>{
        return movie.title
    })
    return mapped.slice(0,20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray){
    const newArr = [...moviesArray].map(movie=>{
        const timeArr = movie.duration.split(" ")
        let hours = parseInt(timeArr[0])*60
        let minutes = parseInt(timeArr[1])
        if(timeArr.length===1) {
            minutes=0
        }
        let duration = hours + minutes
        return {...movie, duration }
    })
   return newArr
}



// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray){
    if(moviesArray.length===0) { return null}
    const movieObj = {};
    const scoreObj = {}
    moviesArray.forEach(movie=>{
        const strYear = movie.year.toString()
        if(!Object.keys(movieObj).includes(strYear)){
            movieObj[strYear] = [movie]
        }
        else{
            movieObj[strYear].push(movie)
        }
    })
    const sortedArr = [];
    for(let [year, movie] of Object.entries(movieObj)){
        scoreObj[year] = []
        movie.forEach(elem=>{
            scoreObj[year].push(elem.score)
        })
        scoreObj[year] = scoreObj[year].reduce((acc, score)=>{
            return acc + score
        }, 0) / scoreObj[year].length;
        const obj = [year, scoreObj[year]]
        sortedArr.push(obj);
    }
    console.log(sortedArr);
    let highestRating = 0;
    let highestRatingYear = 0;
    sortedArr.forEach(movieYear=>{
        if(movieYear[1] > highestRating){
            highestRating= movieYear[1];
            highestRatingYear = movieYear[0];
        }
    })
    return `The best year was ${highestRatingYear} with an average score of ${highestRating}`
    
}   

