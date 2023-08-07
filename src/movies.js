// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const myArr =[];
    moviesArray.map(element =>{
         myArr.push(element.director);
    }).reduce((acc, curr) => {
        if(acc !== curr){
           return acc += curr;
        }
    })
    return myArr;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const myArr = [];
    moviesArray.filter(element =>{
        if(element.director === "Steven Spielberg" && element.genre.includes("Drama")){
            myArr.push(element);
        } else{
            return false;
        }
    })
    return myArr.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    const total = moviesArray.reduce((acc, curr) => {
        if(!curr.score){
            return acc += curr.score / moviesArray.length;
        } else {
            return acc += curr.score / moviesArray.length;
        }
    }, 0);
    return Number(total.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray){
          const myArr = [];
           moviesArray.filter(element =>{
            if(element.genre.includes('Drama')){
                myArr.push(element);
            } else {
                return 0;
            }
            });
          const averege = myArr.reduce((acc, curr) =>{
            return acc += curr.score / myArr.length;
          }, 0);
          return parseFloat(averege.toFixed(2));
        }
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const sortAlg = moviesArray.sort((a, b) =>{
        return a.year - b.year;
        if(a === b){
            return a.localeCompare(b);s
        }
      })
      return sortAlg;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const durArr = moviesArray.map(element =>{
        let counter = 0;
        element.duration = counter;
        for(let i = 0;i < element.duration.length;i++){
            if(i === "h"){
                let hToMin = element.duration[i - 1] * 60;
                counter += hToMin;
            }
            if(i === "min"){
                counter += element.duration[i - 1];
            }
        }
    })
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
