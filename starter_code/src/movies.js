/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


// Get the average of all rates with 2 decimals 
function ratesAverage(array){
  var sum = array.reduce(function(acumulator,currentValue){
    //return acumulator += currentValue.rate;
    return acumulator+currentValue.rate;
  },0)
    var ret = Math.round((sum * 100)/array.length)/100;
    // var ret = parseFloat(sum).toFixed(2)/array.length;
    
    console.log(ret + "Con dos decimales");
   return ret
}

// Get the average of Drama Movies
function dramaMoviesRate(array){

  if (!dramaMovies.length){
    return undefined;
  }

  var dramaMovies = array.filter(function(movie){
    return movie.genre.find(function(singleGenre){
      return singleGenre === ' Drama';
    });
  });

  //var ret = parseFloat(sum).toFixed(2)/array.length;
  var ret = ratesAverage(array);
  console.log(ret);
  return ret
}


// Order by time duration, in growing order
function orderByDuration(array){

  var array2 = [];
  var array3 = [];
  
  array.forEach(function(peli){
    peli.duration = peli.duration.replace('h','');
    peli.duration = peli.duration.replace('min','');
    //array2 = parseInt(peli.duration.split(" "));
    array2 = peli.duration.split(" ");
  // console.log(peli.duration);
    //console.log(array2);

    array3 = array2.map(Number);
    //console.log(array3);

    var duracionMin = array3.reduce(function(acc,currentValue){
      acc = acc*60 + currentValue;
      return acc;
    });

    console.log(duracionMin);

  });


}

// How many movies did STEVEN SPIELBERG
function howManyMovies(array){

  if (!array.length){
    return undefined;
  }

  var result = array.filter(function(movie){
    if (movie.director === "Steven Spielberg"){
      return movie; // return true
    }
  });

  
  // var fin;

  // for (var i=0; result.length-1;i++){
  //   result[i].find(function(peli){
  //     if (peli.genre === 'Drama'){
  //       fin.push(result[i]);
  //       console.log(result[i]);
  //     }

  //   });
          
  // }
  //   console.log(result.length);
  

  
    
    var final = result.filter(function(movie){
      return movie.genre.find(function(singleGenre){
        return singleGenre === 'Drama';
      });
    });

  // });

  console.log(final.length);
  //return final;


  return "Steven Spielberg directed " + final.length + " drama movies!" 
}

// Order by title and print the first 20 titles

// function orderAlphabetically(array){

//   array.sort(function(a, b){
    
//     if (a.title > b.title){
//       return 1;
//     }
//     if (a.title < b.title){
//       return -1;
//     }
//     return 0;
//   });

//   if (array.length > 20){
//     array.splice(20,array.length-1); 
//   }

//   return array;
// }


function orderAlphabetically(array){

  var array2 = [];
  array.forEach(function(peli) {
    array2.push(peli.title);
  });

  array2.sort(function(a, b){
    
    if (a > b){
      return 1;
    }
    if (a < b){
      return -1;
    }
    return 0;
  });

  if (array2.length > 20){
    array2.splice(20,array2.length-1); 
  }

  return array2;
}


// Best yearly rate average
