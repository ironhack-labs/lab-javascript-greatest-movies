/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 

 
// Iteration 2: Drama movies - Get the average of Drama Movies


// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)


// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct


// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average


function ratesAverage(arr){

    const ratesTotal = arr.reduce((accumulator, currentRate) => {

    
    return accumulator + Number(currentRate.rate);
    },0);
    
    let ratesAvg = ratesTotal / arr.length;
    return Number(ratesAvg.toFixed(2)) || 0;
    
    }

    function dramaMoviesRate(arr){

        let dramaMovies = arr.filter((movie) =>{
          return movie.genre.includes("Drama");
        });
        return ratesAverage(dramaMovies);
        
        }


        function orderByYear(arr){

            let newOrderedArray = arr.sort((a, b) => {
                if (parseFloat(a.year) < parseFloat(b.year)){
                    return -1;
                }
            
                if (parseFloat(a.year) > parseFloat(b.year)){
                    return 1;
                }
            
              if (a.title < b.title) {
                    return -1;
                } else if (a.title > b.title) {
                    return 1;
                }
                    return 0;
            }); 
            return newOrderedArray;
            }

            function howManyMovies(arr){
                var stevenDramaMovies = arr.filter(function(movie){
                
                return movie.genre.includes("Drama") && movie.director === ("Steven Spielberg")
                });
                return stevenDramaMovies.length;
              }



              function orderAlphabetically(arr){

                const orderedByTitleArray = arr.sort((a, b) => {
                if (a.title < b.title){
                return -1;
                    }
                if (a.title > b.title){
                return 1;
                }
                return 0;
                });
                
                return orderedByTitleArray.slice(0,20).map(eachMovieOrderedByTitle => eachMovieOrderedByTitle.title);
                
                }