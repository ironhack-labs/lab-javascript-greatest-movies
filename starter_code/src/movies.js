/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 
function ratesAverage(movies) {

    let total = 0;

    for (let i = 0; i < movies.length; i++) {
        total += parseFloat(movies[i].rate);
    }
    let avg = total / movies.length;
    return parseFloat(avg.toFixed(2));
}

// Iteration 2: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies){
    
   
    /*const newArr = movies.filter(function(drama){
        if (drama.genre === "Drama") return true;
    });*/ // this is wrong as genre is aleady an array, so the access is wrong

    const filteredArray = movies.filter(function(movie){
        return movie.genre.includes("Drama")
        });

   /* const onlyDrama = movies.map(function(only){
        return movies.genre.drama
    });*/


   /* let total = 0;

    for (let i = 0; i < movies.length; i++) {
        total += parseFloat(movies[i].rate);
    }
    let avg = total / movies.length;
    return parseFloat(avg.toFixed(2)); */ //this is worng as you have to loop through the new Array with only Dramas and not the original one


    let total = 0;

    for (let i = 0; i < filteredArray.length; i++) {
      if (filteredArray[i].rate) total += parseFloat(filteredArray[i].rate);
    }
    if (filteredArray.length === 0) return 0;
    let avg = total / filteredArray.length;
    return parseFloat(avg.toFixed(2));
  }

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

function orderByDuration(movies){
  const order = movies.sort(function(a, b){
        movies.sort(function(a, b) {
            
            if (a.parseFloat(duration) === b.parseFloat(duration)) {
              
              if (a.parseFloat(title).localeCompare(b.parseFloat(title)) === 0) {
                
                return a.parseFloat(title).localeCompare(b.parseFloat(title));
              }
             
              return a.parseFloat(title).localeCompare(b.parseFloat(title));
            }
           
            return a.parseFloat(duration) - b.praseFloat(duration);
          });
    });
return orderByDuration(movies);
}


// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
function howManyMovies(movies){
    const dramaSS = filteredArray.filter(function(ss){
        return ss.director.icludes("Steven Spielberg")
    });
    return dramaSS;
}



// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
/*function orderAlphabetically(movies){
  const alpha = movies.sort(function(a, b){
    movies.title.sort(function(a, b) {
        return a.parseFloat(title) - b.praseFloat(title);
      });
return orderAlphabetically(movies[1-20]);
}*/



// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(array){
    array.forEach(function(element) {
      var hour = parseInt(element.duration.substring(0,1));
      var minutes = parseInt(element.duration.split("min")[0].substring(2));
      element.duration = hour *60 + minutes;
    });
    console.log(array);
    return array
  }

// BONUS Iteration: Best yearly rate average - Best yearly rate averages