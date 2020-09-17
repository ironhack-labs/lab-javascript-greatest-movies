// Iteration 1: All directors? - Get the array of all directors.
const getAllDirectors = (array) => {
    
    let directors = array.map(movie => {
        return movie.director; 
    })
    return directors;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies = (array) => {
    let dramaMovies = array.filter((movie) => {
        return movie.genre.includes("Drama") && movie.director === "Steven Spielberg";
        // return movieType.genre.includes("drama");
    })
    return dramaMovies.length
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

const ratesAverage = (array) => {
    
    if (array != "") {

    let allRates = array.reduce((acc, i) => {
        if (i.rate != '' && i.rate != undefined){
            return acc + i.rate
        } else {
            return acc + 0
        }
    }, 0);

    let averageRate = (allRates / array.length).toFixed(2); 
    averageRate = Number(averageRate); 
    return averageRate
     
} else {
    return 0; 
}
}


// Iteration 4: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = (array) => {
    if (array.genre !== "drama") {
        return 0;
    }; 

    let dramaMovies = array.filter((movie) => {
        return movie.genre.includes("Drama");
    }).reduce((acc, i) => {
        if (i.rate != '' && i.rate != undefined){
            return acc + i.rate
        } else {
            return acc + 0
        }
    }, 0);

    let averageDramaRates = (dramaMovies / array.length).toFixed(2);
    averageDramaRates = Number(averageDramaRates); 
    return averageDramaRates;
}



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = (array) => {

    // let a = JSON.stringify(array)
    // let b = JSON.parse(a)

    let movieByYear = JSON.parse(JSON.stringify(array))
    //let movieByYear2 = array


    movieByYear.sort((a, b) => {
        if (a.year > b.year) {
                    return 1;
                }
                else if (a.year < b.year) {
                  return -1;
                }
                else {
                    if (a.title > b.title) {
                        return 1;
                    }
                    else if (a.title < b.title) {
                      return -1;
                    }
                    else {
                      return 0
                    }
                }
    });
    return movieByYear;
};



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = (array) => {
    // let a = JSON.stringify(array)
    // let b = JSON.parse(a)

    let orderedMovies = JSON.parse(JSON.stringify(array))
    let orderedTitles = orderedMovies

    
    console.log(orderedMovies)
    console.log(orderedTitles)

  
    let arrayTitles = orderedTitles.map((array) => {
        return array.title;
        console.log(arrayTitles);

    });
  

   let arraySort = orderedTitles.sort((a, b) => {
        if (a.title > b.title) {
            return 1;
        }
        else if (a.title < b.title) {
          return -1;
        }
        else {
            if (a.title > b.title) {
                return 1;
            }
            else if (a.title < b.title) {
              return -1;
            }
            else {
              return 0
            }
        }

        if (orderedTitles.length > 21) {
            return orderedTitles.splice(0, 21)
        } else {
            return orderedTitles;
        }
    });



    return orderedTitles;
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
