/* eslint no-restricted-globals: 'off' */
function turnHoursToMinutes (arr){
  var arrMoviesNew = arr.map(function(elem){
    return elem;   
  });

  var hours = 0;
  var minutes = 0;
  var totalTime =0;
  var origTime = [];

  if(origTime.includes('h')){
    if(origTime.includes('m')){
      hours = parseInt(origTime.split('h')[0])*60;
      minutes = parseInt(origTime.split('h')[1].split('min')[0]);
      totalTime= (hours+minutes).toString();
    } else {
      hours = parseInt(origTime.split('h')[0])*60; 
      totalTime = hours.toString();       
    }
  } else{
    minutes = parseInt(origTime.split('h')[1].split('min')[0]);
    console.log('hola ');
    totalTime = minutes.toString();
  }
  elem.duration = totalTime;
  //return arrMoviesNew;
  return {duration:totalTime };
  

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
