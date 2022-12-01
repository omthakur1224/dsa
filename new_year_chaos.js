let fs=require('fs');
let input=fs.readFileSync(0,'utf-8').split("\n");
let tc=+input[0];
let line=1;

for(let i=0;i<tc;i++){
    let n=+input[line++];
    let arr=input[line++].trim().split(" ").map(Number);
    chaos(n,arr)
}

function chaos(n,arr){
let sum=0;
for(let i=0;i<n;i++){
    let diff=0;
    if(arr[i]>i+1){
        diff=arr[i]-(i+1);
        if(diff>2){
            return console.log("Too chaotic")
        }else{
             sum+=diff;
        }
    }
 }
 return console.log(sum)
}