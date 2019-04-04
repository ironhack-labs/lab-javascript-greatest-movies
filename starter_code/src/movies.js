/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(movies){
  varMinutesArray= movies.map((eachMovie)=>{
let movie = eachMovie.duration.split(" ")
// console.log(eachMovie.duration, movie)
let totalMinutes= 0;
movie.forEach((m)=>{
  // console.log(m)
  if(m.includes('h')){
    totalMinutes+=Number(m.replace('h', ' '))*60
  }
    if(m.includes('min')){
      totalMinutes+=Number(m.replace('min',' '))
    }
  })
  return {...eachMovie, duration: totalMinutes}
})
// console.log(minutesArray)
return minutesArray
}
turnHoursToMinutes(movies)


// Get the average of all rates with 2 decimals 
function ratesAverage(movies){
  let sum=0;
  for(i=0;i<movies.length;i++){
    sum += parseFloat(movies[i].rate)
  };
  return (parseFloat((sum / movies.length).toFixed(2)))
}
// console.log(sumArray(movies).toFixed(2))

console.log(ratesAverage(movies))



// Get the average of Drama Movies


function dramaMoviesRate(arr){
  let drama = arr.filter(movies => movies.genre.includes("Drama"))
  
  if(drama.length===0){
  return undefined
  }
  let sum=0
  for(i=0;i<drama.length;i++){
    sum+=drama[i].rate
  }
  return(parseFloat((sum/drama.length).toFixed(2)))

  // console.log(drama)
  // return drama
}

dramaMoviesRate(movies)

// console.log(dramaMoviesRate(movies))


// Order by time duration, in growing order
function orderByDuration(movies){
  movies.sort(duration);

}



// How many movies did STEVEN SPIELBERG
function howManyMovies(arr){
  let director = arr.filter(movies => movies.director.includes("Steven Spielberg"))
}

  
  

// Order by title and print the first 20 titles
function orderAlphabetically(movies){
  movies.sort(title)
  /*const sortByTitle = (movies) => {
  return movies.sort(function(a, b){
    return a.name > b.name;
  });
}
orderAlphabetically(movies); 
  /*var sortedMovies = movies.title.sort(function (a, b) {
    if (a < b) return -1;
    else if (a > b) return 1;
    return 0;
  });
  console.log(sortedMovies);

}*/


// Best yearly rate average
