/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
/*function orderByYear(arr)
{
    let newArr = [];
    
    let y = arr.length;
    for(x=0; x<y; x++)
    {
        let yearCheck = 10000;
        let iCheck = 0;
        let alphCheck = '';
        for(i=0;i<arr.length;i++)
        {
            if(arr[i].year < yearCheck)
            {
                yearCheck = arr[i].year
                iCheck = i
                alphCheck = arr[i].title
            }
            else if(arr[i].year === yearCheck)
            {
                let shortestLength =alphCheck.length;
                if(alphCheck.length > arr[i].title.length)
                {
                    shortestLength = arr[i].title.length
                }
                
                for(j=0;j<shortestLength-1;j++)
                {
                    if(arr[i].title[j] < alphCheck[j])
                    {
                        yearCheck = arr[i].year
                        iCheck = i
                        alphCheck = arr[i].title
                        break
                    }
                }
            }
        }
        newArr.push(arr[iCheck])
        arr.splice(iCheck,1)
    }
    return newArr
}*/

function orderByYear(arr)
{
    let newArr = [];
    arr.sort(function(a,b) {
        return a.year - b.year;
    })
    arr.sort(function(a,b)
    {
        if(a.year === b.year)
        {
            if(a.title > b.title)
            {
                return 1;
            }
            else
            {
                return -1;
            }
        }
    })
    for(i=0;i<arr.length;i++){
        newArr.push(arr[i])
    }
    return newArr;
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(arr) 
{
    return arr.filter(function(movie)
        {
            return(movie.director.includes('Steven Spielberg') && movie.genre.includes('Drama'))

        }
    ).length
}
// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr){
    let movieTitles = []
    let movies = 20;
    let newArr = []
    for(i=0;i<arr.length;i++)
    {
        newArr[i] = {...arr[i]}
    }
    if (arr.length < movies)
    {
        movies = arr.length
    }
    newArr = newArr.sort(function(a,b){
        if(a.title>b.title){
            return 1;
        }
        else{
            return -1;
        }
    })
    for(i=0;i<movies;i++)
    {
        movieTitles[i] = newArr[i].title
    }
    return movieTitles
}
// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arr)
{
    if(arr.length === 0)
    {
        return 0
    }
    let rateSum =0
    for(i=0;i<arr.length;i++)
    {
        if(arr[i].hasOwnProperty('rate'))
        rateSum+=arr[i].rate
    }
    return parseFloat((rateSum/arr.length).toFixed(2))
}
// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr)
{
    let counter = 0;
    if(arr.length === 0)
    {
        return 0
    }
    let rateSum =0
    for(i=0;i<arr.length;i++)
    {
        if( arr[i].genre[0] === "Drama")
        {
            rateSum+=arr[i].rate
            counter++
        }
    }
    if(rateSum === 0)
    {
        return 0
    }
    return parseFloat((rateSum/counter).toFixed(2))
}
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr)
{
    let newArr = []
    for(i=0;i<arr.length;i++)
    {
        newArr[i] = {...arr[i]}
    }
    for(i=0;i<newArr.length;i++)
    {
        let minutes = 0
        if(newArr[i].duration.includes(' ')){
            let x = newArr[i].duration.split(' ')
            minutes = parseInt(x[0]) * 60 + parseInt(x[1])
        }
        else 
        {
            if(newArr[i].duration.includes('h'))
            {  
                let x = newArr[i].duration
                minutes = parseInt(x)*60
            }
            else
            {
                let x = newArr[i].duration
                minutes = parseInt(x)
            }
        }
        
        newArr[i].duration = minutes
    }
    return newArr
}
// BONUS Iteration: Best yearly rate average - Best yearly rate average
