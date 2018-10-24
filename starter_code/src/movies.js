/* eslint no-restricted-globals: 'off' */
// order by duration
function orderByDuration (movies) {
    let longest = movies.sort(function(movieA,movieB){
           if(movieA.duration < movieB.duration){
             return -1
           } else  {
               
           
             return +1
           }
         });return longest
        }
     longest(movies)





     // Get the average of all rates with  decimals 



function ratesAverage (movies){
      
      

    var sum = movies.reduce(function(sum,movie){
        return sum + Number(movie.rate);
    },0);
    return Number(sum / movies.length)
}
console.log(ratesAverage (movies))











// Return the accumuletor plus the current item's value

function dramaMoviesRate (movies){
  
    var drama = movies.filter(function(onemovie){
      return  onemovie.genre.includes('Drama')
      
    });
    if (drama.length > 0){
     return Number(ratesAverage(drama).toFixed(2))
    }
}





// How many movies did STEVEN SPIELBERG



function howManyMovies (movies){

  if(movies.length === 0){
    return undefined
  }
 
 var Spielberg = movies.filter(function(movie){
   return movie.director==="Steven Spielberg" && movie.genre.includes("Drama")
 }); return "Steven Spielberg directed " + Spielberg.length + " drama movies!" 
}
howManyMovies(movies)


// Order by title and print the first 20 titles
function orderAlphabetically (movies){
  let first = movies.sort(function(movieA,movieB){
            if(movieA.title < movieB.title){
              return -1
            } else if (movieA.duration > movieB.duration) {
                
            
              return +1
            } else {
              if (movieA.title < movieB.title){
                return -1
              } else {
                return +1}
            }
          });var newArray = [];
          first.forEach(function (oneElement) {
            newArray.push(oneElement.title);
         })
         return newArray.splice(0,20)
        }
         orderAlphabetically(movies) 
 

// Best yearly rate average
