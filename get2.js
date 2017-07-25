function findsum()
{
   var args  = arguments.length;
    var i,sum=0;
    for(i=1 ;i<args ;i++)
        {
            sum+= arguments[i];
        }
    return sum;
     
}
console.log("This is sum of ( 1,2,3 =)" +findsum(1,2,3)); 
console.log("this is sum of (1,2,3,4,5,6,7,8,9,10 =)"+findsum(1,2,3,4,5,6,7,8,9,10)); 