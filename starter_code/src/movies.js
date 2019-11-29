/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = (arr) => {
  const newArr = arr.map( e => e).sort((a, b) => {

    if (a.year - b.year === 0) {
      return a.title.localeCompare(b.title)
    }
    return a.year - b.year;
  })
  return newArr
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

const howManyMovies = (arr) => {

  const newArr = arr.filter( e => { return e.director === 'Steven Spielberg' && e.genre.includes('Drama')})
  console.log(newArr)
  // console.log(arr)
  return newArr.length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = (arr) => {
  const newArr = arr.map(e => e.title).sort((a, b) => {
    return a.localeCompare(b)
  }).filter( (e, i) => {
    return i < 20;
  })

  // newArr.forEach((e, i) => {
  //   console.log(e)
  //   console.log(i)
  // })
  return newArr
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

const ratesAverage = (arr) => { 
  if (arr.length ===0) {return 0}
  const total = arr
  .filter(e => typeof (e.rate) !== 'undefined')
  .reduce((acc, e) => acc + e.rate, 0)
  const aver = total / arr.length;
  const AverRounded =  Math.round(aver*100)/100 
  // console.log(arr.length);
  // console.log(total);
  // console.log(AverRounded);
  return AverRounded;
}

// Iteration 5: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = (arr) => { 
  if (arr.length ===0) {return 0}
  const includesDramaArr = arr.filter(e => {
    return typeof (e.rate) !== 'undefined' && e.genre.includes("Drama");
  });
  if ( includesDramaArr.length === 0) {
    return 0
  }
  const total = includesDramaArr.reduce((acc, e) => acc + e.rate, 0)
  console.log(total)
  console.log(arr)
  const aver = total / includesDramaArr.length;
  const AverRounded =  Math.round(aver*100)/100 
  // console.log(arr.length);
  // console.log(total);
  // console.log(AverRounded);
  return AverRounded;
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
const turnHoursToMinutes = (arr) => {
  const parseTime = (string) => {
  const hours = parseInt(string.split(' ')[0].split('')[0])
  const min = parseInt(string.split(' ')[1])
  return hours * 60 + min
  }

  const newArr = arr.map(e => {
    e.duration = parseTime(e.duration)
    return e
  })
  console.log(newArr)
  return newArr
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average