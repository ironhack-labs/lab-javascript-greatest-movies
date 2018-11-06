
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

// Get the average of all rates with 2 decimals 
function ratesAverage(ratings) {
    let rate = 0;

    ratings.map(element => {rate += element.rate})

    return parseFloat((rate / ratings.length).toFixed(2));
}

// Get the average of Drama Movies
function dramaMoviesRate(ratings) {
    let dramaRatings = 0;
    let dramaCount = 0;

    let movies = ratings.filter(element => {
        if(element.genre.includes("Drama")) {
            dramaRatings = dramaRatings + element.rate;
            dramaCount++;
        }
    })

    if(dramaRatings + dramaCount == 0) {
        return undefined;
    }
    else {
        return parseFloat(dramaRatings / dramaCount).toFixed(2) * 1;
    }
}

// Order by time duration, in growing order
function orderByDuration(duration) {
    
}


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
