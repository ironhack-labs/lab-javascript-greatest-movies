/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arr) {
  let newArr = [];
  if (arr.length === 0) {
    return [];
  }

  newArr = arr.sort(function (a, b) {
    if (a.year > b.year) {
      return 1;
    } else if (a.year < b.year) {
      return -1;
    } else {
      return 0;
    }
  });

  newArr.sort(function(a, b) {
    if (a.title > b.title) {
      return 1;
    } else if (a.title < b.title) {
      return -1;
    } else {
      return 0;
    }
  })

  newArr.sort(function (a, b) {
    if (a.year > b.year) {
      return 1;
    } else if (a.year < b.year) {
      return -1;
    } else {
      return 0;
    }
  });

  return newArr; 
} 

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(arr) {
  let newArr = arr.filter(arr => arr.director ==="Steven Spielberg" && arr.genre.includes("Drama"));
  return newArr.length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  let newArr = [...arr];
  newArr.sort(function(a, b) {
    if (a.title > b.title) {
      return 1;
    } else if (a.title < b.title) {
      return -1;
    } else {
      return 0;
    }
  });

  let titles = newArr.slice(0, 20);

  let newTitles = [];
  for (var i = 0; i < titles.length; i++) {
    newTitles.push(titles[i].title);
  }
  return newTitles;
}


// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arr) {
  if (arr.length === 0) {
    return 0;
  }

  const rate = arr.reduce( (sum, movie) => {
    if (movie.rate>0) {
      return sum + movie.rate;
    } else if (!movie.rate) {
      return sum;
    } else if (movie.rate = 0) {
      return sum + 2;
    }
    return sum + movie.rate;
  },0);

  console.log(Number((rate/arr.length).toFixed(2)));
  return Number((rate/arr.length).toFixed(2));
}

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr) {
  if (arr.length === 0) {
    return 0;
  }

  let newArr = arr.filter(arr => arr.genre.includes("Drama"));
  if (newArr.length === 0) {
    return 0;
  }
  const rate = newArr.reduce( (sum, movie) => {
    if (movie.rate>0) {
      return sum + movie.rate;
    } else if (!movie.rate) {
      return sum;
    } else if (movie.rate = 0) {
      return sum + 2;
    }
    return sum + movie.rate;
  },0);

  return Number((rate/newArr.length).toFixed(2));

}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(arr) {
  if (arr.length === 0) {
    return [];
  }
  if (arr.duration===undefined){
    return 0;
  }
// method 0 :D
  /*arr=arr.forEach(function (element){
    if(!element.duration.includes(“min”)){
      element.duration=parseInt(element.duration)*60;
    }
    else if(element.duration.includes(“min”)){
      if(element.duration.includes(” “)){
        let time=[];
        time.push(element.duration.split(” “));
         time[0]=parseInt(time[0])*60;
         time[1]=parseInt(time[1]);
         element.duration=time[0]+time[1];
      }
      else {
        element.duration=parseInt(element.duration);
      }
    }
    return arr;
  })
  */
  //method 1 XDDD
 /* arr=arr.forEach(function (element){
    if(!element.duration.includes(” “)){
      if(element.duration<15){
        element.duration=parseInt(element.duration)*60;
        return arr;
     }else{
      element.duration=parseInt(element.duration);
      return arr;
      }
      }
       else if(element.duration.includes(” “)){
         let time=[];
        time.push(element.duration.split(” “));
         time[0]=parseInt(time[0])*60;
         time[1]=parseInt(time[1]);
         element.duration=time[0]+time[1];
         return arr;
        }
  })
*/
//method 2 XD
  //let newArr=[];
  //for(let i=0;i<=arr.length;i++){
  //  if(!arr[i].duration.includes(” “)){
  //    if(arr[i].duration<15){
  //     arr[i].duration=parseInt(arr[i].duration)*60;
  //    }
  //    else {
  //      arr[i].duration=parseInt(arr[i].duration);
  //    }
  //  }
  //  else if(arr[i].duration.includes(” “)){
  //    let time=[];
  //    time.push(arr[i].split(” “));
  //   time[0]=parseInt(time[0])*60;
  //    time[1]=parseInt(time[1]);
  //    arr[i].duration=time[1]+time[0];
  //  }
  //  newArr.push(arr[i]);
  //}
  
//method 3 XD
  arr.map(function(movie){
    let filmTime=movie;
    if (!(filmTime.duration).includes(” “)) {
    if(parseInt(filmTime.duration)<=25){
        filmTime.duration=parseInt(filmTime.duration);
      }
      else if (parseInt(filmTime.duration)>25){
      filmTime.duration = parseInt(filmTime.duration)*60;
      }
    } else if ((filmTime.duration).includes(” “)){
     let time = [];
     time.push((filmTime.duration).split(” “));
      time[0]=parseInt(time[0])*60;
      time[1]=parseInt(time[1]);
      filmTime.duration=time[0]+time[1];
    }
    return filmTime;
  })
}
// BONUS Iteration: Best yearly rate average - Best yearly rate average
