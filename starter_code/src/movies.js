

/* eslint no-restricted-globals: 'off' */

let pelis = [
    {
      "title": "The Shawshank Redemption",
      "year": 1994,
      "director": "Frank Darabont",
      "duration": "2h 22min",
      "genre": [
        "Crime",
        "Drama"
      ],
      "rate": 9.3
    },
    {
      "title": "The Godfather",
      "year": 1972,
      "director": "Francis Ford Coppola",
      "duration": "2h 55min",
      "genre": [
        "Crime",
        "Drama"
      ],
      "rate": 9.2
    },
    {
      "title": "The Godfather: Part II",
      "year": 1974,
      "director": "Francis Ford Coppola",
      "duration": "3h 22min",
      "genre": [
        "Crime",
        "Drama"
      ],
      "rate": 9
    }
]

console.log(pelis)


// function orderByYear (array){
//     let sortedArray = [...array];
//     // sortedArray.sort((a.year, b.year) => a.year - b.year)
//     sortedArray.sort((a,b) => a.year - b.year)


// Iteration 1: Ordering by year - Order by year, ascending (in growing order)


function orderByYear (array){

    let sortedArray = [...array];
    
    
    // when sorting by 2 fields, first sort by the main one and follow by an OR the second arguement. so if a -b = 0, it will jump to the or. 
    sortedArray.sort((a,b) => a.year - b.year || a.title.localeCompare(b.title))

return sortedArray
}






// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(array){

    filteredMovies = array.filter(movie => movie.director == "Steven Spielberg" && movie.genre.includes("Drama"))

    return filteredMovies.length

    
}


// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array){

    let orderedArray = [...array]

    //sort arrays by name

    orderedArray = orderedArray.sort((a,b) => a.title.localeCompare(b.title))

    //extract all movie titles

    orderedArray = orderedArray.map(movie => movie.title)

    //slice first 20 items

    return orderedArray.slice(0,20)
}


orderAlphabetically(pelis)


// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(array){

    let moviesAvgRate = 0;

    //only when length is larger than 0

    if(array.length != 0){
    


    let sumOfRates = array.reduce((acc, elm) => {

        //if the movie has rate, the return the acc + elm.rate, if it doesnt has the only return de accumulatice. 

        if(elm.rate){
        
        return acc + elm.rate
        
         }else{
             return acc
         }
    },0) //the second argument of reduce is 0, meaning the first iteration of acc will equal 0 instead of the 1st element of the array.

    moviesAvgRate = sumOfRates/array.length

    }

    //toFixed(2), returns a STRING! a the number with 2 decimals. then transform to number using parsefloat
    return parseFloat(moviesAvgRate.toFixed(2))

}


// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array){

    let dramaMoviesAvgRate = 0;

    let dramaMovies = array.filter(movie => movie.genre.includes("Drama"))

    if(dramaMovies.length != 0){

        let dramaMoviesSumRates = dramaMovies.reduce((acc, elm) => acc + elm.rate, 0)

         dramaMoviesAvgRate = dramaMoviesSumRates/dramaMovies.length

    }

    return parseFloat(dramaMoviesAvgRate.toFixed(2))
      
}


// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(arr){

    let arrayToUse = [...arr]
    
    let arrayTimeMinutes = arrayToUse.map(elm => {

        if(elm.duration){
        
        return eval(elm.duration.replace("h","*60").replace(" ","+").replace("min"," "))

        }else{
            return 0
        }
    })

    //for some reason the following for loop IS CHANGING THE ORIGINAL ARRAY. 

    for (let i = 0; i < arrayToUse.length; i++){
        arrayToUse[i].duration = arrayTimeMinutes[i]
    }



    return arrayToUse

   
}




// BONUS Iteration: Best yearly rate average - Best yearly rate average


function bestYearAvg(arr){

}
bestYearAvg()
