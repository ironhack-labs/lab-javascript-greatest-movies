/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array){
  const newDB = JSON.parse(JSON.stringify(array));
  newDB.sort((a,b) => {
    if (a.year === b.year){
      if (a.title < b.title){
        return -1;
      }else if (a.title > b.title){
        return 1;
      }else{
        return 0;
      }
    }else{
      return a.year - b.year;
    }
  });
  return newDB;
}



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(array){
  if (array.length === 0){
    return 0;
  }
  let arrSpielberg = array.filter(function(movies){
    return movies.director === "Steven Spielberg" && movies.genre.includes("Drama");
  });
  return arrSpielberg.length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array){
  if (array.length ===0){
    return 0;
  }
  const arrayAlpha=JSON.parse(JSON.stringify(array));
  let arrMap=arrayAlpha.map((movie)=>{
    return movie.title;
  });

  const arr=arrMap.sort();
  return arr.slice(0,20); 
}
// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(array){
  if (array.length ===0){
    return 0;
  }
  const arrayAlpha=JSON.parse(JSON.stringify(array));
  let arrMap=arrayAlpha.map((movie)=>{
    return movie.rate;
  });
  let media=arrMap.reduce((acumulator,value)=>{
    return acumulator + value;
  });
  return parseFloat((media/arrMap.length).toFixed(2));
}
// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(array){
  if (array.length === 0){
    return 0;
  }
  let arrDrama = array.filter((pelis)=>{
    return pelis.genre.includes("Drama");
  });
  const rateDrama=array.map((num)=>{
    return num.rate;
  });
  let mediaRateDrama=rateDrama.reduce((acumulator,value)=>{
    return acumulator + value;
  });

  return parseFloat(mediaRateDrama/rateDrama.length).toFixed(2);
}
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
