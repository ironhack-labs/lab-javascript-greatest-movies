// Turn duration of the movies from hours to minutes
const turnHoursToMinutes = data => data.map(item => {
  
  const movie = duration => {
    return {
      title: item.title,
      year: item.year,
      director: item.director,
      duration: duration,
      genre: item.genre,
      rate: item.rate,
    }
  }
  
  let hours = parseInt(item.duration[0]) * 60;
  let minutes = parseInt(item.duration.replace(/h|min/g, '').slice(2));
  let onlyMinutes = parseInt(item.duration.replace(/min/g, ''));
  
  if (item.duration.length === 2) return movie(hours);
  if (item.duration.length === 5) return movie(onlyMinutes);
  return movie(hours + minutes);
});

// Get the average of all rates with 2 decimals 
const ratesAverage = data => {
  
  let result = data.reduce((total, item) => total + parseFloat(item.rate), 0) / data.length;
  return parseFloat(result.toFixed(2)); 
}

// Get the average of Drama Movies
const dramaMoviesRate = data => {
  
  if (!data.find(item => item.genre.includes('Drama'))) return undefined;
  
  let dramaMovies = data.filter(item => {
    for (let i = 0; i < data.length; i++) {
      if (item.genre[i] === 'Drama') return item;
    }
  });
  
  let result = dramaMovies.reduce((total, item) => total + new Number(item.rate), 0) / dramaMovies.length;
  
  return parseFloat(result.toFixed(2)); 
}

// Order by time duration, in growing order
const orderByDuration = data => {
  
  let orderedByTitle = data.sort((a, b) => {
    
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;
    return 0;
  });
  
  return orderedByTitle.sort((a, b) => a.duration - b.duration); 
}

// How many movies did STEVEN SPIELBERG
const howManyMovies = data => {
  
  if (!data || data.length === 0) return undefined;
  
  let dramaMovies = data.filter(item => {
    
    for (let i = 0; i < data.length; i++) {
      if (item.genre[i] === 'Drama') return item;
    }
  });
  
  let stevenMovies = dramaMovies.filter(item => item.director === 'Steven Spielberg')
  
  return `Steven Spielberg directed ${stevenMovies.length} drama movies!`
}

// Order by title and print the first 20 titles
const orderAlphabetically = data => {
  
  if (data.length < 20) {
    let sorted = data.sort((a, b) => {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
      return 0;
    });
    
    return sorted.map(item => item.title);
  }
  
  let ordered = data.sort((a, b) => {
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;
    return 0;
  });
  
  let justTitle = ordered.map(item => item.title);
  let firstTwentyMovies = new Array();
  
  for (let i = 0; i < 20; i++) {
    firstTwentyMovies.push(justTitle[i]);
  }

  return firstTwentyMovies;
}

// Best yearly rate average
const bestYearAvg = data => {
  if (!data || data.length === 0) return undefined;
  
  const yearAvarege = (movies, year) => {
    
    let yearMovie = movies.filter(item => item.year === year.toString());
    
    let movieRate = yearMovie.reduce((total, item) => {
      return total + parseFloat(item.rate);
    }, 0) / yearMovie.length;
    
    return {year: year, rate: parseFloat(movieRate.toFixed(2))};
  }
  
  let allYearsAndRate = data.map(item => {
    
    for (let i = 1900; i < 2019; i++) {
      if (item.year === i.toString()) {
        return yearAvarege(data, i);
      }
    }
  });
  
  let ordered = allYearsAndRate.sort();
  
  let onlyYears = ordered.filter((item, index, arr) => {
    return arr.filter(item2 => {
      if(item2 === item) return arr.pop(item2);
    });
  });

  let result = onlyYears.sort((a, b) =>  b.rate - a.rate)[0];

  return `The best year was ${result.year} with an average rate of ${Number(result.rate)}`;
}
