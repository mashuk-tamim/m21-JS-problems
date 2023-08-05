function wordReverse(str)
{
    word=str.split(' ');
    console.log(word);

    // let reverse='';
    // for(i=word.length-1; i>=0; i--)
    // {
    //     let element=word[i];
    //     reverse=reverse + ' ' + element;
    // }
    // return reverse;

    reverse=[];
    for(i=word.length-1; i>=0; i--)
    {
        const element=word[i];
        reverse.push(element);
        // console.log(reverse);
    }
    const reversedWord=reverse.join(' ');
    return reversedWord;
}

let myString='I am Mashuk Tamim';
let reversedWord=wordReverse(myString);

console.log(reversedWord);

