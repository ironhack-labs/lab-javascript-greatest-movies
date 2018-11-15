
/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average

clearArray = (str) => {
    var clear = str.split('h');
    clear = clear.join(" ").replace('min', '');
    clear = clear.split(" ");
    return clear;
}

turnHoursToMinutes = (movies) => {
 return movies.map((movie) => {
    const duration = clearArray(movie.duration);
    var newDuration = 0;
    if(duration.length != 1){
    const hour = duration[0]*60;
    const min = parseInt(duration[2]);
        if(duration.length === 2){
//Quando não tiver minutos e só hora
             newDuration = hour;
        }else{
//Aqui retorna hora+minuto
            newDuration = hour+min;
        }
    }else{
//Esse else é para se a duração só tiver minutos
        newDuration =  parseInt(duration[0]);
    }  
    return Object.assign({...movie, duration: newDuration});
});
}
//console.log(turnHoursToMinutes(movies));
ratesAverage = (movies) => {
 const moviesLen = movies.length;
 const sumRate =  movies.reduce((sum, movie) => {
    const rate = parseFloat(movie.rate);
     if(rate === " "){
        return 0;
     }else{
        return sum + rate;
     }
     }
      ,0);
      const avgRate = sumRate/moviesLen;
    return parseFloat(avgRate.toFixed(2));

}
//console.log(ratesAverage(movies));

dramaMoviesRate = (movies) => {
    if(movies.length != 0){
  const drama = movies.filter((movie) => {
        if(movie.genre.includes('Drama')){
            return movie;
        }
    });
    console.log(drama);
  return ratesAverage(drama);
    }
}


console.log(dramaMoviesRate(movies));