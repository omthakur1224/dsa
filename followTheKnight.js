

//creating 10*10
let chessBoard=Array(11).fill(-1).map(()=>Array(11).fill(-1));

console.log(followTheKnigth(chessBoard,4,10,1))


//filling the chess board with 1 and moving the knigth
function followTheKnigth(chessBoard,i,j,n){
    if( i<1 || j<1 || i>10 ||  j>10){
        return;
    }
    if(n===0){
        chessBoard[i][j]=1;
        return;
    }
    followTheKnigth(chessBoard,i+2,j+1,n-1); //moving 2 steps right and 1 step down
    followTheKnigth(chessBoard,i+2,j-1,n-1);//moving 2 steps right and 1 step up
    followTheKnigth(chessBoard,i-2,j+1,n-1);// moving 2 steps left and 1 step down
    followTheKnigth(chessBoard,i-2,j-1,n-1);// moving 2 steps left and 1 step up
    followTheKnigth(chessBoard,i+1,j-2,n-1);// moving 2 steps up and 1 step right
    followTheKnigth(chessBoard,i-1,j-2,n-1);// moving 2 steps up and 1 step left
    followTheKnigth(chessBoard,i+1,j+2,n-1);// moving 2 steps down and 1 step right
    followTheKnigth(chessBoard,i-1,j+2,n-1);// moving 2 steps down and 1 step left

    return (noOfMoves(chessBoard));
}

function noOfMoves(arr){
    let count=0;
    let n=arr[0].length;
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            if (arr[i][j]==1){
               count++;   
            }
        
        }
    }
    return count;
}