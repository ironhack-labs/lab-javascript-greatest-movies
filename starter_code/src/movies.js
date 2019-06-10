/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles: sort


// Best yearly rate average
 
function turnHoursToMinutes(movies) {



let arr = movies.map(el => {
const num =  el.duration.split(" ")
let total = 0



if (num.length === 1 && num[0].includes("h")){
    total = parseInt(num[0])*60
     
} 
else if(num.length === 1 && num[0].includes("min")) {
    total = parseInt(num[0])
       
}

else  {
    total = parseInt(num[0])*60 + parseInt(num[1])
    
}



console.log(num)

el.duration = parseInt(total) 
return el 

})

return arr

}





function ratesAverage (movies) {

    let total = 0 

     for (i = 0; i<movies.length; i++) {
        let tonum = Number(movies[i].rate)
        total += tonum 
    }
return total/movies.length
}










