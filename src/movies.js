// Iteration 1: All directors? - Get the array of all directors.

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

const getAllDirectors = (movies) => {
    let directors = movies.map((movie) => movie.director);
    return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

const howManyMovies = (movies) => {
    let spielbergMovies = movies.filter((movie) => movie.genre.includes('Drama') && movie.director === 'Steven Spielberg')
    return spielbergMovies.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

const ratesAverage = (movies) => {

    if(movies.length === 0) {
        return 0;
    }
    let total = movies.reduce((acc, movie) => {
        if(movie.rate){
        acc += movie.rate;
        }
        return acc;
    }, 0);
    return  Number((total/movies.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = (movies) => {
    let dramaMovies = movies.filter((movie) => movie.genre.includes('Drama'));
    return(ratesAverage(dramaMovies));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = (movies) => {
    let moviesByYear = [...movies].sort((a, b) => {
        if((a.year - b.year) === 0){
            return a.title.localeCompare(b.title);
        }
        return a.year - b.year;
    });
    return moviesByYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = (movies) => {
    let alphabeticallyOrderedArr = [...movies].sort((a, b) => a.title.localeCompare(b.title));  
    return alphabeticallyOrderedArr.map((movie) => movie.title).slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

//es llamado por la función 'calculateMovieTime' y recorre los tiempos del array, si la posición incluye h multiplica por 60 para obtener minutos, si no contiene h deja 
//el array como está, dejando todas las posiciones en minutos
const calculateMinutes = (time) => {
    let intTime = parseInt(time);
    if (time.includes('h')){
        return intTime * 60;
    }
    return intTime;
}

//es llamado por la función 'turnHoursToMinutes' para recorrer duration del array movies, separa el array horas en minutos por espacio vavio para dejar dos (1horas + 1min)
//(se apoya en calculateMinutes para transformar cada posición del array a minutos)
const calculateMovieTime = (duration) => {
    let moviesTime = duration.split(' ');
    return moviesTime.reduce((totalMins, time) => {
        return totalMins + calculateMinutes(time);
    }, 0);
}

//recorre el array movies y retorna uno nuevo con la duración de cada película en minutos (se apoya en la función 'calculateMovieTime')
const turnHoursToMinutes = (movies) => {
    let durationOfMovies = movies.map((movie) =>{
        let copyMovieArr = {...movie};
        copyMovieArr.duration = calculateMovieTime(movie.duration);
        return copyMovieArr;
    });
    return durationOfMovies;
}

/*

Intento hacer que turnHoursToMinutes en una sola

const turnHoursToMinutes = (movies) => {
    let timeMovies = movies.map((movie) => {
        movie.duration = movie.duration.split(' ').reduce((totalMins, movieDuration) =>{
        if(movieDuration.includes('h')){
            totalMins += Number(duration.replace('h', '')) * 60;
        }
        else{
            totalMins += Number(duration.replace('min', ''));
        }
        return totalMins;
    },0)
 return CopyMovies;
}

*/

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
