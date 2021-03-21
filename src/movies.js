// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(arr) {
    let directors = arr.map(movie => {
        return movie.director
    })
    return directors
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
      
    let total = arr.filter(movie => {
        return movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
        })

    return total.length
    
} 
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arr){
    if (arr.length === 0 ){
        return 0
    }
    let total = arr.reduce((accum, currVal) =>{
        if (currVal.rate === "" || currVal.rate === undefined){
            return accum
        }
        return accum + currVal.rate
    },0)

    return Math.round((total /arr.length) * 100)/100
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr){
    let dramaMovies = arr.filter(movie => movie.genre.includes("Drama"));
    return ratesAverage(dramaMovies)
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
    let copyArray = arr.map(movie => movie)  
    let byYear = copyArray.sort((a, b) => {
        if(a.year === b.year){
            return a.title - b.title ? a.year : b.year;
        } 
        return a.year - b.year
    })
    return byYear
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr){
    let abcArr = arr.map(movie => movie.title).sort();
     return abcArr.slice(0, 20)
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {
    let newList = JSON.parse(JSON.stringify(arr));

    for(let i = 0; i<newList.length; i++){
        let splitTime = newList[i].duration.split(" ");
                
      let hours = 0;
      let minutes = 0;
      
      if(splitTime.length === 2){
         hours += parseInt(splitTime[0], 10)
         minutes += parseInt(splitTime[1], 10)
         
       } else if (splitTime.length === 1 && splitTime[0].includes("min")){
         minutes = parseInt(splitTime[0], 10)
        
       } else {
         hours += parseInt(splitTime[0], 10)
       }
                
    let newDur = 0;
      
      if(hours===0){
          newDur = minutes;
        } else if (minutes===0){
          newDur = hours*60;
        } else {
          newDur = (hours*60) + minutes;
        }
   
       newList[i].duration = Number(newDur);
      }
    return newList
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
function bestYearAvg(){

}
