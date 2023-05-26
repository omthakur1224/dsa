// 2D Array and Sum or 2D phrase 
// Description

// You are given an arraymatrixofnrows andmcolumns which contains positive integers and sums.

// You need to find occurrences of the sum of three consecutive numbers (i.e x,y, and z ) whose sum is equal to s appear horizontally, vertically and diagonally in the given matrix.

// Image


// Input
// Input Format

// First line: Three integers n, m and s, where n denotes the number of rows, m denotes the number of columns in the matrix and s is the sum.

// Next n lines: Each line contains m characters which contain positive integers only.

// Constraints

// 1 <= n,m < 10

// 1 <= s <= 50


// Output
// Print the number of times the sum s appear in the matrix.


// Sample Input 1 

// 3 3 6
// 3 2 1
// 2 2 2
// 1 5 1
// Sample Output 1

// 4
// Hint

// Sample 1 Explanation

// here s is 6 presents 4 times( 2 Horizontal + 1 Vertical + 1 Diagonal)


function twoArrayAndSum(n, m, matrix, s){
    //write code here
    let count=0;
  for(let i=0;i<n;i++){
      
      for(let j=0;j<m;j++){
          // checking for rows
          if(i<n-2){
              if(s==matrix[i][j]+matrix[i+1][j]+matrix[i+2][j]){
                  count++;
              }
          }
          //checking for cols
          if(j<m-2){
              if(s==matrix[i][j]+matrix[i][j+1]+matrix[i][j+2]){
                  count++;
              }
          }
          //left diagnol
          if(i<n-2 && j<m-2 &&  s==matrix[i][j]+matrix[i+1][j+1]+matrix[i+2][j+2]){
              count++;
          }
          //right diagnol
         if(i<n-2 && j>=2 && s== matrix[i][j]+matrix[i+1][j-1]+matrix[i+2][j-2]){
              count++;
         }
     }
    }
    console.log(count)
}