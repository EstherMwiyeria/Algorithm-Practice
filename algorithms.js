// Given an array of integers,sort the array
function mergeSort(arr){
    if (arr.length <=1){
    return arr  
    }
    const mid = Math.floor(arr.length/2)
    const left = arr.slice(0,mid)
    const right = arr.slice(mid)
    return merge(mergeSort(left),mergeSort(right))

}
function merge(left,right){
    const emptyArr = []
    while(left.length && right.length){
        if(left[0]<right[0]){
        emptyArr.push(left.shift())
    }
    else{
        emptyArr.push(right.shift())
    }
}
return[...emptyArr, ...left, ...right]
}
const arr = [9,21,-3,5,-7]
console.log(mergeSort(arr))

//Given a sorted array  find the index of "target" element in the array
function binarySearch(array, target){
    let left = 0
    let right = array.length -1

    while(left <= right){
        let middle = Math.floor((left + right)/2)
    
    if(target === array[middle]){
        return middle
    }
    if(target < array[middle]){
       
        left = middle + 1
    }
    else{
        right = middle - 1
    }
    
}
return -1
}

console.log(binarySearch([-6,-2,4,8,20],4))

//binary search
function binary(num,target){
    let left = 0
    let right = num.length-1
while(left<=right){
    let middle = Math.floor((left+right/2))

if(num[middle]=== target){
    return middle
}
else if(num[middle]< target){
    left = middle + 1
}
else {
    right = middle - 1
}
}
return null
}

let num = [2, 3, 8, 10, 15, 26, 47, 56];
let target = 47;
console.log(binary(num, target));

//write a javascript program to perform a binary search 
//var items = [1,2,3,4,5,6,7,8,9];
//target = 0,4
function binary(items,t){
    let left = 0
    let right = items.length-1
while(left<=right){
    let middle = Math.floor((left+right)/2)

   if(num[middle]=== t){
    return middle
}
else if(num[middle]< t){
    left = middle + 1
}
else {
    right = middle - 1
}
}
return null
}

var items = [1,2,3,4,5,6,7,8,9]
let t = 0

console.log(binary(items, t));


//Given an array of integers,sort the array in descending order
function mergSort(arrInt){
    if (arrInt.length <=1){
    return arrInt  
    }
    const mid = Math.floor(arrInt.length/2)
    const left = arrInt.slice(0,mid)
    const right = arrInt.slice(mid)
    return merge(mergSort(left),mergSort(right))

}
function merge(left,right){
    const emptyArr = []
    while(left.length && right.length){
        if(left[0]<right[0]){
        emptyArr.push(left.shift())
    }
    else{
        emptyArr.push(right.shift())
    }
}
return[...emptyArr, ...left, ...right]
}
const arrInt = [8,20,2,4,6]
console.log(mergSort(arrInt))

