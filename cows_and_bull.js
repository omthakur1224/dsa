function cowAndBull(n,secret,guess){
    
    let bull=0,cow=0;
    let secObj={};
   let gueObj={};
  for(let i=0;i<secret.length;i++)
  {
     if(secret[i]==guess[i])
     {
       bull++;
     }else{
       if(secObj[secret[i]]===undefined)
       { 
         secObj[secret[i]]=1;
       }else{
           secObj[secret[i]]++;
       }
       if(gueObj[guess[i]]===undefined){
            gueObj[guess[i]]=1;
         }else{
            gueObj[guess[i]]++;
         }
     }
  }

 for(let k in gueObj )
 {
    if(secObj[k]!==undefined)
    {
      cow+=Math.min(secObj[k],gueObj[k]);
    }
 }

let hint=bull+'A'+cow+'B';
console.log(hint);


}


function runProgram(input) {
 input=input.trim().split('\n');
 let tc=+input[0];
 let line=1;
 for(let i=0;i<tc;i++)
 {
     let n=+input[line];
     line++;
     let secret=input[line];
     line++;
     let guess=input[line];
     line++;
     cowAndBull(n,secret,guess);
 }
}



if (process.env.USERNAME === "") {
   runProgram(``);
} else {
   process.stdin.resume();
   process.stdin.setEncoding("ascii");
   let read = "";
   process.stdin.on("data", function (input) {
       read += input;
   });
   process.stdin.on("end", function () {
       read = read.replace(/\n$/, "");
       read = read.replace(/\n$/, "");
       runProgram(read);
   });
   process.on("SIGINT", function () {
       read = read.replace(/\n$/, "");
       runProgram(read);
       process.exit(0);
   });
}