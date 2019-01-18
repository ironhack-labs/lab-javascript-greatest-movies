/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
let turnHoursToMinutes = array => {
  let newArray = array.map(obj => {
    let timeArray = []
    if (obj.duration.includes("min") && obj.duration.includes("h")) {
    //we do nothing
    } else if (obj.duration.includes("min")) {
    obj.duration = "0h " + obj.duration
    } else {
   obj.duration = obj.duration + " 0min"
    }
    timeArray = obj.duration.split(" ");
    let h = parseInt(timeArray[0])
    let m = parseInt(timeArray[1])
    obj.duration = h * 60 + m
    return obj
  })
 return newArray
}

// Get the average of all rates with 2 decimals 
let ratesAverage = arr => {
  let newArr = arr.map(obj => {
    return parseInt(obj.rate)
  })
  let avg = newArr.reduce((acc,num) => {
    return acc+num
  }, 0)
  let result = parseFloat(avg/arr.length).toFixed(2)
  return result
}

// Get the average of Drama Movies
let dramaMoviesRate = arr => {
  let newArr = arr.filter(mov=> mov.genre.includes("Drama"))
  let rateArr = newArr.map(obj => {
    return parseInt(obj.rate)
  })
  let avg = rateArr.reduce((acc,num) => {
    return acc+num
  }, 0)
  let result = avg/arr.length
  return result.toFixed(2)
}

// Order by time duration, in growing order
let orderByDuration = array => {
  let timeArr = turnHoursToMinutes(array)
  let sorted = timeArr.sort((a,b) => {
    return b.duration-a.duration
  })
  return sorted.sort()
}

// How many movies did STEVEN SPIELBERG
let howManyMovies = arr => {
  let steven = arr.filter(x=> x.director === "Steven Spielberg" && x.genre.includes("Drama"))
  return steven
}

// Order by title and print the first 20 titles
let orderAlphabetically = arr => {
  let sorted = arr.sort((a,b) => {
    if(a.title > b.title) return 1
    if(a.title < b.title) return -1
    return 0
  })
  let top20 = sorted.slice(0,20)
  return top20.map(a => a.title);
}

// Best yearly rate average
let bestYearAvg = arr => {

}
