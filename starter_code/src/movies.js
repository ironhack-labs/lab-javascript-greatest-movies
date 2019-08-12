/* eslint no-restricted-globals: 'off' */
// console.log(movies);
// Iteration 1: All rates average - Get the average of all rates with 2 decimals ]

function ratesAverage(list) {
  sum = 0;
  for (let i = 0; i < list.length; i++) {
    sum = sum + list[i].rate;
  }
  var average = sum / list.length;

  result = Number(parseFloat(average).toFixed(2));
  return result;
}

// function ratesAverage(movies){
//     movies.forEach(function(movie){
//         sum=sum+movie.rate;
//     })

//     var average=sum/movies.length;
// }



// Iteration 2: Drama movies - Get the average of Drama Movies


function dramaMoviesRate(movies){
   let dramaMovies= movies.filter(function(movie){
       return movie.genre.includes("Drama");
    })
    
    if(dramaMovies.length==0){
        return 0;
    }
    else {
        return ratesAverage(dramaMovies);
    }
}



// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

function orderByDuration(movies){
  let orderSorted= movies.sort(function(a,b){
   //  console.log(a,b);
    if (a.duration > b.duration) return 1;
   if (a.duration < b.duration) return -1;
   return 0;
   })
   return orderSorted;

}






// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

function howManyMovies(moviesArr){
   if(moviesArr.length===0){
       return 0;
   }

   return moviesArr.filter(e=>{
       return e.director==="Steven Spielberg" && e.genre.indexOf("Drama")!==-1;
   }).length;

//    return directorMovies.length;
   }

   

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies){
   let orderSorted= movies.map(function(a){
        return a.title;
    })

    orderSorted.sort(function(a, b){
        if(a < b ){ return 1; }
        if(a > b) { return -1; }
        return 0;
    })
   return orderSorted.slice(0, 20);
}


// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes (movieArray){
  // const movieArrayCopy = movieArray.map((x) => x);
  // const movieArrayCopy = Object.assign([], movieArray)
  var temp=[];
  movieArray.forEach(function(movie){
       const durations= movie.duration.split(" ") ;
       const duration =Number((parseInt(durations[0],10))*60+ parseInt(durations[1],10));
       const movieCopy = Object.assign({}, movie);
       movieCopy.duration = duration;
       temp.push(movieCopy)
    })
    return temp;     
} 


// BONUS Iteration: Best yearly rate average - Best yearly rate average

function bestYearAvg(movies){a
  if(movies.length===0){
    return null;
  }
  else{
    let orderSorted= movies.map(function(a){
      return a.year;
  })
  }
}