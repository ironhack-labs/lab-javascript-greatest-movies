// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map(element => element.director)
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    return moviesArray.reduce((acc, curr) => {
        if (curr.director === "Steven Spielberg" && curr.genre.includes("Drama")) {
            return acc+=1
        } else {
            return acc+=0
        }
    },0)
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length !== 0) {
        return Number((moviesArray.reduce((acc, curr) => {
            if (curr.score) {
                return acc += curr.score
            } else {
                return acc += 0
            }
        }, 0) / moviesArray.length).toFixed(2));
    } else {
        return 0
    }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaMovies = 0;
    let isDramaMovies = false;
    const result = Number((moviesArray.reduce((acc, curr) => {
        if (curr.genre.includes("Drama")) {
            dramaMovies += 1
            isDramaMovies = true;
            return acc += curr.score
        } else {
            return acc += 0
        }
    },0)/dramaMovies).toFixed(2))

    if (isDramaMovies) {
        return result
    } else {
        return 0
    }
    
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const result = moviesArray.map(element => element);
    return result.sort((a, b) => {
        if (a.year > b.year) {
            return 1
        } else if (a.year < b.year) {
            return -1
        } else {
            if (a.title > b.title) {
                return 1
            } else if (a.title < b.title) {
                return -1
            } else {
                return 0
            }
        }
    })
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const result = moviesArray.map(element => element.title).sort();
    if (result.length <= 20) {
        return result
    } else {
        let newArray = [];
        for (let i = 0; i < 20; i++) {
            newArray.push(result[i])
        }
        return newArray
    }
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    return result = moviesArray.map(element => {
        const splitted = element.duration.split(" ");
        const h = splitted[0].slice(0, splitted[0].length - 1);
        if (splitted.length === 2) {
            const m = splitted[1].slice(0, splitted[1].length - 3)
            element.duration = Number(h) * 60 + Number(m);
        } else {
            element.duration = Number(h) * 60;
        }
        return element
    })
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (moviesArray.length !== 0) {
        let bestYear = 0;
        let bestScore = 0;
        let yearFait = [];
        const result = moviesArray.map(element1 => {
            let currentYear = element1.year;
            let yearNote = 0;
            let numberOfNote = 0;
            if (yearFait.includes(currentYear) === false) {
                yearFait.push(currentYear);
                const result2 = moviesArray.map(element2 => {
                    if (element2.year === currentYear) {
                        yearNote += element2.score;
                        numberOfNote += 1;
                    }
                })
                    if (yearNote/numberOfNote > bestScore) {
                    bestYear = currentYear;
                    bestScore = yearNote/numberOfNote
                } else if (yearNote/numberOfNote === bestScore) {
                    if (currentYear < bestYear) {
                        bestYear = currentYear;
                        bestScore = yearNote/numberOfNote
                    }
                }
            }
        })
        return `The best year was ${bestYear} with an average score of ${bestScore}`
    } else {
        return null
    }
}
