/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

//para ordenar alfabeticamente hacer uso del metodo array.sort()

function orderByYear(array){
    const newArray = []

    array.sort((num1, num2) => num1 - num2);
    console.log(array)
    /*
    for (let i=0; i<array.length; i++){
        if(array[i].movies<newArray[i]){
            newArray.push(array[i])
        } else{

        }
    }
    */
    return newArray
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
