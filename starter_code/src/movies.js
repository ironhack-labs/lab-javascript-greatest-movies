/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(arr){
    let hrs = arr.map(elem => parseInt(elem.duration.split(" ")[0]))
    let minutes = arr.map(elem => parseInt(elem.duration.split(" ")[1]))
    let time = []
    for (let i=0; i <arr.length; i++){
      time.push(hrs[i] * 60 + minutes[i])
    }
    let newArr = arr.map((elem, index)=> {
      elem.duration = time[index]
      return elem
    })
    return newArr
  }

// Get the average of all rates with 2 decimals 
function ratesAverage(arr){
    let average = arr.reduce((acc, current) => {
      return acc + (parseInt(current.rate) / arr.length)
    }, 0)
    return average.toFixed(2)
 }

// Get the average of Drama Movies
function dramaMoviesRate(arr){
    var dramaMovies = arr.filter(elem => {
      return elem.genre.indexOf("Drama") !== -1
    })
    return ratesAverage(dramaMovies)
    }
    
    console.log(dramaMoviesRate(movies))

// Order by time duration, in growing order
function orderByDuration(durationMovies){
  let orderArr = durationMovies.sort(function(a,b){
    let value1 = a.duration;
    let value2 = b.duration;
    if (value1 < value2) { return -1}
    if (value1 > value2) {return 1}
  })
  return orderArr
}
console.log(orderByDuration(movies))


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
