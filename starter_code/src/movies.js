/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 

function ratesAverage(array) {
    let sumOfRatings = array.reduce((accu, element)=>
    {
        let rating = element.rate || 0;
        return accu+parseFloat(rating);
    }, 0)
    return Math.round((sumOfRatings/array.length)*100)/100
  }
  
  
  
  // Iteration 2: Drama movies - Get the average of Drama Movies
  function dramaMoviesRate(array) {
    let dramaMovies = array.filter(movie => {
        return movie.genre.includes('Drama');
    })
    if(!dramaMovies.length) return 0;
    return ratesAverage(dramaMovies);
  }
  
  // Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
  
  function orderByDuration(array) {
  let newArray= Array.from(array);
  console.log(JSON.stringify(newArray));
  newArray.sort(function(a,b){
     if (a.duration ===b.duration) {
      return a.title.localeCompare(b.title);//console.log(b.title,a.title)
     }
     return a.duration - b.duration
  }); return newArray;
  } 
  
  
  // Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
  function howManyMovies(movies)
  {
    if(movies===[]) return 0;

    let x = movies.filter(function(movie){
        return movie.genre.includes('Drama') && movie.director==='Steven Spielberg';
    })
    return x.length;
  }
  
  // Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
  
  function orderAlphabetically(movies) 
  
  {
        let onlyTitles = movies.map(function(element)
        {
                return element.title;
        });
        let sortedArray = onlyTitles.sort(function(a,b){
        return a.localeCompare(b);
        });
        if(sortedArray.length>20)
        {
            a.localeCompare(b);
            sortedArray = sortedArray.slice(0,20);
            return sortedArray;
        }
    /*
    let alphabeticArray= Array.from(array.filter());
  alphabeticArray.sort(function(a,b){
     if (alphabeticArray.length >=alphabeticArray[19]){
        console.log(a.title - b.title);
     } else{
       for (let i=0;i<=alphabeticArray[19];i++){
         return a.title - b.title;
       }
     }
  }); return alphabeticArray;
*/  

}
  
  // Iteration 6: Time Format - Turn duration of the movies from hours to minutes
  
  function turnHoursToMinutes(movies) {


    const durationsOfMovies = movies.map(movie=>{
        const hm = movie.duration.split('h');
        let durationInMinutes =0;
        if(hm[1].length ===0){
            durationInMinutes = parseInt(hm[0]);
        }
        else{

        
        const minutes = parseInt(hm[1].trim());
        const hours = parseInt(hm[0]);
        durationInMinutes=minutes + hours*60;
        }
        const transformedMovie = Object.assign({movie});        
        return transformedMovie;
    
});
console.log(durationsOfMovies)
return durationOfMinutes;
    
   // let num = array;
   // let hours = (num / 60);
   // let rhours = Math.floor(hours);
   // let minutes = (hours - rhours) * 60;
   // let rminutes = Math.round(minutes);
    }
    