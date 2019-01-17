/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(array) {
  let array2 = []
  //array2 = array
  //array2 = array.splice()
  array2 = array.map(el => el)
  //console.log("------Start-------")
  //console.log(array[0].duration)
  //console.log(array2[0].duration)
  for (num in array2) {
    let dur = array2[num].duration
    let h = dur.indexOf("h")
    let m = dur.indexOf("min")
    let hour = 0
    if(h !== -1){
      hour = dur.slice(0, h)
    }
    let mins = 0
    if (m !== -1 && h !== -1) {
      mins = dur.slice(h + 2, m)      
    } else if (m !== -1) {
      mins = dur.slice(0, m) 
    }
    array2[num].duration = parseInt(hour) * 60 + parseInt(mins)
    //console.log("------"+num+"-------")
    //console.log(array[num].duration)
    //console.log(array2[num].duration)
  }
  return array2
}

// Get the average of all rates with 2 decimals 
function ratesAverage(array) {
  let newArray = []
  for (movie in array) {
    newArray.push(Number(array[movie].rate))
  }

  let suma = newArray.reduce((acc, num) => {
    return acc + num
  }, 0)

  return suma / newArray.length
}

// Get the average of Drama Movies
function dramaMoviesRate(array) {
  let newArray = []
  for (movie in array) {
    if(array[movie].genre.includes("Drama"))
      newArray.push(Number(array[movie].rate))
  } 
  if (newArray.length !== 0) {
    let suma = newArray.reduce((acc, num) => {
    return acc + num
  }, 0)
   return parseFloat(suma / newArray.length)
  }
}

// Order by time duration, in growing order
function orderByDuration(array) {
  let array2 = turnHoursToMinutes(array)
  array2.sort((a, b) => {
    if (a.duration < b.duration) {
      return -1     
    } else if (a.duration > b.duration) {
      return 1 
    } else if (a.title < b.title){
      return -1
    } else if (a.title > b.title) {
      return 1
    } else {return 0}
  })
  return array2
}

// How many movies did STEVEN SPIELBERG
function howManyMovies(array) {
  if (array.length !== 0) {
    let newArray = array.filter((movie) => {
      if (movie.director === 'Steven Spielberg' && movie.genre.includes("Drama")) {
        return true
      } else { return false }
    })

    return "Steven Spielberg directed " + newArray.length + " drama movies!"
  }

}

// Order by title and print the first 20 titles
function orderAlphabetically(array) {
  let array2 = array
  array2.sort((a,b)=>{
    if (a.title < b.title){
      return -1
    } else if (a.title > b.title) {
      return 1      
    } else {return 0}
  })
  let movies = []
  let counter = 0
  for (movie in array2){
    counter += 1
    if(counter <= 20) {
      movies.push(array2[movie].title)
    }
  }
  if(counter)
return movies
}

// Best yearly rate average
