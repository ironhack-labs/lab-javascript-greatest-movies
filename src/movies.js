

// Iteration 1: All directors? - Get the array of all directors.


function getAllDirectors (array) {
    let directors = array.map((movie)=> movie.director)
    return directors
}



// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies (array){
    const newArray=array.filter ((movie) => {
        return movie["director"]==="Steven Spielberg" && movie.genre.includes("Drama")
        })
        return newArray.length
    }




// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(array){
    const total = array.reduce((acc,element)=> 
    {
    if (element.rate){
        return acc+element.rate
    } else{return acc}},0)
    if (total){
    let media =total/array.length
    return parseFloat(media.toFixed(2))
}
    else {
        return 0
    }
   
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(array){
    let drama = array.filter ((movie)=> {
        return movie["genre"].includes("Drama")
    });
    let total = drama.reduce((acc,element)=>acc+element.rate,0);
    if (total!=0) {
        let media = total/drama.length
        return parseFloat(media.toFixed(2))
    } else {
        return 0 
    }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array){
    let novo = array.sort((a,b)=> {
        if (a.year>b.year){
            return 1}
        if (a.year<b.year){
            return -1
        }
        if(a.year===b.year){array.sort()}});
        return novo;
}




// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
let a = [
    {
        "title": "Aqui Primeiro",
        "year": 2009
    },
    {
        "title": "Esse Terceiro",
        "year": 2009
    },
    {
        "title": "Sie  Quarto",
        "year": 2009
    },
    {
        "title": "Boo Segundo",
        "year": 2000
    }
]


function orderAlphabetically(array){
    let newA = array.slice()

    newA.sort((a,b)=>{
        let fa =  a.title.toLowerCase(), fb=b.title.toLowerCase();
        if (fa<fb){return -1};
        if (fa>fb){return 1};
        return 0;
    });

    if (newA.length>20){
        newA = newA.slice(0,20);
    }
    return newA;
    
}


console.log(orderAlphabetically(a))
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average






