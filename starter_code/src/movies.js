/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 



function turnHoursToMinutes(e) {
  const movie = e;
  
    var mov = movie.map(e => {
        var arr = Object.assign({},e); 
        arr.duration = arr.duration.split('');
        console.log(arr.duration);
        if (arr.duration.includes('h') && arr.duration.includes('m'))
                 {
                   console.log('min et h')
         arr.duration = arr.duration.map(e => Number(e));
         console.log(arr.duration);
        arr.duration = arr.duration.filter(e => e > 0)
         console.log(arr.duration);
        arr.duration = arr.duration[0]*60 + arr.duration[1]*10+arr.duration[2]; 
                 } 
      else if (arr.duration.includes('h') && !arr.duration.includes('m')){
                   console.log('juste h ') 
         arr.duration = arr.duration.map(e => Number(e));
        console.log(arr.duration);
        arr.duration = arr.duration.filter(e => e > 0)
         console.log(arr.duration);
                 arr.duration =  arr.duration= Number(arr.duration.join(''))*60;        
                 } 
      else if (!arr.duration.includes('h') && arr.duration.includes('m'))
      {console.log('min') 
      arr.duration = arr.duration.map(e => Number(e));
         console.log(arr.duration);
        arr.duration = arr.duration.filter(e => e > 0)
         console.log(arr.duration);
                 arr.duration =  arr.duration= Number(arr.duration.join(''))
      }
        return arr
      })

      return mov;
    
  }
  

// Get the average of all rates with 2 decimals 


function ratesAverage (e){
  
 var mov = movies.map(e => {
 e.rate= Number(e.rate);
 return e
}) ;

var avg = mov.reduce((sum, ele) => {
 return sum + ele.rate/ mov.length;
},0)

avg = Math.round(avg * 100) /100
 
return avg;
 
}
// Get the average of Drama Movies

function dramaMoviesRate (e){
  
  var mov = movies.filter(e => {
    return e.genre.includes('Drama')
  })
 
 var avg = mov.reduce((sum, ele) => {
  return sum + ele.rate/ mov.length;
 },0)
 
 avg = Math.round(avg * 100) /100
 if(avg === 0){
  return undefined
}
 return avg;
  
 }
 
// Order by time duration, in growing order

function orderByDuration(e){
  var arr = turnHoursToMinutes(e);
  arr.sort((a, b) => a.duration - b.duration)
  return arr;
}


// How many movies did STEVEN SPIELBERG
function howManyMovies(e){
  var arr = e.filter(e => e.director.includes('Steven')); 
  arr = arr.filter(e => e.genre.includes('Drama'));
  return "Steven Spielberg directed " +arr.length +" drama movies!"   
}

// Order by title and print the first 20 titles


// Best yearly rate average
