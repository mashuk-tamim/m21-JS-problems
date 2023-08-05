const prompt = require("prompt-sync")();
let n;
n = prompt("Enter the size of the array:");
let array=[n];
for(let i=0; i<n; i++)
{
    array[i]=prompt();
}
console.log(array);

let min=array[0];
for(i=1; i<array.length; i++)
{
    if(array[i]<min)
        min=array[i];
}
console.log(min)