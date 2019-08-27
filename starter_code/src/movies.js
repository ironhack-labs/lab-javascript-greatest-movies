/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 
const ratesAverage= movies => {
  return parseFloat((parseFloat((movies
    .map(movie => +movie.rate)
    .reduce((ac, rate)=> ac+rate, 0))
    .toFixed(2)) 
    / movies.map(movie=>movie.rate).length).toFixed(2));
};
 
// Iteration 2: Drama movies - Get the average of Drama Movies
const dramaMoviesRate= movies => {
  let dramaMovies= movies.filter(movie=> {return (movie.genre.indexOf("Drama")>=0)? true: false});
  return (dramaMovies.length>0)? parseFloat((dramaMovies.reduce((ac, movie)=> ac + movie.rate, 0) / dramaMovies.length).toFixed(2)) :
  0
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
const orderByDuration = movies => { 
  return movies.sort((a,b)=> {
      if (a.duration>b.duration) return 1
      if (a.duration<b.duration) return -1
      if (a.duration==b.duration) {
        if (a.title>b.title) {return 1}
        else {return -1}
      } 
    });
};

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
const howManyMovies = movies => {
  return movies.filter(movie=> movie.genre.indexOf('Drama')>=0 && movie.director =='Steven Spielberg').length;
}


// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = movies => {
  let alphaOrder= movies.sort((a,b)=> {
      if (a.title>b.title) {return 1}
      else {return -1}  
  });
  let onlyTitles= alphaOrder.map(x=>x.title);
  
  return onlyTitles.slice(0,20);
} 

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

const turnHoursToMinutes = movies => {
  const convertMinutes = dur => {
    if (dur.split(" ").length==2) {
      return (+(dur.split("h")[0])*60) + (+dur.split(" ")[1].match(/[0-9]+/));
    }
    else {
      if (dur.split(" ")[0].length >2) {
        return +dur.split(" ")[0].match(/[0-9]+/);
      }
      else {
        return (+("2h".split(" ")[0][0]))*60;
      }
    }
  }

  let newMoviesArr= movies.map(x=>({...x}));
  return [...newMoviesArr, newMoviesArr.map(movie=>{movie.duration= convertMinutes(movie.duration)})];
}



//BONUS Iteration: Best yearly rate average - Best yearly rate average

const bestYearAvg = movies => {
  if(movies.length==[]) return null;
  const productionYearArr = [...new Set(movies.map(x=>+(x.year)))];
  const yearMovies= (movies, year) => movies.filter(movie=> movie.year==year);
  let newArr=[];

  productionYearArr.forEach(year => {newArr
    .push([year, yearMovies(movies, year)
      .reduce((a,b)=> a+(+b.rate),0) / yearMovies(movies, year).length])});

  newArr.sort((a,b)=> (a[1]>b[1])? -1 : 1);

  let bestAvgYear = newArr[0][0], firstHighterRate = newArr[0][1];
  // let squareYear = newArr.filter(x=> x[1]==firstHighterRate) 
  // let squareYearSorted = squareYear.sort( (a,b)=> (a[0]>b[0])? -1 : 1);
  

  return `The best year was ${bestAvgYear} with an average rate of ${firstHighterRate}`;

}
