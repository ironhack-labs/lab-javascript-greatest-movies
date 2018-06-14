/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(arr){
    var duration;   

    var arr2 = arr.map(function(e){
        var element=e.duration.replace('h',"").replace("min","");
        var a=element.split(' ');
        if(a.length==2){
            duration=parseInt(a[0])*60 + parseInt(a[1]);
        }else{
            if(e.duration.indexOf('h')!=-1)
                 duration=parseInt(a[0])*60 ;
            else
            duration=parseInt(a[0]) ;
        }
        

        return {duration:duration};
    })
    return arr2;
}
// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
