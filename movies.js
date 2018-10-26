/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(movieArray) {
	return movieArray.map(function(oneMovie) {
		var duration = oneMovie.duration;
		// hours
		if (duration.includes('h')) {
			var indexEnd = duration.indexOf('h');
			var indexStart = 0;
			var hours = Number(duration.slice(indexStart, indexEnd));
		} else {
			var hours = 0;
		}
		// minutes
		if (duration.includes('min')) {
			var indexEnd = duration.indexOf('min');
			var indexStart = indexEnd - 2;
			var minutes = Number(duration.slice(indexStart, indexEnd));
		} else {
			var minutes = 0;
		}
		var durationRun = (hours * 60) + minutes;
		return Object.assign({}, oneMovie, { duration: durationRun });
    });
}



// Get the average of all rates with 2 decimals

function ratesAverage(avgMovies) {
     var sum = avgMovies.reduce(function(acc, b){
        return acc += b.rate

    }, 0);
    avg=sum/avgMovies.length;
    avg2=avg.toFixed(2);
    avg3=parseFloat(avg2);
    avg4 =Math.round(100*avg3)/100;
    return avg4;
}

ratesAverage(movies);


// Get the average of Drama Movies

function dramaMoviesRate(dramaMovies) {
    var onlyDrama = dramaMovies.filter(function (dramaMov) {
    return dramaMov.genre.includes("Drama");
    })
    if (onlyDrama.length>0){
        return ratesAverage(onlyDrama);
    } else{ 
        return undefined;
    }
}
dramaMoviesRate(movies);

// Order by time duration, in growing order
function orderByDuration (durationOfMovies){
    durationOfMovies.duration.sort(function (a,b) {
        if (a>b){
            return 1;
        } if (b>a){
            return -1;
        } else{
            return {
                
            };
        }
    });
}

orderByDuration(movies);

// How many movies did STEVEN SPIELBERG
function howManyMovies(moviesBySpielberg) {
    
}

// Order by title and print the first 20 titles


// Best yearly rate average
