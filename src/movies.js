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

    newArray= newArray.map(movie => {
      let collect = [];
      if (movie.duration.length > 2){
        let hours = parseInt(movie.duration.slice(0,1))*60
        let minutes = parseInt(movie.duration.slice(3,5))
 

        /*collect.push(parseInt(movie.duration.slice(0,1)))
        collect.push(parseInt(movie.duration.slice(3,5)))*/

        let time = hours+minutes
        return {...movie,duration: time }
      }

      else{
        /*collect.push(parseInt(movie.duration.slice(0,1)))*/
        let hours = parseInt(movie.duration.slice(0,1))*60

        return {...movie,duration: hours }
      }
      
    })
    return newArray}; 


// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray){
    if (moviesArray.length === 0){return null}
    // Step 1 -Sort by Year
        arrayToWork = [...moviesArray]
        let uniqueYears = {}
        arrayToWork.map((movie) =>{
            if (!uniqueYears[movie.year]){uniqueYears[movie.year]=[]}//current year is not on uniqueYears{}
        });
        console.log(uniqueYears) // Array of unique Years
        console.log(Object.keys(uniqueYears).length) // Nr of keys in object for reference/test

        for(i=0; i<arrayToWork.length;i++){
            let currentMovie=arrayToWork[i];
            let objectList=Object.keys(uniqueYears)
            for (j=0;j<objectList.length;j++){
                console.log("comparing "+currentMovie.year+" to "+objectList[j]) //nested for loop to compare each movie.year to each key (year) on uniqueYears object
                if (currentMovie.year == objectList[j]){
                    console.log("SAME YEAR HERE!")      //if years are the same, adds the score of that movie to the listed array
                    uniqueYears[objectList[j]].push(currentMovie.score)
                }
            }
        }
        console.log(uniqueYears) // final object with scores sorted by year
        //Step 2- avg of each year

        console.log(uniqueYears[Object.keys(uniqueYears)[0]])// acessing array of scores for specific year
        let testList = uniqueYears[Object.keys(uniqueYears)[0]];

        testList = testList.reduce((total,each) =>{ //
            return total+each                       //testing reduce on specific year
        })
        console.log(testList+" works!!")                       // Works :D

let maxAverage = 0;  // setting vars to input year and score avg
let maxYear = 0;

for (let i = 0; i < Object.keys(uniqueYears).length; i++) {
    let year = Object.keys(uniqueYears)[i];
    let scores = uniqueYears[year];
    let average = scores.reduce((a, b) => a + b, 0) / scores.length;

    if (average > maxAverage) {
        maxAverage = average;
        maxYear = year;
    }

    console.log(`Average for year ${year}: ${average}`);
}


return(`The best year was ${maxYear} with an average score of ${maxAverage}`)
}