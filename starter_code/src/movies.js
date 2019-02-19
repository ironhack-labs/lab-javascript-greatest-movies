/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes (arr) { 
    let extract = arr.map(a => a.duration);
    var splitado = [];
    for (var i=0;i<extract.length;i++){
        splitado[i] = splitar(extract[i]);
    }   
    function splitar(a) {
        var b= [];
        for (var i=0;i<a.length;i++){
           b[i] = a[i].split();                      
    }
    return b;
}   
    var arr =[];
    for (var i =0;i<splitado.length;i++){
    arr[i] = splitado[i].filter(function(el)  {
    return !isNaN(parseFloat(el)) && isFinite(el);;});
}
    for (var i=0;i<arr.length;i++){
        for (var j=0;j<arr[i][j].length;j++){
            if (j==0){
                arr[i][j] = arr[i][j]*60;
                arr[i][j+1] = parseInt(arr[i][j+1]); 
                arr[i][j+2] = parseInt(arr[i][j+2]);
            }
            }
        }
        var total =[];        
        for (var i=0; i<arr.length;i++){
             total[i] = arr[i].reduce((accumulator, currentValue) => {
                return accumulator + currentValue;
              });
        }
    return total;
}
// Get the average of all rates with 2 decimals 
function ratesAverage (arr){
    let extract = arr.map(a => parseFloat(a.rate));
    let divis = arr.length;
    var redu = extract.reduce( (add, cum)  => add+cum );
    return (redu/divis).toFixed(2);    
}
// Get the average of Drama Movies
function dramaMoviesRate (arr) {
    var arr2 =  arr.filter(function(arr3) { 
        return (arr3.genre.includes('Drama'));
    });
    let extract = arr2.map(a => parseFloat(a.rate));
    let divis = arr2.length;
    var redu = extract.reduce( (add, cum)  => add+cum );
    return (redu/divis).toFixed(2); 
}
// Order by time duration, in growing order
function orderByDuration(arr){
    var lean = [];
    var le = [];
    var le2 =[];
    var temp = 0;
    for (var i=0;i<arr.length;i++){
      lean.push(arr[i].duration);
      lean[i] = lean[i].replace(/\D/g, "");
      le[i] = lean[i].split("");
      temp = 0;
      for (var j=0;j<le[i].length;j++){
        if (j==0){
          le[i][j]=le[i][j]*60; 
        }
        le[i][j] = parseInt(le[i][j]) + temp;
        temp = parseInt(le[i][j]); 
       }le2[i]= temp;
      }
      //le2 é uma array com a duração em minutos 
    for (var i=0;i<movies.length;i++){
      arr[i].duration = le2[i];
    }
    arr.sort(function (a,b){
      return a.duration - b.duration;
    }); return arr;
}

// How many movies did STEVEN SPIELBERG

function howManyMovies(arr){
    var arr2 =  arr.filter(function(arr3) { 
        return arr3.genre.includes('Drama')});
    var arr3 =  arr.filter(function(arr3) { 
        return arr3.director.includes('Steven Spielberg')});  
    return arr3.length;
  }
// Order by title and print the first 20 titles
function orderAlphabetically(arr){
        let extract = arr.map (a => a.title);
        var res = [];
        var final =[];
        var final2 =[];
        for (var i=0; i< extract.length;i++){
            res[i]=extract[i].toUpperCase();
          }
        final = res.sort();
        if (final.length>20){
        for(var i=0;i<20;i++){
            final2[i]=final[i];
          }
        }
        else {
            for(var i=0;i<final.length;i++){
                final2[i]=final[i];
              }
        }
          return final2;
    }


// Best yearly rate average
