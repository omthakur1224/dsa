function  Subarray(n,m,array){
    let count=0;
    let sum=0;
    let i=0;
    let j=0;
   
       while(i<n){
           if(sum+array[i]<m){        
             sum+=array[i];
              count+=i-j+1;
              i++;
       }else{
           sum-=array[j];
             j++;
       }   
   }
         console.log(count);
}

function runProgram(input){
   input=input.trim().split("\n")
   let tc=+input[0]
   let line=1
   for(let i=0; i<tc; i++){
       let [n,m] = input[line++].trim().split(" ").map(Number)
       let array = input[line++].trim().split(" ").map(Number)
       //   console.log(n,m,array)
         Subarray(n,m,array)
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