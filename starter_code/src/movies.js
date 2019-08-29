// /* eslint no-restricted-globals: 'off' */

// // Iteration 1: All rates average - Get the average of all rates with 2 decimals 
  function ratesAverage(movies){
            let averager = movies.reduce(function(sum, movie){
                console.log(sum, "----------", movie)
                Number(sum.rate) += Number(movie.rate)
                let avg = sum/movies.length
                console.log(">>>>>>>> ", Math.round((Number(avg)), 2))
                return parseFloat(Math.round(Number(avg)));
            })

           for(let i=0; i<movies.length; i++){
                ratesAverage(Number(movies[i]))
               averager += Number(movies[i].rate)
           }

           return averager / movies.length;
 }
// // Iteration 2: Drama movies - Get the average of Drama Movies
 function dramaMoviesRate(movies){
     let count= 0
     let count2= 0;
     console.log(movies[2].genre.length)
     for(let i=0; i<movies.length;i++){
         if (movies[i].genre.includes("Drama")){

             count+= Number(movies[i].rate)
             count2++
         }
         else{
             continue
         }
     }
         if(count2== 0){
             return 0
         }else{   
             return Number((count/count2).toFixed(2));
         }
 }
 dramaMoviesRate(movies)


// // Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
  function orderByDuration(movies){

      return movies.sort((a,b)=>{
        
        let duration1= a.duration - b.duration
        return duration1 || a.title.localeCompare(b.title)
        
        
      })
  }
  orderByDuration(movies)

// // Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
 function howManyMovies(movies){
     let count= 0;
     for(let i=0; i< movies.length;i++){
         if(movies[i].director.includes("Steven Spielberg") && movies[i].genre.includes("Drama")){
             count++
         }
     }
     return count;
 }

// // Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

     function orderAlphabetically(movies){
        

     return movies.sort((a, b) => a.title.localeCompare(b.title))
    
     .slice(0, 20).filter(e => e).map(e => e.title)

     }

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
    function turnHoursToMinutes(movies){

        let timeArr = []
        
      let move=   movies.map(movie => {
         movie.duration= conversion(movie.duration)
         return movie
        })

        function conversion(film){
            let timeH= 0
            let timeM= 0
            let time= film.split(" ")
            if(time.length==1 && time[0].includes("h")){
             timeH += parseFloat(time[0])
            }
            if(time.length==1 && time[0].includes("min")){
            timeM += parseFloat(time[1])
            }
            if (time.length==2){
                 timeM = parseFloat(time[1])
                 timeH = parseFloat(time[0])
            }
               let minute= Number(timeH * 60 + timeM)

            
            return parseInt(minute)

        }
        return move

    }
     turnHoursToMinutes(movies)

// BONUS Iteration: Best yearly rate average - Best yearly rate average
