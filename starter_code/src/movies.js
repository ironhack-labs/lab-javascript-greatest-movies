/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = movie => {
    let orderedByYear = JSON.parse(JSON.stringify(movie));

    orderedByYear.sort((a, b) => {
        if ( a.year > b.year) {
            return 1;
        } else if (a.year < b.year) {
            return -1;
        } else {
            return a.title.localeCompare(b.title);
        }   
    });
    return orderedByYear;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
const howManyMovies = movie => {
    let stevenArr = JSON.parse(JSON.stringify(movie));

    if (stevenArr.length != 0) {
        let timeSteven = 0;
        timeSteven = stevenArr.filter(a => (a.director == "Steven Spielberg") && (a.genre.includes("Drama"))).length;
        return timeSteven;
    } else {
        return 0;
    }
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = movie => {
    let alphabeticArr = JSON.parse(JSON.stringify(movie));

    alphabeticArr.sort((a , b) => a.title.localeCompare(b.title));

    // alphabeticArr.map((item, index) => {
    //     if (alphabeticArr.length > 20) {

    //         return item.title;
    //     }
    // });

    return alphabeticArr.slice(0, 20).map(item => item.title);

}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

const ratesAverage = movie =>{
    if (movie.length == 0) {
        return 0;
    }
    let copyArr = JSON.parse(JSON.stringify(movie));

    let size = copyArr.length;

    let somatoria = copyArr.reduce((acc, item) => { 
        if ( item.rate == undefined) {
            return acc;
        } else {
            return acc + item.rate;
        }
    }, 0);
    return +(somatoria / size).toFixed(2);
} 

// Iteration 5: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = movie => {

    let copyArr = JSON.parse(JSON.stringify(movie));
    if (copyArr.filter(a => a.genre.includes("Drama")).length == 0) {
        return 0;
    }

    let dramaArr = copyArr.filter(a => a.genre.includes("Drama"));
    
    return ratesAverage(dramaArr);
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

const turnHoursToMinutes = movie => {
    let turntoMinutesArr = JSON.parse(JSON.stringify(movie));
    let calculation = 0;
    let calculationTotal = 0;

    if(movie.length === 0)
    {
        return 0;
    }

    turntoMinutesArr.map(x => {

        if(x.duration.includes('h') && x.duration.includes('min'))
        {
            let eliminateSpace = x.duration.split(' ');
            let transformToMinutes = eliminateSpace[0].split('h');
            calculation = +transformToMinutes[0] * 60;
            let sumMinutes = eliminateSpace[1].split('min');
            calculationTotal = calculation + (+sumMinutes[0]);
        }
        else if(x.duration.includes('h'))
        {
            let transformToMinutes = x.duration.split('h');
            calculationTotal = +transformToMinutes[0] * 60;
        }
        else{
            
            let sumMinutes = x.duration.split('min');
            calculationTotal = +sumMinutes[0];
        }
        
        x.duration = +calculationTotal;
    });

    return turntoMinutesArr;
}
// BONUS Iteration: Best yearly rate average - Best yearly rate average

const bestYearAvg = movie =>{

    let bestYearArr = JSON.parse(JSON.stringify(movie));
    
    let count = 0;
    let count2 = 0;
    let tempYear = 0;
    let tempYear2 = 0;
    let tempAvg = 0;
    let tempTotal = 0;

    let bestYearAvg = {
        bestYear: 0,
        bestAvg: 0
    }

    if(bestYearArr.length === 0)
    {
        return null;
    }

    let orderYear = orderByYear(bestYearArr);
    let size = orderYear.length;

    for(let i = 0; i < size; i++)
    { 
        if(count === 0)
        {
            tempYear = orderYear[i].year;
            count = 1;
            //bestYearAvg.bestYear = tempYear;
        }
        else if( count === 2)
        {
            tempYear = tempYear2;
            //bestYearAvg.bestYear = tempYear;
        }

        if(tempYear === orderYear[i].year)
        {
            tempAvg +=  orderYear[i].rate;
            count2 += 1;
            tempTotal = (tempAvg / count2).toFixed(0);

            if(tempTotal > bestYearAvg.bestAvg)
            {
                bestYearAvg.bestAvg = tempTotal;
                bestYearAvg.bestYear = tempYear;
            }
        }
        else
        {   
           tempYear2 = orderYear[i].year;
           count = 2;
        } 
    }    

    return `The best year was ${bestYearAvg.bestYear} with an average rate of ${bestYearAvg.bestAvg}`;
}
