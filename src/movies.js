// Iteration 1: All directors? - Get the array of all directors.
//We need to get the array of all directors. Since this is a warm up, we will give you a hint: you have to map through the array of movies and get all the directors into one array as a final result. Go ahead and create a function named getAllDirectors() that receives an array of movies as an argument and returns a new (mapped array)

function getAllDirectors(movies) {
  return movies.map(function(movie){
  return movie.director;
})
}


// -----------Iteration 2: Steven Spielberg. The best?
// One of the most famous directors in cinema is Steven Spielberg, and he has some really awesome drama movies that are on our list, but we want to know how many of them are there.

// Go ahead and create a howManyMovies() function that receives an array as a parameter and filter  the array so we can have only the drama movies where Steven Spielberg is the director.


const howManyMovies = arr =>{
	let result = arr.filter(function(movie){return movie.director == 'Steven Spielberg' && movie.genre.includes('Drama')})
	return result.length
}

// ---------- Iteration 3: All rates average
// These are the best movies based on their rates, so supposedly all of them have a remarkable rate. In this iteration, we want to know the average rate of all of them and display it on the console. Create a ratesAverage() function that receives an array as a parameter and solves the challenge.
// The rate must be returned rounded to 2 decimals!
//  aybe you want to "reduce" the data to a single value. 


const ratesAverage = arr => {
	const reducer = (accumulator, item) => { 
		if (item.rate){
			return accumulator + item.rate}
		else{
			return accumulator + 0}
	}



// Iteration 4: Drama movies - Get the average of Drama Movies

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
