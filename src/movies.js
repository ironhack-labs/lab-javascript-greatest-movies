// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies) {
  const arrayOfDirectors = movies.map((movies) => movies.director);
  return arrayOfDirectors;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(movies) {
    const arrayOfDirectors = movies.map((movies) => movies.director);
    let noDuplicates = [];
    for(i=0; i<arrayOfDirectors.length;i++){
      if(arrayOfDirectors.indexOf(arrayOfDirectors[i]) === i){
        noDuplicates.push(arrayOfDirectors[i])
      }
    }
    return noDuplicates;
  }
  
getAllDirectors(movies)
  
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
  let numOnlyDramaMovies = 0;
  let onlyDramaMovies;
  let numStevenSpielberg;
  let spielbergMovies;
  let numberOfMovies = 0;
  let arrayOfMovies;

  if (movies.length === 0) {
    return 0;
  }

  function howManyStevenSpielberg(movies) {
    function directedBySpielberg(movies) {
      if (movies.director === "Steven Spielberg") {
        return movies.director;
      }
    }

    spielbergMovies = movies.filter(directedBySpielberg);
    numStevenSpielberg = spielbergMovies.length;
    if (numStevenSpielberg === 0) {
      return numStevenSpielberg;
    }
  }

  function callBack(movies) {
    function isDrama() {
      for (i = 0; i < movies.genre.length; i++) {
        if (movies.genre[i] === "Drama") {
          return "Drama";
        }
      }
    }

    if (movies.director === "Steven Spielberg" && isDrama() === "Drama") {
      return movies.title;
    }
  }

  arrayOfMovies = movies.filter(callBack);
  numberOfMovies = arrayOfMovies.length;
  return numberOfMovies;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(moviesArray){
    if(moviesArray.length!==0){
      let ratesSum = moviesArray.reduce(
        function(acc, nextVal){
          return acc + nextVal.rate
        },0)
    
      let numMovies = moviesArray.length;
      let averageRate = ratesSum/numMovies
      let roundedAvg = Number(averageRate.toFixed(2));
      return roundedAvg;
    }
    return 0;
  }
// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(moviesArray){
    function isDrama(moviesArray) {
        for (i = 0; i < moviesArray.genre.length; i++) {
          if (moviesArray.genre[i] === "Drama") {
            return moviesArray;
          }
        }
      }
    
    let allDramaMovies = moviesArray.filter(isDrama)
    if(allDramaMovies.length!==0){
      let sumRatesDramaMovies = allDramaMovies.reduce(
      function(acc, nextVal){
        return acc + nextVal.rate
      },0)
    let numDramaMovies = allDramaMovies.length;
    let avgRateDrama = sumRatesDramaMovies/numDramaMovies;
    let roundedAvgRateDrama = Number(avgRateDrama.toFixed(2));
    return roundedAvgRateDrama;
    }
    return 0;
}
  
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(moviesArray) {
    let copyOfMovies = [...moviesArray];
    let orderedArray = copyOfMovies.sort(
      function(a,b){
        if(a.year < b.year) {return -1;}
        if(a.year > b.year) {return 1;}
        if(a.title < b.title) {return -1; }
        if(a.title > b.title) {return 1; }
    })
    return orderedArray;
  }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(moviesArray){
    let newArrayLength = 20;
    let newArray = [...moviesArray]
    let onlyTitles = newArray.map(movies => movies.title)
    let orderedArray;
  
    function sorting (arrayToSort){
      orderedArray = arrayToSort.sort(
        function(a,b){
          if(a<b) {return -1}
          if(a>b) {return 1}  
      })
    }
  
    if(onlyTitles.length<20){
      sorting(onlyTitles)
      return orderedArray
    }
    if(onlyTitles.length>=20){
      let first20Movies = onlyTitles.splice(0,newArrayLength)
      sorting(first20Movies)
      return orderedArray
    }
  }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
