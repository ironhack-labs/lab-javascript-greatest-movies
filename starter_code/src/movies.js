movie = require("../src/data");
movie = [    {
    "title": "Mononoke-hime",
    "year": 1997,
    "director": "Hayao Miyazaki",
    "duration": "2h 14min",
    "genre": [
      "Animation",
      "Adventure",
      "Fantasy"
    ],
    "rate": 8.4
  },]
/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movie){
    if(movie.length ===0) return []
    return movie.sort((a,b)=>{
        if(a.year > b.year) return 1;
        else if(a.year < b.year) return -1;
        else return a.title.localeCompare(b.title)
    })
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(movie){
    return movie.filter((element)=>{
        return element.director === "Steven Spielberg" && element.genre.includes("Drama")
    }).length
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movie){
    return [...movie].sort((a,b)=>{
        return a.title.localeCompare(b.title);
    }).filter((element,index) =>{ return index < 20} ).map(element => element.title)
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movie){
    if(movie.length===0) return 0;
    return parseFloat(([...movie].reduce((acc,element)=>{
        if(!element.rate) return acc +=0;
        return acc += element.rate;
    },0)/movie.length).toFixed(2));
}

// Iteration 5: Drama movies - Get the average of Drama Movies


function dramaMoviesRate(movie){
    return ratesAverage([...movie].filter((element)=> {
        return element.genre.includes(`Drama`)
    }));
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movie){
    return [...movie].map(element =>{
        let newElement = JSON.parse(JSON.stringify(element))
        arrayTime = element.duration.split(`h`)
        let result = 0;
        if(arrayTime.length===2){
            result  = parseFloat(arrayTime[0])*60;
            if(arrayTime[1].includes('min')){
                result += parseFloat(arrayTime[1].split(`min`)[0]);
            }
        }
        else{
            result = parseFloat(arrayTime[0].split(`min`)[0]);

        }
        newElement.duration = result;
        return newElement;
    })
}


// BONUS Iteration: Best yearly rate average - Best yearly rate average

function bestYearAvg(movie){
    if(movie.length ===0) return null
    arrayTime = [...movie].map( element => {return element.year});
    arrayTime.reduce((acc,element,index,array) =>{
        if(array.indexOf(element)===index){
            acc.push(element)
        }
        return acc;
    },[])
    let avgYear = 0;
    let year = 0;
    for(let i = 0;i<arrayTime.length;i++){
        let result = 0;
        let numberMovie = 0;
        for(let j=0;j<movie.length;j++){
            if(movie[j].year===arrayTime[i]) {
                result += movie[j].rate;
                numberMovie++;
            }
        }
        //Verificando a media daquele ano em relacao a maior registrada
        if(result/numberMovie>avgYear) {
            avgYear = result/numberMovie;
            year = arrayTime[i];
        }
        else if(result/numberMovie===avgYear){
            if(arrayTime[i]<year) year = arrayTime[i];
        }
    }
    return `The best year was ${year} with an average rate of ${avgYear}`
}


console.log(bestYearAvg(movie))
