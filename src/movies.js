// Iteration 1: All directors? - Get the array of all directors.
//map through the array of movies
//get all the directors in one array
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

first condition would be director is Steven Spielberg
if that condition is met, go to genre
if genre contains drama, count up one


function howManyMovies(movies) 
{
  return movies.filter(function(movie){
  return movie.director === 'Steven Spielberg'
  }) 
  return movie.genre.filter(function(el){
    return movie.genre === 'Drama'
  })
}

console.log(howManyMovies(testArr));
*/

function howManyMovies (){

}


// Iteration 3: All rates average - Get the average of all rates with 2 decimals

/* .reduce() is a method that turns a list of values into one value
look at every object in the array

approach the number of rate-property
reduce to sum of them
devide by number of elements in the array

Beispiel reduce.method:
const numbers = [2, 4, 6, 8];
 
var total = numbers.reduce(function (accumulator, currentValue) {
  console.log("accumulator is: ", accumulator, "and current value is: ", currentValue);
  return accumulator + currentValue;
});
 
console.log("total is: ", total);



var total = testArr.reduce(function(accumulator, currentValue){
  return accumulator.rate + currentValue.rate / testArr.length
  //console.log('accumulator is: ', accumulator, 'and current value is: ' );
})

console.log(total)

*/


function ratesAverage(){
}

ratesAverage(testArray);


// Iteration 4: Drama movies - Get the average of Drama Movies


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
