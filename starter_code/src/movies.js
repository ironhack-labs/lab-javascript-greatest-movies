/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(movieInHour) {
    // var movieInMinute;
    
    var movieInMinute = movieInHour.map(function(movie){

 

      if(movie.duration.length>=8) {
        var movieAfter={
          title: movie.title,
          year: movie.year,
          director: movie.director,
          duration: parseInt(movie.duration.charAt(0))*60+parseInt(movie.duration.charAt(3))*10+parseInt(movie.duration.charAt(4)),
          genre: movie.genre,
          rate: movie.rate
        };
        return  movieAfter;
      } else if (movie.duration.length>=5){
        var movieAfter={
            title: movie.title,
            year: movie.year,
            director: movie.director,
            duration: parseInt(movie.duration.charAt(0))*10+parseInt(movie.duration.charAt(1)),
            genre: movie.genre,
            rate: movie.rate
          };
          return  movieAfter;

      } else if (movie.duration.length>=4){
        var movieAfter={
            title: movie.title,
            year: movie.year,
            director: movie.director,
            duration: parseInt(movie.duration.charAt(0)),
            genre: movie.genre,
            rate: movie.rate
          };
          return  movieAfter;
      } else {
        var movieAfter={
            title: movie.title,
            year: movie.year,
            director: movie.director,
            duration: parseInt(movie.duration.charAt(0))*60,
            genre: movie.genre,
            rate: movie.rate
          };
          return  movieAfter;
      }
        
    });
    return movieInMinute;
};


// Get the average of all rates with 2 decimals 

function ratesAverage(arr){
    var sumRating =  arr.reduce(function(accumulator, current){
        // if(current.rate==undefined){
        //     continue;
        // }
        return current.rate ? accumulator + parseInt(current.rate):accumulator;
    },0);

    var averageRating = sumRating/arr.length;
    return Math.round(averageRating*100) / 100;
};


// Get the average of Drama Movies

function dramaMoviesRate(arr){
    var arrDrama = arr.filter(function(movie){
        return movie.genre.indexOf("Drama")>-1;
    });

    if (arrDrama.length==0) {
        return undefined;
    }

    return ratesAverage(arrDrama);
}

// Order by time duration, in growing order

function orderByDuration(arr){
    return arr.sort(function(a,b){
        if(a.duration==b.duration){
            if(a.title>b.title){
                return 1;
            } else {
                return -1;
            }
        } else {
        return a.duration - b.duration;
        }
    });
}


// How many movies did STEVEN SPIELBERG

function howManyMovies(arr){

    if(arr[0]==null){
        return undefined;
    }
    var arrDrama = arr.filter(function(movie){
        return movie.genre.indexOf("Drama")>-1;
    });

    
    var arrSteven = arrDrama.filter(function(movie){
        return movie.director.indexOf("Steven Spielberg")>-1;
    });

    if(arrDrama[0]==null||arrSteven[0]==null){
        return "Steven Spielberg directed 0 drama movies!";
    }
    
    return "Steven Spielberg directed "+ arrSteven.length+ " drama movies!";
}

// Order by title and print the first 20 titles

function orderAlphabetically(arr){
    var arrOrder = arr.sort(function(a,b){

        if(a.title>b.title){
            return 1;
        } else {
            return -1;
        }

    });
    var arrReturn=[];
    if(arrOrder.length<=20){
        for (i=0;i<arrOrder.length;i++)
            arrReturn.push(arrOrder[i].title);
    } else {
        for (i=0;i<20;i++){
            arrReturn.push(arrOrder[i].title);
        }
    }
    return arrReturn;
}


// Best yearly rate average

function bestYearAvg(arr){
    if(arr[0]==null){
        return undefined;
    }

    var yearList=[];
    for (i=0; i<arr.length;i++){
        if(yearList.indexOf(arr[i].year)<0){
            yearList.push(arr[i].year);
        }
    }
    var rateList = new Array(yearList.length);
    var counterList = new Array(yearList.length);
    for (i=0;i<yearList.length;i++){
        rateList[i]=0;
        counterList[i]=0;
    }
    for(i=0;i<arr.length;i++){
        rateList[yearList.indexOf(arr[i].year)]+=parseFloat(arr[i].rate);
        counterList[yearList.indexOf(arr[i].year)]+=1;
    }
    for (i=0;i<yearList.length;i++){
        rateList[i]/=counterList[i];
    }

    var maxIndex=0;
    for (i=0;i<yearList.length;i++){
        if(rateList[maxIndex]<rateList[i]){
            maxIndex=i;
        } else if (rateList[maxIndex]==rateList[i]){
            if (yearList[i]<yearList[maxIndex]){
                maxIndex=i;
            }
        }
    }
    

    return "The best year was "+yearList[maxIndex]+" with an average rate of "+rateList[maxIndex];



}