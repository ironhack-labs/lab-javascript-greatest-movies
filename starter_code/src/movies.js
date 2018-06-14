/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


function turnHoursToMinutes(array){
return array.map(function(e){
    var newTime=0;
    var duration;
    if( typeof e.duration === "string"){
      duration=e.duration.split(" ");
    }else{
      duration = e.duration;
    }
    if(duration[1] && duration[0].includes('h')){
     newTime = +duration[0][0]*60 + +duration[1].slice(0,duration[1].length-3);
    } else if(duration[1] && duration[0].includes('min')){
        newTime = +duration[0].slice(0,duration[0].length-3);
    } else {
        if(typeof duration === "string"){
            newTime = +duration[0][0]*60;
        }else{
            newTime = e.duration;
        } 
       
    }
  
    return {
        title: e.title,
        year: e.year,
        director: e.director,
        duration:newTime,
        genre: e.genre,
        rate: e.rate
    };
    
    //return e.duration= 0;
  });
};

// Get the average of all rates with 2 decimals 
function ratesAverage(array){

    return Math.round(array.reduce(function(total , e){
        if(!e.rate){e.rate=0};
        return total + parseInt(e.rate);
    },0) / (array.length) *100)/ 100
}


// Get the average of Drama Movies

function dramaMoviesRate(array){
    if(array.filter(function(e){
        return e.genre.includes("Drama");
      }).length <= 0){return undefined};
    return ratesAverage(array.filter(function(e){
      return e.genre.includes("Drama");
    }));
  
  }
  
// Order by time duration, in growing order
function orderByDuration(array){
    if(array.length==1){
        return array;
    }
    var newArray=turnHoursToMinutes(array);
    for(var i=0; i < newArray.length;i++){
        if(newArray[i].title === undefined){
            delete newArray[i].title;
        }
        if(newArray[i].year === undefined){
            delete newArray[i].year;
        }
        if(newArray[i].director === undefined){
            delete newArray[i].director;
        }
        if(newArray[i].genre === undefined){
            delete newArray[i].genre;
        }
        if(newArray[i].rate === undefined){
            delete newArray[i].rate;
        }
    }
    return newArray.sort(function( a, b){
        if(a.duration==b.duration){
        return a.title > b.title
        }
        return a.duration -b.duration
    })
}

// How many movies did STEVEN SPIELBERG

function howManyMovies(array){
    if (array.length<=0){
        return undefined
    }
    var filteredArray = array.filter(function(e){
        return e.genre.includes("Drama") && e.director === "Steven Spielberg";
      });
      if (filteredArray.length<=0){
        return "Steven Spielberg directed 0 drama movies!"
    }

      var result= "";
      result = "Steven Spielberg directed "+ filteredArray.length +" drama movies!"
    
    return result;
    

}
// Order by title and print the first 20 titles
function orderAlphabetically (array){
    var sortedArray = array.sort(function(a,b){
      if(a.title > b.title ){
        return 1;
      }
      if(a.title < b.title){
        return -1
      }
      return 0
    }).slice(0,20);
console.log(sortedArray)
    var result= [];
    for(var i= 0; i< sortedArray.length; i++){
        result.push(sortedArray[i].title);
    }
    return result
}

// Best yearly rate average
