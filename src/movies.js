// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

const getAllDirectors = arr =>{
	
	let directorsArray = arr.map(function(movie){return movie.director})
	return directorsArray
	
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

const howManyMovies = arr =>{
	let result = arr.filter(function(movie){return movie.director == 'Steven Spielberg' && movie.genre.includes('Drama')})
	return result.length
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

const ratesAverage = arr => {
	const reducer = (accumulator, item) => { 
		if (item.rate){
			return accumulator + item.rate}
		else{
			return accumulator + 0}
	}

	const total = arr.reduce(reducer, 0)

	if (arr.length==0) {
		return 0
	}
	else{
		return Number((total/arr.length).toFixed(2))}

}

// Iteration 4: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = arr => {
	const reducer = (accumulator, item) => {
		if (item.genre.includes('Drama')){ 
		
			return accumulator + item.rate}

		else{
			return accumulator + 0}
	
	}

		let newArray = []
		arr.map(function(movie){if (movie.genre.includes('Drama')){newArray.push(movie)}})

		const total = newArray.reduce(reducer, 0)

			if (newArray.length==0) {
				return 0
			}

			else{
				return Number((total/newArray.length).toFixed(2))}

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = arr => {

	let sortedArray = [...arr]

	sortedArray.sort(function(a, b){
		if (a.year == b.year){
			return -1
		}
		else{
			return  a.year - b.year
	}
	})
	return sortedArray
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = arr =>{

	let titlesArray = arr.map(function(movie){return movie.title})

	titlesArray.sort(function(a,b){
		if (a < b){
			return -1
		}
	})

	return titlesArray.slice(0,20)
	
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
