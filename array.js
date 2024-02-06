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

delete arr3[3]   //delete the element at index 3 but don't decrease the size of array
console.log(arr3)

let convert=(a,b)=>{
    return a-b
} //function to sort in ascending order

let convert2=(a,b)=>{
    return b-a
} //function to sort in descending order
let num=[3,5,345,54,34,4,77,454]
num.sort(convert)   //sort array in ascending order
console.log(num)
num.sort(convert2)   //sort array in descending order
console.log(num)

let deletedValue=num.splice(2,3,101,102,103)   //modify the array and return array of deleted elements
console.log(deletedValue)
console.log(num)

let num2=num.slice(3)   //return array from index 3 to end
console.log(num2)
let num3=num.slice(4,6)  //return array from index 4 to 6 where index 6 is not included
console.log(num3)