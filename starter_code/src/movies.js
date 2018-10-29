/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes GOOD

var totalMovies = 250;

function getMovieMinutes(arr){

    var minutesTotal = 0;

    arr.forEach(getTime);

    function getTime(object){

        var hours = object.duration;
        var hoursInt = hours.parseInt(0, "h");
        minutesTotal += hours.parseInt(" ", "m");

        hoursInt = hoursInt/60;
        minutesTotal += hoursInt;
    }

    console.log(minutesTotal);
}
getMovieMinutes(movies);

// Get the average of all rates with 2 decimals  GOOD


function getMovieAvgRate(arr){

    var length = arr.length;
    var arrRates = [];
    var total;

    arr.forEach(function(object){
        var cont = 0;
        arrRates[cont] = parseInt(object.rate);
        cont++;
    })

    total = arrRates.forEach(function(element){
        total += element;
    })
    total = total/parseInt(length);
    console.log(total);
}
getMovieAvgRate(movies);

// Get the average of Drama Movies GOOD

function getDramaMovies(arr){
    var dramaMovies = [];
    var numberMovies = 0;
    var total = 0;
    arr.filter(function(object){
        /* the check function could be
        object.genre.filter(element){
            if(element == "Drama"){
                dramaMovies++;
            }
        }) 
        but the code lines are the same.
        */
       if(object.genre == "Drama"){
           dramaMovies.push(object.rate);
           numberMovies++;
       }

    });
    dramaMovies.forEach(function(element){
        parseInt(element);
        total +=element;
    })
    total = total/numberMovies;
    console.log(total);
    
}
getDramaMovies(movies);


// Order by time duration, in growing order GOOD



//hemos cambiado duration a minutos GOOD
//comparamos la de cada 1
//please help
function orderByTime(arr){
    var minutesTotal = 0;
    var arrayOrdered = [];

    function getTime(object){

        var hours = object.duration;
        var hoursInt = parseInt(hours,0, "h");
        minutesTotal += parseInt(hours," ", "m");

        hoursInt = hoursInt/60;
        minutesTotal += hoursInt;
        object.duration = minutesTotal;
    }

    arr.forEach(getTime);
    
    arr.forEach(function(object){
        var longest = object.duration;
    
        for(var i = 0; i < arr.length; i++){
            if(longest > arr[i].duration){
                longest = object;
            }
            else if(i == arr.length -1){
                
                if(longest > arr[i].duration){
                    var position = arr.indexOf(longest);
                    arrayOrdered.push(longest);
                    arr.splice(position);
                }
                else{
                    longest = arr[i];
                    var position = arr.indexOf(longest);
                    arrayOrdered.push(longest);
                    arr.splice(position);
                }
            }
            else{
                longest = arr[i];
            }
            
        }
        
    });
    
  
console.log(arrayOrdered);
}
orderByTime(movies);
// How many movies did STEVEN SPIELBERG GOOD

function checkAuthor(arr){
    var estevanMovies = 0;
    arr.filter(function(object){
        if(object.director == "Steven Spielberg"){
            estevanMovies++;
        }
    });
    console.log(estevanMovies);
    
}
checkAuthor(movies);


// Order by title and print the first 20 titles GOOD

function orderTitles(arr){
    //Array with the titles in order
    var arrayOrder = [];
    var arrAux = arr;

    arr.filter(function(object){
        
        var current = object.title;
        
        arrAux.filter(function(object){

            if(current[0] > object.title[0]){
               
            }
            else if(current.length == object.title.length){

            }
            else if(current[0] == object.title[0]){
                for(var i = 0; i < current.length; i++){
                    if(current[i] > object.title[i]){
                       
                        break;
                    }
                    else{
                        current = object.title;
                        break;
                    }
                }
            }
            else{
                current = object.title;
            }
            
        });
        arrayOrder.push(current);

        

    });
    
   for(var i = 0; i < 20; i++){
       console.log(arrayOrder[i]);
   }

}
orderTitles(movies);


// Best yearly rate average 

function bestRateYear(arr){
    var arrYears = [];
    arr.forEach(function(object){
        arrYears.push(parseInt(object.year));
    })
    var yearsUnique = arrYears.filter(function(element, pos){
        return arrYears.indexOf(element) == pos;
    })
    console.log(yearsUnique);

}


