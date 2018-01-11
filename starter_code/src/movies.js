/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(array){
    var newArray = array.map((a)=>{
        var b = {};
        for(key in a){
            b[key] = a[key];
            b.duration = Number(toMinutes(a.duration));
            return b;
        }
    });

    return newArray;
}

function toMinutes(str){
var regExp = new RegExp(/\d*/)
    str.split(' ');
    var hours = str[0].match(regExp, (x) => Number(x) * 60);
    var min = str[1].match(regExp, (x) => Number(x));

    let total = hours + min;

    return total;

}

// Get the average of all rates with 2 decimals 

function ratesAverage(array) {
   var total = array.reduce(function(accumulator,item){
       return accumulator + Number(item.rate);
   },0).toFixed(2);
    return (total / array.length);
};

// Get the average of Drama Movies

function dramaMoviesRate (array){
    var count = 0;
    var total = array.reduce(function(accumulator,item){
            if (item.genre == 'Drama') {
                count++;

                if(item.rate == undefined){
                    item.rate = 0;
                }

                return accumulator + Number(item.rate);

        }},0);

    if(count == 0) return undefined;

    result = (total/ count).toFixed(2);
    
    console.log(Number(result));
    return Number(result);

}


// Order by time duration, in growing order

// How many movies did STEVEN SPIELBERG

function howManyMovies(array) {

    if (array.length == 0) return undefined;
    let result = array.filter((movie)=> movie.director == 'Steven Spielber' && movie.genre.includes('Drama')).length;

    return `Steven Spielberg directed ${result} drama movies!`;

}

// Order by title and print the first 20 titles


// Best yearly rate average
