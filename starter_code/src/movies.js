/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
    
     function turnHoursToMinutes(movies){
      return movies.map( original => {
        let movie = {...original}
        if (!movie.duration) movie.duration = ""
        let min = 0
        movie.duration.split(" ").forEach( el => {
          if( el.includes('h')) min += parseInt(el) * 60
          if ( el.includes('min')) min += parseInt(el)
        })
        movie.duration = min
        return movie
      })
    }


// Get the average of all rates with 2 decimals 

const ratesAverage = (arr) => {
    let arrRate = arr.map((val) => {
      return val.rate
    })
    let promedy = arrRate.reduce((acc, val) => {
      return acc + Number(val)
    }, 0)
    return promedy / arr.length
  }


// Get the average of Drama Movies

const dramaMoviesRate = (arr) => {
    let dramaMovies = arr.filter(movie => (movie.genre.includes('Drama')))
    if ( dramaMovies.length === 0 ) return undefined
    let averageDramaMovies = dramaMovies.map(movie => movie.rate)
    let reduceDramaMovies = averageDramaMovies.reduce((acc, rate) => {
      return acc + Number(rate)
    }, 0)
    let rate = reduceDramaMovies / dramaMovies.length 
    return Number(rate.toFixed(2))
  }


// Order by time duration, in growing order

const orderByDuration = (arr) => {
    arr.sort((a, b) => (a.duration !== b.duration) ? (a.duration - b.duration) : a.title.localeCompare(b.title))
    return arr
  }


// How many movies did STEVEN SPIELBERG

const howManyMovies = (arr) => {
    if (arr.length === 0) return undefined
    let filterArr = arr.filter(movie => (movie.genre.includes('Drama')) && (movie.director === 'Steven Spielberg'))
    return `Steven Spielberg directed ${filterArr.length} drama movies!`
  }


// Order by title and print the first 20 titles

const orderAlphabetically = arr => {
    return arr.map((el) => el.title).sort().slice(0, 20)
  }


// Best yearly rate average

function bestYearAvg(movies) {
    if (movies.length == 0) {
      return undefined;
    } else if (movies.length == 1) {
      return `The best year was ${movies[0].year} with an average rate of ${
        movies[0].rate
      }`;
    } else {
      let newArr = [];
      movies.sort(function(a, b) {
        if (a.year < b.year) {
          return -1;
        } else if (a.year > b.year) {
          return 1;
        }
      });
  
      movies.forEach(item => {
        newArr[item.year] = [];
      });
  
      movies.forEach(item => {
        newArr[item.year].push({ rate: item.rate });
      });
      let yearlyAverage = [];
      yearlyAverage = newArr.map(item => {
        return { rate: ratesAverage(item) };
      });
  
      let topRate = 0;
      let topYear = 0;
  
      yearlyAverage.forEach((item, index) => {
        if (item.rate > topRate) {
          topRate = item.rate;
          topYear = index;
        }
      });
      return `The best year was ${topYear} with an average rate of ${topRate}`;
    }
  }