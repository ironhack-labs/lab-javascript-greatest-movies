/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arrMovies)
{
    let copietedMovie=arrMovies.slice()
    return copietedMovie.sort(function(a,b){
        if(a.year>b.year)
        {
            return 1
        }
        else
        {
            return -1
        }
    })
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(arrMovies){
    const filteredArray=arrMovies.filter(obj=> obj.genre.includes("Drama"))
    const furtherFiltered = filteredArray.filter(obj=> obj.director==="Steven Spielberg")
    return furtherFiltered.length
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arrMovies)
    {
        const stringArray=arrMovies.map(movie=>{
            return movie.title
        })
        stringArray.sort()
        return stringArray.slice(0,20)
    }

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arrMovies)
{
    let elements=0
    const total=arrMovies.reduce(function(accumulator,obj){
        elements++
        return accumulator+obj.rate
    },0)
    return Math.round((total/elements)* 100)/100
}

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arrMovies)
{
    let elements=0
    const filteredArray=arrMovies.filter(obj=> obj.genre.includes("Drama"))
    return ratesAverage(filteredArray)
    
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
