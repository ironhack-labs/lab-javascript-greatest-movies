// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(array){
    let directorsArr = array.map((movie)=>{
    return movie.director
    })
    return directorsArr
    }
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(array){
    
    let filterArray = array.filter((elem)=>{
        return (elem.director==="Steven Spielberg" && elem.genre.indexOf("Drama") != -1)
      })
      return filterArray.length
}
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(array){
    if(array != ''){
    let total = array.reduce((acc, elem)=>{
        if(elem.rate){
            return acc + elem.rate / array.length
        } else {
            return acc
        }
    }, 0)
    return total
}
}
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(array){
    if (array != ''){
        let movies =0;

        let ratings = array.reduce((acc, elem)=>{
            if(elem.genre.includes("Drama")){
                movies++;
                return acc + elem.rate
            } else{
                return acc
            }
        }, 0)
    }
    
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array){
    if(array !=''){
        let movies = JSON.parse(JSON.stringify(array))

        movies.sort((a,b)=>{
            if(a.year > b.year){
                return 1
            } else if(a.year < b.year){
                return -1
            } else {
                if (a.title > b.title) {
                    return 1;
                }
                else if (a.title < b.title) {
                    return -1;
                }
                else {
                    return 0;
                }
            }
        })
        return movies
    }

}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array){
    let titles = array.map((elem)=> {
        return elem.title;
    })
    titles.sort((a,b)=>{
        if(a>b){
            return 1
        } else if(a<b){
            return -1
        } else{
            return 0
        }
    })
    if(titles.length > 20){
        titles.splice(20)
    }
    return titles
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
