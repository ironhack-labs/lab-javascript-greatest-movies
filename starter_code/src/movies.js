/* eslint no-restricted-globals: 'off' */

/*Create a turnHoursToMinutes method that receive an 
array as parameter, replace the duration info of each 
of the movies for it equivalent in minutes. For example:

{
  "title":"The Shawshank Redemption",
  "year":"1994",
  "director":"Frank Darabont",
  "duration":"2h 22min",
  "genre":["Crime","Drama"],
  "rate":"9.3"
}
Should be:

{
  "title":"The Shawshank Redemption",
  "year":"1994",
  "director":"Frank Darabont",
  "duration":"142",
  "genre":["Crime","Drama"],
  "rate":"9.3"
}
*/


function orderByDuration(movies){

movies.sort(function(a, b){
    if(a.duration < b.duration) return -1;

    if(a.duration > b.duration) return 1;

    if(a.duration - b.duration === 0){

      if(a.title < b.title) return -1;

    if(a.title > b.title) return 1;

    }

    
})

return movies;

}






function ratesAverage(movies){

var totalNumber = 0;
for (var i = 0; i < movies.length; i++){

totalNumber = totalNumber + Math.round(movies[i].rate);

}
var averageOfallMovies = (totalNumber / movies.length);

return averageOfallMovies;

}



function turnHoursToMinutes(arrayOfMovies){


    
    let newArray = arrayOfMovies.map((eachMovie)=>{
  
  
        if(typeof(eachMovie.duration)==="number"){
          return eachMovie
        }
  
            let total;
  
            let both = eachMovie.duration.includes('h') && eachMovie.duration.includes('min');
  
            let minutesOnly = eachMovie.duration.includes('min') && !eachMovie.duration.includes('h');
  
            let hoursOnly = !eachMovie.duration.includes('min') && eachMovie.duration.includes('h');
  
  
            let numbersOnly = eachMovie.duration.replace('h', '').replace('min', '');
  
            
            let durationArray = numbersOnly.split(' ');
            
  
            if(both){
            total = Number(durationArray[0]*60) + Number(durationArray[1])
            }
  
            if(minutesOnly){
              total = Number(durationArray[0]);
            }
            if(hoursOnly){
              total = Number(durationArray[0]*60);
            }
  
            let movieCopy = Object.assign({},eachMovie)
            movieCopy.duration = total;
            return movieCopy;
  
     })
  
  
      return newArray;
  
    }




function dramaMoviesRate(movies){


var includesDrama = movies.filter((eachNum)=>{
     return eachNum.genre == ("Drama");
 })

 if (includesDrama.length == 0){return;}


total = 0;
for (var i = 0; i < includesDrama.length; i ++){

total = Number(includesDrama[i].rate) + total;

}


var average = total / includesDrama.length;



var finalNumber = average.toFixed(2);

final = Number(finalNumber);

return final;

}













function howManyMovies(movies){

var isSteven = movies.filter((eachNum)=>{
  return eachNum.director == 'Steven Spielberg' && eachNum.genre.includes("Drama")
});

 if (movies.length == 0){return;}




return ("Steven Spielberg directed " + isSteven.length + " drama movies!" );


}







function orderAlphabetically(movies){

 movies.sort(function(a, b){
    if(a.title < b.title) return -1;

    if(a.title > b.title) return 1;

    return 0;
})

let newArray = movies.slice(0,20);


 var list = newArray.map((finalList)=>{
   return finalList.title
 });

return list;
}





