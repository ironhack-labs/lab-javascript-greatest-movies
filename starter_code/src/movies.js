/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

const orderByYear=(Arr) =>{
    let years=[]
    let final=[]
    Arr.forEach(elem=>{
      if(years.indexOf(elem.year)===-1)
      years.push(elem.year)
    })
    years.sort()
    for(i=0;i<years.length;i++)
    {
     let moviesYear=Arr.filter(elem=>elem.year===years[i])
        moviesYear.sort(function (a, b){
    return (b.title - a.title)
}).forEach(elem=>final.push(elem))
    }
    return final
  };


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
const howManyMovies = (arr) => {
  return  arr.filter(elem=>elem.genre.indexOf("Drama")>=0 && elem.director==="Steven Spielberg").length
}



// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically =(arreglo)  => {let noerden=[...arreglo] 
  noerden.sort((a,b)=>
  (''+a.title).localeCompare(b.title)) 
  return noerden.slice(0,20).map(elem=>elem.title)}


// Iteration 4: All rates average - Get the average of all rates with 2 decimals
const ratesAverage=(arr) =>{if(arr.length===0)return 0 
let rate =arr.map(elem=>elem.rate)
let resultado=rate.reduce((acc,c)=>acc+(c),0)
resultado=resultado/arr.length 
return Math.round(resultado*100)/100
}


// Iteration 5: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = (arr) => {return  ratesAverage(arr.filter(elem=>elem.genre.indexOf("Drama")>=0))
  }

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes


// BONUS Iteration: Best yearly rate average - Best yearly rate average
