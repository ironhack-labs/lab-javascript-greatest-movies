// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(arr){
    let dirArr = arr.map((movie) => {
        return movie.director;
    });
    return dirArr;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
function removeDuplicates(arr){
    let index;
    for(let i = 0; i < arr.length-1; i++){
        index = arr.indexOf(arr[i], i+1);
        while(index !== -1){
            arr.splice(index, 1);
            index=arr.indexOf(arr[i], i+1);
        }
    }
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(arr){
    let spielbergMovies = arr.filter(element => {
        return element.director === "Steven Spielberg";
    });
    let dramaSpielMovies = spielbergMovies.filter(element => {
        for(let gen of element.genre){
            if(gen === "Drama"){
                return true;
            }
        }
        return false;
    });
    return dramaSpielMovies.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr){
    let average = arr.reduce((acc, value) => {
        if (!value.rate || !("rate" in value)){
            return acc;
        }
        return acc + value.rate;
    }, 0)
    if (arr.length !== 0){
        average = average / arr.length;
    }
    return Number(average.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr){
    let dramaMovies = arr.filter(movie => {
        for(let gen of movie.genre){
            if(gen === "Drama"){
                return true;
            }
        }
        return false;
    });
    let average = dramaMovies.reduce((acc, movie)=>{
        return acc + movie.rate;
    }, 0);
    if(dramaMovies.length !== 0){
        average = average/dramaMovies.length;
    }
    return Number(average.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arr){
    let orderedArr = arr.slice();
    orderedArr.sort((a,b) => {
        let order = a.year-b.year
        if(order !== 0){
            return order;
        }else{
            if(a.title > b.title){
                return 1;
            }
            if(a.title < b.title){
                return -1;
            }
            if (a.title === b.title){
                return 0;
            }
        }
    })
    return orderedArr;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr){
    let titleArr = [];
    for(let movie of arr){
        titleArr.push(movie.title);
    }

    titleArr = titleArr.sort().slice(0,20);
    return titleArr;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(arr){
    let newArr = JSON.parse(JSON.stringify(arr));;
    let duration, durationInMinutes;
    for(let element of newArr){
        duration = element.duration.split(" ")
        if(duration.length === 1 && duration[0].includes("min")){
            duration[0] = duration[0].slice(0,duration[0].length-3);
            durationInMinutes = Number(duration[0]);
        }else if(duration.length === 1 && duration[0].includes("h")){
            duration[0] = duration[0].slice(0,duration[0].length-1);
            durationInMinutes = Number(duration[0])*60;
        }else if (duration.length === 2){
            duration[0] = duration[0].slice(0,duration[0].length-1);
            duration[1] = duration[1].slice(0, duration[1].length-3);
            durationInMinutes = Number(duration[0])*60 + Number(duration[1]);
        }

        element.duration = durationInMinutes;
    }
    return newArr;
}


// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

function getYearIndex(arr, year){
    for(let i = 0; i < arr.length; i++){
        if(arr[i].year === year){
            return i;
        }
    }
    return -1;
}

function findIndexMaximum(arr){
    let index = 0;
    let max = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i].average > max.average){
            max = arr[i];
            index = i;
        }else if(arr[i].average === max.average){
            if(max.year > arr[i].year){
                max=arr[i];
                index = i;
            }
        }
    }
    return index;
}

function bestYearAvg(arr){
    if(arr.length === 0){
        return null;
    }
    let yearArr = [];
    let yIndex;
    for(let movie of arr){
        yIndex = getYearIndex(yearArr, movie.year);
        if(yIndex !== -1){
            yearArr[yIndex].rates.push(movie.rate);
        }else{
            yearArr.push({year: movie.year, rates: [movie.rate]});
        }
    }

    for(let obj of yearArr){
        obj.average = obj.rates.reduce((a,b)=>{
            return a+b
        })/obj.rates.length;
    }

    let maxAvgYear = yearArr[findIndexMaximum(yearArr)];

    return `The best year was ${maxAvgYear.year} with an average rate of ${maxAvgYear.average}`

}