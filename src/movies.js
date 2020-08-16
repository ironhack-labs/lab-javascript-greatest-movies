// Iteration 1: All directors? - Get the array of all directors.
//iterate through the array of movies
//return the directors of each element in one array
//create a function getAllDirectors() that receives an array of movies as an argument and returns an new mapped array

const testArr = [
    {
      title: 'Paths of Glory',
      year: 1957,
      director: 'Stanley Kubrick',
      duration: '1h 28min',
      genre: ['Drama', 'War'],
      rate: 8.4
    },
    {
      title: 'Django Unchained',
      year: 2012,
      director: 'Quentin Tarantino',
      duration: '2h 45min',
      genre: ['Drama', 'Western'],
      rate: 8.4
    }
  ];

  function getAllDirectors(movies)
  {
    return movies.map(function(movie) {
      return movie.director
        
    })
  
  }

getAllDirectors(testArr);



// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

/*The .filter() method iterates through an array and creates a new array with all elements that pass the condition we set.

look at each element in the movies array
if Steven Spielberg is the director AND if genre contains drama, return element
count the elements of the new array*/


function howManyMovies (){

}

const howManyMovies = movies.filter(function(movie){
   return movie.director === 'Stanley Kubrick' && movie.genre.includes('Drama')
});

console.log(howManyMovies.length);


// Iteration 3: All rates average - Get the average of all rates with 2 decimals

/* .reduce() is a method that turns a list of values into one value
look at every object in the array

approach the number of rate-property
reduce to sum of them
devide by number of elements in the array


function ratesAverage(movies){
  return movies.reduce(function(acc, val){
    return acc.rate + val.rate / movies.length
  })
};

ratesAverage(testArr);


// Iteration 4: Drama movies - Get the average of Drama Movies

 /* iterate over the movies array 
 get array, return an number - reduce method
 genre includes drama*/
 
 


function dramaMoviesRate (movies) {
  

};

dramaMoviesRate(testArr);




// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
