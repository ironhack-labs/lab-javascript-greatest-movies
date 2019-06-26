var movies = [
  {
    title: 'The Shawshank Redemption',
    year: '1994',
    director: 'Frank Darabont',
    duration: '2h 22min',
    genre: ['Crime', 'Drama'],
    rate: '9.3'
  },
  {
    title: 'The Godfather',
    year: '1972',
    director: 'Francis Ford Coppola',
    duration: '2h 55min',
    genre: ['Crime', 'Drama'],
    rate: '9.2'
  },
  {
    title: 'The Godfather: Part II',
    year: '1974',
    director: 'Francis Ford Coppola',
    duration: '3h 22min',
    genre: ['Crime', 'Drama'],
    rate: '9.0'
  },
  {
    title: 'The Dark Knight',
    year: '2008',
    director: 'Christopher Nolan',
    duration: '2h 32min',
    genre: ['Action', 'Crime', 'Drama', 'Thriller'],
    rate: '9.0'
  },
  {
    title: '12 Angry Men',
    year: '1957',
    director: 'Sidney Lumet',
    duration: '1h',
    genre: ['Crime', 'Drama'],
    rate: '8.9'
  },
  {
    title: 'Schindler\'s List',
    year: '1993',
    director: 'Steven Spielberg',
    duration: '15min',
    genre: ['Biography', 'Drama', 'History'],
    rate: '8.9'
  }
];

/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes (newObj) {
  const movies = JSON.parse(JSON.stringify(newObj));
    return movies.map((element) => {
      if (!element.duration.includes(' ') && element.duration.includes('h')) {
        let hoursOnly = parseInt(element.duration) * 60;
          element.duration = hoursOnly;
          return element;
        }
      else if (!element.duration.includes(' ') && element.duration.includes('min')) {
        let minutesOnly = parseInt(element.duration);
          element.duration = minutesOnly;
          return element;
      }
      else if (element.duration.includes(' ')) {
        let newDuration = element.duration.split(' ');
          let hoursAndMinutes = parseInt(newDuration[0]) * 60 + parseInt(newDuration[1]);
            element.duration = hoursAndMinutes;
            return element;
      } return element;
    }
  )
 };
 
//  console.log(turnHoursToMinutes(movies));


// Get the average of all rates with 2 decimals

let ratesTransformed = movies.map((movie) => {
  let rateNumber = parseFloat(movie.rate).toFixed(2);
  movie.rate += rateNumber / movies.length;
  return movie.rate
})

console.log(ratesTransformed);

// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
