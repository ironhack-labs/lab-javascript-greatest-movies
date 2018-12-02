/* eslint no-restricted-globals: 'off' */

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
  if (array.length === 0){
    return undefined;
  }else{
    //Creo un array con los años de todas las películas
    let auxArray = [];
    array.forEach( (movie) => auxArray.push(movie.year) );
  
    //Elimino los años duplicados
    let years = [];
    years.push(auxArray[0]);
    for (let i = 1; i < auxArray.length; i++) {
      let repetido = false;
      for (let j = 0; j < years.length; j++) {
        if (auxArray[i] === years[j]){
          repetido = true;
          break;
        }
      }
      if(!repetido)
        years.push(auxArray[i]);
    }

    console.log(years);
  
    //Creo un array con los rates medios por año
    let yearAverage=[];
    for (let i = 0; i < years.length; i++) {
      let auxYear = array.filter( (movie) => movie.year === years[i] );
      console.log(auxYear);
      let auxAverage = auxYear.reduce( (acc, movie) => acc + (parseFloat(movie.rate)) ,0);
      auxAverage = parseFloat((auxAverage / auxYear.length).toFixed(2));
      yearAverage.push({year: years[i], average: auxAverage});
    }

    //Ordeno el array de medias por años (de menor a mayor)
    yearAverage = yearAverage.sort(
      (movie1, movie2) => {
        if (movie1.year > movie2.year)
          return 1;
        else if (movie1.year < movie2.year)
          return -1;
        else
          return 0;
      }
    );

    //Busco la mayor media
    let mayor = 0;
    yearAverage.forEach(
      (media) => {if(media.average > mayor) mayor = media.average}
    );  

    //Busco el menor año con la mayor media
    console.log(yearAverage);
    console.log(mayor);

    let bestYear = yearAverage.find(
      (year) => year.average === mayor
    );
    
    return `The best year was ${bestYear.year} with an average rate of ${bestYear.average}`;
  }
}