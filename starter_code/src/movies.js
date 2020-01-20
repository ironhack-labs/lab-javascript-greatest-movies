/*Data Example
{
    "title":"The Shawshank Redemption",
    "year":1994,
    "director":"Frank Darabont",
    "duration":"2h 22min",
    "genre":["Crime","Drama"],
    "rate":9.3
}*/

/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
let comparisons = 0;
let sameYear;

function orderByYear(arr){
    arr.sort(function (movie1, movie2) {
        if (movie1.year > movie2.year) return 1
        if (movie1.year < movie2.year) return -1
        if (movie1.year === movie2.year) {
            // console.log(`mismo año`);
            a = movie1.title.localeCompare(movie2.title); 
            // console.log(`a = ` + a);
            return a;
        }
    })
    let arr2 = [...arr]; 
    return arr2;
}
//console.log(movies);


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(arr){
    let result = arr.filter(item => item.director === "Steven Spielberg" && item.genre.includes("Drama"));
    //console.log("result = " + result);
    return result.length;
} 


// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr){
    
    arr.sort((a,b) => a.title.localeCompare(b.title));
    
    let sortedArray = [];
    for(let i = 0 ; i < 20 ; i++){
        sortedArray.push(arr[i].title)
    }
    console.log(`sortedArray = `+ sortedArray);
    return sortedArray;
    
}

/*Another popular way to order the movies is to sort them alphabetically using the title key. However, in this case, we only need to print the title of the first 20. Easy peasy for an expert like you. 😉

Create a orderAlphabetically() function, that receives an array and returns an array of first 20 titles, alphabetically ordered. Return only the title of each movie, and if the array you receive has less than 20 movies, return all of them.*/

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arr){

    if(arr.length === 0){
        return 0;
    }

    let total = arr.reduce((acumulator, currentItem) => {
        if(typeof currentItem.rate !== 'number'){
            currentItem.rate = 0;
        }
        return acumulator + currentItem.rate;
    }, 0);
    
    let average = Number(total/arr.length);
    let averageToFixed = average.toFixed(2);

    // console.log(`total`, total);
    // console.log(`average`, average);
    // console.log(`averageToFixed`, averageToFixed);

    return +averageToFixed;
}


// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr){
    
    let dramas = arr.filter(item => {
        return item.genre.includes("Drama");
    });

    // console.log(dramas.length);

    if(dramas.length === 0){
        return 0;
    }

    let total = dramas.reduce((acumulator, currentItem) => {
        if(typeof currentItem.rate !== 'number'){
            currentItem.rate = 0;
        }
        return acumulator + currentItem.rate;
    }, 0);
    
    let average = Number(total/dramas.length);
    let averageToFixed = average.toFixed(2);

    // console.log(`total`, total);
    // console.log(`average`, average);
    // console.log(`averageToFixed`, averageToFixed);

    return +averageToFixed;
}


// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr){
    //"duration":"2h 22min", -> "duration":142,
    // - Encontrar los que tengan h
    // - multiplicar la h por 60
    // - sumarle los min 
    // - cambiar 

    const newState = arr.map(obj =>
        obj.duration === "101" ? { ...obj, completed: true } : obj
    );

    let h = "h"
        expr = /oo/;
    h.search(expr);

    // Second approach: using map, and spread 
    // const summerFruitsCopy = summerFruits.map(fruitItem => 
    // fruitItem .id === fruit.id ? 
    //     {...summerFruits, ...fruit} : fruitItem );

    // const answers = this.state.answers.map(answer => {
    //     if(answer.id === id) return { id: id, value: e.target.value }
    //     return answer
    // })
    // this.setState({ answers: answers }    

    // const index = projects.findIndex(project => project.value==='jquery-ui');
    // projects[index].desc = "updated desc";

    // //find the index of object from array that you want to update
    // const objIndex = projects.findIndex(obj => obj.value === 'jquery-ui');

    // // make new object of updated object.   
    // const updatedObj = { ...projects[objIndex], desc: 'updated desc value'};

    // // make final new array of objects by combining updated object.
    // const updatedProjects = [
    // ...projects.slice(0, objIndex),
    // updatedObj,
    // ...projects.slice(objIndex + 1),
    // ];

    // function changeDesc(value, desc){
    //     projects.map((project) => project.value == value ? project.desc = desc : null)
    //  }
    //  changeDesc('jquery', 'new description')

    //  let project = projects.find((p) => {
    //     return p.value === 'jquery-ui';
    // });
}




// BONUS Iteration: Best yearly rate average - Best yearly rate average
function bestYearAvg(arr){

}