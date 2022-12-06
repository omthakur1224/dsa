
function zero(N,M,mat){
    for(let i=0;i<N;i++){
        for(let j=0;j<M;j++){
            let c=0;
            if(j>0 && mat[i][j-1]%2!==0){
                c++
            }
            if(i>0 && mat[i-1][j]%2!==0){
                c++
            }
            if(j<M-1 && mat[i][j+1]%2!==0){
                c++
            }
            if(i<N-1 && mat[i+1][j]%2!==0){
                c++
            }
            if(c>=2){
                mat[i][j]=-mat[i][j]
            }
        }
       // 
    }
    for(let i=0;i<N;i++){
        let bag = ""
        for(let j=0;j<M;j++){
            bag = bag + mat[i][j]+" "
        }
        console.log(bag)
    }
    
}