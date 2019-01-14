/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(movies)
{
    let minutesMovies = movies;
    
    for (let i = 0; i < movies.length; i++)
    {
        let hours = 0;
        let minutes = 0;
        
        if(movies[i].duration.indexOf('h') !== -1){
            hours = parseInt(movies[i].duration.slice(0, movies[i].duration.indexOf('h')));
            if(movies[i].duration.indexOf('m') !== -1)
            {
                minutes = parseInt(movies[i].duration.slice(movies[i].duration.indexOf(' ') + 1, movies[i].duration.indexOf('m')));
            }
        }
        else
        {
            minutes = parseInt(movies[i].duration.slice(0, movies[i].duration.indexOf('m')))
        }
         
        minutesMovies[i].duration = 60 * hours + minutes;
    }
    return minutesMovies;
}

// Get the average of all rates with 2 decimals

function ratesAverage(movies)
{
    let sum = 0;
    for(let i = 0; i < movies.length; i++)
    {
        sum += parseFloat(movies[i].rate);
    }
    return Math.round(100 * sum / movies.length) / 100;
}


// Get the average of Drama Movies

function dramaMoviesRate(movies){
    
    
    let sum = 0;
    let totalDramaMovies = 0;
    for (let i = 0; i < movies.length; i++){
        if(movies[i].genre.includes('Drama') && movies[i].rate !==  ''){
            sum += parseFloat(movies[i].rate);
        }
        if(movies[i].genre.includes('Drama')){
            totalDramaMovies += 1;
        }
    }
    if(totalDramaMovies === 0){
        return undefined;
    }
    else{
        return Math.round(100 * sum / totalDramaMovies) / 100;
    }
}


// Order by time duration, in growing order

function orderByDuration(movies){
    
    let sortedMovies = movies;
    return sortedMovies.sort(function(a, b){
        if(a.duration < b.duration){
          return -1;
        }
        else if(a.duration > b.duration){
          return 1;
        }
        else{
          if(a.title < b.title){
            return -1;
          }
          else{
            return 1;
          }
        }
    });
  }

// How many movies did STEVEN SPIELBERG

function howManyMovies(movies){
    if(movies.length === 0){
        return undefined;
    }
    
    let spielbergMovies = movies.filter(function(movie){
        if(movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')){
            return true;
        }
        else{
            return false;
        }
    })

    return 'Steven Spielberg directed ' + spielbergMovies.length + ' drama movies!';

}


// Order by title and print the first 20 titles

function orderAlphabetically(movies){
    let alphaMovies = movies;
    alphaMovies.sort(function(a, b){
        if(a.title < b.title){
            return -1;
        }
        else{
            return 1;
        }
    });
  
    alphaMovies.splice(Math.min(alphaMovies.length, 20));
    let alphaTitles = [];
    for(let i = 0; i < alphaMovies.length; i++){
        alphaTitles[i] = alphaMovies[i].title;
    }
  
    return alphaTitles;
  }


// Best yearly rate average
