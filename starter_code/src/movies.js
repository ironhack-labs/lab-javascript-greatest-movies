/* eslint no-restricted-globals: 'off' */

// let movies = [{
//     title: 'The Lord of the Rings: The Two Towers',
//     year: '2002',
//     director: 'Peter Jackson',
//     duration: '2h',
//     genre: ['Adventure', 'Drama', 'Fantasy'],
//     rate: '8.7'
// }
// ,
//   {
//     title: 'Star Wars: Episode VII - The Force Awakens',
//     year: '2015',
//     director: 'J.J. Abrams',
//     duration: '2h 16min',
//     genre: ['Action', 'Adventure', 'Fantasy', 'Sci-Fi'],
//     rate: '8.1'
//   },
//   {
//     title: 'The Shawshank Redemption',
//     year: '1994',
//     director: 'Frank Darabont',
//     duration: '2h 22min',
//     genre: ['Crime', 'Drama'],
//     rate: '9.3'
//   }]

// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(moviesList) {
    let newList = [];
  
    moviesList.forEach(movie => {
      let newMovie = {
        ...movie
      };
  
      let duration = movie.duration.split(" ");
      //Turns into number and reset it.
      newMovie.duration = 0;
  
      if (duration === null) {
        minutes = 0;
      }
      //If it only has hours
      else if (duration[0].includes('h') && duration.length === 1) {
        newMovie.duration += parseInt(duration[0]) * 60;
      }
      //More than 1 hour and also has minutes
      else if (duration.length > 1) {
        newMovie.duration += parseInt(duration[0]) * 60 + parseInt(duration[1]);
      }
      //Less than 1 hour and only has minutes
      else {
        newMovie.duration += parseInt(duration[0]);
      }
  
      newList.push(newMovie);
    });
    return newList;
  }

// Get the average of all rates with 2 decimals 
function ratesAverage(movies){
    let avg = parseFloat((movies.reduce(function(acc,val){
        let c = parseFloat(val.rate) ? parseFloat(val.rate) : 0
        return (acc + c)
    }, 0)/movies.length))
    avg = Math.round(avg*100)/100
    return avg
}

// Get the average of Drama Movies
function reduceMovies(movies, key, value){
    let movies2 = movies.slice().filter(el => el[key].indexOf(value) !== -1)
    return movies2
}

function dramaMoviesRate(movies){
    return ratesAverage(reduceMovies(movies,'genre','Drama')) ? ratesAverage(reduceMovies(movies, 'genre', 'Drama')) : undefined
}

// Order by time duration, in growing order
function orderByDuration(movies){
    let movies2 = movies.sort(function(a,b){
        if(a.duration>b.duration){
            return 1
        } else if(a.duration < b.duration){
            return -1
        } else {
            if(a.title < b.title){
                return -1
            } else {
                return 1
            }
        }
    })
    return movies2
}
// How many movies did STEVEN SPIELBERG
function howManyMovies(movies){
    if(movies.length === 0) return undefined;
    console.log("woooo"+movies)
    let c = reduceMovies(reduceMovies(movies, 'genre', 'Drama'), 'director', 'Steven Spielberg')
    console.log("wuuuu"+c.length);
    console.log(">>>>>>>>>>>>>>>>>>Steven Spielberg directed " + c.length + " drama movies!")
    return c.length !== 0 ?  "Steven Spielberg directed " + c.length + " drama movies!" : "Steven Spielberg directed 0 drama movies!"

}
howManyMovies([
    {
      director: 'James McTeigue',
      genre: ['Action', 'Drama', 'Thriller']
    }
  ])

// Order by title and print the first 20 titles
function orderAlphabetically(movies){
    let movies2 = movies.slice();
    return movies2 = movies2.sort((a,b) => {
        if(a.title < b.title){
            return -1
        } else {
            return 1
        }
    }).slice(0,20).map((el,i) => {
        return el.title
    })
}

// Best yearly rate average
function bestYearAvg(movies){
    if(movies.length){
        let movies2 = movies.slice();
        let yearAvg = [];
        movies2.sort((a,b) => { return a.year < b.year ? -1 : 1})
        movies2.forEach((el,i) => {
            console.log(el.year)
            return yearAvg[i] = { year : el.year, rate : ratesAverage(reduceMovies(movies2, 'year', el.year))}
        });
        let winner = yearAvg.sort((a,b) => {return a.rate < b.rate ? -1 : 1})[yearAvg.length-1];
        console.log(winner, winner.year);
        return `The best year was ${winner.year} with an average rate of ${winner.rate}`
    }
    return
}

