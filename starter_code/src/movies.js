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


function bestYearAvg(object){

  let myObject = JSON.parse(JSON.stringify(object))

  if(myObject.length){

    myObject.sort(function(a,b){
      return a.year-b.year;
    })
    
    let arrayYear = [];
    
    myObject.forEach(function(film){
    
      //console.log(film.year)
      if(!arrayYear.includes(film.year)) arrayYear.push(film.year);
    
    })

    //console.log(arrayYear)
    
    let averageRateAllYears = arrayYear.map(function(filmYear){
      
      var objectfilterYears = myObject.filter(function(film){
    
        //console.log(film.year)
    
        if(film.year == filmYear) return film
    
      })

      //console.log(objectfilterYears)
    
      let averageRateYear = objectfilterYears.reduce(function(acc, e){
    
        return  acc + e.rate;
    
      },0)/objectfilterYears.length

      //console.log(averageRateYear)
      
      averageRateYear = parseFloat(averageRateYear.toFixed(2))
      
      
      //console.log('averageRateYear', averageRateYear)
      //console.log('objectfilterYears', objectfilterYears)
    
      return {year: filmYear, rate: averageRateYear};
    
    })

    //console.log('averageRateAllYears', averageRateAllYears)
    
    averageRateAllYears.sort(function(a,b){
  
      return a.rate - b.rate
    }).reverse()
  
    let bigRate = 0;
    averageRateAllYears.forEach(function(e){
      
      if(e.rate == bigRate){}
  
      if(e.rate > bigRate) bigRate = e.rate;
  
    })
  
  
    //console.log(averageRateAllYears[0])
    
    
    if(averageRateAllYears.length === 1){
    
      return `The best year was ${averageRateAllYears[0].year} with an average rate of ${averageRateAllYears[0].rate}`;

    } else if(averageRateAllYears[0].rate === averageRateAllYears[1].rate) {

      var averageRateAllYearsEqual = averageRateAllYears.filter(function(resultObject){

        //console.log(averageRateAllYears[0].rate)

        if(resultObject.rate === averageRateAllYears[0].rate) return resultObject;

      });

      //console.log(averageRateAllYearsEqual.length-1)

      return `The best year was ${averageRateAllYearsEqual[averageRateAllYearsEqual.length-1].year} with an average rate of ${averageRateAllYearsEqual[averageRateAllYearsEqual.length-1].rate}`;

    }
  
  
    //console.log(averageRateAllYears[0])
    return `The best year was ${averageRateAllYears[0].year} with an average rate of ${averageRateAllYears[0].rate}`;
  
  

  }
    
  return null;
  
}