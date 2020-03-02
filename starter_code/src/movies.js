
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

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

const howManyMovies = arr => {
    return [...arr].filter(movieInfo => (movieInfo.genre.includes("Drama")) && movieInfo.director === "Steven Spielberg").length;
};
  
    
// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

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
    const newArr = [...arr]; 
    const newFormat = newArr.map(movie => {
        let minutes = 0;
        if (newArr.duration.indexOf("h") > 0) {
            minutes = movie.duration.slice(0, movie.duration.indexOf("h")) * 60;
            if (movie.duration.indexOf("m") > 0) {
                minutes += parseInt (
                    movie.duration.slice(
                        movie.duration.indexOf(" "),
                        movie.duration("m")
                    )
                );
            }
        } 
    })

}

// --------------------
    // let numberArr = 0;
    // newArr.forEach(element) {
    //     element.duration.forEach(character) {
    //         if (character === Number) {
    //             numberArr += parseInt(character);
    //         }
    //     }
    // }    

// };

// BONUS Iteration: Best yearly rate average - Best yearly rate average

const bestYearAvg = arr => {

    if (arr.length === 0) return null;
    
    if (arr.length === 1) {
        return `The best year was ${arr[0].year} with an average rate of ${arr[0].rate}`;
    }

    if (arr.length > 1) {
        arr.sort((a,b) => a.rate - b.rate);
        return `The best year was ${arr[0].year} with an average rate of ${arr[0].rate}`;
    }


// let orderByYear = arr.sort((a, b) => a.year - b.year);

    
   
};
