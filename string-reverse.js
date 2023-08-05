function stringReverse(text)
{
    let reverse='';
    for(let i=text.length-1; i>=0; i--)
    {
        let element=text[i];
        reverse=reverse+element;
        // console.log(reverse);
    }
    return reverse;
}

let myString='I am Mashuk Tamim';
let reversedString=stringReverse(myString);
console.log(reversedString);