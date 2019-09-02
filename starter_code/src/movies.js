// /* eslint no-restricted-globals: 'off' */

// let movies = [
//     {
//       title: 'The Shawshank Redemption',
//       year: '2000',
//       director: 'Frank Darabont',
//       duration: '2h 22min',
//       genre: ['Crime', 'Drama'],
//       rate: '9'
//     },
//     {
//       title: 'The Godfather',
//       year: '2000',
//       director: 'Francis Ford Coppola',
//       duration: '2h 55min',
//       genre: ['Crime', 'Drama'],
//       rate: '8'
//     },
//     {
//       title: 'The Godfather: Part II',
//       year: '1978',
//       director: 'Francis Ford Coppola',
//       duration: '3h 22min',
//       genre: ['Crime', 'Drama'],
//       rate: '10'
//     },
//     {
//       title: 'The Dark Knight',
//       year: '1978',
//       director: 'Christopher Nolan',
//       duration: '2h 32min',
//       genre: ['Action', 'Crime', 'Drama', 'Thriller'],
//       rate: '7'
//     }
//   ];
  
// Iteration 1: All rates average - Get the average of all rates with 2 decimals 


function ratesAverage (arrMovie){
   let sumValue = sumArray(arrMovie);
   let total = calcAverage(sumValue, arrMovie.length)
   return total;
};

function calcAverage(totalValue, numberElements){
    let avarageValue = Number((totalValue / numberElements).toFixed(2));
    if(isNaN(avarageValue))
    {
        return 0;
    }
    return avarageValue;

};

function sumArray(arrMovie){
    let sumValue = arrMovie.reduce((sumValue, movies)=> sumValue + Number(movies.rate), 0);   
        
          return sumValue;
};

 
// Iteration 2: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arrMovie){

    let dataFiltred = filterArrayGenre(arrMovie,"Drama"); 
    let averageDrama = ratesAverage(dataFiltred);
     
      return averageDrama;

    };

    function filterArrayGenre(arrMovie,textFilter){
        let dataFiltred = arrMovie.filter((item) => {       
            return item.genre.includes(textFilter);
          });
          return dataFiltred;
    }

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

function orderByDuration (moviesArray){

    let newOrder = moviesArray.sort(function (a, b) {
        if (a.duration < b.duration) {return -1;} //a é menor que b em algum critério de ordenação
        else if (a.duration > b.duration) {return 1;} //a é maior que b em algum critério de ordenação
        else if (a.title < b.title) {return -1;} 
        else if (a.title > b.title) {return 1;} 
        return 0;
    });


    return newOrder;


}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
function howManyMovies(arrMovies){
    let dataFiltred = filterArrayGenre(arrMovies,"Drama");
    let dataFiltredDirector = filterArrayDirector(dataFiltred,"Steven Spielberg"); 

    return dataFiltredDirector.length;

}

function filterArrayDirector(arrMovie,textFilter){
    let dataFiltred = arrMovie.filter((item) => {       
        return item.director.includes(textFilter);
      });
      return dataFiltred;
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arrMovies){
    let newOrder = arrMovies.sort(function(a,b){
        if(a.title < b.title){return -1}
        else if (a.title > b.title){return 1}
        else return 0
    });
    if(newOrder.length > 20){
        return newOrder.splice(0,20).map(eachmovie => eachmovie.title);
    }
    else
    return newOrder.map(eachmovie => eachmovie.title);

}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function convertHours(duration) {
    let totalTime = 0;
    let hours = 0; 
    let minutes = 0;

    const time = duration.split(" ");
;
  
    if (time.length >= 2) {
        hours = parseInt(time[0]);
        minutes = parseInt(time[1])
    } else {
        if (time[0].indexOf("min") !== -1) {
            minutes = parseInt(time[0])
        } else if (time[0].indexOf("h") !== -1) {
            hours = parseInt(time[0]);
        }
    }
    totalTime = hours * 60 + minutes;
    return totalTime;
}

function turnHoursToMinutes(movies) {
    const newMovies = movies.map(function (movie) {
        const newMovie = { ...movie };
 
        newMovie.duration = convertHours(movie.duration);
        return newMovie;
    });
    return newMovies;
};

// BONUS Iteration: Best yearly rate average - Best yearly rate average

function bestYearAvg(movies){ 
    let newArray = [];
    let sumYear = 0;
    let numbersMoviesYear = 0
    let year = 0;
    let maxAverage = 0;
    let yerMaxAverage = 0;

   let avarege = 0;    

   if(movies.length == 0){
    return null;

   }

    for (var i = 0; i < movies.length; i++) {
       if (newArray.indexOf(movies[i].year) == -1) {
        newArray.push(movies[i].year);
       }
    }

    for (var cont = 0; cont < newArray.length; cont += 1){
        sumYear = 0;
        numbersMoviesYear = 0;
        year = newArray[cont];
        numbersMoviesYear = 0;
        avarege = 0;
       

       for (var conta = 0; conta < movies.length; conta += 1){          
           if (movies[conta].year == year){          
            sumYear += Number(movies[conta].rate)
            numbersMoviesYear += 1;              
           }
        }      
        avarege = calcAverage(sumYear, numbersMoviesYear);  
       
       
        if(avarege > maxAverage){
            maxAverage = avarege;
            yerMaxAverage = year;
        }  
        else if(avarege == maxAverage && year < yerMaxAverage)   {
            yerMaxAverage = year;
        } 
}

    console.log(`The best year was ${yerMaxAverage} with an average rate of ${maxAverage}`)
    return `The best year was ${yerMaxAverage} with an average rate of ${maxAverage}`
    //console.log(arrayReturn);
 
}

 //bestYearAvg(movies)

