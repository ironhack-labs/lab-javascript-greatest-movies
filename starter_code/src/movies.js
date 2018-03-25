var movies = [
    {
      title: 'The Shawshank Redemption',
      year: '1994',
      director: 'Steven Spielberg',
      duration: '2h 22min',
      genre: ['Crime', 'Drama'],
      rate: '8.45'
    },
    {
      title: 'The Godfather',
      year: '1972',
      director: 'Francis Ford Coppola',
      duration: '2h 55min',
      genre: ['Crime', 'Drama'],
      rate: '17.15'
    }]

/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    return moviesArray.map(function (elem) {
      var hours = 0;
      var minutes = 0;
      if (elem.duration.indexOf('h') !== -1) {
        hours = parseInt(elem.duration[0], 10) * 60;
      }
      if (elem.duration.indexOf('min') !== -1) {
        minutes = parseInt(elem.duration.substring(elem.duration.length - 5, elem.duration.length - 3), 10);
      }
      return Object.assign({}, elem, { duration: hours + minutes });
    });
  }
  console.log(turnHoursToMinutes(movies));




// Get the average of all rates with 2 decimals
  function ratesAverage(array) {
      return Math.round((array.reduce(function(acumulador,e){

        if (e.rate.length === 0)
          return 0;
        var float =  parseFloat(e.rate);
        var rest = 0


        return float + rest + acumulador;
      },0) / array.length)*100 ) /100;
  }
 console.log(ratesAverage(movies));


// Get the average of Drama Movies

function dramaMoviesRate(array) {
  var cont = 0;
  var drama = (array.reduce(function(acumulador, e){
    for (let i = 0; i < e.genre.length; i++) {
      if (e.genre[i] === "Drama"){
        cont ++;
          if (e.rate.length === 0){
            return  acumulador;}
        return acumulador + parseFloat(e.rate); }
    }
    return acumulador;
  },0) )
  if (drama === 0)
    return undefined;
  else{

    return Math.round((drama/cont) * 100)/100;}

}
console.log(dramaMoviesRate(movies));
// Order by time duration, in growing order
function orderByDuration(array) {


    array = array.sort(function(a,b){
      return a.duration - b.duration;
    });
    console.log(array);
    return array.sort(function(a,b){
      if (a.duration === b.duration)
      return a.title > b.title;
    })





}
console.log(orderByDuration([{ title: 'abc', duration: 180 }, { title: 'bac', duration: 90 }, { title: 'aab', duration: 90 }]));
// How many movies did STEVEN SPIELBERG
function howManyMovies(array) {   //No se porque me encuentra en el último test solo una.
  var cont = 0;
  if (array.length === 0){
    return undefined;
  }
  for (let i = 0; i < array.length; i++) {
    if( array[i].director.toLowerCase().replace(/[^a-z]/g, '') === "stevenspielberg"){
      for (let j = 0; j < array[i].genre.length; j++) {
        if (array[i].genre[j].toLowerCase().replace(/[^a-z]/g, '') === 'drama') {
          cont++;
        };

      }
          }
  }
  return "Steven Spielberg directed " + cont + " drama movies!"
}

console.log(howManyMovies(movies));
// Order by title and print the first 20 titles
function orderAlphabetically(array) {
var x = [];
  array = array.sort(function(a, b){
    return (a.title.localeCompare(b.title));
  })
  if (array.length >= 19){
    for (let i = 0; i < 20; i++)
    {
      x.push(array[i].title);
    }
    return x;
  }
  for (let i = 0; i < array.length; i++) {
    x.push(array[i].title);
    
  }


  return x;
}
console.log(orderAlphabetically([{ title: 'aaa' }, { title: 'bab' }, { title: 'acb' }, { title: 'aab' }, { title: 'bbb' }, { title: 'anc' }, { title: 'kns' }, { title: 'zds' }, { title: 'pow' }, { title: 'gda' }, { title: 'res' }, { title: 'ter' }, { title: 'bca' }, { title: 'ccc' }, { title: 'bbt' }, { title: 'qas' }, { title: 'kmn' }, { title: 'frt' }, { title: 'afb' }, { title: 'agb' }, { title: 'apo' }, { title: 'poa' }, { title: 'cdf' }, { title: 'sea' }, { title: 'lom' }, { title: 'acs' }, { title: 'qas' }, { title: 'mns' }, { title: 'bvc' }, { title: 'gha' }, { title: 'lkj' }, { title: 'era' }, { title: 'ert' }, { title: 'tex' }, { title: 'zas' }, { title: 'pol' }]));
// Best yearly rate average




