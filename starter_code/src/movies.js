/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr){
    let result=[];
    arr.forEach(function(val){
      let splitHalf=((val.duration).split(' ',2));
      let minutes=splitHalf[1].split('min',1);
      let hours=splitHalf[0].split('h',1);
      result.push( (Number(hours[0])*60) + Number(minutes[0]));
    })
    return result;
  }
  
  // Get the average of all rates with 2 decimals
  
  function ratesAverage(arr) {
    let temp = arr.reduce(function(cont, obj) {
      return cont + Number(obj.rate);
    }, 0);
    let result = temp / arr.length;
    let roundedResult = Number(result.toFixed(2));
    return roundedResult;
  }
  
  // Get the average of Drama Movies
  
  function dramaMoviesRate(arr) {
    let cont=0; //Cont of drama movies
    let arrDrama = arr.map(function(obj) {
      for (val of obj.genre) {
        if (val === "Drama") {
          cont++;
          return Number(obj.rate);
        }else{
          return 0;
        }
      }
    });

    if (cont===0){ // If no drama movies, return undefined
        return undefined;
    }

    console.log(arrDrama)
  
    let sum = arrDrama.reduce(function(cont, value) {
        return cont + value;
    }, 0);
    return Number((sum/cont).toFixed(2));
  }
  
  // Order by time duration, in growing order
  
  function orderByDuration(arr) {
    let result = arr.sort(function(ini, value) {
      return ini.duration > value.duration;
    });
    return result;
  }
  
  // How many movies did STEVEN SPIELBERG
  
  function howManyMovies(arr){
    let filter = arr.filter(function(value){
        return value.director === 'Steven Spielberg';
    });
    return `Steven Spielberg directed ${filter.length} drama movies!`
  }
  
  // Order by title and print the first 20 titles
  function orderAlphabetically(arr) {
    arr.sort(function(a, b) {
      if (a.title > b.title) {
        return 1;
      }
      if (a.title < b.title) {
        return -1;
      }
      return 0;
    });
    if(arr.length<20){
      return arr;
      
    }else{
        return arr.splice(0,20);
    }
  }
  
  // Best yearly rate average
  
  function bestYearAvg(arr){
    if (arr.length === 0){
      return undefined;
    }else{
      let byYear=[
        {
          year:undefined,
          moviesRate:undefined,
        }
      ]
  
      arr.forEach(function(indexArr){
        byYear.forEach(function(indexByYear){
          if (indexByYear.year !== indexArr.year) {
            
          }
        })
        if((byYear[index].year).includes(index.year)===false){
          byYear[index].year = index.year;
        }
      })
  
      byYear.forEach(function(index,arr){
        let filter = arr.filter(function(value){
          return value.year === index;
        });
      })
  
        console.log(filter)
    }
  
  }
  
