
// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array){
    let newArr = [...array]

    return newArr.sort(function(a,b){
       
        if(a.year > b.year){
          return 1;
        }
        if(a.year < b.year){
          return -1;
        }else if(a.year==b.year){
            if(a.title > b.title){
                return 1
            }
            return -1
          
        }
      });    
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies (array){
     return array.filter(movie => movie.director === 'Steven Spielberg' &&  movie.genre.includes('Drama')).length    
  }
    


// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles


function orderAlphabetically (array){
    newArray = [...array]
     return newArray=array.map(function(movie){
       return movie.title
    }).sort().slice(0,20)
    
  }


// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movArr) {
  const sumRates = movArr.reduce((acc, mov) => {
    if (!mov.rate) mov.rate = 0
    return acc + parseFloat(mov.rate)
  }, 0)
  return Number((sumRates / movArr.length).toFixed(2))
}




// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movArr) {
  const dramaMovies = movArr.filter(mov =>
    mov.genre.find(genre => genre === "Drama")
  )
  if (!dramaMovies.length) return (0)
  return ratesAverage(dramaMovies)
}
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
  //  function turnHoursToMinutes(array){
    //  array = [...array]
  
    //  return array = parseInt( movies.map(movie => movie.duration))
   // }
// BONUS Iteration: Best yearly rate average - Best yearly rate average



