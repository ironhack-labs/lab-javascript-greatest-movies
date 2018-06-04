/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes
function turnHoursToMinutes(array) {
  var newarray = array.map(function(elem) {
    elemcpy = Object.assign({}, elem);
    initduration = elemcpy.duration.toLowerCase();
    if (typeof initduration === "number") {
      return elemcpy;
    } else if (initduration.includes("h") && initduration.includes("min")) {
      durmin = initduration[3] + "" + initduration[4];
      elemcpy.duration = parseInt(initduration[0]) * 60 + parseInt(durmin);
      return elemcpy;
    } else if (initduration.includes("h") && !initduration.includes("min")) {
      elemcpy.duration = parseInt(initduration[0]) * 60;
      return elemcpy;
    } else if (!initduration.includes("h") && initduration.includes("min")) {
      elemcpy.duration = parseInt(initduration[0] + "" + initduration[1]);
      return elemcpy;
    } else {
      return [];
    }
  });
  return newarray;
}

// Get the average of all rates with 2 decimals
function ratesAverage(array) {
  var newarray = array.map(function(elem) {
    return parseInt(elem.rate);
  });
  var total = newarray.reduce(function(sum, current) {
    return sum + current;
  }, 0);
  avg = Math.round((total / newarray.length) * 100)/100;
  return avg;
}

// Get the average of Drama Movies
function dramaMoviesRate(array) {
  var newarray = array.filter(function(elem) {
    var genre = elem.genre.join(" ").toLowerCase();
    return genre.includes("drama");
  });
  var newone = newarray.map(function(elem) {
    return (elem.rate==="")? 0: parseInt(elem.rate);
  });

  var total = newone.reduce(function(sum, current) {
    return sum + current;
  }, 0);

  if (newone.length != 0) {
    var avg = Math.round((total / newone.length)*100)/100;
    console.log(avg);
    return avg;
  } else {
    console.log("No Drama film");
    return ;
  }
}

// Order by time duration, in growing order
var numbersort = function (a, b) {
    return a.duration - b.duration;
  };
//   var stringsort = function (a, b) {
//     if (a.title > b.title) {
//       return -1;
//     }
//     if (a.title < b.title) {
//       return 1;
//     }
//     return 0;
//   };
  
  function orderByDuration(array) {
    array.sort(numbersort);
    array.sort(function (a, b) {
      if (a.duration === b.duration) {
        if (a.title > b.title) {
          return 1;
        }
        if (a.title < b.title) {
          return -1;
        }
        return 0;
      };
    }
    )
    return array;
  };

// How many movies did STEVEN SPIELBERG
function howManyMovies(array) {
    if (typeof array != "undefined" && array != null && array.length != null && array.length > 0) {
    var spielberg = array.filter(function (elem) {
      return (elem.director === "Steven Spielberg") && (elem.genre.includes('Drama'));
    });

    if (array===[]) {
        return  ;
    }else if(spielberg.length == 0) {
      return "Steven Spielberg directed 0 drama movies!";
      
    } else {
      return 'Steven Spielberg directed ' + spielberg.length + ' drama movies!';
    }
}
  }

// Order by title and print the first 20 titles

function orderAlphabetically(array) {
    if (typeof array != "undefined" && array != null && array.length != null && array.length > 0) {
      array.sort(function (a, b) {
        if (a.title > b.title) {
          return 1;
        }
        if (a.title < b.title) {
          return -1;
        } else {
          return 0;
        }
      });
      let newarray = [];
      let l=(array.length>=20)?20:array.length;
      for (i = 0; i < l; i++) {  
        newarray.push(array[i].title)
      };
  
      return newarray;
    } else {
    return [];
    }
}

  // Best yearly rate average
  function onlyYear(array){
    let newarray=array.map(function(elem){
      return elem.year;
    })
  return newarray;
  }
  
  function distinctYear(array){
    let newarray=[];
    for(i=0;i<array.length;i++){
      if(i==array.indexOf(array[i])){
        newarray.push(array[i]);
      }
    }
    return newarray;
  }
  
  function compareYear(array,distinctyear){
    let avg="";
    let newarray=[];
    distinctyear.forEach(function(elemyear) {
      let sum=0,counter=0;
      array.forEach(function(elem) {
        if(elemyear==elem.year){
          rate=parseFloat(elem.rate*100)/100
          sum+=Math.round(rate*100)/100;
          counter+=1;
          // console.log(elem.year+' '+elem.rate+' '+sum+' '+counter);
        }
      })
      avg=Math.round((sum/counter) * 100)/100;
      return newarray.push({elemyear,avg});
    })
    return newarray;
  }
  
  function sortAvg(array){
    array.sort(function(a,b){
      return b.avg-a.avg;
    })
    array.sort(function(a,b){
      if(a.avg==b.avg){
        return parseInt(a.elemyear)-parseInt(b.elemyear);
      }
    })
    return array;
  }
  
  function bestYearAvg(array){
    if (typeof array != "undefined" && array != null && array.length != null && array.length > 0) {
    var distyear=distinctYear(onlyYear(array))
    var finalarray=compareYear(array,distyear);
    var sortfinalarray=sortAvg(finalarray);
    return "The best year was "+ sortfinalarray[0].elemyear + " with an average rate of "+sortfinalarray[0].avg
    } else {
      return ;
    }
  
  }