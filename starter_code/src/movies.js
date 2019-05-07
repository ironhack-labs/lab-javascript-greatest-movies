/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

let durationFormat = movieObj =>{

  let hours;
  let minutes;
  let characterArr = movieObj.split('');
  let notStrgArr = characterArr.map(e => parseInt(e, 10));
  let numArr = notStrgArr.map(e => {
    if(!isNaN(e)){
    return e;
    }
    else{
    return 0;
    }
  });
  
if(numArr.length <= 5 && numArr.length > 2){
  minutes = numArr[0] * 10 + numArr[1];
  return minutes;
}
else if(numArr.length === 2){
  hours = numArr[0] * 60;
  return hours;
}
else if(numArr.length === 8) {
  hours = numArr[0] * 60;
  minutes = (numArr[3] * 10) + numArr[4];
  return hours + minutes;
}
else{
  console.log('Revisa el formato de entrada')
}

}

let turnHoursToMinutes = (arr) =>{ 

  let newArr = arr.map(e => {
    e = {...e, duration: durationFormat(e.duration)};
    return e;
    },0);
  
  return newArr;
};

// Get the average of all rates with 2 decimals 

let ratesAverage = arr =>{
  rateArr = arr.map(e => parseFloat(e.rate))
  sum = rateArr.reduce((total, num) => total + num)
  avg = sum/rateArr.length

  return avg;
};

// Get the average of Drama Movies

let dramaMoviesRate = arr =>{

  let spotNonDramaArr = arr.map(e => {  
     if(e.genre.includes('Drama')){
       return e;
     }
     else{
       return undefined;
     }
    })

  let filteredArr = spotNonDramaArr.filter(e => e != undefined);
  if(filteredArr.length != 0){
    let rateArr = filteredArr.map(e => parseFloat(e.rate))
    let rateArrWoNan = rateArr.map(e =>{
      if(isNaN(e)){
        return e = 0;
      }
      else{
        return e;
      }
    })
    let avg = Math.floor((rateArrWoNan.reduce((sum, num) => sum + num) / rateArrWoNan.length) * 100) / 100;
    return avg;
  }
  else{
    return undefined;
  }
}

// Order by time duration, in growing order

let orderByDuration = arr =>{

  let sortedArr = arr.sort((a, b) =>{
    let durationA = a.duration;
    let durationB = b.duration;
    let titleA = a.title;
    let titleB = b.title;

    if (durationA === durationB){
      if(titleA < titleB){
        return -1;
      }
      else if(titleA > titleB){
        return 1;
      }
      else{
        return 0;
      }
    }
    else{
      if(durationA < durationB){
        return -1;
      }
      else if(durationA > durationB){
        return 1;
      }
      else{
        return 0;
      }
    }
      
  });

  return sortedArr;
}

// How many movies did STEVEN SPIELBERG

let howManyMovies = arr =>{

  let spotDirectorAndGenre = arr.map(e => {  
     if(e.genre.includes('Drama') && e.director.includes('Steven Spielberg')){
       return e;
     }
     else{
       return undefined;
     }
    })

  let filteredArr = spotDirectorAndGenre.filter(e => e != undefined);

  if(arr.length != 0){
  count = filteredArr.length;
  str = `Steven Spielberg directed ${count} drama movies!`
  
  return str
  }
  else{
    return undefined;
  }
}

// Order by title and print the first 20 titles

let orderAlphabetically = arr =>{
  newArr = arr.map(e => e.title)
  let sortedArr = newArr.sort((a, b) =>{
    if(a < b){
        return -1;
      }
      else if(a > b){
        return 1;
      }
      else{
        return 0;
      }
  })
  top20 = sortedArr.slice(0, 20);

  return top20;
}

// Best yearly rate average

let bestYearAvg = arr =>{
  let correctAnswer;

  return correctAnswer;
}