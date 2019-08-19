/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 
const roundNumber = (number, digits) => Math.round(number * 10 ** digits) / 10 ** digits;


const ratesAverage = movieRate => {

    let rateSum = 0;
    for (const movie of movieRate) {
        rateSum = rateSum + movie.rate;
    }
    return roundNumber(rateSum / movieRate.length, 2);

}


// Iteration 2: Drama movies - Get the average of Drama Movies


function dramaMoviesRate (movies) {
    
    const dramaMovies = movies.filter(movie => {
        if(movie.genre.includes('Drama')){
            return true
        } else {
            return false
        }
    }).map(drama => {
        if(drama.rate===''){
            return 0
        }else{
            return drama.rate
        }
    })
    if(dramaMovies.length===0){
        return 0
    }


    const parse = dramaMovies.map(number => parseInt(number))

    let rateSum = 0;
    for(const rate of parse){
        rateSum = rateSum + rate
    }
    return roundNumber(rateSum / parse.length,2)
    
}



// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

const orderByDuration = (movies) => {
    const SortedByDuration = movies.sort(function(a,b){

        if(a.duration === b.duration){
            var x = a.title.toLowerCase(), y = b.title.toLowerCase();
        
            return x < y ? -1 : x > y ? 1 : 0;
        }

        return a.duration-b.duration 
    })
    return SortedByDuration
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

const howManyMovies = (movies) => {

    const dramaMovies = movies.filter(movie => {
        if(movie.genre.includes('Drama')){
            return true
        } else {
            return false
        }
    }).filter(drama => {
        if(drama.director.includes("Steven Spielberg")){
            return true
        } else {
            return false
        }
    })

    return dramaMovies.length





// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

}

const orderAlphabetically = (movies) => {
    const movi = movies.map(movie => movie.title).sort()
    const arr = []
    if(movi.length < 19){
        for(let i = 0;i<=movi.length-1;i++){
            arr.push(movi[i])
        }
        return arr
    } else if(movi.length > 19){
        for(let i = 0;i<=19;i++){
            arr.push(movi[i])
        }
        return arr
    }
}



// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

const turnHoursToMinutes = (movies) => {
    //map the movies.duration and parseInt to pass from 2h 33min to 153min,
    //the result does not change the original array because map does not mutate the array
    const newMoviesArray = movies.map(function (movie) {
        const n2 = [];

        //use .filter to find m, and h letters inside the duration string (duration string ex: '2h 22min')

        //if the number is only in minutes
        if (movie.duration[5] === undefined && movie.duration[2] === 'm') {
            n2.push(movie.duration[0], movie.duration[1]);
            const newObject = {
                ...movie,
                duration: parseInt(n2.join(''), 10)
            }
            return newObject
        }
        //if the number is in minutes and hours
        else if (movie.duration[5] !== undefined && movie.duration[2] !== 'm') {
            n2.push(movie.duration[3], movie.duration[4]);
            const newObject = {
                ...movie,
                duration: movie.duration[0] * 60 + parseInt(n2.join(''), 10)
            }
            return newObject
        }
        //if the number is only in hours
        else if (movie.duration[1] === 'h') {
            n2.push(movie.duration[3], movie.duration[4]);
            const newObject = {
                ...movie,
                duration: movie.duration[0] * 60
            }
            return newObject
        }
    })
    return newMoviesArray

}



// BONUS Iteration: Best yearly rate average - Best yearly rate average



const bestYearAvg = (movies) => {


    //------ organize the novo array in the form [ { year: '1994', rate: 9.25 },.. ect

  const array = movies.map(movie=> movie.year)

  unicos = [...new Set(array)];

  const novo=[]

  const movieyear = unicos.map(year=> novo.push({
    year: year,
    rate:[]
    })
)

for(let i=0;i<novo.length;i++){
  for(let a=0;a<movies.length;a++){
    if(movies[a].year===novo[i].year){
      novo[i].rate.push(+movies[a].rate)
    }
  }
}
//-------------------- after having the novo array organized, find the average and push to the novo corresponding year-->

for(let i= 0; i<novo.length;i++){

  const el=novo[i].rate
  
  let tempRate=[]
  for(let a=0; a<el.length;a++){
    tempRate.push(el[a])
  }

let sum = el.reduce((previous, current) => current += previous);
let avg = sum / el.length;

novo[i].rate = avg
}

console.log('novo.length',novo.length)
console.log('novo[0]',novo[0])

//------ find the year with the Best Average in the novo array -->



helloo=[]
if(novo.length===0){
   const hello= novo[0]
   helloo.push(hello)
} else if(novo.length===1){
    console.log('hello === 1',novo[0])
    const hello= novo[0]
    helloo.push(hello)
 } else if(novo.length>1){
   const hello= novo.reduce((max, yearObj) => yearObj.rate > max ? yearObj.rate : max, novo[1])
   helloo.push(hello)
} 

 console.log('helloo',helloo)
if(helloo[0]===undefined){
    return null
}
console.log(helloo)

const some = 'The best year was '+helloo[0].year+' with an average rate of '+helloo[0].rate

    return some.toString()
}
