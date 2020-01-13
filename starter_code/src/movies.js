/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)


function orderByYear(movies){
  let newArray = [];
  for(let i = 0; i < movies.length; i++){
    newArray.push(movies[i])
  }

  newArray.sort(function(a, b){
    const yearA = a.year;
    const titleA = a.title;
    const yearB = b.year;
    const titleB = b.title;
    let comparison;

    if (yearA > yearB) {
      comparison = 1;
    } else if (yearA < yearB) {
      comparison = -1;
    } else{
      if(titleA > titleB){
        comparison = 1;
      }else if (titleA < titleB){
        comparison = -1
      }else{
        comparison = 0;
      }
    }
    return comparison;
  })

  return newArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function filterDirector(item){
  if(item.director === "Steven Spielberg" && item.genre.includes("Drama")){
    return true;
  }else{
    return false;
  }
}

function howManyMovies(movies){
  let newArray = movies.filter(filterDirector);
  return newArray.length;
}


// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles


function orderAlphabetically(movies){
  let newArray = [];
  for(let i = 0; i < movies.length; i++){
    newArray.push(movies[i])
  }
  newArray.sort(function(a, b){
    if(a.title > b.title){
      compare = 1;
    }else if(a.title < b.title){
      compare = -1;
    }else{
      compare = 0;
    }
    return compare;
  });

  let movieTitles = [];
  for(let i = 0; i < newArray.length; i++){
    if(movieTitles.length < 20){
      movieTitles.push(newArray[i].title)
    }
  }
  return movieTitles;
}


// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies){
  if(movies.length === 0){
    return 0;
  }
  let totalRates = movies.reduce(function(total, currentValue){
    if(currentValue.rate){
      return total + currentValue.rate;
    }else{
      return total + 0;
    }
  }, 0);
  let average = totalRates / movies.length
  return parseFloat(average.toFixed(2));
}

// Iteration 5: Drama movies - Get the average of Drama Movies
function filterDrama(item){
  if(item.genre.includes("Drama")){
    return true;
  }else{
    return false;
  }
}

function dramaMoviesRate(movies){
  let onlyDramaMovies = movies.filter(filterDrama);
  if(onlyDramaMovies.length === 0){
    return 0;
  }
  let totalRates = onlyDramaMovies.reduce(function(total, currentValue){
    if(currentValue.rate){
      return total + currentValue.rate;
    }else{
      return total + 0;
    }
  }, 0);
  let average = totalRates / onlyDramaMovies.length
  return parseFloat(average.toFixed(2));
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

//En esta iteración me han ayudado con el replace y el split, pero la última parte es imposible.

function turnHoursToMinutes(movies){
  let newArray = []
  let item;
  let duration;

  let newMovies = []
  for(let i = 0; i < movies.length; i++){
    newMovies.push(movies[i]);
  }

  for(let i = 0; i < newMovies.length; i++){
    item = newMovies[i];
    duration = item.duration;
    duration = duration.replace("h", "");
    duration = duration.replace("min", "");
    duration = duration.split(" ");

    if(duration.length == 2){
      item.duration = parseInt(duration[0]) * 60 + parseInt(duration[1]);
    }else{
      item.duration = parseInt(duration[0]) * 60;
    }
    newArray.push(item);
  }
  return newArray;
}


// BONUS Iteration: Best yearly rate average - Best yearly rate average
