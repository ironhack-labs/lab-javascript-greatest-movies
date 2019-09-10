/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 
const roundNumber=(number,digits)=>Math.round(number*10**digits)/10**digits;  

const ratesAverage=movies=>{
    let sum=0;
    for(let movie of movies){
      if(movie.rate){
      sum+=parseFloat(movie.rate);
      }
    }
    return roundNumber(sum/movies.length,2);
  }
  
// Iteration 2: Drama movies - Get the average of Drama Movies
// const dramaMoviesRate=movies=>ratesAverage(movies.filter(item=>item.genre="Drama"));

function dramaMoviesRate(movies){
  
/*  //Solution dramaMovies 1 
    const dramaMovies=movies.filter(movie=>{
    if(movie.genre.includes('Drama')){
      return true;
    }else{
      return false;
    }
  }); */

    //Solution dramaMovies 2 -> Simple one
    const dramaMovies=movies.filter(movies=>movies.genre.includes('Drama'));
    if(dramaMovies.length===0) return 0;
    const averageDramaMovieRating=ratesAverage(dramaMovies);
    return averageDramaMovieRating;
  }

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

//Teacher
const orderByDuration = movies => movies.sort((first, second) => {
  if (first.duration > second.duration) {
  return 1;
} else if (first.duration < second.duration) {
  return -1;
} else if (first.title > second.title) {
  return 1;
} else if (first.title < second.title) {
  return -1;
} else {
  return 0;
}
})
// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
//sol1
function howManyMovies(movies){
  const drama=movies.filter(item=>item.genre.includes('Drama') && item.director.includes('Steven Spielberg'));
  return drama.length;
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically=movies=>movies.sort((first,second)=>{
  if(first.duration>second.duration){
    return 1;
  }else if(first.duration<second.duration){
    return -1;
  }else if(first.title>second.title){
      return 1;
  }else{
    return 0;
  }
}).slice(0,20)
.map(item=>item.title)
//Código abaixo faz o mesmo que linha 77    ------> .slice(0,20)<------
/* .reduce((accumulator,item)=>{
  if(accumulator.length>=20){
    return accumulatort;
  }else{
    return accumulator.concat([iten]);
  }
}) */

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
  const parseDuration=duration=>{
    const parsed=duration.split('').reduce((accumulator,value)=>{
      let isHours=value.includes('h');
      let parsedValue=parseInt(value.split('h').join('').split('min').join(''));
      return accumulator+parsedValue*(isHours?60:1);
    },0);
    return parsed;
  };

  const turnHoursToMinutes=movies=>movies.map(item=>{
    const duration=parseDuration(item.duration)
    return {...item,duration:duration};
  });

// BONUS Iteration: Best yearly rate average - Best yearly rate average
// This is a very farfetched solution
const bestYearAvg = movies => {
  if (!movies.length) return null;
  const ratings = movies.reduce((accumulator, item) => {
    let year = item.year;
    let rate = parseFloat(item.rate);
    return {
      ...accumulator,
      [ year ]: [ ...accumulator[ year ] || [], rate ]
    };
  }, {});
  let averages = {};
  for (let year in ratings) {
    averages[year] = ratings[year].reduce((acc, val) => acc + val, 0) / ratings[year].length;
  }
  const bestYear = Object.entries(averages).reduce((accumulator, value) => {
    if (!accumulator || value[1] > accumulator[1]) return value;
    return accumulator;
  }, null);
  return `The best year was ${ bestYear[0] } with an average rate of ${ bestYear[1] }`
};
