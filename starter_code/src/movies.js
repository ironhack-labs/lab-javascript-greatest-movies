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


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
