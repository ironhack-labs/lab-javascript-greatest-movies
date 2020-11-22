
// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(arr) {
    return arr.map(function (movie) {return movie.director})
}

//console.log(getAllDirectors(movie))

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

const allDirectors = getAllDirectors(movies)
const noRepeatedDirectors = allDirectors.filter(function(director,i){
  const firstIndex= allDirectors.indexOf(director)
  if(firstIndex === i){
    return true
  }
  else{
    return false
  }
})
//console.log(noRepeatedDirectors)


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(arr){
  const stevenDrama = arr.filter(function(movie){
    if(movie.director==="Steven Spielberg"&& movie.genre.includes('Drama')){
      return true
    }
    return false
  })
  return stevenDrama.length
}

//console.log(howManyMovies(movies))

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
let myresult=0;
function ratesAverage(arr) {
    if (arr.length === 0) {
      return 0} 
    else{
      myresult= arr.reduce(function (acc,v){
        if(!v.rate){ 
          v.rate=0}
          return acc + v.rate
      },0)/arr.length
  return parseFloat((myresult.toFixed(2)));}
}

// Iteration 4: Drama movies - Get the average of Drama Movies


function dramaMoviesRate(arr){
  const dramaMovies = arr.filter(function(movie){
    if(movie.genre.includes('Drama')){
      return true
    }
    return false
  })
  if(dramaMovies.length === 0) {
    return 0
  }
  const sumDramaMovies = dramaMovies.reduce(function(acc,element){
    return acc + element.rate
  },0)
  return parseFloat((sumDramaMovies/dramaMovies.length).toFixed(2))
}

//console.log(dramaMoviesRate(movies))


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arr){
  const newArray= [...arr]
  const moviesByYear = newArray.sort(function (y1,y2){
    if(y1.year<y2.year){
      return -1
    }
    if(y1.year>y2.year){
      return 1
    }
    return 0
  })

  return moviesByYear
}

//console.log(orderByYear(movies))


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles


function orderAlphabetically(arr){
  let orderedTitles=[]
  arr.forEach(element => {
    orderedTitles.push(element.title)
    });
  orderedTitles.sort()
  if(orderedTitles.length<20){
    return orderedTitles
  }
  else{
    return orderedTitles.slice(0,20)
  }
  
}

//console.log(orderAlphabetically(movies))

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(arr){

    let moviesWithMinutes = [...arr]
   
    moviesWithMinutes = arr.map(function(element){
    let hours= 0
    let minutes= 0

    if(element.duration.length===7 || element.duration.length===8){
     hours = parseInt(element.duration.slice(0,1))
     minutes = parseInt(element.duration.slice(3,element.duration.length-3))
    }
    else if(element.duration.length===2){
      hours = parseInt(element.duration.slice(0,1))
    }else{
      minutes = parseInt(element.duration.slice(0,element.duration.length-3))
    }
    
    let totalMinutes = hours*60 + minutes
    element.duration = totalMinutes
    return element
  })
return moviesWithMinutes
}

console.log(turnHoursToMinutes(movies))


// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

