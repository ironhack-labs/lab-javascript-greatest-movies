/* eslint no-restricted-globals: 'off' */
//const movies=require('./data')

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(array){
  
    let newArrayYear = JSON.parse(JSON.stringify(array));
    let result;
    let compare1;
    let compare2;
    return newArrayYear.sort((a,b) =>{
        compare1=a.title;
        compare2=b.title;
  
        if(a.year===b.year){
            return compare1.localeCompare(compare2);
        }   
         return a.year-b.year;
     });
  
   
}

//console.log(orderByYear(movies)[0])
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(array) {
    let number=0;
    let newArray =[];
    // array.forEach(element => {
    //     if(element.director==='Steven Spielberg'){
    //         for(i=0;i<element.genre.length;i++){
    //             if(element.genre[i]==='Drama'){
    //                 number +=1;
    //             }
    //         }
    //     }
    // });

    newArray=array.filter(movie => movie.director==='Steven Spielberg' && movie.genre.includes('Drama'));
 
    return newArray.length;
    
}

//console.log(howManyMovies(movies))

//console.log(howManyMovies(movies2));
// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array){
  let newArray = JSON.parse(JSON.stringify(array));
  let titles=[];
  let index=0;
  

  newArray.sort((a,b)=>{
        if (a.title < b.title) 
        return -1 
        if (a.title > b.title)
        return 1
    return 0
    });
    
    if(newArray.length<20){
      
      index=newArray.length;
    }else {index=20;}
    
    for (let i=0; i<index; i++){
      
      //titles[i]=(newArray[i].title);
      titles.push(newArray[i].title);
    }
    // titles = newArray.filter(function(number,index,array){
    //        return index<20});
 
    return titles;
}


//console.log(orderAlphabetically(movies2));
// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(array){
  // let newArray = [];
  //let average=0;
  // console.log(newArray[1]);
  if(array[0]===undefined){
    return 0;
  }

  // ES6:
  let average = array.reduce((sum, element) => {
    if(element.rate===undefined){
      return sum;
    }
    return sum + element.rate;
}, 0);



  //average = (average/array.length).toFixed(2);
  
  
  return Number((average/array.length).toFixed(2));

}

//console.log(ratesAverage(movies2))
// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array){
  let newArray = JSON.parse(JSON.stringify(array)); 
  let counter = 0;
  let avg = 0;
  newArray.map((element,index,array) => {
    console.log(element.genre);
    if(element.genre===undefined)
    {
      return avg;
    }
    console.log(avg)
    console.log(counter)
    if(element.genre.includes('Drama')){
      avg += element.rate;
      counter+=1;
    }
    
  });
  if(counter===0){
    return 0;
  }
  return Number((avg/counter).toFixed(2));
}

// console.log(dramaMoviesRate(movies2));

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(array){
  let newArray = JSON.parse(JSON.stringify(array)); 
  
  let hour;
  let min;
  let duration;
  
  
  let test = newArray.map((element,index) => {
    if(element.duration===undefined){
      return element;
    }
    if(element.duration.includes('h') && element.duration.includes('min')){ 
    hour = element.duration[element.duration.indexOf('h')-1];
    min = element.duration[element.duration.indexOf('m')-2] + element.duration[element.duration.indexOf('m')-1];
    duration = Number(hour)*60 + Number(min);
    element.duration = duration;
    return element;
    }
    if(!element.duration.includes('h')){
    min = element.duration.split('min'); 
    duration = Number(min[0]);
    element.duration = duration;
    return element;
    }
    if(!element.duration.includes('min')){
      hour = element.duration.split('h'); 
      duration = Number(hour[0]);
      element.duration = duration*60;
      return element;
      }
  });
  
  return test;
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average

function bestYearAvg(array){
  
  
  let newArray= orderByYear(array);
  
  if (newArray.length===0){
    return null;
  }
  if(newArray.length===1){
    return `The best year was ${newArray[0].year} with an average rate of ${newArray[0].rate}`;
  }
  let avg= newArray[0].rate;
  let counter=1;
  let result=0;
  let yearAvgArray=[];
    
 
    for (let i = 0; i<newArray.length; i++){
      
      console.log(newArray[i+1]===undefined)

      if(newArray[i+1]===undefined){
        if(newArray[i].year===newArray[i-1].year){
        avg +=newArray[i].rate;
        counter +=1;
        result = avg/counter;
          yearAvgArray.push([newArray[i].year,Number(result.toFixed(2))]);
          break;
        } else {
          result = avg/counter;
          yearAvgArray.push([newArray[i].year,Number(result.toFixed(2))]);
          break;
        }
      } 
     
      if(newArray[i].year===newArray[i+1].year)
      {
        avg +=newArray[i].rate;
        counter +=1;
  
      } else {
        result = avg/counter;
        avg=newArray[i+1].rate;
        counter = 1;
        yearAvgArray.push([newArray[i].year,Number(result.toFixed(2))]);
      }


    }
    console.log(yearAvgArray)
    let bestYearAverage = 0;
    let bestYear = 0;

    for (i=0; i<yearAvgArray.length;i++){
      if(yearAvgArray[i][1]>bestYearAverage){
        bestYear=yearAvgArray[i][0];
        bestYearAverage=yearAvgArray[i][1];
      } 
      if(yearAvgArray[i][1]===bestYearAverage){
        if(yearAvgArray[i][0]<bestYear){
          bestYear=yearAvgArray[i][0];
          bestYearAverage=yearAvgArray[i][1];
        } 
      }

    }
    
    return `The best year was ${bestYear} with an average rate of ${bestYearAverage}`;


}


