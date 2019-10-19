/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 

function ratesAverage(mv) {
    let sm=0
    mv.forEach(element => {
        sm += parseFloat(element.rate)
    });
    avg = sm/mv.length
    return avg
}

// Iteration 2: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(mv) {
    let sm=0
    let dr_mv = mv.filter(function(val)
        {
        if (val.genre.includes('Drama'))
        {
           return val     
        }
        })
    dr_mv.forEach(element => {
        sm += Number(element.rate)
    });
    if (dr_mv.length === 0)
    return 0
    else
    avg = sm/dr_mv.length
    return parseFloat(avg.toFixed(2))
}



// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)


function orderByYear(mv) {
    let ord_mv = mv.sort( function(a,b) 
        {   
            if(a.year > b.year)
            {
                return 1
            }
            else if((b.year === a.year)&&((a.title.toUpperCase()) > (b.title.toUpperCase())))
            {
                return 1
            }
            else if((b.year === a.year)&&((a.title.toUpperCase()) < (b.title.toUpperCase())))
            {
                return -1
            }
            else if (b.year > a.year)
                return -1
            else if((b.year === a.year)&&((a.title.toUpperCase()) === (b.title.toUpperCase())))
                return 0
        })
    return ord_mv
}



// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

function howManyMovies(mv) {
    let sp_dr_mv = mv.filter(val => val.genre.includes('Drama')&&(val.director.includes('Steven Spielberg')))
return sp_dr_mv.length
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(mv) {
    let ord_mv = mv.sort( function(a,b){
        if((a.title.toUpperCase()) > (b.title.toUpperCase()))
        {
            return 1
        }
        else if((a.title.toUpperCase()) < (b.title.toUpperCase()))
        {
            return -1
        }
        else if((a.title.toUpperCase()) === (b.title.toUpperCase()))
        {
            return 0
        }
    })
    let nm_ord_mv = ord_mv.map(a => a.title)
    if(nm_ord_mv.length <= 20)
        return nm_ord_mv
        else 
        return nm_ord_mv.slice(0,20)
}


// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(mv) {
    let mp_mv = mv.map(a => {
        let num = a.duration
        if ((num.includes('h'))&&(num.includes('min')))
        {
            let n = num.split(' ')
            num = parseFloat(n[0])*60 + parseFloat(n[1])
        }
        else if (num.includes('h'))
            num = parseFloat(num)*60
        else if (num.includes('min'))
            num = parseFloat(num)
        a.duration = num
        return a
    })
    return mp_mv
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average


function bestYearAvg(mv){
    if (!(mv.length === 0))
    {
        bst_y= mv.reduce((b_y, a) => {
        if (!(b_y.includes(a.year))) b_y.push(a.year)
        return b_y
        },[]);
        best_year = {}
        bst_y.forEach(
        function(element) {
            best_year[element] =
            mv.reduce((b_y, a) => {
            if (a.year === element)
            {
                b_y.push(a.rate)
            }
            return b_y
            }
            ,[]);
        })
        bst_y.forEach(
            function(element) {
                best_year[element] = 
                best_year[element].reduce
                ((sm, a) => {
                    sm[0] += Number(a)
                    sm[1] ++
                    return sm
                },[0,0]);
                best_year[element][0] =
                best_year[element][0]/
                best_year[element][1]
            })
        let mx=0
        let max_best_year = []
        bst_y.forEach(
            function(element) {    
                if(best_year[element][0]>mx)
                    {
                        mx=best_year[element][0]
                        max_best_year=[Number(element),mx]
                    }
                else if (best_year[element][0]===mx)
                    if (Number(element) < max_best_year[0])
                    max_best_year=[Number(element),mx]
                return max_best_year
            })
            return s=
                'The best year was ' + max_best_year[0]
                + ' with an average rate of ' + max_best_year[1]
    }
    else return null
}