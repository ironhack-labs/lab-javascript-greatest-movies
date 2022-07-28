// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directors = moviesArray.map(elem => elem.director);
  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const spielbergMovies = moviesArray.filter(elem => elem.director === 'Steven Spielberg' && elem.genre.includes("Drama"))
  return spielbergMovies.length;
};


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
      const scores = moviesArray.reduce((acc, val) => {acc + val.score
          if(val.score){
              return acc + val.score;
          } else {
             return acc;
          }
       } ,0)

      const total = Math.round((scores * 100) / moviesArray.length) / 100;
      console.log(total);

      return moviesArray.length === 0 ? 0 : total;
     };

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter(elem => elem.genre.includes('Drama'))
  if(dramaMovies.length === 0) return 0

  const scores = dramaMovies.reduce((a, b) => a+b.score, 0);
  let total = Math.round((scores/dramaMovies.length) * 100) / 100;

  return moviesArray.length === 0 ? 0 : total;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const filteredArr = [...moviesArray].filter(elem => elem.year)
  const orderedTitle = filteredArr.sort((a,b) => {
      if(a.year > b.year){
        return 1;
      } else if(a.year < b.year){
        return -1
      }
      if(a.title > b.title){
        return 1;
      } else if(a.title < b.title){
        return -1
      } else{ 
        return 0;
      }

    }); return orderedTitle;
  };

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const filteredByTitle = [...moviesArray].map(elem => elem.title);
  const orderedTitle = filteredByTitle.sort();
      return orderedTitle.slice(0, 20);
  }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const separatedHours = [...moviesArray].map(elem => elem.duration.split('h'));
  const total = separatedHours.map((elem, i) => elem[0] * 60 + elem[1].split('min'))
  const separated = total.map(elem => elem.split(' '));

}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {

}