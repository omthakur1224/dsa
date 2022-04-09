
function smallestNeighbour(arr,n){
    let stack=[];
    let ans=[];

    for(let i=0;i<n;i++){
        //checking stack length and comparing top of stack with arr[i] if stack is not empty
        
    while(stack.length!==0 && stack[stack.length-1]>=arr[i]){
        //poping stack if stack element is greater or equal to arr[i] (current element of arr)
        stack.pop();
    }
    //checking stack again after poping if it is empty then we are pushing -1 to it
    if(stack.length===0){
        ans.push(-1);
       }
    else{
    //if stack is not empty then here we have to add the top of stack into ans array 
        ans.push(stack[stack.length-1]);
        
    }
    //after all this we have to push our current arr element into the stack;
    stack.push(arr[i]);
}
return ans;
}
// let arr=[2,4,34,53,23,10,1];
let arr=[39, 27, 11, 4, 24, 32, 32, 1]
let n=arr.length;
console.log(smallestNeighbour(arr,n))