/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(movies) {
     let timeArray = ''
     let result = movies.map((movie) =>
    
      { 
            
        timeArray = movie.duration.split(" ");
      
        //  timeArrayHourCorrected = parseInt(timeArray[0])

           if(timeArray.length === 2)  {
            timeArrayHourCorrected = parseInt(timeArray[0])*60
            timeArrayMinuteCorrected = parseInt(timeArray[1])
            minutesTotal = timeArrayHourCorrected + timeArrayMinuteCorrected
       }
        else if(timeArray[0].includes("h")) {
            minutesTotal = parseInt(timeArray[0])*60
        }
           else {
               minutesTotal = parseInt(timeArray[0]);
           }
           
           return {
            title: movie.title,
            year: movie.year,
            director: movie.director,
            duration: minutesTotal,
            genre: movie.genre,
            rate: movie.rate
           }
           
        }
    )
    return result
    }  
        
     
  


        
       
    


// Get the average of all rates with 2 decimals 
function ratesAverage(movies) {
 
 
 let avg = movies.reduce((acum,current) => {
     return acum + current.rate 
 },0 
 ) 
  let averageTotal = avg/movies.length;
 
  return parseFloat(averageTotal.toFixed(2))

 
 }
 
 
 
 




// Get the average of Drama Movies

function dramaMoviesRate(movies) {
  
    let dramaqty = 0
    let existsDrama = false
    let avg = movies.reduce((prev,current) => {
        
        if(current.genre.length >0) {
          if(current.genre.indexOf("Drama") >= 0) {
            dramaqty +=1
            return prev + current.rate 
            existsDrama = true
          }
          else {
              return prev + 0
          }
    
         
        }
           else {
           dramaqty = 1
           return current.rate  
         }
        
    
    },0)/dramaqty

    return avg
}
    
console.log(dramaMoviesRate(movies))




// Order by time duration, in growing order

  function orderByDuration(movies) {
     let newMovies = [...movies]
     orderMovie = newMovies.sort((a,b) =>{
     if(a.duration > b.duration) {
         return 1
     }

     if(a.duration < b.duration) {
         return -1
     }

     if(a.duration === b.duration) {
         if(a.title > b.title) {
             return 1
         }
         if(a.title < b.title) {
             return -1
         }
         }
     })
    return orderMovie
    
    }
      
    
  

// How many movies did STEVEN SPIELBERG

  function howManyMovies(movies) {
    
    let SpielbergCount = 0
    let drama = movies.filter(movie => movie.genre.includes("Drama"));
    //  let Spielberg = drama.filter(drama => drama.)
    let Spielberg = drama.filter(drama => 
        drama.director.includes("Steven Spielberg"))
        if(Spielberg === 0) {
            return undefined
        }
        else{
     SpielbergCount = Spielberg.length;
     
     return `Steven Spielberg directed ${SpielbergCount} drama movies!`}
     
         
     }

        


      

      
  
  


// Order by title and print the first 20 titles

function orderAlphabetically(movies) {
   let sortedList = 
    movies.sort((a,b) => {
     if(a.title>b.title) {
         return 1
     }
     if(a.title<b.title) {
         return -1
     }

    }
    
    )

    let listOfTitles = sortedList.map(film => film.title) 
    return listOfTitles.slice(0,20)
  


    
    
    
}
console.log(orderAlphabetically(movies))

// Best yearly rate    average
