let arr=[2,3,4,56,56,23,3,345]

//Array map method
//return a new array
// let arr1=arr.map((value,key,ar)=>{
//     console.log(value,key,ar)
//     return value
// })

let arr1 = arr.map((item) => {
    return item*10
}).map((num)=> num+1)
.filter((num)=>(num<50))
// console.log(arr1)

//Array filter method
//return new filter array
let lessthenTen=(a)=>{
    return a<10
} //method to return num less than 10
let arr2=arr.filter(lessthenTen)  //return array which contain num return by lessthanTen method
// console.log(arr2)

//Array reduce method
let arr3=arr.reduce((x,y)=>{
    return x+y
})
// console.log(arr3)


const myCart = [
    {
        product:"shirt",
        price:500
    },
    {
        product:"t-shirt",
        price:700
    },
    {
        product:"jeans",
        price:1500
    },
    {
        product:"shoe",
        price:800
    }

]


const totalPrice = myCart.reduce((acc, item)=>(acc+item.price),0)
console.log(totalPrice);


