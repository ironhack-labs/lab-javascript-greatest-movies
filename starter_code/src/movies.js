/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arrayFilm){

  let arrayFilmNew = [...arrayFilm]
  
  arrayFilmNew.sort(function(a,b){
    return a.year-b.year;
  })

  arrayFilmNew.sort(function(a,b){
    if(a.year == b.year){
      if (a.title > b.title) {
        return 1;
      }
      if (a.title < b.title) {
        return -1;
      }
    }  
    return 0;
  });
  
  //console.log('arrayFilmNew' ,arrayFilmNew)
  return arrayFilmNew;

}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(object){

  let filmSpielberg = object.filter(function(film){

    if(film.director == "Steven Spielberg" && film.genre.includes("Drama")){

      return film;

    }

  })

  return filmSpielberg.length;

}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(object){

  let arrayOrderNameFilm = object.map(function(film){
    return film.title;
  }).sort().filter(function(film, index){

    if(index < 20) return film;

  })

  //console.log('arrayOrderNameFilm', arrayOrderNameFilm)

  return arrayOrderNameFilm;

}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(object){

  if(object.length){
    
    let averageResult = object.reduce(function(acc, e){

      if(!e.rate || e.rate == "") return acc;

      return acc + e.rate;
  
    },0)/object.length
  
    averageResult = averageResult.toFixed(2)
  
    averageResult = parseFloat(averageResult)
  
    //console.log('object', object)
  
    //console.log('averageResult',averageResult)
  
    return averageResult

  }

  return 0;

}

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(object){

  let objectDrama = object.filter(function(e){

    return e.genre.includes('Drama')

  })

  //console.log(objectDrama)

  if(objectDrama.length){
    
    let averageDramaResult = objectDrama.reduce(function(acc, e){

      if(!e.rate || e.rate == "") return acc;

      return acc + e.rate;
  
    },0)/objectDrama.length
  
    averageDramaResult = averageDramaResult.toFixed(2)
    averageDramaResult = parseFloat(averageDramaResult)
  
    return averageDramaResult;

  }

  return 0;

}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(object){

  let newObject = JSON.parse(JSON.stringify(object))

  //console.log(newObject)

  newObject.forEach(function(film){

    if(film.duration.includes('h') && film.duration.includes('m')){
  
      film.duration.split(' ').reduce(function(hour, min){

      let hours = parseInt(hour)
      //console.log(hours)
      let mins = parseInt(min)
      //console.log(mins)

      film.duration = hours*60+mins

      })

      //console.log('TIPO1', film.duration)

    } else if(film.duration.includes('h')){

      film.duration = parseInt(film.duration)*60

      //console.log('TIPO2', film.duration)

    } else if(film.duration.includes('m')){

      film.duration = parseInt(film.duration)
      //console.log('TIPO3', film.duration)

    }
 
   //console.log(film.duration)

  })

  //console.log(newObject)
  return newObject;

}

// BONUS Iteration: Best yearly rate average - Best yearly rate average
