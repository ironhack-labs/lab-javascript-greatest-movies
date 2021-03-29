// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directorsArray = moviesArray.map((elm) => {
    return elm.director;
  });
  //soy dios:
  let i = 0;
  const directorsArrayNoDuplicates = directorsArray.filter((elm2) => {
    i++; //hahahahhaa tarde un rato
    return directorsArray.indexOf(elm2) === i - 1;
  });

  return directorsArrayNoDuplicates;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray, someDirector) {
  const SteSpiDraMovies = moviesArray.filter((elm) => {
    return elm.director === "Steven Spielberg" && elm.genre.includes("Drama");
  });
  return SteSpiDraMovies.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  const sum = moviesArray.reduce((acc, elm) => {
    if (moviesArray[moviesArray.indexOf(elm)].rate) {
      return acc + elm.rate;
    } else {
      return acc;
    }
  }, 0);
  avg = sum / moviesArray.length;
  return parseFloat(avg.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(moviesArray) {
  const dramaMovies = moviesArray.filter((elm) => {
    return elm.genre.includes("Drama");
  });
  if (moviesArray.length === 0 || dramaMovies.length === 0) {
    return 0;
  }

  const sum = dramaMovies.reduce((acc, elm) => {
    if (dramaMovies[dramaMovies.indexOf(elm)].rate) {
      return acc + elm.rate;
    } else {
      return acc + 0;
    }
  }, 0);
  avg = sum / dramaMovies.length;
  return parseFloat(avg.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

//Este no lo supe hacer por mi cuenta, investigue en internet como aplicar el sort() sobre una propiedad de un array de objetos y todos lo hacian de esta forma, 
//intente lo mas que pude entender el sort(compare) con a y b y los ifs abreviados como son integrados. Este es un metodo general que mucha gente usa, 
//sin embargo, no logre entenderlo por lo que considero este ejercicio no hecho.
//A pesar de ello, ahora tengo una funcion que directamente me hace sort() de una propiedad principal Y otra secundaria, (y sabria crear una tercera y una cuarta etc.) de objetos dentro de un array, 
//la podria reusar y aplicar a diferentes situaciones, pero no la entiendo del todo.
//newArray.sort((elm1, elm2) => (elm1.year > elm2.year) ? 1 : (elm1.year === elm2.year) ? ((elm1.title > elm2.title) ? 1 : -1) : -1 )
function orderByYear(moviesArray) {
  newArray = JSON.parse(JSON.stringify(moviesArray))

  newArray.sort((elm1, elm2) => (elm1.year > elm2.year) ? 1 : (elm1.year === elm2.year) ? ((elm1.title > elm2.title) ? 1 : -1) : -1 )

  return newArray
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray){
  const newArray = JSON.parse(JSON.stringify(moviesArray))

  const titlesArray = newArray.map(elm => {
    return elm.title
  })

  titlesArray.sort()
  let i = 0
  const titlesArrayShort = titlesArray.filter(elm => {
    i++
    return i <= 20
  })
  
  return titlesArrayShort
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray){
  const newArray = JSON.parse(JSON.stringify(moviesArray))
  newArray.forEach(elm => {
    if(elm.duration.includes('h')){
      hours = elm.duration.substring(0, elm.duration.indexOf('h'))
      if(elm.duration.includes('min')){
        mins = elm.duration.substring(elm.duration.indexOf('h') + 2, elm.duration.indexOf('min'))
      }
      else{
        mins = 0
      }
    }
    else{
      hours = 0
      mins = elm.duration.substring(0, elm.duration.indexOf('min'))
    }

    hoursToMins = hours * 60
    newDuration = parseInt(mins) + parseInt(hoursToMins)
    elm.duration = newDuration
    
  })
  return newArray
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
function bestYearAvg(moviesArray) {
  if(moviesArray.length <= 0){return null}
  const yearsArray = moviesArray.map((elm) => {
    return elm.year;
  });
  let counter = 0;
  const yearsArrayNoDuplicates = yearsArray.filter((elm2) => {
    counter++;
    return yearsArray.indexOf(elm2) === counter - 1;
  });

  differentYears = yearsArrayNoDuplicates.length
  let ratingPerYearArray = []
  let avgYearRating = 0
  let yearsInstances = 0
  let operatingYear = 0
  for(let i = 0; i < differentYears; i++){
    yearsInstances = 0
    operatingYear = yearsArrayNoDuplicates[i]
    const yearsRateSum = moviesArray.reduce((acc, elm3) => {
        if (operatingYear === elm3.year && moviesArray[moviesArray.indexOf(elm3)].rate){
          yearsInstances++
          return acc + elm3.rate;
        } else {
          return acc;
        }
    },0);
    avgYearRating = (yearsRateSum / yearsInstances)
    ratingPerYearArray.push({year:operatingYear, rate: avgYearRating})
  }
  ratingPerYearArray.sort((elm1, elm2) => (elm1.rate > elm2.rate) ? 1 : (elm1.rate === elm2.rate) ? ((elm1.year < elm2.year) ? 1 : -1) : -1 )
  ratingPerYearArray.reverse()

  return `The best year was ${ratingPerYearArray[0].year} with an average rate of ${ratingPerYearArray[0].rate}`
}
//Estoy muy orgullos de mi monstruo de Frankenstein...^^^ 
//Estoy seguro que habia una forma mas facil hahahhahahahhah q animal