/* eslint no-restricted-globals: 'off' */
function turnHoursToMinutes (arr){
  var arrMoviesNew = arr.map(function(elem){ 

  var hours = 0;
  var minutes = 0;
  var totalTime =0;
  var origTime = elem.duration;

  if(origTime.includes('h')){
    if(origTime.includes('m')){
      hours = parseInt(origTime.split('h')[0])*60;
      minutes = parseInt(origTime.split('h')[1].split('min')[0]);
      totalTime= (hours+minutes);
    } else {
      hours = parseInt(origTime.split('h')[0])*60; 
      totalTime = hours;       
    }
  } else{
    minutes = parseInt(origTime.split('h')[1].split('min')[0]);
    totalTime = minutes;
  }
  //elem.duration = totalTime;
  //
  return Object.assign({}, elem,{duration: totalTime} );
});

return arrMoviesNew;
  //arrMoviesNew.map(function(elem, i){
    //origTime = elem.duration;
    //console.log('primera' +origTime);

    
    //console.log('segunda ' +elem.duration);

  //});





  //var origTime = arrMoviesNew[0].duration;
  

  
  //console.log('hours ' + hours);
  //console.log('min ' + minutes);

    
  
    //console.log('tiempo ' + totalTime);


    //return arrMoviesNew;
  
  }
  


        
  
  //console.log(origTime);
  



// Turn duration of the movies from hours to minutes 


// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
