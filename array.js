let arr=[1,45,34,false,"Hello"]
console.log(arr)   //print all element of arr
console.log(arr[4]) //element at indx 4
console.log(arr.length)  //display size of array

let str1=arr.toString()   //return array as string 
console.log(str1+" and the type is "+typeof str1)

let str2=arr.join("-")   //return array as string join with -
console.log(str2+" and the type is "+typeof str2)

arr.pop()   //delete the last element
console.log(arr)

arr.push("Bye")   //insert the last element
console.log(arr)

arr.shift()   //delete first element 
console.log(arr)

arr.unshift("Hii")   //insert element at starting
console.log(arr)

let arr2=[2,7,90]
let arr3=arr.concat(arr2)   //concatenate two arrays
console.log(arr3)
