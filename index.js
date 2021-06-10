function secondLargest(arr){
    arr = [...new Set(arr)];
    arr = arr.sort(function(a,b){return a-b});
    return arr[arr.length-2];
}

console.log(secondLargest([4,5,9,1,2,4,0,3,5,7,1]))


function secondLargest_2(arr){
    let obj={};
    for(let a of arr){
        obj[a]= parseInt(a);
    }
    arr = Object.values(obj);
    let first = Number.MIN_VALUE;
    let second  = Number.MIN_VALUE;
    for(let i =0; i< arr.length; i++){
        if(arr[i] > first){
            second = first;
            first = arr[i];
        }else if(arr[i] > second && arr[i] !=first){
            second = arr[i];
        }
    }
    return second;
}

console.log(secondLargest_2([4,5,9,1,2,4,0,3,5,7,1]))
