/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 
const ratesAverage = (array) => {
   let totalRates = array.reduce((acc,current) => acc + parseFloat(current.rate),0);
   return parseFloat((totalRates/array.length).toFixed(2))
}
// Iteration 2: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = (array) => {
    const dramaMovies = array.filter(element => element.genre.includes('Drama') && element.genre.length == 1)
    const totalRates = dramaMovies.reduce((acc,current) => acc + parseFloat(current.rate === '' ? 0: current.rate),0);
    let totalAverage = parseFloat((totalRates/dramaMovies.length).toFixed(2))
    if (dramaMovies.length == 0){
        return 0
    }
    return totalAverage
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
const orderByDuration =(array)=>{
    let order = array.duration.sort((a,b) => a-b)
    return order
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
const howManyMovies = (array) => {
    const spielbergMovies = array.filter(element => element.director.includes('Steven Spielberg'))
    const dramaMovies = spielbergMovies.filter(element => element.genre.includes('Drama'))
    if (dramaMovies == 0){
        return 0
    }else{
        return dramaMovies.length
    }
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = (array) => {
    let movies = []
    const titleArray = array.map(function(element){
        movies.push(element.title)
    })
    const moviesOrder = movies.sort()
    if (moviesOrder.length <= 20){
        return moviesOrder
    } else{
        return moviesOrder.slice(0,20)
    }
}
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
const turnHoursToMinutes = (array) =>{
    const newMovies = [...array]
    for (movie in newMovies) {
      const duration = newMovies[movie].duration
      const arrayD= duration.split(' ')
      if(arrayD.length <=1){
        const horas = parseInt(arrayD[0].replace ( /[^0-9]/g, '' ));
        newMovies[movie].duration = horas*60
      }else{
        const horas = parseInt(arrayD[0].replace ( /[^0-9]/g, '' ));
        const minutos = parseInt(arrayD[1].replace ( /[^0-9]/g, '' ));
        newMovies[movie].duration = (horas*60) + minutos
      }
    }
    return newMovies
  }
// BONUS Iteration: Best yearly rate average - Best yearly rate average
