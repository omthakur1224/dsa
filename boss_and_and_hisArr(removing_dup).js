// Boss and his Array Ended
// Description

// Your boss has an array of size n.

// He gives the array to you and asks you to remove all duplicates from it but only allows you to perform a particular operation:

// Choose two indices i,j (i≠j) and remove the elements at the indices. This operation reduces the size of the array by 2.
// Now he also likes large arrays, so he asked you to perform the operations in such a way that the size of the remaining array is maximum.

// Output the maximum size of the array you can obtain.


// Input
// Input Format
// The first line contains the number of test cases t.

// Next 2*t lines contain the description of the t testcases.

// The first line of eah testcase contains an integer n - the size of the array.

// The second line contains n space-separated integers a1,a2...an denoting the n elements of the array.

// Constraints
// 1 <=t<= 10^3

// 1 <=n<= 10^3

// 1 <=ai<= 10^4


// Output
// Output Format
// For each test case, output a single integer — the length of the final array.

// Remember that in the final array, all elements are different, and its length is maximum.


// Sample Input 1 

// 4
// 6
// 2 2 2 3 3 3
// 5
// 9 1 9 9 1
// 4
// 15 16 16 15
// 4
// 10 100 1000 10000
// Sample Output 1

// 2
// 1
// 2
// 4
// Hint

// First Testcase
// You can perform operations as follows:

// Choose indices 1 and 5 to remove. The array becomes [2,2,2,3,3,3]→[2,2,3,3].

// Choose indices 1 and 4 to remove. The array becomes [2,2,3,3]→[2,3]

// The final array has a length of 2, so the answer is 2.

// It can be proven that you cannot obtain an array with a longer length.

// Second Testcase
// You can perform operations as follows:

// Choose indices 3 and 4 to remove. The array becomes [9,1,9,9,1]→[9,1,1].

// Choose indices 1 and 3 to remove. The array becomes [9,1,1]→[1].

// The final array has a length of 1, so the answer is 1.

// It can be proven that you cannot obtain an array with a longer length.

let fs=require("fs");
let data=fs.readFileSync(0,'utf-8').split("\n");
let tc=data[0];
let line=1;
for(let i=0;i<tc;i++){
    let n=data[line++];
    let arr=data[line++].trim().split(" ").map(Number);
    boss(arr,n)
}
// approach 1
function boss(arr,n){
 let rm_dup= [...new Set(arr)];
 console.log(rm_dup);
//  let ans=rm_dup.length;
 if((n-ans)%2)ans--
 console.log(ans)
}
// approach 2
function boss(arr,n){
    
  let obj={};
  
  for(let elem of arr)
    obj[elem]?obj[elem]++:obj[elem]=1;
    
  let count=0;
  
  for(let key in obj)
    count+=obj[key]-1;
    
    
  if(count%2)
      console.log(n-count-1);//why count-1 becuase it's given in que that arr has to be divided by2
  else
      console.log(n-count)
 
}