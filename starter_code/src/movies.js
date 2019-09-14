// Iteration 1: All rates average - Get the average of all rates with 2 decimals 
function ratesAverage(array){
  return Number((array.reduce((sum, element) => sum + Number(element.rate), 0) / array.length).toFixed(2))
}
 
/*
Create a dramaMoviesRate() function that receives an array as a parameter to get the average rate of all drama movies! Let's see if it is better than the general average.
Again, rounded to 2 decimals!
*/
function dramaMoviesRate(array) {
  const dramaFilter = array.filter( movie => movie.genre.includes('Drama'));

  const avgDrama = Number((dramaFilter.reduce((sum, dramaFilter) => sum + Number(dramaFilter.rate), 0)
  / dramaFilter.length).toFixed(2))

  if(dramaFilter.length > 0){
    return avgDrama;
  }
  return 0;
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
function orderByDuration(array){
  const durationOrder = array.sort((a, b) => {
    if(a.duration > b.duration){
      return 1;
    } else if(a.duration === b.duration){
      if(a.title < b.title){
        return -1;
      }
      return 1;
    } else if(a.duration< b.duration) {
     return -1;
    } else {
      return 0;
    }
  })
  return durationOrder;
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
function howManyMovies(array) {
  const spielbergFilms = array.filter( movie => {
    if(movie.director.includes('Steven Spielberg') && movie.genre.includes('Drama')){
      return true;
    }
  });
  return spielbergFilms.length;
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles -- sort them alphabetically using the title -  print the title of the first 20 - sort / map
function orderAlphabetically(array){
  const moviesTitle = array.map(movie => {
    return movie.title;
  });

  if(moviesTitle.length < 20){
    return moviesTitle.sort();
  }
  return moviesTitle.sort().slice(0, 20)
}


// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function hourToMin(hString) {
  return Number(hString.replace(/h/, '')) * 60
}
function min(minString) {
  return Number(minString.replace(/min/, ''))
}

function minutesFromDurationString(duration){
  const durationArr = duration.split(' ');
  if(durationArr.length === 2) {
    return hourToMin(durationArr[0]) + min(durationArr[1])
  }
  if (durationArr[0].includes('h')) {
    return hourToMin(durationArr[0])
  }
  return min(durationArr[0])
};

function turnHoursToMinutes(array) {
  return array.map(obj => {
    const newArray = {};
    newArray.duration = minutesFromDurationString(obj.duration);
    return newArray;
  })
}

/*BONUS Iteration: Best yearly rate average - Best yearly rate average
- Año best average rate
- Seacrh the year
- The rate of that year
*/
function bestYearAvg(array) {
  // if (array.length === 0){return null};

  // const years = array.map(movie => {
  //   //return Number(movie.year);
  //   return {
  //     year: movie.year,
  //     rate: Number(movie.rate)
  //   }
  // })

  // years.reduce((sum, element) => {
  //   if(movie.year === movie.year){
  //     return sum + movie.rate;
  //   }
  // });
  
  // console.log(years)
}

//return Number((array.reduce((sum, element) => sum + Number(element.rate), 0) / array.length).toFixed(2))