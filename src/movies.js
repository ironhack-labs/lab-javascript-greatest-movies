// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(array){
    let dirArray=array.map((movie)=>{
        return movie.director;
    })
    return dirArray
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(array){
    let filterArray=array.filter((movie)=>{
        return  movie.director==="Steven Spielberg" && movie.genre.includes("Drama")

    })
    return filterArray.length
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(array){
    if(array.length===0)
    {return 0};
    let totRate=array.reduce((acc,elem)=>{
        return acc+elem.rate
    },0)

    let avgRate=totRate/array.length
    return Number(avgRate.toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(array){
    if(array.length===0 && array.genre.length >1 && array.movie.genre !="Drama")
    {return 0};
    
    let totRate=array.reduce((acc,elem)=>{
        return acc+elem.rate
    },0)

    let avgRate=totRate/array.length
    return Number(avgRate.toFixed(2))
}
    

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(array){
    let newArray=JSON.parse(JSON.stringify(array))


let sortNewArray=newArray.sort((a,b)=>{
    if (a.year>b.year){
        return 1
    }

    else if (a.year<b.year){
        return -1
    }

    else {
        if (a.title>b.title){
            return 1
        }
        else if ( a.title<b.title){
            return -1
        }
           else return 0
        }
        
    }) 
    return sortNewArray  
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array){
    let newArray=JSON.parse(JSON.stringify(array))
    
     let sortNewArray=newArray.sort((a,b)=>{
        if (a.title>b.title){
            return 1
        }
    
        else if (a.title<b.title){
            return -1
        }
            else return 0
        }) 
            return sortNewArray
    
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
