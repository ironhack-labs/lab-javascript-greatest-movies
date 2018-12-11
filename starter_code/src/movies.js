
 //eslint no-restricted-globals: 'off' 
 function turnHoursToMinutes(movieArray) {
	return movieArray.map(function(movie) {
		let duration = movie.duration;
		if (duration.includes('h')) {
			let indexEnd = duration.indexOf('h');
			let indexStart = 0;
			let hours = Number(duration.slice(indexStart, indexEnd));
		} else {
			let hours = 0;
		}
		if (duration.includes('min')) {
			let indexEnd = duration.indexOf('min');
			let indexStart = indexEnd - 2;
			let minutes = Number(duration.slice(indexStart, indexEnd));
		} else {
			let minutes = 0;
		}
		let durationSum = (hours * 60) + minutes;
		return Object.assign({}, movie, { duration: durationSum });
    });
}
// Turn duration of the movies from hours to minutes 


// Get the average of all rates with 2 decimals 
function ratesAverage(arrMovies){
  let ratesmovies = [];
  let finalAvg;
     arrMovies.map(function(movie){
      ratesmovies.push(parseFloat(movie.rate));
      rateTotal = ratesmovies.reduce(function(prev,curr){
        return prev + curr;
      })
     let ratesAvg = rateTotal/ratesmovies.length; 
     finalAvg = parseFloat(ratesAvg.toFixed(2));
  })
  return finalAvg;
}
// Get the average of Drama Movies

function dramaMoviesRate(arrayMovies){
  let dramaResult;
  let dramaSection = arrayMovies.filter(function(movie){
    let genre = movie.genre;
      return genre.includes("Drama")
      })
      .map(function(movie){
      return parseFloat(movie.rate);
      })
      dramaRate = dramaSection.reduce(function(prev,curr){
        prev = prev || 0;
        curr = curr || 0;
        return prev + curr;
      },0)
      let dramaAvg = dramaRate/dramaSection.length
   dramaResult = parseFloat(dramaAvg.toFixed(2));
   dramaResult = dramaResult || undefined
   return dramaResult;
}
// Order by time duration,s in growing order
function orderByDuration(durationMovies){
  let orderArr = durationMovies.sort(function(a,b){
    let value1 = a.duration;
    let value2 = b.duration;
    let value3 = a.title;
    let value4 = b.title;
    if (value1 < value2) { return -1}
    if (value1 > value2) {return 1}
    if (value1 = value2 && value3 < value4){return -1}
    if (value1 = value2 && value3 > value4){return 1}
    })
  return orderArr
}
// How many movies did STEVEN SPIELBERG

function howManyMovies(spielbergMovies){
  if (spielbergMovies == ""){return undefined}
  else {
  let howFilms = 0;
  let arrDrama = spielbergMovies.filter(function(movie){
    return movie.director === "Steven Spielberg"
  }).filter(function(filmSpielberg){
    let genre = filmSpielberg.genre;
    return genre.includes("Drama")
    })
    if (arrDrama != 0){
      howFilms = arrDrama.length
    }
    else  arrDrama = undefined
  return `Steven Spielberg directed ${howFilms} drama movies!`
}
}
// Order by title and print the first 20 titles
function orderAlphabetically(listMovies){
  let listOrdered = listMovies.sort(function(a,b){
    value1 = a.title;
    value2 = b.title;
    if (value1 < value2) {return -1}
    if (value1 > value2) {return 1}
  }).map(function(movie){
    return movie.title
  }).slice(0, 20)
  return listOrdered
}

// Best yearly rate average

function bestYearAvg (movies){
  let avgYear = {};
  let arrKeys = [];
  movies.forEach(function(movie){
    switch (avgYear[movie.year]){
      case undefined:
      avgYear[movie.year]= [movie.rate]
      break
      default: avgYear[movie.year].push(movie.rate)
    }
  })
  arrKeys = Object.keys(avgYear);
  let arrTotal = arrKeys.forEach(function(year){
   let arrReduce =  avgYear[year];
   arrReduce.reduce(function(acc,curr){ 
     let value1 = Number(acc);
     let value2 = Number(curr);
    return value1+value2},0)
  })
  console.log(arrTotal)
  //console.log(avgYear)
}
