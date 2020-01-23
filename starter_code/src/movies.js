/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
const compare =(movie1, movie2)=>{
    let year1 = movie1.year
    let year2 = movie2.year
  
  if(year1 < year2){
     return -1
  }else if(year1> year2){
     return 1
  }else{
     if(movie1.title < movie2.title){
       return -1
     }else if (movie1.title > movie2.title){
       return 1
     }
   }return 0
  }

const orderByYear =(films)=>{
    const newArray = JSON.parse(JSON.stringify(films))
    newArray.sort((movie1,movie2)=>compare(movie1, movie2))
    return newArray
   }


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

const howManyMovies = (films) => {
    let spielbergArr = [];
    spielbergArr = films.filter(moviMaker => {
      if (moviMaker.director.includes("Steven Spielberg") && moviMaker.genre.includes("Drama")){
        return true}
      }
    )
    return spielbergArr.length;
  
  }
  console.log(howManyMovies(movies))
// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
const compareTitles = (movie1,movie2) => {
    let title1 = movie1;
    let title2 = movie2;
  
    if(title1<title2){
      return -1
    }else if(title1>title2){
      return 1
    }else{
      return 0;
    }
  }
  const orderAlphabetically = (films) => {
    let onlyTitles = films.map(films =>films.title)
    let orderdedFilms = onlyTitles.sort((movie1,movie2)=>compareTitles(movie1, movie2))
  
    return orderdedFilms.slice(0,20);
  }
  console.log(orderAlphabetically(movies));
// Iteration 4: All rates average - Get the average of all rates with 2 decimals
const ratesAverage = (films) => {
    let sum = films.reduce((acc, current)=>{
        if(!current.rate){
            return acc;
        }
      return acc += current.rate
    }, 0);
    if(films.length === 0){
        return 0;
    }
    return +(sum/films.length).toFixed(2)
    }
  
  console.log(ratesAverage(movies))
// Iteration 5: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = (films) => {
    const dramas = films.filter((film) => film.genre.includes("Drama"))
      return ratesAverage(dramas);
  }
  console.log(dramaMoviesRate(movies))

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
const correctDuration = (duration) => {
    let time = duration.split(" ");
    let hasHours = duration.includes("h");
    let hasMinutes = duration.includes("min");
    if(hasHours && hasMinutes){
      return  Number(time[1].split("min")[0]) + Number(time[0].split("h")[0]) * 60;
    } else if(hasHours){
      return Number(time[0].split("h")[0]) * 60;
    }else if (hasMinutes){
      return Number(time[0].split("min")[0])
    }
  }
  
  const turnHoursToMinutes= (films) => {
    const newFilms = films.map(film => {
      let m = {...film} 
      m.duration = correctDuration(m.duration)
      return m
    })
    return newFilms
  }
  console.log(turnHoursToMinutes(movies))

// BONUS Iteration: Best yearly rate average - Best yearly rate average
const bestYearAvg = (films) => {
    if(films.length === 0) {
        return null;
    }
    const orderedFilms = orderByYear(films);
    let bestAvg = 0;
    let bestYear = 0;
    let currTotal = 0;
    let filmsInYear = 0;
    let previousYear = 0;
    orderedFilms.forEach(film =>{
       
      if(film.year !== previousYear){
        let currAvg = currTotal/filmsInYear
        if(currAvg > bestAvg){
          bestAvg = currAvg
          bestYear = previousYear
        }
       
        filmsInYear = 0;
        currTotal =0;
        previousYear = film.year
      }
  
      currTotal += film.rate
      filmsInYear +=1  
    })
  // to check the last year separately
    let currAvg = currTotal/filmsInYear
    if(currAvg > bestAvg){
      bestAvg = currAvg
      bestYear = previousYear
    }
    return `The best year was ${bestYear} with an average rate of ${bestAvg}` ;
  }
