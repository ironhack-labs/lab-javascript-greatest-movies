/* eslint no-restricted-globals: 'off' */




// Turn duration of the movies from hours to minutes 

// 1 loop through all the movies
//2 transform each movie into a different but similar object
//3 turn 2h 25min -> 145



function turnHoursToMinutes(arrayOfMovies){


    
  let newArray = arrayOfMovies.map((eachMovie)=>{


      if(typeof(eachMovie.duration)==="number"){
        return eachMovie
      }

          let total;

          let both = eachMovie.duration.includes('h') && eachMovie.duration.includes('min');

          let minutesOnly = eachMovie.duration.includes('min') && !eachMovie.duration.includes('h');

          let hoursOnly = !eachMovie.duration.includes('min') && eachMovie.duration.includes('h');


          let numbersOnly = eachMovie.duration.replace('h', '').replace('min', '');

          
          let durationArray = numbersOnly.split(' ');
          

          if(both){
          total = Number(durationArray[0]*60) + Number(durationArray[1])
          }

          if(minutesOnly){
            total = Number(durationArray[0]);
          }
          if(hoursOnly){
            total = Number(durationArray[0]*60);
          }

          let movieCopy = Object.assign({},eachMovie)
          movieCopy.duration = total;
          return movieCopy;

   })


    return newArray;

  }


// Get the average of all rates with 2 decimals 


function ratesAverage (arrayOfMovies) {

  let strToNum = arrayOfMovies.map((movie)=>{
    return Number(movie.rate)
  }) ;

  let sum = strToNum.reduce((total, eachNum)=>{

  return total + eachNum;

},0)

if (strToNum.length === 0) {
  
  return undefined;
  
  }

let average = sum/strToNum.length;

average = Math.floor(average) + Math.round(average%1*100)/100;

return average;

}


// Get the average of Drama Movies

// function dramaMoviesRate(arrayOfMovies) {

//   let numRateOfDrama = arrayOfMovies.map((movie)=>{

//       if(movie.genre.includes("Drama")) {
//       return Number(movie.rate)
//       }else {return 'x';}
//   }) ;

//   console.log(numRateOfDrama);

// numRateOfDrama  = numRateOfDrama.filter(item => {

//   if (item != 'x') { 
    
//     return true;
//   }
// });

// console.log(numRateOfDrama);

//   let sum = numRateOfDrama.reduce((total, eachNum)=>{

//   return total + eachNum;

// },0)

// if (numRateOfDrama.length === 0) {
  
//   return undefined;
  
//   }

// let average = sum / numRateOfDrama.length;

// average = Math.floor(average) + Math.round(average%1*100)/100;


// return average;

// }

// Get the average of Drama Movies


function dramaMoviesRate(arrayOfMovies) {

  let tempArrayOfMovies = arrayOfMovies.filter((movie) => {
    if (movie.genre.includes("Drama")) {
      return true;
    }

  });


  return ratesAverage(tempArrayOfMovies);

}


// Order by time duration, in growing order

function orderByDuration (unSortead) {

  let sortead = turnHoursToMinutes(unSortead);
  
        sortead.sort((a,b)=>{
          if(b.duration > a.duration){return -1}
          if(a.duration > b.duration){return 1}
          if(b.duration === a.duration){
            
              if(b.title > a.title){return -1}
              if(a.title > b.title){return 1}
              if(b.title == a.title){return 0}
          
            }
        });

    return  sortead;

}


// How many movies did STEVEN SPIELBERG

  function howManyMovies (movieList) {

    if (movieList.length === 0 ) {
      return undefined;
    }

    let spielbergDramaMovies  = movieList.filter(movie => {
    
      if ( ( movie.director === 'Steven Spielberg' ) && ( movie.genre.includes('Drama') ) ) { 
        return movie;
      }

    });


    let moviesTitle = spielbergDramaMovies.map((movie) => {
    
    return movie.title;
    
    })

    let anser = `Steven Spielberg directed ${moviesTitle.length.toString()} drama movies!`;
    return anser;
}


// Order by title and print the first 20 titles


function orderAlphabetically (arrayOdMovies) {

  arrayOfTitels = arrayOdMovies
  .map(movie => movie.title)
  .sort((a, b) => (a > b ? 1 : -1))
  .filter((title, index) => (index < 20));

  //let SmalList = arrayOfTitels.slice(0, 5);

  console.log(arrayOfTitels);

  return arrayOfTitels;

}

// Best yearly rate average

function orderAlphabetically (arrayOdMovies) {

  arrayOfTitels = arrayOdMovies
  .map(movie => movie.title)
  .sort((a, b) => (a > b ? 1 : -1))
  .filter((title, index) => (index < 20));

  //let SmalList = arrayOfTitels.slice(0, 5);

  console.log(arrayOfTitels);

  return arrayOfTitels;

}
 


// Best yearly rate average

function bestYearAverage(arrayOdMovies) {

    arrYearsWithRate = arrayOdMovies
    .map(movie => ([movie.year,movie.rate]))
    .sort((a,b) => (a[0] > b[0] ? 1 : -1));

   // console.log(arrYearsWithRate);

  //   let avgByYear = arrYearsWithRate
  //   .map((year, i) => (if(year[0] === arrYearsWithRate[i+1][0])) {

  //     return ([year[0],(year[1]+arrYearsWithRate[i]/2));
  //    }else {return year[0], year [1]}

  // );

  let keys = arrYearsWithRate
  .map(year => (year[0]));

      keys = keys.filter((year, index, self) => {
        return index == self.indexOf(year);
    });

  //console.log (keys);

//   var keyToObj = keys.reduce((acc, cur, i) => {
//   acc[i] = cur;
//   return acc;
// }, {});
function keyToObj(arr) {
  var Objs = {};
  for (var i = 0; i < arr.length; ++i)
    {
      if (arr[i] !== undefined) 
      Objs[i] = arr[i];
      console.log(Object.keys(Objs[i]));
      }

    //console.log(Objs);
    return Objs;
}

// function renameKeys(obj, newKeys) {
//   const keyValues = Object.keys(obj).map(key => {
//     const newKey = newKeys[key] || key;
//     return { [newKey]: obj[key] };
//   });
//   return Object.assign({}, ...keyValues);
// }

//Object.keys(object1)

keyToObj(keys);

   // console.log(arrYearsWithRate); 

}

bestYearAverage(movies);



