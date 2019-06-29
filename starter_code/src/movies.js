/* eslint no-restricted-globals: 'off' */
const movies = require('./data')

// Turn duration of the movies from hours to minutes 

// let movies = [
//   {
//     title: 'A',
//     year: '1994',
//     director: 'Steven Spielberg',
//     duration: 220,
//     genre: ['Crime', 'Drama'],
//     rate: '9.3'
//   },
//   {
//     title: 'H',
//     year: '1994',
//     director: 'Francis Ford Coppola',
//     duration: '2h',
//     genre: ['Crime', 'Drama'],
//     rate: '9.233'
//   },
//   {
//     title: 'E',
//     year: '1974',
//     director: 'Francis Ford Coppola',
//     duration: '3h 22min',
//     genre: ['Crime', 'Drama'],
//     rate: '9.0'
//   },
//   {
//     title: 'D',
//     year: '2008',
//     director: 'Christopher Nolan',
//     duration: '3h 22min',
//     genre: ['Action', 'Crime', 'Drama', 'Thriller'],
//     rate: '9.0'
//   },
//   {
//     title: 'B',
//     year: '1978',
//     director: 'Michael Cimino',
//     duration: '3h 3min',
//     genre: ['Drama', 'War'],
//     rate: '8.2'
//   }
// ]

function turnHoursToMinutes(movies){
  if(!movies.length){
    return undefined
  }
  const myArray = movies.map(theMovie => {
    // console.log(theMovie)
    let hours = 0;
    let minutes = 0;

    if(isNaN(theMovie.duration)){
      let movieMinutesArray = theMovie.duration.split(" ");

      if(movieMinutesArray.length<2){
        if(movieMinutesArray[0].includes('h')){
        // console.log('hours', movieMinutesArray, movieMinutesArray[0][movieMinutesArray.length-1])
          hours = Number(movieMinutesArray[0].slice(0, -1))*60
        } else {
          //console.log('minutos', movieMinutesArray, movieMinutesArray[0][movieMinutesArray[0].length-1], movieMinutesArray[0].length)
          minutes=Number(movieMinutesArray[0].slice(0, -3))
        }
      } else {
        hours = Number(movieMinutesArray[0].slice(0, -1))*60
        minutes=Number(movieMinutesArray[1].slice(0, -3))
      }
    } else {
      minutes=theMovie.duration;
      console.log("sucesso", theMovie.title)
    }

    let movieMinutes = hours + minutes
    // theMovie.duration= movieMinutes;
    return {
      title:theMovie.title,
      year:theMovie.year,
      director:theMovie.director,
      duration: movieMinutes,
      genre: theMovie.genre,
      rate: theMovie.rate
    }
  })
  return myArray
}


// Get the average of all rates with 2 decimals 
function ratesAverage(array){
  const sumReviews = array.reduce((sum, elem)=> {
    return sum+=Number(elem.rate)
  }, 0)
  return Math.round(sumReviews/array.length*100)/100; 
}

//console.log(ratesAverage(movies))
// Get the average of Drama Movies
function dramaMoviesRate(array){
  const dramaMovies = array.filter(movie => movie.genre.includes("Drama"))
  if(!dramaMovies.length){
    return undefined
  } else {
  // console.log(ratesAverage(dramaMovies))
  return ratesAverage(dramaMovies)
  }
}


// Order by time duration, in growing order

function orderByDuration(array){
  let order = turnHoursToMinutes(array)
  order.sort((a,b)=> {
    if(a.duration > b.duration){
      return 1;
    }
    if(a.duration < b.duration){
      return -1;
    }
    if (a.duration===b.duration){
      if (a.title > b.title){
        return 1;
      }
      if (a.title < b.title){
        return -1
      }
    }
  })
  // console.log(order)
  let orderByNames=[]
  order.forEach((element => {
    orderByNames.push(element.title)
  })

  )
  return order
}
//orderByDuration(movies)
//console.log(orderByDuration(movies))

// How many movies did STEVEN SPIELBERG

function howManyMovies(array){
  if (!array.length){
    return undefined
  }
  const moviesQty = array.filter(movie => movie.director.includes("Steven Spielberg"))
  console.log(moviesQty)
  const dramaMoviesQty = moviesQty.filter(movie => movie.genre.includes("Drama"))
  console.log(dramaMoviesQty)
  if(!dramaMoviesQty.length){
    return 'Steven Spielberg directed 0 drama movies!'
  }
  return `Steven Spielberg directed ${dramaMoviesQty.length} drama movies!`
}

// Order by title and print the first 20 titles
function orderAlphabetically(array){
  let sortedArray=array.sort((a,b)=>{
    if(a.title>b.title){
      return 1
    }
    if(a.title<b.title){
      return -1
    }
    
    return 0
  })

  let firstSortedArray=[]
  for(i=0; i<sortedArray.length; i++){
    firstSortedArray.push(sortedArray[i].title)
  }
  if(firstSortedArray.length>20){
    firstSortedArray.length=20;
  }
  console.log(firstSortedArray)
  return firstSortedArray
}

// orderAlphabetically(movies)
// Best yearly rate average

function bestYearAvg(array){
  if(!array.length){
    return undefined
  }
  let anos=[]
  //let maximum=0;
  for(i=0; i<array.length; i++){
    anos.push(Number(array[i].year))
    anos.sort()
    uniqYears=[...new Set(anos)]
  }
  //console.log(uniqYears)
  //let yearAvg=[]
  let allYearArr=[]
  for(i=0; i<uniqYears.length; i++){
    let yearArr=[];
    for(j=0; j<array.length; j++){
      if(array[j].year==uniqYears[i]){
        yearArr.push(array[j])
      }
    }
    let average=ratesAverage(yearArr)
    //console.log("media",average)
    allYearArr.push(average)
  }
  // console.log(yearAvg)
  // console.log("max", Math.max(yearAvg))
  //console.log(allYearArr)
  let bestYear=0;
  let bestRate=0;
  for(i=0; i<allYearArr.length; i++){
    if(allYearArr[i]>bestRate){
      bestRate=allYearArr[i]
      bestYear=uniqYears[i]
    }
  }
  //console.log(bestRate, bestYear)
  return `The best year was ${bestYear} with an average rate of ${bestRate}`
}

console.log(bestYearAvg(movies))