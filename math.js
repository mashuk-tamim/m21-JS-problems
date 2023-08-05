// const random= Math.random()*6;
// console.log(random);
// console.log(Math.round(random));
// console.log(Math.ceil(random));
// console.log(Math.floor(random));

// console.log(Math.ceil(Math.random()*6));

let count=0;
for(let i=0; i<20; i++)
{
    let ludo=Math.ceil(Math.random()*6); //this will give random number between 0 and 6
    console.log(ludo);
    if(ludo===6)
        count++;
}
console.log('the number of six is: ', count);