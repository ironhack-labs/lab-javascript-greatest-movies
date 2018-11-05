// Turn duration of the movies from hours to minutes
function turnHoursToMinutes(duration) {
    let movie = duration.map(element => {
        let durationToMinutes = 0;
        
        if(element.duration.includes('h') && element.duration.includes('min')) {
          let hoursAndMinutes = element.duration.replace('h','').replace('min','').split(' ')
          durationToMinutes = 60 * parseInt(hoursAndMinutes[0]) + parseInt(hoursAndMinutes[1])
        }

        else if(element.duration.includes('h')){
          let justHours = element.duration.replace('h', '');
          durationToMinutes = justHours * 60;
        }

        else {
          let justMinutes = element.duration.replace('min', '');
          durationToMinutes = justMinutes * 1;
        }
        
        return {
            title: element.title, 
            year: element.year, 
            director: element.director, 
            duration: durationToMinutes, 
            genre: element.genre, 
            rate: element.rate
        };
      })

    return movie;
}

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
      }
]

// Get the average of all rates with 2 decimals 
function ratesAverage(ratings) {
    let rate = 0;

    ratings.map(element => {rate = rate + element.rate})

    return parseFloat((rate / ratings.length).toFixed(2));
}

// Get the average of Drama Movies
function dramaMoviesRate(ratings) {
    
}

// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
