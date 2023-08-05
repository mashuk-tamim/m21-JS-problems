const prompt = require("prompt-sync")();

let a, b, c;
a=prompt();
b=prompt();
c=prompt();
console.log(a,b,c);

if(a<b)
{
    if(a<c)
        console.log('Smallest number: ',a);
    else
        console.log('Smallest number: ',c);
}
else
{
    if(b<c)
        console.log('Smallest number: ',b);
    else
        console.log('Smallest number: ',c);
}