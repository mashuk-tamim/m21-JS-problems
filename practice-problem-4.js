const prompt=require("prompt-sync")();

function rectangleArea(length, height)
{
    let area=length*height;
    return area;
}

let length,height;
length=prompt("Enter the length of the rectangle: ");
height=prompt("Enter the height of the rectangle: ");

let area= rectangleArea(length, height);
console.log(area);