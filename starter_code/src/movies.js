/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function hoursToMinutes(arrayDuraciones){
    let arrayHMin = arrayDuraciones.map(function(string){
        return  string.match(/\d+/g).map(Number);
      });
      console.log(arrayHMin);
        let sumNewArray = arrayHMin.map(function(pos,index){
        let misMinutos=0;
        for(let i = 0;i<arrayDuraciones.length;i++){
         if(pos.length===2){
              misMinutos = pos[0]*60+pos[1];
            }else if(pos.length===1 && arrayDuraciones[index][1]==='h' )
              misMinutos = pos[0]*60;
            else {
              misMinutos = pos[0];
            }
        
        }return misMinutos;
      });console.log(sumNewArray);
}

let array=["2h 30min","2h","30min"];
console.log(hoursToMinutes(array));

// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
