/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 


function ratesAverage(movies){
    const res = movies.reduce((acc,value)=>{
        acc += value.rate; 
        return acc
    },0) / movies.length ;
    return Number(res.toFixed(2))   
}

 
// Iteration 2: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies){
        
    let drama = movies.filter(movie => movie.genre.includes('Drama'));
    if (drama.length==0){
        return 0;
    }
    console.log(drama);
        return(ratesAverage(drama));
            
}


// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

function orderByDuration(movies){
    return movies.sort((a,b)=>{
    if(a.duration > b.duration){
        return 1;}
    if (a.duration < b.duration){
        return -1;}     
    if (a.title < b.title){
       return -1;}
    if (a.title > b.title){
       return 1;}
    return 0;
    });
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
function howManyMovies(movies){
        
    let phteven = movies.filter(movie => movie.director.includes('Spielberg') && movie.genre.includes('Drama'));
    if (phteven.length==0){
        return 0;
    }
    return phteven.length;        
}



// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies){
    const titre = movies.map(movie => movie.title);
    console.log (titre);
    const order = titre.sort((a,b)=>{ 
        if (a < b){
           return -1;}
        if (a > b){
           return 1;}
        return 0;
        });
    console.log(order, "yyyyyyyyyyyyyyyyyyyyy");
    if(movies.length>=20){
        const top20 = order.slice(0,20);
        console.log(top20.length);
        return top20;    
    }
    return order;        
    
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {
    var minuteMovies = [];
    movies.forEach(m => {
      const newObj = Object.assign({}, m);
      minuteMovies.push(newObj)
    })
    minuteMovies.forEach((item) => {
      var convertedDuration = 0;
      if (item.duration.includes("h") && item.duration.includes("min")) {
        convertedDuration = parseFloat(item.duration[0]*60) +parseFloat(item.duration[3]*10) +parseFloat(item.duration[4]);
      }
      else if (item.duration.includes("h") && !item.duration.includes("min")) {
        convertedDuration = parseFloat(item.duration[0]*60);
      }
      else if (item.duration.includes("min") && !item.duration.includes("h")) {
        convertedDuration = parseFloat(item.duration[0]*10)+parseFloat(item.duration[1])
      }
      item.duration = convertedDuration;
    })
    return minuteMovies;
   }

// BONUS Iteration: Best yearly rate average - Best yearly rate average

function bestYearAvg(movies){
    
    let year = movies.year;
    let rate = movies.rate;

    let yearMap = new Map().set(year,rate) ;

    var moyenne = { year : [rate],}

    console.log(moyenne);

    for (let year in moyenne) {

        console.log(moyenne[year]);
        //appeller avg
    }
    //sort ...
}

