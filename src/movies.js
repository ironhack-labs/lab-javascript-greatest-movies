// Iteration 1: All directors? - Get the array of all directors.
// Bonus: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = [];
    moviesArray.forEach((element,index) => {
        directors[index] = element.director;
    });
    return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let counterMovies = 0;

    moviesArray.forEach((element, index) => {
        if (element.director==="Steven Spielberg" && element.genre.includes("Drama")){
            counterMovies ++;
        }
    });

    return counterMovies;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
let sumScore = 0;

if(moviesArray.length===0){
    return 0;
}

moviesArray.forEach(element => {
    if(!element.hasOwnProperty("score") || element.score===""){
        sumScore += 0;
    }
    else{
        sumScore += element.score
    }
})

const avgScore = sumScore / moviesArray.length;
const roundScore = Math.round(avgScore * 100) / 100;
return roundScore

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let sumScore = 0;
    let counter = 0;
    moviesArray.forEach(element => {
        if(element.genre.includes("Drama")){
            sumScore += element.score
            counter++;
        }
    })
    if(counter === 0){
        return 0;
    }
    const avgScore = sumScore / counter;
    const roundScore = Math.round(avgScore * 100) / 100;
    return roundScore
}

// Iteration 5: Ordering by year  Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesOrder = [...moviesArray]

    moviesOrder.sort((a, b) => {
        if(a.year === b.year){
            return a.title.localeCompare(b.title)
        }
        else{
            return a.year - b.year;
        }
      });
    return moviesOrder;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const moviesAlpha = [...moviesArray]
    .sort((a, b) => {
      return a.title.localeCompare(b.title);
    })
    .map((element) => element.title)
    .splice(0, 20);
  return moviesAlpha;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

    const moviesAlpha = [...moviesArray]
    .map(function(element){
        const time = element.duration
        const hoursInMinutes = parseInt(time.split('h')[0]) * 60;
        const minutes = parseInt(time.split(' ')[1].replace('min', ''));
        return element.duration = hoursInMinutes + minutes
    });
    return moviesArray; //here must be "moviesAlpha", but .map edit the moviesArray i dont know why.
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
if(moviesArray.length===0){
    return null
}




    return `The best year was ${bestYear} with an average score of ${scoreAvg}`
}

