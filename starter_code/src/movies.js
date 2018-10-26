/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

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

// Get the average of all rates with 2 decimals 

function getMovieAvgRte(arr){
    var length = arr.length;
    var arrMaped = [];
    var total;

    arrMaped = arr.map(arr.rate/length);

    function change(element){
        element.parseInt();
    }
    arr.Maped.forEach(change);

    total = arrMaped.join();

    console.log(total);
}
getMovieAvgRAte(movies);

// Get the average of Drama Movies

function getDramaMovies(arr){
    var dramaMovies = 0;
    arr.filter(function(object){
        /* the check function could be
        object.genre.filter(element){
            if(element == "Drama"){
                dramaMovies++;
            }
        }) 
        but the code lines are the same.
        */
        function check(element){
            if(element === "Drama"){
                dramaMovies++;
            }
        }
        object.genre.forEach(check);
    });
    console.log(dramaMovies);
}
getDramaMovies(movies);


// Order by time duration, in growing order

function orderDuration(arr){
    var arrayOrder = [];
    //Comparing and putting them into an array
    arr.filter(function(object){
        
        var current = object.duration;
        var currentAux = parseInt(current);

        arrAux.filter(function(object){
            
            var compared = object.duration;
            var comparedAux = parseInt(duration);

            if(compared > comparedAux){
                currentAux = currentAux;
            }
            else if(arr[249].title == object.title){
                arrayOrder.push(current);
            }
            else{
                current = object.title;
            }
            
        });
    });

    //printing the whole array
    function print(element){
        console.log(element);
    }
    arrayOrder.forEach(print);
}
orderDuration(movies);
// How many movies did STEVEN SPIELBERG

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


// Order by title and print the first 20 titles

function orderTitles(arr){
    //Array with the titles in order
    var arrayOrder = [];
    arrAux.filter(function(object){
        
        var current = object.title;
        
        arrAux.filter(function(object){

            if(current[0] > object.title[0]){
                current = current;
            }
            else if(current[0] == object.title[0]){
                for(var i = 0; i < current.length; i++){
                    if(current[i] > object.title[i]){
                        current = current;
                    }
                    else{
                        current = object.title;
                    }
                }
            }
            else if(arr[20].title == object.title){
                arrayOrder.push(current);
            }
            else{
                current = object.title;
            }
            
        });

    });
    arr.forEach(check);
    //Print the 20 firsts
    for(let i = 0; i <19; i++){
        console.log(arrayOrder[i]);
    }


}
orderTitles(movies);


// Best yearly rate average

function yearRateAv(arr){
    //the array total years will have in each position the total of the year in the same position in the array years.
    var years = [];
    var totalYears = [];
    var count = [];
    years[0]= arr[0].year;

    //Pushing all years 
    arr.filter(function(object){
        years.push(object.year);
    })
    //Cleaning repeated years
    for(var i = 0; i < years.length; i++){
        for(var j = 0; j < years.length; j++){
            if(years[i] == years[j]){
                years[j].splice();
            }
        }
    }
    
    //Checkin the objects with the same year as the position of the years array
    //and summing their results

    function putInTotalYears(object, i){
        if(years[i] == object.year){
            var sum = parseInt(object.rate); 
            totalYears[i] += sum;
            count[i]++;
        }
    }
    
    for(var i = 0; i < years.length; i++){
        arr.forEach(putInTotalYears, i);
    }
    //Printing the result of the two arrays
    for(var i = 0; i < totalYears.length; i++){
        console.log(years[i]+" : "+totalYears[i]/count[i]);
    }

    
    
    
}
yearRateAv(movies);

