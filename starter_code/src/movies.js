/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(array){
    
    var nuArray= array.map(function(objeto){
        var horas=0;
        var minutos=0;
        var nuObj={};
        
        Object.keys(objeto).forEach(function(key){
            nuObj[key]=objeto[key];
        })

        if (typeof objeto.duration === "number"){
            return nuObj
        } else {
        if (objeto.duration.indexOf("h")>0){
            horas=Number(objeto.duration[objeto.duration.indexOf("h")-1]);
        }
        if (objeto.duration.indexOf("m")>0){
            minutos=Number(objeto.duration[objeto.duration.indexOf("m")-2]+objeto.duration[objeto.duration.indexOf("m")-1]);
        }
        var duracion=horas*60+minutos;
        
        nuObj.duration=duracion;
        return nuObj;
        }
        
    })

    return nuArray;
};


var newData = turnHoursToMinutes(movies);
console.log(movies);
console.log(newData);

// Get the average of all rates with 2 decimals 

function ratesAverage(array){
    var totalRates = array.reduce(function(suma, numero){
        return suma + Number(numero.rate);

    }, 0)

    return Number((totalRates/array.length).toFixed(2));
};

console.log(ratesAverage(movies));

// Get the average of Drama Movies

function dramaMoviesRate(array){
    var dramaMovies = array.filter(function(movie){
        return movie.genre.indexOf("Drama")>=0;
    })
    if (dramaMovies.length===0){
        return undefined;
    }
    return ratesAverage(dramaMovies)

};

console.log(dramaMoviesRate(movies));

// Order by time duration, in growing order

function orderByDuration(array){
    
    var movDur = turnHoursToMinutes(array);
    if (movDur.length===1){
        return movDur;
    }
    movDur.sort(function(a,b){
        if (a.duration===b.duration){
            if ([a.title,b.title].sort()[0]===a.title){
                return -1;
            } else {
                return 1;
            }
        }
        return a.duration-b.duration;
    })
    return movDur;
}

// How many movies did STEVEN SPIELBERG

function howManyMovies(array){
    if (array.length===0){
        return undefined
    }
    var dramaMovies = array.filter(function(movie){
        return movie.genre.indexOf("Drama")>=0;
    })
    
    var spielbergDramaMovies = dramaMovies.filter(function(movie){
        return movie.director==="Steven Spielberg";
    })
    

    
    return "Steven Spielberg directed " +spielbergDramaMovies.length + " drama movies!";
    

};

// Order by title and print the first 20 titles

function orderAlphabetically(array){
    var titles = array.map(function(movie){
        return movie.title;
    })
    titles.sort();
    if (titles.length<20){
        return titles
    }
    return titles.slice(0,20);
}

// Best yearly rate average

function bestYearAvg(array){
    if (array.length===0){
        return undefined
    }
    
    var years = [];
    array.forEach(function(movie){
        years.push(movie.year);
    })

    for (var i=0; i<years.length; i++){
        for (var j=i+1; j<years.length; j++){
          if( years[i]===years[j]){
            years.splice(j,1);
            j--;
          }
        }
    }
    
    var yearlyRates = years.map(function(anio){
        var moviesYear = array.filter(function(movie){
            return movie.year===anio;
        });
        var obj = { year: "",
          rate: ""
        };
        obj.year=anio;
        obj.rate=ratesAverage(moviesYear);
        return obj;
    })
    
    yearlyRates.sort(function(a,b){
      return a.rate-b.rate;
    })

    
    return "The best year was " + yearlyRates[yearlyRates.length-1].year+" with an average rate of "+yearlyRates[yearlyRates.length-1].rate;
}

console.log(bestYearAvg(movies));

