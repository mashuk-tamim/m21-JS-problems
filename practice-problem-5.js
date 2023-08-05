const prompt=require("prompt-sync")();

function secondLargest(array)
{
    let max1=array[0];
    let max2=array[0];
    for(let i=1; i<array.length; i++)
    {
        if(array[i]>max1)
        {
            max2=max1;
            max1=array[i];
        }
        else
        {
            max2=array[i];
        }
    }
    return max2;
}

let n;
n=prompt('Enter the size of the array: ');

let array=[n];
for(i=0; i<n; i++)
{
    inputValue= prompt();
    array[i]=Number(inputValue);
}
console.log(array);

let secondLargestValue=secondLargest(array);
console.log('Second largest value is: ', secondLargestValue);