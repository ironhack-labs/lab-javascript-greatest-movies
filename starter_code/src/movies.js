/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
  let sum = movies.reduce((a, b) => a + Number(b.rate), 0);
  let total = Number((sum / movies.length).toFixed(2));
  // Math.floor(total);
  if (isNaN(total)) {
    return 0;
  }
  return total;
}
  ratesAverage(movies)

// Iteration 2: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
  let dramaMovies = movies.filter(function(item) {
    return item.genre.includes("Drama");
  });

  let dramaTotal = ratesAverage(dramaMovies);
  return dramaTotal;
}
// dramaMoviesRate(movies)

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
function orderByDuration(movies) {
  let sortedMovies = movies.sort((a,b) => {
    // return a.duration - b.duration
    if(a.duration<b.duration) {return-1}
    if(a.duration>b.duration){return 1}
    if(a.title< b.title){return -1}
    if(a.title> b.title){return -1}
    return 0
  })
    return sortedMovies
  // let durations = [];
  // for (x = 0; x < movies.length; x++) {
  //   // console.log(movies[x].duration)
  //   durations.push(movies[x].duration);
  //   durations[x].replace("w", "a");
  //   //durations.raplace("\w", "" )
  //   durations = durations.sort((a, b) => {
  //     return a - b;
  //   });
  // }
  //  console.log(durations)
}
orderByDuration(movies);
//    console.log(movies.sort((a,b) => {a-b}))

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
function howManyMovies(movies) {
  let newList = [];
  let dramaMovies = movies.filter(function(item) {
    return item.genre.includes("Drama");
  });
  //console.log(dramaMovies)
  dramaMovies.filter(function(item) {
    if (item.director.includes("Steven Spielberg")) {
      newList.push(item);
    }
  });
  return newList.length;

  //  dramaMovies.filter((movie) => {
  //          console.log( movie.director.includes("Steven Spielberg"))
  //         }
  // })
}
howManyMovies(movies);
// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles


function orderAlphabetically(movies) {
  let alphaMovies = movies.sort((a,b) =>{
      return a.title.localeCompare(b.title)
      })
      if(alphaMovies.length > 20){
        return  alphaMovies.splice(0,20).map(eachMovie => eachMovie.title)
      }
      else{return alphaMovies.map(eachMovie => eachMovie.title)}
  } 
orderAlphabetically(movies);

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {
  let h = []
  let m = []
  let i = -1;
  let newArr = movies.map(eachMovie => {
    i++
    if(eachMovie.duration.includes('h ') && eachMovie.duration.includes('min')) {
       h.push(parseInt(eachMovie.duration)*60)  && m.push(parseInt(eachMovie.duration.slice(3)))
    }
    else{ m.push(parseInt(eachMovie.duration))}
     return eachMovie.duration = h[i] + m[i] 
    
  })

  for(x=0;x<movies.lenght;x++){
   newArr[i].duration = h[i]+m[i]
  }
  console.log(newArr) 
  //console.log(h)
  // console.log(m)
  //console.log(newArr)
}
turnHoursToMinutes(movies)


// function bestYearAvg() {
//   let obj ={}
//   for(let i = 0; i<movies.length; i++){
//     if(obj[movies[i].year]){
//       obj(movies[i].year).push(movies[i])
//     else{
//       obj(movies[i].year= [movies[i])
//     }
//     } 
//   }
//}
