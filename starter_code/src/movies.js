/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

const orderByYear=(movies)=>{
    const newArr = movies.map( movie => movie )
    return newArr.sort((a,b)=>{
        return (a.year===b.year) ? -1 : a.year-b.year 
    })
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
const howManyMovies=(movies)=>{
    const newArr = movies.map( movie => movie )
     const steven = newArr.filter(movie=>movie.director.includes("Steven Spielberg"))
     let drama = 0
     steven.filter(movie=>{
         const count = movie.genre.filter( genre=>genre==="Drama")
         drama += count.length
     })

     return drama
     
}
// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically=(movies)=>{
    
    const newArr = movies.map( movie => movie.title )
    newArr.sort()
    newArr.splice(20, newArr.length)
    return newArr
}
// Iteration 4: All rates average - Get the average of all rates with 2 decimals
const ratesAverage=(movies)=>{
    if(movies.length===0) return 0
    const newArr = movies.map(movie=>(movie.rate>0) ? movie.rate : 0)
    const rates = ((newArr.reduce( (acount,rate) => acount+rate ) )/movies.length).toFixed(2)
    return (1*rates)
}
// Iteration 5: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = (movies)=>{
    const newArr = movies.filter(movie=>movie.genre.includes("Drama"))
    return ratesAverage(newArr) 


}
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

const turnHoursToMinutes=(movies)=>{
    return movies.map(movie=>{
        const newDuration=movie.duration.split(' ')
        let minutos = 0
        if(newDuration.length===1){
         minutos=(newDuration[0].includes('h')) ? parseInt(newDuration)*60 : parseInt(newDuration)
        }else{
           minutos= parseInt(newDuration[0])*60+parseInt(newDuration[1])
        }
        return {...movie,duration: minutos}
    })
}
// BONUS Iteration: Best yearly rate average - Best yearly rate average
const bestYearAvg = movies => {
    if( movies.length === 0) return null
    if( movies.length === 1 ) return (`The best year was ${movies[0].year} with an average rate of ${movies[0].rate}`) 
    let cur_year_arr = []
    const years = movies.map(movie => movie)
    years.sort((a,b) => a.year-b.year)


    let cur_year = ''
    cur_year_arr = []
    let cur_promedio = 0
  
    let bestYear = ''
    let bestAverage = 0
  
    years.forEach( year=> {
      if(cur_year != year.year){
        if(cur_year_arr.length > 0 ){
          if( ratesAverage(cur_year_arr) > cur_promedio ) {
            bestAverage = ratesAverage(cur_year_arr)
            bestYear = year.year
          } 
          
        }}
        cur_year = year.year
        cur_year_arr.push(year)
      
      
    })
    
  return (`The best year was ${cur_year_arr[0].year} with an average rate of ${bestAverage}`)
  }