// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies){
    const newDirector = movies.map((movies)=>{
        return movies.director;
    });return newDirector;
  }
  //getAllDirectors(movies)

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  
    const spielBerM = movies.filter((movies) =>{
      return movies.director.includes('Steven Spielberg') && movies.genre.includes('Drama')
    })
    
    let finalResult = spielBerM.length;
    return finalResult
  }
  //howManyMovies(movies)

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {  
    if  (moviesArray.length === 0) {
        return 0;
    } 
        const sumOfScore = moviesArray.reduce((s, m)=>{
            if (!m.score) {
                return s
            }
          
            return s + m.score
        },0) 
        return parseFloat((sumOfScore / moviesArray.length).toFixed(2))

}
//scoresAverage(movies)

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    function dramaMoviesScore(moviesArray) {
        if  (moviesArray.length === 0) {
            return 0;
        }
            return scoresAverage(moviesArray.filter(function(movie){
                return movie.genre.includes('Drama')
            }))
        }
        return 0
    
    }


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
    function orderByYear(scoresAverage) {
        const yearOrder = scoresAverage.slice(0) 
        return yearOrder.sort(function(movie1, movie2){
    
            if (movie1.year !== movie2.year) {
            return movie1.year - movie2.year       
        } 
        return movie1.title.localeCompare(movie2.title)           
       })
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const orderedAlphabetically = JSON.parse(JSON.stringify(moviesArray))    
    const list20 =  orderedAlphabetically.sort(function(movie1, movie2){
        return movie1.title.localeCompare(movie2.title)
    })

    return list20.map(function(movie){
        return movie.title
    }).slice(0, 20) 

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
