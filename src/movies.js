// Iteration 1: All directors? - Get the array of all directors.
const getAllDirectors = (arr) => [...new Set(arr.map(e => e.director))];

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies = (arr) => ((arr.filter(e => e.director === "Steven Spielberg")).filter(e => e.genre.includes("Drama"))).length;
// {   //Readable version:
//     let director = arr.filter(e => e.director === "Steven Spielberg");
//     let genre = director.filter(e => e.genre.includes("Drama"));
//     return genre.length;
// };

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
const ratesAverage = (arr) => arr.length ? Math.round( (arr.reduce((fin , movie) => movie.rate ? fin + movie.rate : fin, 0)) / arr.length *100) / 100 : 0;
// {   //Readable version:
//     if(arr.length === 0){
//         return 0
//     }
//     const rating = arr.reduce((fin , movies) =>{
//         if (movies.rate){
//             return fin + movies.rate;
//         }
//         else{
//             return fin
//         }
//     }, 0);
//
//     return Math.round( rating / arr.length *100) / 100;
// };

// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = (arr) => {
    let newArr = [];
    arr.map(e => e.genre.includes('Drama') ? newArr.push(e) : newArr);
    let dramaRating = newArr.reduce((fin , movie) =>  movie.rate ? fin + movie.rate : fin, 0);
    return newArr.length ? Math.round( dramaRating / newArr.length *100) / 100 : 0;
};
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = (arr) => (arr.sort((a, b)=> a.year>b.year ? 1 : a.year<b.year ? -1 : 0)).map(e => e);
// {    //Readable Version:
//     let sortYear = arr.sort((a,b) => a.year > b.year ? 1 : a.year < b.year ? -1 : 0);
//     return sortYear.map(e => e);
// };

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = (arr) => {
    let newArr = [...arr];
    let sort = newArr.sort((a, b) => {
        return a.title>b.title ? 1 : a.title < b.title ? -1 : 0;
    });
    return sort.map(e => e.title).slice(0, 20);
};
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
const turnHoursToMinutes = (arr) => {
    let newArr = [...arr];
    newArr.forEach((e, i) => {
        let dur = newArr[i].duration;

        if (dur.length === 2) {
            newArr[i].duration = (Number(newArr[i].duration.replace("h", ""))) * 60;
        }

        if (dur.length >= 4 && dur.length <= 5) {
            newArr[i].duration = Number(newArr[i].duration.replace("min", ""));
        }

        if (dur.length > 5) {
            let hour = Number(dur.split(" ")[0].replace("h", ""));
            let minutes = Number(dur.split(" ")[1].replace("min", ""));
            newArr[i].duration = hour * 60 + minutes;
        }
    });
    return newArr;
};
// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
const bestYearAvg = (arr) => {
    //WIP: messy
    if (arr.length) {
        let best;
        let rating = arr.reduce((fin, elem) => {
            if (`${elem.year}` in fin) {
                fin[`${elem.year}`].push(elem.rate);
            } else {
                fin[`${elem.year}`] = [elem.rate];
            }
            return fin;
        }, {});
        for (const [year, ratings] of Object.entries(rating)) {
            if (ratings.length > 1) {
                rating[year] = ratings.reduce((fin, e) => {
                    fin += e / ratings.length;
                    return +fin.toFixed(2);
                }, 0);
            } else {
                rating[year] = ratings[0];
            }
        }
        let years = Object.keys(rating);
        best = years[0];
        for (let i = 1; i < years.length; i++) {
            if (rating[years[i]] > rating[best]) {
                best = years[i];
            }
        }
        return `The best year was ${best} with an average rate of ${rating[best]}`;
    } else return null;
};