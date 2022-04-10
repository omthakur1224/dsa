

//product of array element except current element
// Given a array of N 32 bit integers. You need to find product of array for each i without considering ith element. where 0 <= i <= n-1 . See sample test case for better understanding.

// You are not allowed to use division operator. It is given that product will fit in 32 bit integer.

//  For test case 1 [1,2,3,4,5]

// i = 0 ==> 2*3*4*5 = 120

// i = 1 ==> 1*3*4*5 = 60

// i = 3 ==> 1*2*4*5 = 40

// i = 4 ==> 1*2*3*5 = 30

// i = 5 ==> 1*2*3*4 = 24

function product(arr,n){
    let ans=[];
    let stack=[];
    let prod=1;
    
    for(let i=0;i<n;i++){
        prod*=arr[i];
    }
    
    for(let i=0;i<n;i++){
        ans.push(prod/arr[i])
    }
  return ans;
}
// let arr=[1,3,2,5,4];
let arr=[1,2,3,4,5]
let n=arr.length;
console.log(product(arr,n).join(" "));