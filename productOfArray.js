



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