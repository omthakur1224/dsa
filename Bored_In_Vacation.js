function solve(str1,str2 ,n1,n2 ,k){
    
    str1.sort()
    str2.sort()
    let i=0 ,j =0 ;
    let ans = [] ;
    let count1 =0 ;
    let count2 =0 ;
    // aaaaaa
    // bbbb
    while(i<n1 && j<n2){
        if(str1[i] < str2[j]){
            if(count1 < k){
                ans.push(str1[i])
                i++ ;
                count1++;
                count2=0
            }else{
                ans.push(str2[j])
                j++ ;
                count2++
                count1=0;
            }
        }else{
           if(count2 < k){
                ans.push(str2[j])
                j++ ;
                count2++;
                count1=0
            }else{
                ans.push(str1[i])
                i++ ;
                count1++
                count2=0;
            }
        }
    }
    console.log(ans.join(""))
            
}

