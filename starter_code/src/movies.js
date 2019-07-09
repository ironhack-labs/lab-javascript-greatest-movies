/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {
  // let copyMovies = [...movies];
  let total
  let newArray = movies.map(elm => {
    let elm2 = { ...elm }
    let durationArr = elm2.duration.split(" ")
    if (durationArr.length == 2) {
      let hours = parseInt(durationArr[0]) * 60
      let minutes = parseInt(durationArr[1])

      total = hours + minutes
    } else if (durationArr.length == 1 && durationArr.includes("h")) {
      total = parseInt(durationArr[0]) * 60
    } else {
      total = parseInt(durationArr[0])
    }
    return { ...elm2, duration: total }
  })
  return newArray
}
// Get the average of all rates with 2 decimals
function ratesAverage() {
  const copyMovies = [...movies]
  const newArray = copyMovies.map(elm => elm.rate)
  //allgood
  const parsedArr = newArray.map(elm => {
    parseFloat(elm)
    console.log(elm)
  })
  console.log(parsedArr)
  //console.log(newArray)
}
// .reduce((acc, elm) => acc / elm.length)

//parseFloat(newArray)
//console.log(newArray)
//let elm2 = { ...elm }
// let rate = elm2.rate
//console.log(elm2)
// const average = rate.reduce((acc, elm) => acc + elm)
//console.log(average)
//}
// Get the average of Drama Movies

// Order by time duration, in growing order

// How many movies did STEVEN SPIELBERG

// Order by title and print the first 20 titles

// Best yearly rate average
