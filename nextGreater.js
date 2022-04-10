
// Given an array of N elements, find the next greater element
// for each element in the array, print -1 if it does not exits
// Refer to the sample I/O for better understanding

// Test case Explanation:-
// arr=[1,3,2,4]
// In the sample test case, the array contains 4 elements,
// and for the first element, the next greater element will be 3,
// similarly for the next element, the next greater element will be 4,
// and for the third element as well, the next greater element will be 4.
// Since, the last element has no elements ahead of it, 
// the next greater element will be -1.

function nextGreater(arr,n){
    let stack=[];
    let ans=[];
    for(let i=n-1;i>=0;i--){
     while(stack.length!==0 && stack[stack.length-1]<=arr[i]){
         stack.pop();
     }
     if(stack.length===0){
         ans[i]=-1;
        //  ans.push(-1);
     }
     else{
         ans[i]=stack[stack.length-1];
        //  ans.push(stack[stack.length-1])
     }
        stack.push(arr[i]);
    }
    // console.log(ans.length)
    return ans
}

let arr=[1,3,2,4];
let n=arr.length;
console.log(nextGreater(arr,n))