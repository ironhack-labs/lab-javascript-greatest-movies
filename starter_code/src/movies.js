/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(movies){
    var hours=0;
    var minutes=0;
    var totalDuration=0;
    var newMovies=movies;
    var movieList=[];
     movieList = newMovies.map(function(movie){
        
      
        if(movie.duration.indexOf('h')!=-1){
            var timeArray = movie.duration.split("h");
            hours=(parseInt(movie.duration.substring(0,1))*60);
            
            
            if(movie.duration.indexOf('min')!=-1){
                minutes=parseInt(timeArray[1]);
                //minutes=(parseInt(movie.duration.substring(movie.duration.lenght-6,movie.duration.lenght)));
                
                totalDuration=hours+minutes;
                
            } else{
                totalDuration=hours;
            }
        } else{
            minutes=(parseInt(movie.duration.substring(movie.duration.lenght-6,5)));
                
            totalDuration=minutes;
        }
        return {
            title:movie.title,
            year:movie.year,
            director:movie.director,
            duration:totalDuration,
            genre:movie.genre,
            rate:movie.rate
        };
    });


    
    return movieList;
    
    
}

// Get the average of all rates with 2 decimals 

function ratesAverage(movies){
    var ratesAvg=0;
    ratesAvg=movies.reduce(function(sum,movie){

         if(movie.rate==''){

            return sum + parseFloat(0);

         }else{

            return sum + parseFloat(movie.rate);
         }
       // ratesGeneral= parseFloat((sum+parseFloat(movie.rate))).toFixed(2);
        
        
    
    },0);

   
return parseFloat((ratesAvg/movies.length).toFixed(2));
}

// Get the average of Drama Movies
function dramaMoviesRate(movies){

var drama=[];
var dramaAvg=0;
drama=movies.filter(function(movie){

 return movie.genre.indexOf('Drama')!=-1;


});


if(drama==''){

    return undefined;

}else{
    dramaAvg=ratesAverage(drama);

    return dramaAvg;

}

}

// Order by time duration, in growing order

function orderByDuration(movies){


var minutesArray=movies;



minutesArray.sort(function(a,b){


    if(a.duration>b.duaration){

     return 1;

    }else if(a.duration<b.duration){

        return -1;
    }else if(a.duration==b.duration){

      if(a.title>b.title){

        return 1; 

      }else{

        return -1;
      }

    }

      return 0;
});


return minutesArray;
}



// How many movies did STEVEN SPIELBERG
function howManyMovies(movies){


    var dramaSS=movies.filter(function(movie){
    
     return movie.genre.indexOf('Drama')!=-1 && movie.director.indexOf('Steven Spielberg')!=-1;
    
    
    });
    
    
    if(movies==''){
    
        return undefined;
    

    
    }else{

        return 'Steven Spielberg directed '+dramaSS.length+' drama movies!';

    }


}

// Order by title and print the first 20 titles
function orderAlphabetically(movies){

var sortMovies=movies;
var twentyTitles=[];
sortMovies.sort(function(a, b){


if(a.title>b.title){

return 1;

}else if(a.title<b.title){

return -1;

}

});

sortMovies.forEach(function(movie,index){


    if(index<20){

        twentyTitles.push(movie.title);
    }

});




return twentyTitles;

}

// Best yearly rate average
function bestYearAvg(movies){

var pelis=movies;
var ratesAvg=0;
var result=[];
var anio;
var nota;
if(movies!=''){
pelis.forEach(function(peli, index){
 anio=peli.year;
 nota=peli.rate;
 var yearAvgMovies=[];
    yearAvgMovies.push({year:anio, rate:nota});
    pelis.splice(index,1);

  pelis.forEach(function(a,index2){
    if(a.year==anio){ 
        yearAvgMovies.push({year:a.year, rate:a.rate});
        pelis.splice(index2,1);
    }

  });

   ratesAvg=ratesAverage(yearAvgMovies);

 
   

  result.push({year:anio, rate:ratesAvg});

});



result.sort(function(a,b){

if(a.rate>b.rate){

return 1;

}else{

return -1;

}


});


result.forEach(function(b){

    console.log('RESULTO '+b.year+' '+b.rate);

   });


if(movies.length==1){
    return 'The best year was '+movies.year+' with an average rate of '+movies.rate;



}else{
    
    console.log('The best year was '+result[0].year+' with an average rate of '+result[0].rate);
    return 'The best year was '+result[0].year+' with an average rate of '+result[0].rate;
}

}else{


    return undefined;
}

}