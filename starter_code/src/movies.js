/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 

 
// Iteration 2: Drama movies - Get the average of Drama Movies


// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)


// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct


// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average


function ratesAverage(array){
    let moviesAvgRate = array.reduce((a,b)=>{
        return Number(a) + Number(b.rate);
    },0)

    return Number((moviesAvgRate/array.length).toFixed(2));
}

function dramaMoviesRate(array){
    let dramaMovies = array.filter((movie)=>{
        return movie.genre.includes('Drama') ;
    })
    if(dramaMovies.length>0){
    let dramaMoviesAvgRate = dramaMovies.reduce((a,b)=>{
        return Number(a)+ Number(b.rate);

    },0)
    let avgRate = Number((dramaMoviesAvgRate/dramaMovies.length).toFixed(2));

    return avgRate;
} else{
  return 0;
}
}


function orderByYear(array){
    let moviesByYear = array.sort((a,b)=>{
        if(Number(a.year)>Number(b.year)){
            return 1;
         } else if(Number(a.year)<Number(b.year)){
            return -1;
         } else if(a.title>b.title){
             return 1;
         } else if(a.title<b.title){
             return -1;
         }
         else{
             return 0;
         }
        })
        return moviesByYear
    }


    function howManyMovies(array){
        let spielbergMovies = array.filter((movie)=>{
            return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama');

        })

        return spielbergMovies.length;
    }


    function orderAlphabetically(array){

        let orderedArray = array.sort((a,b)=>{
            if(a.title>b.title){
                return 1;
            } else if(a.title<b.title){
                return -1;
            } else{
                return 0;
            }
        });

        let orderedStringArray = orderedArray.map((movies)=>{

            return movies.title;
        });

        return orderedStringArray.splice(0,20);
    }
    
    function turnHoursToMinutes(array){
        let timesArray = array.map((movie)=>{

          if(movie.duration.split('min')[0].split('h').includes('') ||movie.duration.split('min')[0].split('h').length<2 ){
            if(Number(movie.duration.split('min')[0].split('h')[0])<24){
              return Number(movie.duration.split('min')[0].split('h')[0])*60;

            }else{
            return Number(movie.duration.split('min')[0].split('h')[0])
            }
          }
          else{
            return Number((movie.duration.split('min')[0].split('h'))[0])*60 +
          Number((movie.duration.split('min')[0].split('h'))[1]);
          }
        })

        let finalArray = array;
        for(i=0; i<array.length;i++){
            finalArray[i].duration = timesArray[i];
        }
        return finalArray;
    }

      
       
     
      
    
