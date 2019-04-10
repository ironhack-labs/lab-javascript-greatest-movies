/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(movies) {
  //my og code
    //   for (i=0; i< movies.length; i++) {
    //     let movieDur = movies[i].duration.split(' ');
    //     let hours=Number(movieDur[0].replace('h',''));
    //     let minutes=0
    //     if(movieDur[1]){
    //       minutes = Number(movieDur[1].replace('min',''));
    //     }
    //     movies[i].duration = hours*60+minutes;
      
    //   }
    //   return movies
    //  }
//Niko explanation
//IMP => is new syntax to represent function
  var minutesArray= movies.map((eachMovie)=>{ //loops through all movies, eachMovie is a parameter
    let movie=eachMovie.duration.split(" ") //makes string into an array every time theres a space
    //console.log(eachMovie.duration,movie) 
    let totalMinutes = 0;
    movie.forEach((m)=>{//m is a paramter; loops through array
    //console.log(m)
      if (m.includes('h')){//if there's and hour in it
        totalMinutes+=Number(m.replace('h',''))*60 //replaces hour with blank, hour know becomes totalMin variable; multiply by 60 to get minutes in hour;Number just makes whatever (string in this case) into a Number 
      }
      if(m.includes('min')){//if there's minute in it
        totalMinutes+=Number(m.replace('min',''))//replace min w blank
      }
    })
    return {...eachMovie,duration:totalMinutes} //...spread so it copies the OG array, duration adds new duration info
    })
    return minutesArray//returns ENTIRE new ARRAY with durations
  }
// Get the average of all rates with 2 decimals 
function ratesAverage(movies){
  var ratesSum = 0;
  for (var i=0; i<movies.length;i++ ){//not movies.rate.length bc you have to do it for all the movies 
   ratesSum+=(movies[i].rate);//parseFloat turn string into number;movies[i].rate bc getting rate of each movie
  }
  return parseFloat((ratesSum/movies.length).toFixed(2))//toFixed gives the number a decimal of 2
}

// Get the average of Drama Movies
function dramaMoviesRate(movies){
  let dramaMovies = []
  for (var i=0;i<movies.length;i++){
    if(movies[i].genre.includes("Drama")){
      dramaMovies.push(movies[i])
    }
  }
  if (dramaMovies.length == 0){
    return undefined
  }
  return ratesAverage(dramaMovies)
}
// Order by time duration, in growing order
function orderByDuration(movies){
  movies.sort((a,b) =>{
    if(a.duration < b.duration) {return -1;} //keep in mind that when its a return if its true it stops if not it keeps going
    if(a.duration > b.duration) {return 1;}

    if(a.title < b.title) {return -1;} 
    if(a.title > b.title) {return 1;}

    return 0
    });
    return movies
} 
//  orderByDuration(turnHoursToMinutes(movies)) //used to call the first thing we did which makes them all minutes

// How many movies did STEVEN SPIELBERG
function howManyMovies(movies){
  if(movies.length === 0) {return undefined}
  let directedByMovies = movies.filter((movie)=>{
    return movie.director.includes('Spielberg') && movie.genre.includes('Drama')
  })
  return `Steven Spielberg directed ${directedByMovies.length} drama movies!`
}
console.log(howManyMovies(movies))

//Order by title and print the first 20 titles
function orderAlphabeticaly(movies){
  movies.sort((a,b)=>{
  if(a.title < b.title) {return -1;} 
  if(a.title > b.title) {return 1;}
  });
  return movies

  //solve this by doing an if then a push***
// }
// Best yearly rate average
// function bestYearAvg(){}