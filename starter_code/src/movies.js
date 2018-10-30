/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) { 							//declaramos la función
	return movies.map(function(movies) { 						//map siempre devuleve un return
		var newDuration =''
		if(!movie.duration.includes('h')){						//comprobamos las horas
		}else if (!moveBy.duration,includes('min')){			//comprobamos los min
			newDuration= parseInt(movie.duration) *60
		} else {
			var durationArray = movie.duration.split(' ')		//el split divide por espaciado
			newDuration = parseInt(durationArray[0])*60 + parseInt(durationArray[1])
		}
		return Object.assign({}, movie, {duration: newDuration}) //nos dice el nombre y nos cambia la duración inicial por la nueva duración sin sustituir el objet
	})
	}

// Get the average of all rates with 2 decimals
function ratesAverage(movie){

}


// Get the average of Drama Movies


// Order by time duration, in growing order 


// How many movies did STEVEN SPIELBERG

// Order by title and print the first 20 titles

// Best yearly rate average
