// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
/*
const movies = [
    {
      title: 'The Shawshank Redemption',
      year: 1994,
      director: 'Frank Darabont',
      duration: '2h 22min',
      genre: ['Crime', 'Drama'],
      score: 9.3
    },
    {
      title: 'The Godfather',
      year: 1972,
      director: 'Francis Ford Coppola',
      duration: '2h 55min',
      genre: ['Crime', 'Drama'],
      score: 9.2
    },
]*/

function getAllDirectors(moviesArray) {
/*const newArry = moviesArray.map((director) => {
    return moviesArray.director ;
});

console.log(newArry)*/

return moviesArray.map((movie)=>movie.director
)}


/*


}

getAllDirectors(moviesArray)

}
*/

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?


function howManyMovies(moviesArray) {
    

        const filteredMovies = moviesArray.filter((movie) => {
            return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama');
        });
        return filteredMovies.length; 
    }
    
    


   


    

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(moviesArray) {

    const scores = moviesArray.map((movie) => movie.score);

    if (moviesArray.length === 0) {
        return 0}

    if (scores.length === 0) {
        return 0
    } 
 // if [movie.score]===0 let (i = 0

 

        const total = scores.reduce((accumulator, currentValue) => accumulator + currentValue);



        const average = total / scores.length;
    
        return Math.round(average * 100) / 100;
}




// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    const Drama = moviesArray.filter((movie) => {
        return movie.genre.includes('Drama');
    });

    if (Drama.length === 0) {
        return 0}

    const scoresDrama = Drama.map((movie) => movie.score);

    

    const total_scoresDrama = scoresDrama.reduce((accumulator, currentValue) => accumulator + currentValue);
    const average_scoresDrama = total_scoresDrama / scoresDrama.length;

    return Math.round(average_scoresDrama * 100) / 100;
}



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(moviesArray) {

    let copyMoviesArray = [...moviesArray]

    return copyMoviesArray.sort((a, b) => {
        if (a.year !== b.year) {
            return a.year - b.year;
        } else {
            return a.title.localeCompare(b.title);
        }
    });
}








// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {


let copyMoviesArray = [...moviesArray]

    let  title =  copyMoviesArray.map((movie) => movie.title)

    const titleSort = title.sort()
    
    /* ((a, b) => a.localeCompare(b))   */ 
    const top20 =  titleSort.splice(0,20)
      
return top20

        }


        



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}


///1

console.log(getAllDirectors)