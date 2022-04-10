//factorial function
function fact(num){
    if(num==0||num==1)return 1;
    return num*fact(num-1);
}

//fibbonacii series
function fib(num){
    if(num==0 || num==1) return num;
    return fib(num-1)+fib(num-2);
}

let num=7;
console.log(fact(num));
console.log("fibbonacii of given number is", fib(num))

//