var num;
var count=0;

function primeNumber(){
    num=parseInt(document.getElementById("prime").value);
    for(var i=1; i<=num;i++)

    {
        if(num%i==0)
        {
            count=count+1;
        }
    }
    
    if(count==2)
    {
     
        console.log( "given number is primeNumber");
        document.getElementById('result').value="prime number";

    }
    if(count!=2){
        console.log('  given num is not a primenumber');
        document.getElementById('result').value=" Not a prime number";

    }

    return false;

}