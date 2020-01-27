/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arrayOfMovies){
   let newArray= arrayOfMovies.slice()
   return newArray.sort(function(a,b) {
        if (a.year>b.year) return 1;
        if (b.year>a.year) return -1;
        if (a.title>b.title) return 1;
        if (b.title>a.title) return -1;
    })
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(arrayOfMovies){
    
    return  arrayOfMovies.filter(movie => {
       return movie.genre.includes('Drama') && movie.director=="Steven Spielberg"

     }).length
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arrayOfMovies){
    let newArray=arrayOfMovies.slice() 
    newArray.sort((a,b)=> a.title>b.title ? 1:-1)
    let titlesArray=[]
    newArray.forEach(movieElement=>{
      titlesArray.push(movieElement.title)
    })
    return(titlesArray.slice(0,20))
  }
// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arrayOfMovies){
    let averageRate=0
     //Option1:
    let newArray=arrayOfMovies.filter(obj => Object.keys(obj).includes("rate"));
    if (arrayOfMovies.length==0) return averageRate;
    newArray.forEach(movie=>{
        averageRate += movie.rate
        })
//    averageRate= newArray.reduce((acc,val)=>acc+= val.rate,0)
    return (Math.round(100*averageRate/arrayOfMovies.length))/100
  }
    //Option2: using reduce, number, fixed
    //shorthand- ? <> else if
    //shorthand- : <> or
        //   averageRate= arrayOfMovies.reduce((avgRate,movie)=> movie.rate ? (avgRate+= movie.rate, avgRate):avgRate,0)
        //     return Number(averageRate/arrayOfMovies.length).toFixed(2)
        //   }

// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arrayOfMovies){
    let averageRate=0   
    if (arrayOfMovies.length==0) return averageRate;
    //Option 1
    let newArray=arrayOfMovies.filter(movie => {
      return movie.genre.includes("Drama")
    });
    if (newArray.length==0) return averageRate;
    newArray.forEach(movie=>{
        averageRate += movie.rate
        })
    return (Math.round(100*averageRate/newArray.length))/100
  }
    //Option 2
    // averageRate= arrayOfMovies.reduce((avgRate,movie)=> {
    //     if (movie.genre.includes("Drama")){ avgRate+= movie.rate  } return avgRate },0)
   
    //    return Number(averageRate/arrayOfMovies.filter(movie=>{ return movie.genre.includes("Drama") }).length).toFixed(2)
    // }
  
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arrayOfMovies){

    let newArray= arrayOfMovies.map(movie=> {
        let copyMovie={...movie}
        if (copyMovie.duration.includes('min') && copyMovie.duration.includes('h')){
          copyMovie.duration = parseInt(copyMovie.duration.charAt(copyMovie.duration.indexOf('h')-1))*60+parseInt(copyMovie.duration.slice(copyMovie.duration.indexOf('min')-2,copyMovie.duration.indexOf('min')))
        } else if (copyMovie.duration.includes('h')) {
          copyMovie.duration = parseInt(copyMovie.duration.charAt(copyMovie.duration.indexOf('h')-1))*60
        } else if (copyMovie.duration.includes('min')) {
            copyMovie.duration= parseInt(copyMovie.duration.slice(copyMovie.duration.indexOf('min')-2,copyMovie.duration.indexOf('min')))
        }
        return copyMovie
      })
   
      return newArray
}
// BONUS Iteration: Best yearly rate average - Best yearly rate average
function bestYearAvg(arrayOfMovies) {
    
    // //Option 1
    // let bestAverage=""
    // let movieYearArray=[]
    // let averageRate=0 
    // if (arrayOfMovies.length==0) return null;
    // arrayOfMovies.forEach(movie => {
    //   if (!movieYearArray.includes(movie.year)){
    //     movieYearArray.push(movie.year)
    //   }
    //  })
    //  movieYearArray.sort()
    //  for (i=0;i<movieYearArray.length;i++){
    //    let year = movieYearArray[i]
    //    let sumOfRates=0
    //    let counter = 0
    //      arrayOfMovies.forEach(movie=>{
    //        if (movie.year == year){
    //        sumOfRates += movie.rate
    //        counter ++
    //        }
    //      })
       
    //    if (averageRate < Math.round(100*sumOfRates/counter)/100){
    //      bestAverage = movieYearArray[i]
    //      averageRate=Math.round(100*sumOfRates/counter)/100
    //    }
    //  }
    //     return `The best year was ${bestAverage} with an average rate of ${averageRate}`
    //    }
     //Option 2
    let bestAverage={}
    let averageRate=0 
    if (arrayOfMovies.length==0) return null;
    arrayOfMovies.forEach(movie => {
    
        let counter=0
        averageRateForYear=arrayOfMovies.reduce((avgRate,movieYear)=>{
        if(movie.year == movieYear.year){avgRate+= movieYear.rate;counter++} return avgRate},0)
        averageRateForYear=averageRateForYear/counter
        if (averageRate == averageRateForYear){
        if (bestAverage.year>movie.year){
        bestAverage = movie;
        averageRate=averageRateForYear;
        }} else if (averageRate < averageRateForYear){
        bestAverage = movie;
        averageRate=averageRateForYear;
        }
        })
     return `The best year was ${bestAverage.year} with an average rate of ${averageRate}`
   }
