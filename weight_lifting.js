function check(n,arr){
    let left=0;let right=n-1;
    let sum1=0;let sum2=0;
    let hsum=0;let jsum=0;

while(left<=right)
{ 
    hsum=0;
while(hsum<=jsum&&left<=right)
{
    hsum+=arr[left];
    left++;
}
sum1+=hsum;
jsum=0;
while(jsum<=hsum&&left<=right)
{
    jsum+=arr[right];
    right--;
}
sum2+=jsum;

}
console.log(sum1+" "+sum2);
    

}
 const fs=require('fs');
 let input=fs.readFileSync(0,'utf-8')
    let x=input.trim().split("\n");
    let loop=+(x[0]);
    let k=0;
    for(i=1;i<=loop;i++)
    {k++;
    let size=+(x[k]);
    k++;
    let arr=x[k].trim().split(" ").map(Number);
    check(size,arr);
    }