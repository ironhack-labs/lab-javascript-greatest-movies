/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(array){
    var newArray = array.map((a)=>{
        var b = {};
        for(key in a){
            b[key] = a[key];
            b.duration = toMinutes(a.duration);
            return b;
        }
    });

    return newArray;
}

function toMinutes(str){
    if (!str.includes('h')) {
        var point = str.indexOf('min');
        var min = Number(str.substring(0,point));
        var hour = 0;
    }

    if (!str.includes('min')) {
        var point = str.indexOf('h');
        var hour = Number(str.substring(0, point));
        var min = 0;
    }

    if (str.includes('min') && str.includes('h')) {
        var pointH = str.indexOf('h');
        var pointM = str.indexOf('min');
        var hours = Number(str.substring(0,pointH));
        var min = Number(str.substring(pointH+1,pointM));
    }

    return (hours * 60) + min;

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
    let result = array.filter((movie) => movie.director == 'Steven Spielberg' && movie.genre.indexOf('Drama') !== -1).length;

    return `Steven Spielberg directed ${Number(result)} drama movies!`;

}

// Order by title and print the first 20 titles
function orderAlphabetically(array) {
    let temp = [];
    newArray = array.sort((a,b)=> b[0] - a[0]);

    if (newArray.length > 20){
        for(let i=0; i<20; i++){
            temp.push(newArray[i]);
        }
        return temp;
    }

    if(newArray.length <= 20){
        return newArray;
    }
}

// Best yearly rate average

function bestYearAvg(array) {
    let obj ={};

    for(let i=0; i<array.length; i++){
        if (obj[array[i].year] == undefined){
            obj[year] = obj[array[i].year];
            obj[year][rate] = array[i].rate;
        } else {
            obj[year][rate] += array[i].rate;
            obj[year][rate] = obj[year][rate] / 2;
        }
    }

    let result = obj.indexOf(Math.max(...obj[year][rate]));

    return obj[result];
}
