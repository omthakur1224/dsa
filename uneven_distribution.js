let fs=require('fs');
let input=fs.readFileSync(0,'utf-8').split("\n");
let tc=+input[0];
let line=1;

for(let i=0;i<tc;i++){
   let [chocos,friends]=input[line++].trim().split(" ").map(Number);
    chaos(chocos,friends)
}

function chaos(n,k){
    if(n>=k*(k+1)/2){
        console.log("YES")
    }else
    console.log("NO")
}