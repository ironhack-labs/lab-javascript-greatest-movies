/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(arrayInHours){
    let arrayInMinutes = arrayInHours.map((element)=>{
      let duration = 0;
      (element.duration.includes("h")) ? duration += parseInt(element.duration.substring(0,
        element.duration.indexOf("h")))*60 : duration;
      (element.duration.includes("min")) ? duration += parseInt(element.duration.substring(
          element.duration.indexOf(" "), element.duration.indexOf("min"))) : duration;
      return {title:element.title, 
              year:element.year, 
              director:element.director, 
              duration: duration, 
              genre:element.genre, 
              rate:element.rate};
    });
  return arrayInMinutes;
}

// Get the average of all rates with 2 decimals 
function ratesAverage(arrayToCalcAverage){
    let average = arrayToCalcAverage.reduce((accumulator,current)=>{
        return ((current.rate) ?  accumulator+parseFloat(current.rate) : accumulator);
      },0);
  return parseFloat((average/arrayToCalcAverage.length).toFixed(2));
}

// Get the average of Drama Movies
function dramaMoviesRate(arrayToCalcAverage){
    let average = ratesAverage(arrayToCalcAverage.filter((movie)=>{
        return ((movie.genre.indexOf("Drama")>=0))
    }));
    return ((average) ?  average : undefined);
}

// Order by time duration, in growing order
function orderByDuration(arrayToOrder){
    return ((arrayToOrder)).sort((a, b)=>{
        return ((parseFloat(a.duration) - parseFloat(b.duration))==0) ? 
        ((a.title < b.title) ? -1: 1) : (parseFloat(a.duration) - parseFloat(b.duration));
    });
}

// How many movies did STEVEN SPIELBERG
function howManyMovies(arrayToFilter){
    return (arrayToFilter.length) ? (stevenMovies = arrayToFilter.filter((movie)=>{
             return ((movie.director == "Steven Spielberg")&&(movie.genre.indexOf("Drama")>=0));
        }), (stevenMovies.length==0) ? "Steven Spielberg directed 0 drama movies!":
             "Steven Spielberg directed "+stevenMovies.length+" drama movies!"): undefined;
}

// Order by title and print the first 20 titles
function orderAlphabetically(arrayToOrder){
    let counter = -1;
    let orderedArray = arrayToOrder.sort((a, b)=>{
        return (a.title < b.title) ? -1: 1;
    }).map((movie)=>{
        return movie.title;
    }).filter((movie)=>{
        counter++;
        return counter<20;
    });
    return orderedArray;
}
console.log(orderAlphabetically(movies));
// Best yearly rate average
function bestYearAvg(arrayBestByYear){
    if(arrayBestByYear.length){
      let years = [arrayBestByYear[0].year];
      let averageByYears = new Array();
      arrayBestByYear.forEach((movie)=>{
        (!years.includes(movie.year)) && years.push(movie.year);
      });
      for(let i = 0; i<years.length;i++){
        let numMoviesOfYear = 0;
        let rateByYear = arrayBestByYear.reduce((accumulator,current)=>{
            return (current.year === years[i]) ? 
            (numMoviesOfYear++, accumulator+=parseFloat(current.rate)) : accumulator;
        },0);
        averageByYears.push(rateByYear/numMoviesOfYear);
      }
      while((averageByYears.indexOf(Math.max(...averageByYears),averageByYears.indexOf(Math.max(...averageByYears))+1))>0){
        if(years[averageByYears.indexOf(Math.max(...averageByYears))]>
           years[averageByYears.indexOf(Math.max(...averageByYears),averageByYears.indexOf(Math.max(...averageByYears))+1)]){
          years.splice(averageByYears.indexOf(Math.max(...averageByYears)),1);
          averageByYears.splice(averageByYears.indexOf(Math.max(...averageByYears)),1);
        }else{
          years.splice(averageByYears.indexOf(Math.max(...averageByYears),averageByYears.indexOf(Math.max(...averageByYears))+1));
          averageByYears.splice(averageByYears.indexOf(Math.max(...averageByYears),averageByYears.indexOf(Math.max(...averageByYears))+1));
        }
      }
      return "The best year was "+
        years[averageByYears.indexOf(Math.max(...averageByYears))]+
        " with an average rate of "+Math.max(...averageByYears);
    }else{
        return undefined;
    }
}