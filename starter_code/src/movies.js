/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)


// function orderByYear(arr) {
//     const newArr = [...arr];
//     newArr.sort((a,b) => {
//         if (a.year === b.year) {
//             newArr.sort((a,b) => {a.title - b.title
//                 return -1;
//             })
//         } return (a.year - b.year)
//     })
//     return newArr;
// }

const orderByYear = arr => {
    return [...arr].sort((a, b) => {
        return a.year === b.year ? a.title.localeCompare(b.title)
            : a.year - b.year;
    });
};



// console.log(orderByYear(movies));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

const newArr = 0;
function howManyMovies(arr) {
    const newArr = [...arr];
    newArr.filter(movieInfo => movieInfo.director === "Steven Spielberg"); 
    return newArr.length;
    
};

// if (newArr.length === 0) {
        
//     return 0;

// };
  
    

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

// function orderAlphabetically(arr) {
//     const newArr = [...arr];
//     newArr.sort((a,b) => a.title - b.title);
//     if (newArr.length > 20){
//     newArr.slice(0,19);
//     return newArr.map(movie => movie.title);
//     } else {
//     return newArr.map(movie => movie.title);
//     }
//   }


const orderAlphabetically = arr => {
    return arr
        .map(element => element.title)
        .sort((a, b) => a.localeCompare(b))
        .slice(0, 20);
};


// Iteration 4: All rates average - Get the average of all rates with 2 decimals

const ratesAverage = arr => {
    return arr.length === 0 ? 0 : Number((arr.filter(element => element.rate)
                      .reduce((acc, cur) => acc + cur.rate, 0) / arr.length).toFixed(2));
};

// Iteration 5: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = arr => {
    return ratesAverage(arr.filter(element => element.genre.includes("Drama")));
};
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

const turnHoursToMinutes = arr => {

    

};

// BONUS Iteration: Best yearly rate average - Best yearly rate average

    const bestYearAvg = arr => {
   
        if (arr.length === 0) return null;
        
        if (arr.length === 1) {

             return `The best year was ${arr[0].year} with an average rate of ${arr[0].rate}`;
    }

    let orderByYear = arr.sort((a, b) => a.year - b.year);

    
   
};