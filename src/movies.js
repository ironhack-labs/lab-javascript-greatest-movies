// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {

 const directorsArray = moviesArray.map ((movie)=>{
    return movie.director;
 });
 return directorsArray;

}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
    // if (movies.length===0){
    //     return 0;
    //     }
const spielbergMovies = movies.filter((movie)=>{
    return (
        movie.director===`Steven Spielberg`&& movie.genre.includes(`Drama`)
    );
});
return spielbergMovies.length;

}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
 if (moviesArray.length===0){
     return 0;
 }
 const scores = moviesArray
 .map((el)=>el.score||0)
 .reduce((acc,el,i,arr)=>acc+el/arr.length,0)
 .toFixed(2);
 return +scores;


// const neededMovies = movies.filter((movie)=>       )

// const averageScore = scoreSum / neededMovies.length;


}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

const dramaMovies = moviesArray.filter((movie)=> movie.genre.includes(`Drama`));
if (dramaMovies.length===0){
    return 0;
}
const totalScore = dramaMovies.reduce((sum,movie) => sum + movie.score, 0);
const averageScore = totalScore / dramaMovies.length;
return averageScore;

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
 const orderedMovies = moviesArray.slice();
 orderedMovies.sort ((a,b)=>{
 if (a.year === b.year){
    return a.title.localeCompare(b.title);
 }else{
    return a.year - b.year;
 }  
 });
 return orderedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const newArr = moviesArray.map((item)=>item.title).sort((a,b)=>{
        return a.localeCompare(b)
    })
    return newArr.slice(0,20)
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const newArr = moviesArray.map((item)=>{
        return {
            duration : Number(item.duration.slice(0,1)*60)+Number(item.duration.slice(2,5))
        }
     })
    return newArr
    }

    
    

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (movies.length===0){
        return null;
    }
   
}
