
// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies){
    const directors = movies.map(movie => movie.director)
    return directors
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies){  
    const films = movies.filter(function(movie){
        return (movie.director==='Steven Spielberg') && (movie.genre.includes('Drama'))
            })
    return films.length
}  

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies){
    if (movies.length == 0) return 0
   const rate = movies.reduce(function(sum, movie){
       if (!movie.rate) return sum;
       else return sum + movie.rate;
  }, 0);

  return (parseFloat((rate/movies.length).toFixed(2)))
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies){
    if (movies.length == 0) return 0
    /*const rate = movies.filter(movie => movie.genre.includes('Drama')).reduce(function(sum, movie){
        return sum + movie.rate;
    }, 0);
    */
    const dramaFilms = movies.filter(movie => movie.genre.includes('Drama'))
    if (dramaFilms.length ==0) return 0
    const dramF= dramaFilms.reduce(function(sum, dramaFilm){
        return sum + dramaFilm.rate;
    }, 0);
      return (parseFloat((dramF/dramaFilms.length).toFixed(2)))
    }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies){
    if (movies.length == 0) return 0
    let orderedYear = movies.slice().sort(function(a,b){return a.year > b.year})
    return orderedYear.reverse()
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies){
    if (movies.length == 0) return []
    const ordered = movies.slice().sort(function(a,b){
        if (a.title < b.title) return -1
        if (a.title > b.title) return 1
        return 0
    } ).slice(0,20)
    const dataArray = []
    ordered.forEach(function(movie){dataArray.push(movie.title)})
    return dataArray
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutesM(movies){
    const newArray = []
    let hours = movies.forEach(movie => {

        time = movie.duration.split(' ')
        let h, min
        if(time.length==2){
             h= time[0].match(/\d+/g);
             mins = time[1].match(/\d+/g);
             movie.duration = (parseInt(h[0])*60 + parseInt(mins))
        }
        
        else if (time[0].includes('min')){
            min = time[0].match(/\d+/g);
            movie.duration = (parseInt(min))
        }
        else if (time[0].includes('h')){
            h = time[0].match(/\d+/g);
            movie.duration = (parseInt(h[0])*60)
        }
        return newArray.push(movie);
            
    });
    return newArray
}

function turnHoursToMinutes(movies){
    //no entiendo porque no funciona el deep clone
    let time, h, min;
    let durationIntoMin = movies.map(function(m){
        let movie = Object.assign({}, m)
        time = movie.duration.split(' ');
        if(time.length===2){
             h= time[0].match(/\d+/g);
             mins = time[1].match(/\d+/g);
            movie.duration = (parseInt(h[0])*60 + parseInt(mins))
        }
        else if (time[0].includes('min')){
            min = time[0].match(/\d+/g);
            movie.duration = (parseInt(min))
        }
        else if (time[0].includes('h')){
            h = time[0].match(/\d+/g);
            movie.duration = (parseInt(h[0])*60)
        }
        return movie;          
    });
    return durationIntoMin
}




// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
function bestYearAvg (movies){
    if (movies.length==0) return null
    let year = movies.filter(function(movie){return movie.year})

}
