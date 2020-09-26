// Iteration 1: All directors? - Get the array of all directors.
const getAllDirectors = function (movies) {
    const directors = movies.map(movie => movie.director);

    return directors;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
const getAllDirectorsClean = function (movies) {
    const dirtyArray = getAllDirectors(movies);
    return dirtyArray.filter((director, index) => dirtyArray.indexOf(director) === index);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies = function (movies) {
    const spielbergMovies = movies.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'));

    return spielbergMovies.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
const ratesAverage = function (movies) {
    const totalRatings = movies.reduce((sum,elem) => {
        if (elem.rate) {
            return sum += elem.rate;            
        } else {
            return sum += 0;
        }
    },0);

    if (totalRatings === 0) {
        return 0;
    }

    const averageRatings = totalRatings/movies.length;

    return Number(averageRatings.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = function (movies) {
    const dramaMovies = movies.filter(movie => movie.genre.includes('Drama'));

    return ratesAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = function (movies) {
    const orderedMovies = movies.slice().sort((a, b) => {
        if (a.year > b.year){
            return 1;
        }

        if (a.year < b.year){
            return -1;
        }

        if (a.year === b.year) {
            if (a.title > b.title){
                return 1;
            }
    
            if (a.title < b.title){
                return -1;
            }
            
            return 0;
        }
    });

    return orderedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = function (movies) {
    const orderedMovies = movies.slice().sort((a, b) => {
        if (a.title > b.title){
            return 1;
        }

        if (a.title < b.title){
            return -1;
        }
        
        return 0;
    });

    const orderedTitles = orderedMovies.map(movie => movie.title);

    return orderedTitles.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
const turnHoursToMinutes = function (movies) {
    const newFormat = movies.map(movie => {
        let hours = movie.duration.match(/([0-9]+)h/);		
		if (hours === null) {
			hours = 0
		} else {
			hours = hours[1];
		}

        let minutes = movie.duration.match(/([0-9]+)min/);
		if (minutes === null) {
			minutes = 0
		} else {
			minutes = minutes[1];
		}

        const totalMinutes = Number(hours)*60 + Number(minutes);
        return {
            title: movie.title,
            year: movie.year,
            director: movie.director,
            duration: totalMinutes,
            genre: movie.genre,
            rate: movie.rate
        }
    });

    return newFormat;
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
const bestYearAvg = function (movies) {
	let topRatedYear = '';
	let topScore = 0;

    if (movies.length == 0) {
        return null;
    }

    const yearsRate = movies.map(movie => {
        return {
            year: movie.year,
            rate: movie.rate,
        };
    });

    const groupedYears = yearsRate.reduce(function (r, a) {
        r[a.year] = r[a.year] || [];
        r[a.year].push(a.rate);
        return r;
    }, Object.create(null));

	for (let key in groupedYears) {
		let totalReviews = groupedYears[key].reduce((sum,elem) => {
            return sum += elem;
		},0);

		groupedYears[key] = totalReviews/groupedYears[key].length;

		if (groupedYears[key] > topScore) {
			topRatedYear = key;
			topScore = groupedYears[key];
		} else if (groupedYears[key] === topScore && Number(key) < Number(topRatedYear)) {
			topRatedYear = key;
			topScore = groupedYears[key];
		}
	}

    return `The best year was ${topRatedYear} with an average rate of ${topScore}`;
}