/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(arrayOfMovies){


    
    let newArray = arrayOfMovies.map((eachMovie)=>{
  
  
        if(typeof(eachMovie.duration)==="number"){
          return eachMovie
        }
  
            let total;
  
            let both = eachMovie.duration.includes('h') && eachMovie.duration.includes('min');
  
            let minutesOnly = eachMovie.duration.includes('min') && !eachMovie.duration.includes('h');
  
            let hoursOnly = !eachMovie.duration.includes('min') && eachMovie.duration.includes('h');
  
  
            let numbersOnly = eachMovie.duration.replace('h', '').replace('min', '');
  
            
            let durationArray = numbersOnly.split(' ');
            
  
            if(both){
            total = Number(durationArray[0]*60) + Number(durationArray[1])
            }
  
            if(minutesOnly){
              total = Number(durationArray[0]);
            }
            if(hoursOnly){
              total = Number(durationArray[0]*60);
            }
  
            let movieCopy = Object.assign({},eachMovie)
            movieCopy.duration = total;
            return movieCopy;
  
     })
  
  
      return newArray;
  
    }

// Get the average of all rates with 2 decimals 
function ratesAverage(movies) {
    var totalNumber = 0;
    for(var i = 0; i < movies.length;i++) {
    totalNumber = totalNumber + Math.round(movies[i].rate);
    }
    var averageOfAllMovies = (totalNumber / movies.length);
    return averageOfAllMovies;
}
    

// Get the average of Drama Movies
function dramaMoviesRate(movies) {

var includesDrama = movies.filter((eachNum)=>{
    return eachNum.genre == ("Drama");
})

if(includesDrama.length == 0) {return;}

total = 0;
for (var i = 0; i < includesDrama.length; i++) {
    total = Number(includesDrama[i].rate) + total;
}
var average = total / includesDrama.length;

var finalNumber = average.toFixed(2);
 final = Number(finalNumber);
return final;
}

// Order by time duration, in growing order

//GO ON FROM HERE !
// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average




//sort
//slice
//first 20
//map