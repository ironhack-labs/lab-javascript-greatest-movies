let arr=[20,20,20]

function myfunc(array){
    let newArr=[];
    newArr = array;
    
    for (let i = 0; i < newArr.length; i++) {
        newArr[i] = 7;
        
    }

    return newArr;
}

console.log(myfunc(arr));
console.log(arr);