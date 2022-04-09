const noOfWays=(n)=>{
if(n==0){
    return 1;
}
if(n<0)return 0;
return noOfWays(n-1)+noOfWays(n-2)+noOfWays(n-3);
}
console.log(noOfWays(4));