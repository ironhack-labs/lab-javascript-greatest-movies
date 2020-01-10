/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
const orderByYear=array =>{
    let newArray=array.map(arr => arr).sort((a,b)=>{
        if(a.year===b.year){
            return a.title.localeCompare(b.title)
        }
        return a.year-b.year
    })
    return newArray
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
const howManyMovies=array=>{
    const filterMovies=array.filter((array)=>array.director==="Steven Spielberg" && array.genre.indexOf("Drama")!=-1);
    return filterMovies.length
}
// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = array => {
    let newArray = array.map(el => el.title)
    					.sort((a,b) => a.localeCompare(b))
    					.slice(0,20) 
    					 					return newArray;

    }



  orderAlphabetically(movies);
// Iteration 4: All rates average - Get the average of all rates with 2 decimals
const ratesAverage=array=>{
    if(array.length===0)return 0
    const rates=array.map(arr => arr.rate>0 ? arr.rate:0)
    const ratesReduce=rates.reduce((total,currentValue)=>total+currentValue)
    return Math.round((ratesReduce/array.length)*100)/100
}

// Iteration 5: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = array => {

    const averageDrama = array.filter(element => element.genre.includes('Drama'))
    return ratesAverage(averageDrama)
}



dramaMoviesRate(movies)



dramaMoviesRate(movies)
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
    const turnHoursToMinutes=array=>{
        return array.map(arr =>{
            let minutes=0
            const{ duration }=arr
            const getMinutes=duration.split(' ')
            if(getMinutes.length===1){
                minutes=(getMinutes[0].includes('h') ? parseInt (getMinutes[0])*60 : parseInt(getMinutes[0]))
            }else{
                minutes=parseInt(getMinutes[0])*60 + parseInt(getMinutes[1])
            }
            return{...arr, duration:minutes}
        })
    }

// BONUS Iteration: Best yearly rate average - Best yearly rate average
