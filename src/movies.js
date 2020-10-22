
// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(array){

    const Directors = array.map(movie => { 
    const container = movie.director
	return container})
	
    return Directors
    } 

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(array){

	const counter = array.filter(element => 
		element.director === "Steven Spielberg" && element.genre.includes("Drama")
	)
	return counter.length
}


// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(array){

	if((array.length === 0) || movies.rate === "") {
		return 0
		}
		const Ratings = array.map(movies => {
			const container = movies.rate
			return container
		})

		let total = Ratings.reduce(function(accumulator, element) {
			return (accumulator + element)
			})
		return Math.round((total/array.length)*100)/100
		}

		//Last test!!!???
		//Por qué no funciona sin *100/100

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array){

    const filteredDramas = array.filter( item =>
    item.genre.includes('Drama')
	)
	
    if (filteredDramas.length === 0){
    return 0
	}
	
    const ratings = filteredDramas.map(movies => { 
    const container = movies.rate
    return container})

    let total = ratings.reduce(function(sum, item){
    return sum + item
	})
	
    return Math.round((total/filteredDramas.length)*100)/100
    } 

	//if después de declarar la variable!!!



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = (movies) => {
    const array = movies.sort((a, b) => {
      return (b.year - a.year)
  })
  return array
  }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
