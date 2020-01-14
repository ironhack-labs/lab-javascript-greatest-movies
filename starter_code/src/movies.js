/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  let nArr = [];
  let mapped = arr.map(function(valElement, idx) {
    return { index: idx, value: valElement };
  });

  nArr = mapped.sort(function(a, b) {
    if (a.value.year < b.value.year) {return -1;}
    if (a.value.year > b.value.year) {return 1;}    
    if (a.value.year === b.value.year) {return -1;}
     return 0;
  });

  return nArr.map(function(el) {
    return arr[el.index];
  });
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(arr) {
  let count;
  count = arr.filter(
    m => m.director === "Steven Spielberg" && m.genre.includes("Drama")
  );

  return count.length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  let sliceArray = arr.slice();
  let topTwentyTitles = [];
  let moviesArr = [];

  moviesArr = sliceArray.sort((a, b) => {
    if (a.title < b.title) {return -1;}
    if (a.title > b.title) {return 1;}
    return 0;
  });

  if(sliceArray.length > 20){
    for (let i = 0; i < 20; i++) {    
      topTwentyTitles.push(sliceArray[i].title.toString());  
      }
  } else {    
    topTwentyTitles = moviesArr;
  }

  return topTwentyTitles;
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arr) {
  let nArr = [];
  let avg = 0;

  if (arr.length === 0) {
    return avg;
  } else {
    nArr = arr.reduce(
      (accumulator, currentMovie) =>
        accumulator + (currentMovie.rate ? currentMovie.rate : 0),
      0
    );
  }

  avg = Math.round((nArr / arr.length) * 100) / 100;

  return avg;
}

// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr) {
  return ratesAverage(arr.filter(m => m.genre.includes("Drama")));
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr){
  const nArr = arr.map(m => {
    let mHrs = 0;
    let mMin = 0;

    if (m.duration.includes('h') && m.duration.includes('m')){
      let movieTime = m.duration.split('h');
      mHrs= parseInt(movieTime[0] * 60);
      mMin = parseInt(movieTime[1].split('min')[0].trim());
    } else if(m.duration.includes('h')){
      mHrs = parseInt(m.duration.split('h')[0].trim()) * 60;
    } else{
       mMin = parseInt(m.duration.split('min')[0].trim());
     }            
   
    return { duration:parseInt(mHrs + mMin)};
  });

  return nArr;
}
// BONUS Iteration: Best yearly rate average - Best yearly rate average
function bestYearAvg(arr){
  let nArr = [];
  if(!arr.length){
    return null;
  } else {

    arr.forEach(element => {
      nArr.push(`The best year was ${element.year} with an average rate of ${element.rate}`);
    });
     
  }
  return nArr;
}