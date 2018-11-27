/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(data){
    var result = data.map(function(datum){
    var newDuration = 0;
    var durationSplit= datum.duration.split(' ');
    if( datum.duration.length > 5 ){      
        newDuration =  (durationSplit[0].replace("h","") * 60) + (durationSplit[1].replace("min","")*1);
    }else{
       if(datum.duration.length == 2 ){
        newDuration =  (durationSplit[0].replace("h","")*60);
       }else{
        newDuration =  (durationSplit[0].replace("min","")*1);
       }
    }
    
    return{
        title: datum.title,
        year:datum.year,
        director:datum.director,
        duration:newDuration,
        genre:datum.genre,
        rate:datum.rate
    }

    });

    return result;
}

// Get the average of all rates with 2 decimals 
function ratesAverage(data){
    var total = data.reduce(function(a,b){
       return a  += b.rate * 1; 
    },0);

    return (total/data.length);
}

// Get the average of Drama Movies
function dramaMoviesRate(data){
    var filterDrama = data.filter(function(e){
        return e.genre.indexOf('Drama') >= 0;
    });
    if(filterDrama.length > 0){
        return ratesAverage(filterDrama).toFixed(2) * 1;
    }else{
        return undefined;
    }
}

// Order by time duration, in growing order
function orderByDuration(data){

    var sortedData = data.sort(function(a,b){
        if(a.duration == b. duration){
            if (b.title > a.title){
                return -1;
            }else{
                return 1;
            }
        }else{
            return a.duration - b.duration;
        }
    });

    return sortedData;
}

// How many movies did STEVEN SPIELBERG

function howManyMovies(data){
    if(data != ""){
       
    var filterSteven = data.filter(function(e){
        return e.director == "Steven Spielberg" && e.genre.indexOf('Drama') >= 0;
    });

        return "Steven Spielberg directed "+filterSteven.length +" drama movies!";

    }else{ 
        return undefined;
    }
  
}

// Order by title and print the first 20 titles
function orderAlphabetically(data){
    var filterAlpha = data.sort(function(a,b){
        if(a.title > b.title){
            return 1;
        }else{
            return -1;
        }
    });
  

    var onlyTitle = filterAlpha.map(function(a){
        return a.title;
    });

    return onlyTitle.slice(0,20);
}

// Best yearly rate average

function bestYearAvg(data){
    if(data != ""){
    groups = Object.create(null),
    grouped = [];

data.forEach(function (o) {
    if (!groups[o.year]) {
        groups[o.year] = [];
        grouped.push({ year: o.year, rate: groups[o.year] });
    }
    groups[o.year].push(o.rate);
});

var orgGroups = grouped.sort(function(a,b){
  if(a.year > b.year){
    return 1;
  }else{
    return -1;
  }
});

var reduceGroups = orgGroups.map(function(group){
  var newGroup  = group.rate;
  var totalGroup = newGroup.reduce(function(a,b){
    return a += (b*1);
  },0);
  var avg = (totalGroup / newGroup.length).toFixed(2) *1;
  return {year:group.year,
    rate:avg};
});

var sortedByYear = reduceGroups.sort(function(a,b){
    return b.rate - a.rate;
  });



  return "The best year was "+sortedByYear.slice(0,1)[0].year+" with an average rate of "+sortedByYear.slice(0,1)[0].rate;
}else{
    return undefined;
}
}