// Iteration 1: All directors? - Get the array of all directors.

const getAllDirectors = (someArr) => someArr.map(element => element.director);

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?




// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

const howManyMovies = (someArr) => {
    const spielbergDramaMovies = someArr.filter(element => {
    return element.director === "Steven Spielberg" && element.genre.includes("Drama");
});
    return spielbergDramaMovies.length;
}



// Iteration 3: All rates average - Get the average of all rates with 2 decimals

const ratesAverage = (someArr) => {
    if(someArr.length === 0) {return 0}
    const averageSum = someArr.reduce((acc, item) => {
        if(item.rate === undefined) {return acc}
        return acc + item.rate;
    }, 0)
    return Number((averageSum/someArr.length).toFixed(2))
}


// Iteration 4: Drama movies - Get the average of Drama Movies


const dramaMoviesRate = (someArr) => {
    const dramaFilms = someArr.filter((element) => {
        return element.genre.includes("Drama")
    });
    return ratesAverage (dramaFilms)
}
     
    
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)


const orderByYear = (someArr) => {
    const cloneArr = someArr.map (element => {return element});
    const arrOrdered = cloneArr.sort((a, b) => {
        if(a.year < b.year) {return -1}
        if(a.year > b.year) {return 1}
        if(a.year === b.year) {
            if(a.title < b.title) {return -1}
            if (a.title > b.title) {return 1}
        }
    });
    return arrOrdered
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = (someArr) => {
    const duplicateArr = someArr.map(item => item);
    const orderedArr = duplicateArr.sort((a, b) => {
        if(a.title < b.title) {return -1};
        if(a.title > b.title) {return 1};
    });
    const shortArr = orderedArr.filter(element => {
        return orderedArr.indexOf(element) < 20;
    });
    const titleArr = shortArr.map(item => {return item.title});

    return titleArr;
};



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
