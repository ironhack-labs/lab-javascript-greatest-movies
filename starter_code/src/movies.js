/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
const turnHoursToMinutes = (data) => {
  if (!data || data.length ===0) return [];
  
  return data.map(item => {
    
    function movie(duration) {
      return {
        title: item.title,
        year: item.year,
        director: item.director,
        duration: duration,
        genre: item.genre,
        rate: item.rate
      }
    }
    
    let hours = parseInt(item.duration[0]) * 60;
    let minutes = parseInt(item.duration.replace(/h|min/g, '').slice(2));
    
    if (item.duration === 5) return movie(minutes);
    
    return item.duration.length === 2 ? movie(hours) : movie(hours + minutes);
  });
}

console.log(turnHoursToMinutes(movies));

// Get the average of all rates with 2 decimals 
const ratesAverage = (data) => {
  let result = data.reduce((total, item) => total + parseFloat(item.rate), 0) / data.length;
  
  return parseFloat(result.toFixed(2));
}

console.log(ratesAverage(movies));

// Get the average of Drama Movies
const dramaMoviesRate = (data) => {
  let dramaMovies = data.filter(item => {
    for (let i = 0; i < data.length; i++) {
      if (item.genre[i] === 'Drama') return item;
    }
  });
  return dramaMovies;
}

console.log(dramaMoviesRate(movies));

// Order by time duration, in growing order
const orderByDuration = (data) => {
  let orderedByTitle = data.sort((a, b) => {
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;
    return 0;
  });

  return orderedByTitle.sort((a, b) => a.duration - b.duration);
}

console.log(orderByDuration(turnHoursToMinutes(movies)));

// How many movies did STEVEN SPIELBERG
const howManyMovies = (data) => {

  let dramaMovies = data.filter(item => {
    for (let i = 0; i < data.length; i++) {
      if (item.genre[i] === 'Drama') return item;
    }
  });

  return dramaMovies.filter(item => item.director === 'Steven Spielberg');
}

console.log(howManyMovies(movies))

// Order by title and print the first 20 titles
const orderAlphabetically = (data) => {

  let firstTwentyMovies = new Array();

  for (let i = 0; i < 20; i++) {
    firstTwentyMovies.push(data[i]);
  }

  return firstTwentyMovies.sort((a, b) => {
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;
    return 0;
  });
}

console.log(orderAlphabetically(movies));

// Best yearly rate average
const bestYearForCinema = (data) => {

  function yearAvarege(movies, year) {
    
    let yearMovie = movies.filter(item => item.year === year.toString());

    let movieRate = yearMovie.reduce((total, item) => {
      return total + parseFloat(item.rate);
    }, 0) / yearMovie.length;

    return [year, parseFloat(movieRate.toFixed(2))];
  }

  let allYearsAndRate = data.map(item =>{

    for (let i = 1900; i < 2019; i++) {
      if (item.year === i.toString()) {
        return yearAvarege(data, i)
      }
    }
  });

  let ordered = allYearsAndRate.sort();

//   ar arr = ['foo', 'bar', 'foo'];
// var novaArr = arr.filter((este, i) => arr.indexOf(este) === i);
// console.log(novaArr); //dá ['foo', 'bar']

  return ordered.filter((item, index) => item.year == index);

  // return ordered.filter(item => {
  //   for (let i = 1900; i < 2019; i++) {
  //     if (item.year == item.year) return item.year;
  //   }
  // });


  

  // let yearAndDuration = data.map(item => { 
  //   return {
  //     year: item.year,
  //     rate: item.rate,
  //   }
  // });

  // return allYearsAndRate;

}

console.log(bestYearForCinema(movies));
