/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 


function ratesAverage(movies) {
    const res = movies.reduce((acc, value) => {
        acc += value.rate;
        return acc
    }, 0) / movies.length;
    return Number(res.toFixed(2))
}


// Iteration 2: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {

    let drama = movies.filter(movie => movie.genre.includes('Drama'));
    if (drama.length == 0) {
        return 0;
    }
    console.log(drama);
    return (ratesAverage(drama));

}


// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

function orderByDuration(movies) {
    return movies.sort((a, b) => {
        if (a.duration > b.duration) {
            return 1;
        }
        if (a.duration < b.duration) {
            return -1;
        }
        if (a.title < b.title) {
            return -1;
        }
        if (a.title > b.title) {
            return 1;
        }
        return 0;
    });
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
function howManyMovies(movies) {

    let phteven = movies.filter(movie => movie.director.includes('Spielberg') && movie.genre.includes('Drama'));
    if (phteven.length == 0) {
        return 0;
    }
    return phteven.length;
}



// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
    const titre = movies.map(movie => movie.title);
    console.log(titre);
    const order = titre.sort((a, b) => {
        if (a < b) {
            return -1;
        }
        if (a > b) {
            return 1;
        }
        return 0;
    });
    console.log(order, "yyyyyyyyyyyyyyyyyyyyy");
    if (movies.length >= 20) {
        const top20 = order.slice(0, 20);
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
            convertedDuration = parseFloat(item.duration[0] * 60) + parseFloat(item.duration[3] * 10) + parseFloat(item.duration[4]);
        } else if (item.duration.includes("h") && !item.duration.includes("min")) {
            convertedDuration = parseFloat(item.duration[0] * 60);
        } else if (item.duration.includes("min") && !item.duration.includes("h")) {
            convertedDuration = parseFloat(item.duration[0] * 10) + parseFloat(item.duration[1])
        }
        item.duration = convertedDuration;
    })
    return minuteMovies;
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average

function bestYearAvg(movies) {
    if (movies.length < 1) {
        return null;
      };
// let rate = movies.map(movie=>movie.rate);

// movies.sort((a,b) => a.year - b.year);

// let ratedYears = []; 
// let currentYear = {};
// let incrementor = 0;
// let moviesPerYear = 0;


// ratedYears.sort((a,b) => b.rate - a.rate);

// console.log(ratedYears);
// console.log(`The best year is :  ${ratedYears[0].year} with an average movie rate of ${ratedYears[0].rate} !!`)

// let moviesYears = movies.reduce(function (r, a) {
//     r[a.year] = r[a.year] || [];
//     r[a.year].push(a);
//     return r;
// }, Object.create(null));

// console.log(moviesYears);

// const yearRates = movies.map(movie => {
//         let movieYearRate = {};
//         movieYearRate[movie.year]= movie.rate ;
//         return movieYearRate;
//     });
// console.log(yearRates);


//LAST A BIT FUCKED-UP TRY

// function groupBy(year, rates){
//     return year.reduce(function (acc, obj) {
//       var cle = obj[rates];
//       console.log(cle,'tis the one');
//       if(!acc[cle]){
//         acc[cle] = [];
//         console.log(acc[cle]);
//       }
//       acc[cle].push(obj);
//       console.log(acc,'here');
//       return acc;
      
//     }, {});
    
//   }


// let yearRate = movies.map(movie => {
//     let movieYearRate = {};
//     movieYearRate[movie.year]= movie.rate ;
//     return movieYearRate;
// });

// console.log(yearRate,'-------------foo-------------');

// var ratePerYear = groupBy(yearRate,[0]);
// console.log(ratePerYear,'yolo' );

// console.log(yearRate);

// for (i=0; i< yearRate.length;i++){

// }

// let averageYear = ratesAverage(rates);
// console.log(averageYear);
// let bestYear =0;

// for (i=0;i<averageYear.length;i++){
//     if(averageYear[i] == bestYear){
//         if(averageYear.year < bestYear.year){
//             return bestYear = averageYear.year; 
//         }
//         return bestYear.year;
//     }
//     else if(averageYear[i] > bestYear){
//         return bestYear = averageYear.year;
//     }
//     return bestYear;
// }
// console.log(bestYear);

// 
movies.sort((a,b) => a.year - b.year);

let ratedYears = []; 
let currentYear = {
  "year": null,
  "rate" : []
};

movies.forEach( (movie, index) => {
      
  if(index > 0){
    if(movie.year == movies[index-1].year){
      currentYear.rate.push(parseFloat(movie.rate, 10));
      if(index == movies.length-1){
        currentYear.rate = currentYear.rate.reduce((a,b)=>a+b) / currentYear.rate.length;
        ratedYears.push(currentYear);
      }
    }else{
      currentYear.rate = currentYear.rate.reduce((a,b)=>a+b) / currentYear.rate.length;
      ratedYears.push(currentYear);
      currentYear = { "year": movie.year, "rate" : [] };
      currentYear.rate.push(parseFloat(movie.rate, 10));
    }
  }else{
    currentYear.year = movie.year;
    currentYear.rate.push(parseFloat(movie.rate, 10));
  }
});

ratedYears.sort((a,b) => b.rate - a.rate);


console.log(ratedYears);
console.log(`The best year is : ${ratedYears[0].year} with an average movie rate of ${ratedYears[0].rate} !!`)


    


   
//WORKING SOLUTION
        // let years = {};
        // movies.forEach(function(item) {
        //   if (!years[item.year]) years[item.year] = [Number(item.rate)];
        //   else years[item.year].push(Number(item.rate));
        // });
        // console.log(years);
        
        // let arrRequired = [];
        // for (var year in years) {
        //   arrRequired.push({ Year: year, Rates: years[year] });
        // }
        // console.log(arrRequired,"-----chekc it out");

        // function helperAverage(array) {
        //   let helperSum =array .reduce((acc, rating) => {
        //     return acc + rating;
        //   });
        //   let helperAverage = helperSum / array.length;
        //   return Math.round(helperAverage * 100) / 100;
        // }
        // console.log(arrRequired[0].Year);
        // let yearsAverage = arrRequired.map(year => {
        //   return {
        //     Year: year.Year,
        //     Rates: helperAverage(year.Rates)
        //   };
        // });
        // console.log(yearsAverage);
        // let yearsOrdered = yearsAverage.sort((a, b) => {
        //   if (a.Rates > b.Rates) {
        //     return -1;
        //   } else {
        //     return 1;
        //   }
        // });
        // return `The best year was ${
        //     yearsOrdered[0].Year
        // } with an average rate of ${yearsOrdered[0].Rates}`;

}






bestYearAvg([{
        title: 'The Godfather',
        year: '1972',
        director: 'Francis Ford Coppola',
        duration: '2h 55min',
        genre: ['Crime', 'Drama'],
        rate: '9.2'
    },
    {
        title: 'The Godfather: Part II',
        year: '1974',
        director: 'Francis Ford Coppola',
        duration: '3h 22min',
        genre: ['Crime', 'Drama'],
        rate: '9.0'
    },
    {
        title: 'Chinatown',
        year: '1974',
        director: 'Roman Polanski',
        duration: '2h 10min',
        genre: ['Drama', 'Mystery', 'Thriller'],
        rate: '8.2'
      }
]);





 