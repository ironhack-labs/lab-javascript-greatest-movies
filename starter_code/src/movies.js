/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 
function ratesAverage(movies){
    let averageRate = movies.reduce(function (acc, actual){
        return acc + parseFloat(Number(actual.rate));
    },0.0);

    return parseFloat((averageRate/movies.length).toFixed(2));
}
 
// Iteration 2: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies){
    let dramaMovies = movies.filter(function (movie){
        if(movie.genre.indexOf('Drama') !== -1){
            return movie;
        }
    });
    
    if(dramaMovies.length === 0){
        return 0;
    }

    return ratesAverage(dramaMovies);
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
function orderByDuration(movies){
    let orderedMovies = movies.sort(function (movieA, movieB){

        let durationMovieA, durationMovieB = 0;

        if(typeof(movieA.duration) === 'string' && typeof(movieA.duration) === 'string')
        {
            durationMovieA = (parseInt(movieA.duration.split(' ')[0]) * 60) + parseInt(movieA.duration.split(' ')[1]);
            durationMovieB = (parseInt(movieB.duration.split(' ')[0]) * 60) + parseInt(movieB.duration.split(' ')[1]);
        }else{
            durationMovieA = movieA.duration;
            durationMovieB = movieB.duration;
        }
        

        if(durationMovieA > durationMovieB){
            return 1;
        }else if (durationMovieA === durationMovieB){
            if (movieA.title > movieB.title){
                return 1;
            }else if(movieA.title === movieB.title){
                return 0;
            }else{
                return -1;
            }
            
        }else{
            return -1;
        }
    });

    return orderedMovies;
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
function howManyMovies(movies){
    let spielbergMovies = movies.filter(function (movie){
        if(movie.director.indexOf('Steven Spielberg') !== -1){
            return movie;
        }
    });

    let dramaSpielbergMovies = spielbergMovies.filter(function (movie){
        if(movie.genre.indexOf('Drama') !== -1){
            return movie;
        }
    });

    if(dramaSpielbergMovies.length === 0){
        return 0;
    }

    return dramaSpielbergMovies.length;
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies){
    let orderedMoviesByTitle = movies.sort(function (movieA, movieB){
        if (movieA.title > movieB.title){
            return 1;
        }else if(movieA.title === movieB.title){
            return 0;
        }else{
            return -1;
        }
    });

    let firstTwentyMoviesTitle = orderedMoviesByTitle.map(function (movie){
        return movie.title;
    }).slice(0,20);;

    return firstTwentyMoviesTitle;
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies){
    
    let newFormatDurationMovies = movies.map(function(movie){
        
        let newDuration = 0;
        if(movie.duration.split(' ').length > 1){
            newDuration = (parseInt(movie.duration.split(' ')[0]) * 60) + parseInt(movie.duration.split(' ')[1]);
        }else{
            if(movie.duration.indexOf('h') !== -1){
                newDuration = parseInt(movie.duration) * 60;
            }else{
                newDuration = parseInt(movie.duration);
            }
        }

        return newMovie = {
            title: movie.title,
            year: movie.year,
            director: movie.director,
            duration: newDuration,
            genre: movie.genre,
            rate: movie.genre
        };
    });

    return newFormatDurationMovies;
}



// BONUS Iteration: Best yearly rate average - Best yearly rate average
function bestYearAvg(movies){
	
	let yearRates = [];

    movies.forEach(function(movie){
		
		if(yearRates.length === 0){
			yearRates.push([movie.year, movie.rate]);
		}else{
		
		for(let i = 0; i < yearRates; i++){
			if(yearRates[i].indexOf(movie.year) !== -1){
				yearRates[i].push(movie.rate);
			}else{
				yearRates.push([movie.year, movie.rate]);
			}
		}
		}
	});
	

    return yearRates;
}
