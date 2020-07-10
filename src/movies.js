// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies){

const directorF =  movies.map(function(movie){
        return movie.director
    })

return directorF
}


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies){
    let drama;
    let spiel = movies.filter((movie) => {
    for (let i=0; i < movie.genre.length; i++){
       drama = movie.genre[i] == "Drama" && movie.director == "Steven Spielberg";
       if(drama){break;}
    } 
    return drama
}) 
return spiel.length;
};

function howManyMovies(movies){
    let Drama = movies.filter(function(ele){
      return ele.genre.includes("drama")
    })
    return Drama;
  }


// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies){
  
    let sum = movies.reduce(function(acc,value){
      return acc + value.rate
    },0)
    return sum/sum.length;
  }

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies){
    let s = movies.filter(function(elw){
      return elw.genre.includes("drama")
    })
    return rateAverage(s);
    }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies){

   
    let clone = JSON.parse(JSON.stringify(movies))
    
    let order =clone.sort(function(a,b){
      if( a.year > b.year){
        return 1;
      }else if( a.year < b.year){
        return -1;
      }else{
        return 0;
      }
    })
    return order;
  }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies){
    let cloneTitle = JSON.parse(JSON.stringify(movies));
   
   let orderTitle = cloneTitle.sort(function(){
     
     if( a.title > b.title){
       return 1;
     }else if( a.title < b.title){
       return -1;
     }else{
       return 0;
     }
     })
   return orderTitle.splice(0,20)
   }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies){
  
    let updateTime=  movies.map(function(movie){
      
      if(movies.duration.includes(" ")){// make sure thes separation
        let time = movie.duration.split(" "); // array ["1h","20min"]
        let hours= time[0].split('h');//string ["1", ""]
        let min= time[1].split("min");//string ["20", ""]
        let sum = Number(hours[0])*60 + Number(min[0]);
      }else if(movie.duration.includes('h')){ 
        let hours= movie.duration.split('h');// string ["1", ""]
        movie.duration = Number(hours[0])*60;
      }else if(movie.duration.includes('min') ){
         let min= movie.duration.split('min');
        movie.duration = Number(min[0]);
      }
      return movie,
      })
    return updateTime;
  }

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

