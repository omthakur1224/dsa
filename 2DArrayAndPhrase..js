// 5 5
// safer
// amjad
// babol
// aaron
// songs
function twoArrayAndPhrase(n, m, matrix){
 
    var count=0;
  for(var i=0;i<n;i++)
    {
     for(var j=0;j<m;j++)
        {
            if(j<m-3)
            {
                //for rows
                if(matrix[i][j]=='s' && matrix[i][j+1]=='a' && matrix[i][j+2]=='b' && matrix[i][j+3]=='a'){
                    count++;
                 }
            }
            if(i<n-3){
                //for cols
                if( matrix[i][j]=='s'&& matrix[i+1][j]=='a' && matrix[i+2][j]=='b' && matrix[i+3][j]=='a'){
                    count++;
                }
            }
            if(i<n-3 && j<m-3){
            
            // right diagonal
             if( matrix[i+3][j]=='s'&& matrix[i+2][j+1]=='a' && matrix[i+1][j+2]=='b' && matrix[i][j+3]=='a'){
                    count++;
                }
                // left diagonal
                if( matrix[i][j]=='s' && matrix[i+1][j+1]=='a' && matrix[i+2][j+2]=='b' && matrix[i+3][j+3]=='a'){
                    count++;
               }
           }
        }
    }
    console.log(count);
  }