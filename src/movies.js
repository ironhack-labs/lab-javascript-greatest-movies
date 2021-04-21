// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
let getAllDirectors = (arr) => 
{
    let newArr =  arr.map((item)=>
    {
    return item["director"]
    })
return newArr
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

let howManyMovies= (movies)=>
{
    let temp=movies.filter((movie)=>movie.genre.includes("Drama")&&movie.director.includes("Steven Spielberg"))
    
    return temp.length
    
} 



// Iteration 3: All rates average - Get the average of all rates with 2 decimals
let ratesAverage=(arr)=>
{
    let newArr =  arr.map((item)=>
    {
    return item["rate"]
    })
    var sum = newArr.reduce(function(a, b)
    {
        return a + b;
    }, 0);
return (sum/newArr.length).toFixed(2)
}

// Iteration 4: Drama movies - Get the average of Drama Movies


let dramaMoviesRate= (movies)=>
{
    let temp=movies.filter((movie,index)=>movie.genre.includes("Drama"))
    let newArr =  temp.map((item)=>
    {
    return item["rate"]
    })
    var sum = newArr.reduce(function(a, b)
    {
        return a + b;
    }, 0);
return (sum/newArr.length).toFixed(2)
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

let orderByYear = (arr) => 
{
    let newArr =  arr.map((item)=>
    {
    return item["year"]
    })
    newArr.sort()
    return newArr.reverse()
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
let orderAlphabetically = (arr) => 
{
    let newArr =  arr.map((item)=>
    {   
    return item["title"]
    })
    for (let index = 0; index <20; index++) 
    {
        let tempo = newArr[index];
    }
    newArr.sort(function(a, b)
    {
        if(a.title < b.title) { return -1;}
        if(a.title > b.title) { return 1;}
        return 0;
    })
    return(newArr)

}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
