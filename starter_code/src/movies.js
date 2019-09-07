/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 

function ratesAverage(movies) {

    let rates = movies.reduce(function (acumulator, ratesAv) {
        return acumulator + parseFloat(ratesAv.rate);

    }, 0)
    return rates / movies.length;
    console.log(rates);
}

ratesAverage(movies);

ratesAverage();

// Iteration 2: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(MoviesArray) {
    for (let j = 0; j < MoviesArray.length; j++) {
        if (MoviesArray[j].genre.indexOf('Drama') <= -1) {
            return 0;
        } else {
            let DramaMo = MoviesArray.filter(movie => movie.genre.indexOf('Drama') > -1);
            console.log(DramaMo);

            for (let i = 0; i < DramaMo.length; i++) {
                if (DramaMo[i].rate == "") {
                    DramaMo[i].rate = "0";
                    console.log(DramaMo[i].rate);
                }
            }
            let drama = DramaMo.reduce((sum, actual) => {
                console.log(sum + parseFloat(actual.rate));
                return sum + parseFloat(actual.rate);
            }, 0)
            let result = drama / DramaMo.length;
            console.log(parseFloat(result.toFixed(2)));
            console.log("vai", result);
            return parseFloat(result.toFixed(2));

        }
    }
}


// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

function orderByDuration(durationArray) {
    let ordering = durationArray.sort((a, b) => {

        if (a.duration > b.duration) {
            return -1;
        }

        if (a.duration < b.duration) {
            return 1;
        }


        if (a.title > b.title) {
            return -1;
        }

        if (a.title < b.title) {
            return 1;
        }
    })

    let reverse = ordering.reverse();

    return ordering;
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

function howManyMovies(steveMovies) {
    if (steveMovies.length === 0) {
        return 0;
    }
    let steve = steveMovies.filter(movie => movie.director.indexOf('Steven Spielberg') > -1);
    let steve2 = steve.filter(movie2 => movie2.genre.indexOf('Drama') > -1);
    return steve2.length;


}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

 function orderAlphabetically(movie20){
    let titles20 = movie20.sort((a,b)=>{
    if (a.title < b.title) {
        return -1;
    }
  
    if (a.title > b.title) {
        return 1;
    }
    else{
      return 0;
    }
    }).map(titles =>{
      return titles.title;
    }).slice(0,20);
    return titles20;
  }

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(arrayHour) {
  return newTime = arrayHour.map(times => {
    let time;
    let minute;
    let hour;
    let newDuration;
    time = times.duration;
    time = time + "";
    if (time.indexOf("h") !== -1 && time.indexOf("min") !== -1) {
      hour = time.slice(0, 2);
      hour = hour.replace("h","");
      hour *= 60;
      minute = time.split(" ");
      minute = minute[1].replace("min", "");
      minute *= 1;
      newDuration = hour + minute;
      times.duration = newDuration;

    } else if (time.indexOf("h") !== -1) {
      hour = time.slice(0, 2);
      hour = hour.replace("h","");
      hour *= 60;
      times.duration = hour;
    } else {
      minute = time.replace("min", "");
      minute *= 1;
      times.duration = minute;
    }
    return times;

  });
  
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average


function bestYearAvg(moviess) {
    if(moviess.length == 0 ){
      return null;
    }
    let year = moviess.map(years => {
      let yea = years.year;
      return yea;
    });
  
    var filteredArrayYear = year.filter(function (item, pos) {
      return year.indexOf(item) == pos;
    })
  
    let listMovies = [];
    for(let i = 0; i < filteredArrayYear.length; i++){
      let moviesYear = moviess.filter(function (movi) {return movi.year === filteredArrayYear[i]});
      var arrayRates = 0;  
      moviesYear.forEach(movie => {
        arrayRates += parseFloat(movie.rate);
        
      })
      
      let newAverage = parseFloat(arrayRates/moviesYear.length);
      console.log(newAverage);
  
  
  
  
    }
  
    
    
  
    //console.log(filteredArray);
     
    filteredArrayYear.forEach(movie => {
      arrayRates += parseFloat(movie.rate)
  
    });
  
  }

