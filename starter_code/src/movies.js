/* let movies = [
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
    } */
    


/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function  orderByYear(moviesArray){
    
    const sortedArray = moviesArray.slice().sort(function(a, b) {
        if (a.year<b.year){
                return -1;
            }else if(a.year>b.year){
                return 1;
            } else if (a.year === b.year){
           return a.title.localeCompare(b.title)
        }
        });
       // console.log(sortedArray)
    return sortedArray;
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(arrayToReduce){
   const spielbergMovies = arrayToReduce.reduce(
       function(accumulator, movie){
            if(movie.director === "Steven Spielberg" && movie.genre.includes("Drama")){
                accumulator += 1
            }
            return accumulator
        },
        0)
return spielbergMovies
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movieArray){
    //kürzere Schreibweise
    /*const titleSortedArray = movieArray.slice().sort(function(a,b){
        return a.title.localeCompare(b.title)
    }).slice(0,20).map(
        function(movie){
            return movie.title;            
        }        
    )*/
    const titleSortedArray = movieArray.slice().sort(function(a,b){
        return a.title.localeCompare(b.title)
    }).slice(0,20);
    //console.log(titleSortedArray)
    //return titleSortedArray //two function return statement not possible

    const onlyTitle= titleSortedArray.map(
        function(movie){
            return movie.title;            
        }        
    )
    return onlyTitle
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movieArray){
    const rateSum = movieArray.reduce(function(accumulator, movie){        
        if(movie.rate === ""){
            movie.rate = 0; 
        }
        if("rate" in movie === false){
            movie.rate = 0; 
        }
        return accumulator + movie.rate;        
    },
    0)
    if(rateSum !== 0){
        const rateAverage = rateSum / movieArray.length
        parseFloat(rateAverage.toFixed(2))
        return parseFloat(rateAverage.toFixed(2))
    }else{
        return 0;
    }    
}
// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movieArray){
    const dramaRateSum = movieArray.reduce(       
        function(accumulator, movie){
            if(movie.genre.includes("Drama")){
                return accumulator + movie.rate;                                
            }else{
                return accumulator + 0;
            }                     
        },
        0)
    const dramaNumber = movieArray.reduce(
        function(accumulator, movie){
            if(movie.genre.includes("Drama")){
                accumulator +=1;                
            }
            return accumulator;                                                
        },
        0)
    
    if (dramaRateSum !== 0){
        return parseFloat((dramaRateSum / dramaNumber).toFixed(2))
    }else{
        return 0;
    }    
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
