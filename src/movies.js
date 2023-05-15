const data= [  {
    title: 'The Shawshank Redemption',
    year: 1994,
    director: 'Frank Darabont',
    duration: '2h 22min',
    genre: ['Crime', 'Drama'],
    score: 9.3
  },
  {
    title: 'The Godfather',
    year: 1972,
    director: 'Francis Ford Coppola',
    duration: '2h 55min',
    genre: ['Crime', 'Drama'],
    score: 9.2
  },
  {
    title: 'The Godfather: Part II',
    year: 1974,
    director: 'Francis Ford Coppola',
    duration: '3h 22min',
    genre: ['Crime', 'Drama'],
    score: 9
  },{
    title: 'Schindler"s List',
    year: 1993,
    director: 'Steven Spielberg',
    duration: '3h 15min',
    genre: ['Biography', 'Drama', 'History'],
    score: 8.9
  },
]
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    
     const directorsArray = moviesArray.map(function(movieObj){
    return movieObj.director;
 });

return directorsArray
}

console.log(getAllDirectors(data))

/*
 const directorsArray = movies.map(function(directorsName){
       
        return directorsName.director;
*/

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArray) {
    let count = 0
    const spielbergMovies = moviesArray.filter((element) => {

           // return element.director === "Steven Spielberg" && element.genre.includes("Drama")
           

        if(element.director === "Steven Spielberg" && element.genre.includes("Drama")){
             count++
        } 

        });
        return count
    }
   
   


console.log(howManyMovies(data))



// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
// let num = 0
const totalScore = moviesArray.reduce(function(acc, currValue) {
 acc + currValue.score;
}, 0);

const result = num + (totalScore / moviesArray.length)

console.log(result.toFixed(2))
}





/*
const totalAge = people.reduce(function (accumulator, person) {
  return accumulator + person.age;
}, 0);

const averageAge = totalAge / people.length;

console.log(`total age: ${totalAge}`);
console.log(`average age: ${averageAge}`);
*/





// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
