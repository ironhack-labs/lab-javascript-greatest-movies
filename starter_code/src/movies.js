/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

const turnHoursToMinutes = (movies) => {
    const newArray = JSON.parse(JSON.stringify(movies));
    let time = 0;
    for(let count = 0; count < newArray.length; count += 1){
        time = newArray[count].duration.split('h').join('').split('min').join('');
        if (time.length === 1){
            newArray[count].duration = parseInt(time[0] * 60);
        } else if (time.length === 2){
            newArray[count].duration = parseInt(time[0] + time[1]);
        } else if (time.length === 3){
            newArray[count].duration = (parseInt(time[0] * 60) + parseInt(time[2]));
        } else {
            newArray[count].duration = (parseInt(time[0] * 60) + parseInt(time[2] + time[3]));
           // console.log(newArray[count].duration);
        }
    }
    //console.log(newArray);
    return newArray;
}

// Get the average of all rates with 2 decimals 

const ratesAverage = (movies) => {
    const average = movies.reduce((total, value) => {
        return total + parseInt(value.rate);
        },0);
    return Math.round(average / movies.length * 100)/ 100;
}

// Get the average of Drama Movies

const dramaMoviesRate = (movies) => {
    let countDrama = 0;
    let varDrama;
    let dramaM;
    let finalDrama = [];
    let finalCount = 0;
    for(let i = 0; movies.length > i; i++){
      varDrama = movies[i];
      //console.log(varDrama);
      // dramaM = varDrama.genre.filter(drama => drama === 'Drama')
      dramaM = varDrama.genre.filter(function(drama){
        // console.log(drama)
        if (drama === 'Drama'){
          return drama
        }
      });
      // console.log(dramaM);
      if (dramaM[0] === 'Drama'){
        finalDrama.push(movies[i]);
        countDrama += 1;
        finalCount += 1;
      }
    }
    if (countDrama !== 0){
      const average = finalDrama.reduce((total, value) => {
        if (value.rate == ''){
          return total + 0;
        }
        return total + parseInt(value.rate);
        },0);
    return Math.round(average / finalDrama.length * 100)/ 100;

      // ERRO STRING VAZIA INDO NO RATESAVERAGE NÃO PODE RECEBER, TRATAR PARA IR UM ZERO
    }
}
// Order by time duration, in growing order

const orderByDuration = (movies) => {
  movies.sort((a, b) => {
    if (a.duration < b.duration){
      return -1;
    }
    if (a.duration > b.duration){
      return 1;
    }
    if (a.duration === b.duration && a.title < b.title){
      return -1;
    }
    return 0;
  });

  return movies;
}


// How many movies did STEVEN SPIELBERG
 const howManyMovies = (movies) => {
  let countMovies = movies.filter(movie => movie.director == 'Steven Spielberg' && movie.genre.includes('Drama'));
  console.log(countMovies)
  let ccMovies = countMovies.length;
  if (movies.length === 0) {
    return undefined;
  }
  return `Steven Spielberg directed ${ccMovies} drama movies!`
  };
 

// Order by title and print the first 20 titles

const orderAlphabetically = (movies) => {
  let newArray = movies.slice(0);
  newArray.sort((a, b) => {
    if (a.title < b.title){
        return -1;
    }
    if (a.title > b.title){
        return 1;
    }
    return 0;
  });
  let shortArray = newArray.slice(0,20);
  let finalArray = [];
  for (var i = 0; i < shortArray.length; i++) {
    finalArray.push(shortArray[i].title)
  }
  return finalArray;
}

// Best yearly rate average

const bestYearAvg = (movieArray) => {
  let bestRate = 0;
  let currRate = 0;
  let bestYear = "";
  if(movieArray.length === 0){
    return undefined;
  }
  movieArray.sort((a,b)=>{
    if(a.year > b.year){
      return 1;
    }
    if(a.year<b.year){
      return -1;
    }
    return 0;
  })

// Best yearly rate average
  let begin = movieArray[0].year;
  let end = movieArray[movieArray.length-1].year;
  for(let i = begin; i <= end; i++){
    let yearArr = movieArray.filter((eachMovie)=>{
      return eachMovie.year === `${i}`;
    })
    let rateArr = yearArr.reduce((a,b)=>{
        return Number(a) + Number(b.rate)
    },0)
    currRate = rateArr / yearArr.length;
    if(bestRate < currRate){
      bestRate = currRate
      bestYear = i
    }
  }
  return `The best year was ${bestYear} with an average rate of ${bestRate}`;
} 

