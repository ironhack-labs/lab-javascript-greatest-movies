/* eslint no-restricted-globals: 'off' */

var mov = [
  {
    title: 'The Shawshank Redemption',
    year: '1994',
    director: 'Frank Darabont',
    duration: '2h 22min',
    genre: ['Crime', 'Drama'],
    rate: '10'
  },
  {
    title: 'Pirates of the Caribbean: The Curse of the Black Pearl',
    year: '2003',
    director: 'Gore Verbinski',
    duration: '2h 23min',
    genre: ['Action', 'Adventure', 'Fantasy'],
    rate: '8.0'
  },
  {
    title: 'Jaws',
    year: '1975',
    director: 'Steven Spielberg',
    duration: '2h 4min',
    genre: ['Adventure', 'Drama', 'Thriller'],
    rate: '8.0'
  },
]

// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(array){
  
  let auxArray=[];

  array.forEach(element => {
    auxArray.push(Object.assign({}, element));
  });
  
  let ar = array.map(
    (movie, index) => { 

      auxArray[index].duration = 0;

      if(movie.duration.includes('h')){
        let horas = parseInt((movie.duration.substring(0,movie.duration.indexOf("h"))))*60;
        auxArray[index].duration += horas;
      }
      
      if(movie.duration.includes('min')){
        let minutos = parseInt((movie.duration.substring(movie.duration.indexOf(" "), movie.duration.indexOf("m"))).trim());
        auxArray[index].duration += minutos;
      }    
    }
  );

  return auxArray;
}

// Get the average of all rates with 2 decimals 

function ratesAverage (array){

  let media = parseFloat(((array.reduce((media, movie) => media + parseFloat(movie.rate),0))/array.length).toFixed(2));

  console.log(`The average rate is: ${media}`);

  return media;

}


// Get the average of Drama Movies
function dramaMoviesRate (array){

  let dramaMovies = array.filter(
    (movie) =>  movie.genre.includes('Drama')
  );

  if(dramaMovies.length === 0){
    return undefined;
  }else{
    let media = dramaMovies.reduce(
      (acc, movie) => acc + (movie.rate ===''? 0 : parseFloat(movie.rate))
    ,0);

    media = parseFloat((media/dramaMovies.length).toFixed(2));
  
    console.log(`The average rate is: ${media}`);
  
    return media;
  }
}


// Order by time duration, in growing order

function orderByDuration(array){

  let auxArray=array.map(element => {
    return Object.assign({}, element);
  });

  auxArray.sort(
    (movie1,movie2) => {
      if (movie1.duration > movie2.duration)
        return 1;
      else if (movie1.duration < movie2.duration)
        return -1;
      else
        if (movie1.title > movie2.title)
          return 1;
        else if (movie1.title < movie2.title)
          return -1;
    }
  );

  return auxArray;

}

// How many movies did STEVEN SPIELBERG

function howManyMovies(array){

  if (array.length===0){
    return undefined;
  }else{
    let spielbergMovies = array.filter(
      (movie) => movie.director.includes('Steven Spielberg')
    ).filter(
      (movie) => movie.genre.includes('Drama')
    );
    return `Steven Spielberg directed ${spielbergMovies.length} drama movies!`;
  }
}

// Order by title and print the first 20 titles
function orderAlphabetically(array){
  
  let auxArray=array.map(element => {
    return Object.assign({}, element);
  });

  auxArray.sort(
    (movie1,movie2) => {
      if (movie1.title > movie2.title)
        return 1;
      else if (movie1.title < movie2.title)
        return -1;
      else
        return 0;
    }
  );

  auxArray = auxArray.slice(0,20);

  auxArray = auxArray.map(
    (movie) => movie.title
  );

  return auxArray;

}

// Best yearly rate average

function bestYearAvg(array){
  let year;

  return year;
}