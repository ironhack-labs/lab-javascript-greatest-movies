// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?


function getAllDirectors(moviesArray) {
    return moviesArray.map((movies) => movies.director);
    //if exists...
};

//console.log(getAllDirectors(movies))

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    const total = moviesArray.filter((name) => name.director === 'Steven Spielberg' && name.genre.includes('Drama'));
      
    return total.length;
};

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    if(moviesArray.length === 0) return 0;
    
    const totalscore = moviesArray.reduce((acc, val) => {
        if(!val.score) {
            return acc;
        } else {
            return acc + val.score;
        }
    },0);

    averageScore = totalscore / moviesArray.length;
    
    //return averageScore.toFixed(2);
    return Math.round(averageScore * 100) / 100;
};

// Iteration 4: Drama movies - Get the average of Drama Movies
const movie = [
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
        genre: ['Crime']
      },
      {
        title: 'Dead Poets Society',
        year: 1989,
        director: 'Peter Weir',
        duration: '2h 9min',
        genre: ['Comedy', 'Drama'],
        score: 8
      }
    ];

function dramaMoviesScore(moviesArray) {
    if(moviesArray.length === 0) return 0;

    const type = moviesArray.filter((movie) => {
        return movie.genre.includes('Drama');
    }); 
    
    return scoresAverage(type);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let sortedArray = [...moviesArray];
    
    //sortedArray.sort((a, b) => a.year - b.year)

    sortedArray.sort((a, b) => {  //by alphabetical order
        if(a.year < b.year) return -1;
        if(a.year > b.year) return 1;
        if(a.title < b.title) return -1;
        if(a.title > b.title) return 1;   
    });

    return sortedArray;
};

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let arr = [...moviesArray];
    
    const orderMovies = arr.map((name) => name.title);
    return orderMovies.sort().splice(0, 20);
  }
  
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

    const list = [...moviesArray]
    const duration = list.map((movie) => {

        let total = movie.duration.split(' ');
        const hour = total[0].slice(0, 1) * 60;
        const min = total[1].slice(-5, -3);

        total = min + hour;
        
        return total;
    });
    
    /* const hour = duration[0][0].slice(0,1)*60;
    const min = duration[0][1].slice(0,2);
    
    let total = hour + min; */

  return duration;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}


console.log(turnHoursToMinutes(movie))