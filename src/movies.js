// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let output = [];
    moviesArray.forEach(movie => {
        if(!output.includes(movie.director)){output.push(movie.director)}
    
});
return output;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let count = 0;
    moviesArray.forEach(movie => {
        for (i=0;i<movie.genre.length;i++){
            if (movie.genre[i] === "Drama" && movie.director === "Steven Spielberg")
            {count ++}
        }
        
    });
  return count
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0){return 0}

    let scoredMovies= moviesArray.filter((movie) =>{
            if( typeof movie.score === "number"){return movie}
        })
    
    let scoresList = scoredMovies.map(movie =>{
        return movie.score})

    let avg = scoresList.reduce((sum,score)=>{
        return sum+score
    })
        result = (avg/(moviesArray.length)).toFixed(2)
        return Number(result)
    }
  



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    let toCheck = moviesArray.filter(movie =>{
        if(movie.genre.includes("Drama")){return movie}
    })

    return (scoresAverage(toCheck))

  }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let output = [...moviesArray];

    output.sort((a, b) =>{
        if (a.year > b.year){return 1}
        if (a.year < b.year){return -1}
        if (a.year === b.year){
            if (a.title > b.title){return 1}
            if (a.title < b.title){return -1}
        }
    })
    return output
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let newArray = [];
     moviesArray.forEach(movie => newArray.push(movie.title))
     newArray.sort();
     if(newArray.length > 20){
        newArray = newArray.slice(0,20);
     }
     return newArray;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    let newArray = [...moviesArray];
    newArray.forEach(movie => {
      let collect = [];
      if (movie.duration.length > 2){
        collect.push(parseInt(movie.duration.slice(0,1)))
        collect.push(parseInt(movie.duration.slice(3,5)))
        converted = parseInt(collect[0]*60+collect[1])
        movie.duration = Number(converted)
      }

      else{
        collect.push(parseInt(movie.duration.slice(0,1)))
        converted = parseInt(collect[0]*60)
        movie.duration = Number(converted)
      }
    
    })
    return newArray}; 
    // TYPEOF CONVERTED IS A NUMBER - JASMINE DOES NOT RECOGNIZE
    // Returning newArray Cloned from Original Array - Jasmine does not recognize

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
