/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 
/*function ratesAverage(arr){

    const sumaPelis = arr.reduce((acc, cur) => acc + arr.rate, 0);
    let decimal = sumaPelis / arr.length;

    return decimal;
      
  }
  
  ratesAverage(movies);*/
  function suma(arr) {
    let sumaValores = arr.reduce((sumaValores, calificaciones) => sumaValores + Number(calificaciones.rate),0);
    console.log(sumaValores)
    return sumaValores;
  };
  function calculoProm(total, numberElements){
    let valorProm = Number((total/numberElements).toFixed(2));
    // if(isNaN(valorProm)){
    //   return 0;
    // }
    return valorProm;
  };
  
  function ratesAverage(arr){
    let valorSuma = suma(arr);
    console.log(valorSuma);
    let total = calculoProm(valorSuma, arr.length);
    console.log(total);
    return total;
  };

// Iteration 2: Drama movies - Get the average of Drama Movies


function dramaMoviesRate(arr) {
  let soloDrama = arr.filter(movie => movie.genre.indexOf('Drama') > -1);

  if(soloDrama.length === 0){
    return 0;
  } else {
    return ratesAverage(soloDrama);
  }
}
// dramaMoviesRate(movies);

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

function orderByYear(arr) {
  const ordenado = [...arr].sort((movie1, movie2) => {
      if (Number(movie1.year) === Number(movie2.year)) {
        return movie1.title.localeCompare(movie2.title);
      } else {
        return movie1.year - movie2.year;
      }
  });
  return ordenado;
}
//orderByYear(movies);

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

function  howManyMovies(arr){
  let steven = arr.filter(movie => (movie.genre.indexOf('Drama') > -1) && (movie.director === 'Steven Spielberg'));
  return steven.length;
 }
howManyMovies(movies);

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr){
   let contador = [];
   for(let i =0; i<arr.length; i++){
     contador.push(arr[i].title)
   }
   contador.sort();
   return contador.slice(0,20);
 }

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(arr){
    let conversion = arr.map((movie) => { 
      let newMovie = {...movie};
      if(movie.duration){
        const cadenaPrueba = movie.duration;
        let mins;
    
        if(movie.duration.indexOf("h") === -1){
            let tempMin = cadenaPrueba.split("min");
            newMovie.duration = parseInt(tempMin[0]);
        } else {
            let temp = cadenaPrueba.split("h ");
            let tempMin = "0";
            if(temp[1]){
            tempMin = temp[1].split("min");
            }
            mins = parseInt(temp[0]) * 60 + parseInt(tempMin[0]);
            newMovie.duration = mins;
        }
      }
      return newMovie;
    });
    return conversion; 
  }
  
  turnHoursToMinutes(movies);
// BONUS Iteration: Best yearly rate average - Best yearly rate average
function bestYearAvg(arr) {
    let newArr = [];
    if(arr.length === 0){
        return null;
    }
    for( let i = 0; i < arr.length; i++){
      if (arr[i].rate){
        const idx = newArr.findIndex(el => el.year === arr[i].year);
      if(idx === -1){
        newArr.push({
          year: arr[i].year,
          sumRate: parseFloat(arr[i].rate),
          totalMovies: 1,
        })
      }else{
        newArr[idx].totalMovies++;
        newArr[idx].sumRate += parseFloat(arr[i].rate);
      }
      }
    }
    let yearlyRates = newArr.map( (yearMovies) => { 
      return { year: yearMovies.year,
       avgRate: yearMovies.sumRate / yearMovies.totalMovies }
     });
     yearlyRates.sort((rate1, rate2) => rate2.avgRate - rate1.avgRate  || rate1.year - rate2.year);
     return `The best year was ${yearlyRates[0].year} with an average rate of ${yearlyRates[0].avgRate}`
   };