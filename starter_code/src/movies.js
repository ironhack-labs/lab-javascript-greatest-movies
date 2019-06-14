/* eslint no-restricted-globals: 'off' */


// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(theMoviesArray) {

  function toMinutes(movieToChange){    

  let toChange = movieToChange.duration;
  if(toChange.length < 3) {
    let toSplit = toChange.match(/\d+/g).map(Number);
    toNumber = toSplit.reduce((a, b)=>{return a + b})
    finalHour = (toNumber * 60)
    return finalHour;
  }else if(toChange.length > 3 && toChange.length <= 5) {
    let toSplit = toChange.match(/\d+/g).map(Number)
    return Number(toSplit)
  }else {
    let toSplit = toChange.match(/\d+/g).map(Number);
    toSplit = [(toSplit[0] * 60), toSplit[1]];
    return (toSplit.reduce((a, b)=>{return a + b}));
  }
};

  let changeToNewArray = theMoviesArray.map((theMovie)=>{
    let myNewMovieObject = {...theMovie};
    myNewMovieObject.duration = toMinutes(theMovie)
    return myNewMovieObject
  });

 return changeToNewArray
};


// Get the average of all rates with 2 decimals 

function ratesAverage(movieToChange){  

  let changeToNewArray = movieToChange.map((theMovie)=>{
    
    let myNewArray = [];
 
    myNewArray = parseFloat(theMovie.rate);

    return myNewArray
  });  

  let getMyAverage = changeToNewArray.reduce((a,b)=>{
    return a + b
  });

  let almostAverage = getMyAverage / movieToChange.length
  almostAlmostAverage = almostAverage.toFixed(2);
  finalAverage = parseFloat(almostAlmostAverage);
  return finalAverage;

};

/*
or....

function ratesAverage(movies){

  let total = movies.reduce(a,b)=>{
    return a + Number(b.rate);
  },0);

  return Number(total / movies.length).toFixed(2));
}



*/




// Get the average of Drama Movies



//=-=-=- MY FIRST ATTEMPT

// function dramaMoviesRate(movieToChange){  


//   let changeToNewArray = movieToChange.map((theMovie, index)=>{
    
//     let myNewArray = [];
//     if ((theMovie.genre).includes("Drama")){
//     console.log(theMovie.genre);
//     myNewArray = parseFloat(theMovie.rate); //why does this return undefined elements and the console.log doesnt??????
//     return myNewArray
//     }
    
//   });  

//   console.log(changeToNewArray);

//   let getMyAverage = changeToNewArray.reduce((a,b)=>{
//     return a + b
//   });

//   let almostAverage = getMyAverage / movieToChange.length

//   almostAlmostAverage = almostAverage.toFixed(2);

//   finalAverage = parseFloat(almostAlmostAverage);

//   return finalAverage;

// };

//=-=-=- MY FIRST ATTEMPT


function dramaMovies(movies){

  let onlyDramas = arrayofMovies.filter((eachSingleMovie=>{
    return eachSingleMovie.genre.includes('Drama');
  }))

  if(onlyDramas.length === 0){return undefined};

}


//the rest of the code below is from the teacher



// Order by time duration, in growing order

function orderByDuration(movies){

  let formatted = [...movies];

  if(typeof formatted[0].duration === 'string'){
    formatted = turnHoursToMinutes(formatted);
  }

  return formatted.sort((a,b)=>{

    if(a.duration < b.duration){
      return -1;
    } else if (b.duration < a.duration) {
      return 1;
    } else {
      if(a.tile < b.title){
        return -1
      } else if(b.tile < a.title){
        return 1
      } else {
        return 0;
      }
    }
  });
}


// How many movies did STEVEN SPIELBERG

function howManyMovies(movies){

  let specialMovies = movies.filter((eachMovie)=>{
    return eachMovie.genre.includes('Drama') && eachMovie.director === 'Steven Spielberg'
  })
  return `Steven Spielberg directed ${specialMovies.length} movies`
}


// Order by title and print the first 20 titles


function orderAlphabetically(movies){
  let alphabetical = movies.sort((a,b)=>{
    if(a.title < b.title){
      return -1
    } else if (b.title < a.tile){
      return 1
    } else {
      return 0
    }
  })
}


// Best yearly rate average   booonnnuussssssssss


function bestYearAvg(movies){

  if (movies.length === 0){return undefined}
  let newObj = {}

  movies.forEach((eachMovieObject)=>{

    if(!newObj[eachMovieObject.year]){
      newObj[eachMovieObject.year] = {num: 1, totalRate: Number(eachMovieObject.rate)};
    } else {
      newObj[eachMovie.year].num += 1
      newObj[eachMovie.year].rate += Number(eachMovieObject.rate);
    }
    
  });

  let greatest = {year: '', num: 0}

  for(let eachKey in newObj){
    if(newObj[eachKey].totalRate / newObj[eachKey].num > greatest){
      greatest = newObj[eachKey].totalRate / newObj[eachKey].num
      greatest.year = eachKey;
    }
  }
  return `the best year was ${greatest.year.toString}`

}



