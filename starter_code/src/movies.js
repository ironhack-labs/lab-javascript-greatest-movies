
// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(array){
let movieYear=[...array];
 return movieYear.sort(function(movie1, movie2){
    if(movie1.year < movie2.year) {
        return -1}
        else if (movie1.year > movie2.year){
            return 1
        }else if(movie1.title < movie2.title){
            return -1
        }else{
            return 1
        }

})
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(array){
    return array.filter((movies) => movies.genre.includes('Drama') && movies.director==='Steven Spielberg').length;
    }
    


// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically (array){
    //newArray = [...array]
     return newArray=array.map(function(movie){
        return movie.title
      })
}

//let students = schoolSystem.schools[0].classRooms[0].students

// Iteration 4: All rates average - Get the average of all rates with 2 decimals




// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
