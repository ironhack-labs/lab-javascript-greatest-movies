// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

    const allDirectors = moviesArray.map(eachMovie=>{
         return eachMovie.director
     })
     return allDirectors
    
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const manyMovies = moviesArray.filter(eachMovie=>{
        let stevenMovies = 0
        if (eachMovie.director.includes('Steven Spielberg') && eachMovie.genre.includes('Drama')){
            stevenMovies++
        }
        return stevenMovies
    })
    return manyMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
        const scoresArray= moviesArray.reduce((acc, eachScore)=>{
            sumScores = acc + (eachScore.score || 0)   // Para la parte de || 0 me han ayudado porque no lo sacaba ni a tiros, pero entiendo perfectamente el funcionamiento :) tantas vueltas para que fuera eso
            return sumScores 
        },0)
        
        const mediaResult=  (scoresArray / moviesArray.length).toFixed(2)
       if(moviesArray.length === 0 ){
        return 0
       }
       else{
        return Number(mediaResult)
       }
    }


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
   // if (!moviesArray.genre.includes('Drama')){
    //    return 0
   // }
    const dramaArray = moviesArray.filter(eachMovie=>{
        
        return eachMovie.genre.includes('Drama')
        
      })
      if(dramaArray.length===0){
        return 0
      }
      const dramaScore = dramaArray.reduce((acc,eachScore)=>{
        return acc + eachScore.score
      },0)
      const dramaResult= (dramaScore / dramaArray.length ).toFixed(2)
      
      return Number(dramaResult)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesArrayCopy = JSON.parse(JSON.stringify(moviesArray)) 
    moviesArrayCopy.sort((a, b) => {
        if (a.year===b.year){
            return a.title.localeCompare(b.title)
        }
        else{
            return a.year - b.year
        } 
        })
        return moviesArrayCopy
        
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const moviesArrayCopy = JSON.parse(JSON.stringify(moviesArray)) 
    moviesArrayCopy.sort((a, b) => {
            return a.title.localeCompare(b.title)
            

        })
        return moviesArrayCopy.slice(0,20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
