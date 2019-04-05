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
 movies.sort((a,b)=>{
   if(a.duration<b.duration){return -1}
   if(a.duration>b.duration){return 1}
   if(a.duration<b.title) {return -1}
   if(a.duration>b.title) {return 1}
   return 0;
 })
  return movies
}
console.log(orderByDuration(turnHoursToMinutes(movies)))


// How many movies did STEVEN SPIELBERG
function howManyMovies(arr){
  let directedByMovies = movies.filter((movie)=>{
    return movie.director.includes('Spielberg') && movie.genre.imcludes('drama')
  })
  return `Steven Spielberg directed${directedByMovies.length}drama movies!`
}
console.log(howManyMovies)
  
  

// Order by title and print the first 20 titles
function orderAlphabetically(movies){
  var movie = movies.map(oneMovie => {
    return oneMovie.title;
  }).sort()
  return movie
}
  


// Best yearly rate average
