const prompt= require("prompt-sync")();

function average(array)
{
    let sum=0, avg;
    for(let i=0; i<array.length; i++)
    {
        sum=sum+array[i];
    }
    avg=sum/array.length;
    console.log('sum ',sum);
    return avg;
}
let n;
n=prompt('Enter the size of the array:');

let array=[];
for(let i=0; i<n; i++)
{
    let inputValue = prompt('Enter array element:');
    array[i] = Number(inputValue);
}
console.log(array);
array2=[10,12,14];
console.log(array2);
let arrayAverage=average(array);
console.log("The average is: ", arrayAverage);