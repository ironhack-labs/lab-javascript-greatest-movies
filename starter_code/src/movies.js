/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 

function ratesAverage(movies){
	
	var acum=movies.reduce((acum,movie)=>acum+parseFloat(movie.rate),0);
	var ret=acum/movies.length
	
	return (ret);
}

function dramaMoviesRate(movies){
	
	var dramaMovies=movies.filter(movie=>movie.genre.includes('Drama'));
	//alert(JSON.stringify(dramaMovies));
	var acum=dramaMovies.reduce((acum,movie)=>
	{
		if (movie.rate===""){
			movie.rate='0.0';
			
		}
		//if (movies.length<5)alert('coco '+movie.rate);
		return acum+parseFloat(movie.rate)//remember to user return when using es6 for several instructions
	},0);
	
	if (dramaMovies.length==0) return 0;
	var ret=acum/dramaMovies.length;
	if (movies.length<5)alert('len '+dramaMovies.length+' acum '+acum+' ret '+ret+' '+JSON.stringify(movies));
	return (parseFloat(ret.toFixed(2)));
}
 
// Iteration 2: Drama movies - Get the average of Drama Movies


// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)


// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct


// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
