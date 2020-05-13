// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movieArray) {
    return movieArray.map(movie => movie.director)
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movieArray) {
    const mappedArray = movieArray.map(movie => movie.director)
		return mappedArray.filter((a,b) => mappedArray.indexOf(a) === b)
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(myArry) {
    return myArry.filter(dramaMovies => {
            if (dramaMovies.director === "Steven Spielberg" && dramaMovies.genre.includes("Drama")) {
                return true
            }
        }).length

}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(myArray) {
    if ( myArray.length === 0) {
        return 0
    }
    const totalRates = myArray.reduce((acc,curr) => {
        return acc + (curr.rate || 0)
    },0)
    return Math.round((totalRates / myArray.length) * 100) / 100
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(myArray) {
    const totalDramaArray = myArray.filter(dramaMovies => dramaMovies.genre.includes("Drama"))
    return ratesAverage(totalDramaArray)
    
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(myArray) {
    const newArray = Array.from(myArray.sort((a, b) => {
        if (a.year === b.year) {
            const stringOrderArray = [a.title,b.title]
            stringOrderArray.sort()
            if (stringOrderArray[0] === a.title) {
                return -1
            }
            return 1
        }
        return a.year - b.year		
    }))
    return newArray
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(myArray) {
	const titleArray = []
	for (const movie of myArray) {
		titleArray.push(movie.title.toLowerCase());
	}
	titleArray.sort()
	return titleArray.slice(0,20)
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
//Had a lot of trouble with copying the array. Jasmine kept telling me I was modifying the original array property.
//Had to use JSON.parse(JSON.stringify(...))
function turnHoursToMinutes(myArray) {
    const newArray = JSON.parse(JSON.stringify(myArray))
    return newArray.map(movie => {
			const time = movie.duration.split(/[\s\D]+/)
			if (movie.duration.indexOf("h")>0)
			{
				movie.duration =  Number(time[0]*60) + Number(time[1])
			}
			else
			{
				movie.duration = Number(time[0])
			}
			return movie
		})
}
// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

function bestYearAvg(myArray) {
    if (myArray.length === 0) {
        return null
    }

    const moviesByYear = {}
    let highestRatingYear = 0
    let currentHighestAvgRating = 0
    for (element of myArray) {
        if (!moviesByYear[element.year]) {
            const newObject = {}            
            newObject.movies = myArray.filter(movie => movie.year === element.year)
            newObject.avgRate = ratesAverage(newObject.movies)
            moviesByYear[element.year] = newObject;
            if(newObject.avgRate > currentHighestAvgRating) {
                highestRatingYear = element.year
				currentHighestAvgRating = newObject.avgRate
            }
            else if (newObject.avgRate === currentHighestAvgRating) {
                if (element.year < highestRatingYear) {
                    highestRatingYear = element.year
				    currentHighestAvgRating = newObject.avgRate
                }
            }
        }
    }
		//return moviesByYear
    return `The best year was ${highestRatingYear} with an average rate of ${moviesByYear[highestRatingYear].avgRate}`
}