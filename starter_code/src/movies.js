/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(someArr){
    //Slice without arguments  creates a copy
    let copiedArr=someArr.slice();
    let newArr=copiedArr.sort((a,b)=>{
        if(a.year==b.year){
            if (a.title > b.title) { 
                return 1 
            } else { 
                return -1 
            }
        }
        return a.year-b.year
    })
    return newArr
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(moviesArr){

    let drama=moviesArr.filter(el=>{
        return el.genre.includes("Drama") && el.director==="Steven Spielberg";
    })
    return drama.length
}
// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArr){
    let newArr=moviesArr.slice()
   let order=newArr.sort((a,b)=>{
       if(a.title >b.title){
           return 1
       }else{
           return -1
       }
   })
   //console.log("order",order)
   let titels=order.map(i=>{
        return i.title
   })
   //console.log(titels)
   let first20=titels.slice(0,20)
   return first20
}
// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(moviesArr){
    if(moviesArr.length===0){
        return 0
    }
    let rateAvg=moviesArr.reduce((rateNum,currentRate)=>{
        // console.log("Rate Number", rateNum,"Current", currentRate.rate) 
        if(currentRate.rate==="" ||currentRate.rate===undefined ){
            return rateNum
        }else{
            return rateNum+currentRate.rate
        }
        
        //console.log(num.rate+=num.rate)
        //return ((Math.round()*100)/100)
    },0)
    return (rateAvg/moviesArr.length).toFixed(2) *1
}

// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(moviesArr){
    let dramas=moviesArr.filter(el=>{
            return el.genre.includes("Drama")       
    })
    let rateDrama=dramas.reduce((rateNum,currentRate)=>{
        return rateNum+currentRate.rate
    },0)
    //console.log("rateDrama", rateDrama)
    if(dramas.length===0){
        return 0
    }
    //rateDrama will contain all the sum of the Rates of Drama movies
    return (rateDrama/dramas.length).toFixed(2)*1//.tofixed... to get 2 decimals
}
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
