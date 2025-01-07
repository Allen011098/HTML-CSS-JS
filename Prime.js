var i=2;
while(i<=100)
{
    var k=0;
    for( let j=1 ; j<=i ; j++)
    {
        if(i%j==0)
        {
            k++;
        }
    }
    if(k==2)
    {
        console.log(i);
    }
    i++;
}