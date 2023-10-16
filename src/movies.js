// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let dirsMapped = moviesArray.map(movie =>{
        return movie.director;
    });
    return dirsMapped;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let spielbergArray = moviesArray.filter((mov) =>{
        return (mov.director === "Steven Spielberg" && mov.genre.includes('Drama'));
    });
    return spielbergArray.length
};

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0){
              return 0;
    };
      avg = moviesArray.reduce((sum, mov)=>{
        if(mov.score){
          return sum + mov.score;
        } else {
          return sum + 0;
        }    
      }, 0);
      return Math.round((avg/moviesArray.length)*100)/100;
  }

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
   avg = moviesArray.filter(movi=>{
       return movi.genre.includes("Drama")
     });
   return scoresAverage(avg);
};

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const newArray = [...moviesArray];
    return newArray.sort(function (a, b){
        if (a.year < b.year){
            return -1;
        } else if (a.year > b.year){
            return 1;
        } else if(a.year === b.year){
            if(a.tittle > b.tittle){
                return 1
            } else if (a.title < b.title){
                return -1
            } else {
                return 0;
            }
        }
    });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    newArray = moviesArray.map(elem =>{
        return elem.title
    });
    newArray.sort()
    return newArray.slice(0,20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const hoursNew = moviesArray.map(hour=>{
      const cut = hour.duration.split(" ");
      let hours = parseInt(cut[0])*60;
      let mins = parseInt(cut[1]);
      if(cut.length===1){
        mins = 0;
      }
      return {...hour, duration: hours + mins}
});
  return hoursNew;
};
// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (moviesArray.length === 0) {
        return null;
      }
 	let yearCount =[];
    let count = {};
    moviesArray.forEach(elems=>{
	yearCount.push(elems.year);
});
yearCount.forEach(function (repit) {
    count[repit] = (count[repit] || 0) + 1
});
let mostRepeatingYear = null;
let highestCount = -1;
for (const year in count) {
    if (count[year] > highestCount) {
        highestCount = count[year];
        mostRepeatingYear = year;
    }
  }
  return mostRepeatingYear;
};
