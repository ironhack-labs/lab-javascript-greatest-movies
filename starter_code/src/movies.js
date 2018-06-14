/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(arr){
    var duration;   

    var arr2 = arr.map(function(e){
        if (typeof e.duration == "number") {
            var mov = {duration: e.duration};

            if (Object.keys(e).includes("title")) {
                mov.title = e.title;
            }
            return mov;
        }

        var element=e.duration.replace('h',"").replace("min","");
        var a=element.split(' ');
        if(a.length==2){
            duration=parseInt(a[0])*60 + parseInt(a[1]);
        }else{
            if(e.duration.indexOf('h')!=-1)
                 duration=parseInt(a[0])*60 ;
            else
            duration=parseInt(a[0]) ;
        }
        
        var mov = {duration: duration};

        if (Object.keys(e).includes("title")) {
            mov.title = e.title;
        }
        return mov;
    })
    return arr2;
}
// Get the average of all rates with 2 decimals 

function ratesAverage(movies) {
    var average = movies.reduce(function(acc, e) {
        return acc + parseFloat(e.rate) / movies.length;
    }, 0);
    return parseFloat(average.toFixed(2));
}

// Get the average of Drama Movies

function dramaMoviesRate(arr){
    var arr2=arr.filter(function (e){
        if(typeof e.rate=='string'&&e.rate.length==0){
            e.rate=0;
        }
            
       
        return e.genre.includes('Drama');
    })
    if(arr2.length==0)
        return undefined;
    return (ratesAverage(arr2));
}

// Order by time duration, in growing order

function orderByDuration(movies) {
    var durationMin = turnHoursToMinutes(movies);
    
    var orderedMovies =  durationMin.sort(function(a, b) {
        if (a.duration == b.duration) {
            var mov = [a.title, b.title].sort();

            if (mov[0] == a.title) {
                return -1
            } else {
                return 1
            }
        }
        return a.duration - b.duration;
    });
    return orderedMovies;
}

// How many movies did STEVEN SPIELBERG

function howManyMovies(arr){
    var arr2=arr.filter(function(e){
        return e.genre.includes('Drama')&&e.director=='Steven Spielberg';

    })
    if(arr.length==0)
        return undefined;
    return 'Steven Spielberg directed '+arr2.length+' drama movies!';
}
// Order by title and print the first 20 titles

function orderAlphabetically(movies) {
    var orderedMovies =  movies.sort(function(a, b) {
        var mov = [a.title, b.title].sort();

        if (mov[0] == a.title) {
            return -1
        } else {
            return 1
        }
    });

    var movTitles = orderedMovies.map(function(e) {
        return e.title;
    })

    return movTitles.splice(0, 20);
}

// Best yearly rate average
function bestYearAvg(arr){
    if(arr.length==0)
        return undefined;
    var bestMovies={};
    arr.forEach(function(e)  {
        bestMovies[e.year]=[];
    });
    arr.forEach(function(e)  {
        bestMovies[e.year].push(e.rate);
    });
    var best={rate:0}
    Object.keys(bestMovies).forEach(function(e,i){
        var best2=bestMovies[e].reduce(function(acc,e2){
            return acc + e2/bestMovies[e].length;
        },0)    
        if(best2>best.rate){
            best.rate=best2;
            best.year=e;
        }

    });
    return 'The best year was ' +best.year +' with an average rate of '+best.rate; 
}