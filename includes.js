const myAddress= 'Gopalganj, Dhaka, Bangladesh';
// const myAddressLower= myAddress.toLowerCase();
// console.log(myAddressLower);

const searchString= 'DhaKa';
// const searchStringLower=searchString.toLowerCase();

// const doesExist= myAddressLower.includes(searchStringLower);

//all together at once
const doesExist=myAddress.toLowerCase().includes(searchString.toLowerCase());
// console.log(doesExist);

// if(myAddress.indexOf('Dhaka') !==-1)
//     console.log('Word Found');
// else
//     console.log('Not Found');

// const myAddress= 'Gopalganj, Dhaka, Bangladesh';
//console.log(myAddress.startsWith('Gopal'));
//console.log(myAddress.endsWith('bangladesh'));

//console.log(myAddress.split(',')); //this will separate letters when ',' is found
//console.log(myAddress.split('')); //this will separate letters when empty string is found. Actually, it will separate every character in the string and make an array

const address=[ 'Gopalganj', ' Dhaka', ' Bangladesh' ];
console.log(address.join(', '));