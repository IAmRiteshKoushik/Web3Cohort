// Encoding into a C-like string
let str = "hello";
const binaryRep = new TextEncoder().encode(str);

// Gives you a Uint8Array which allocates 1 byte for an ascii character
// It converts everthing to ascii
console.log(binaryRep);

// Here, the number is casted into a string and then each digit's 
// is considered a character and stored in the Uint8Array
let num = 1000;
const binaryRep2 = new TextEncoder().encode(num);
console.log(binaryRep2);

// If you directly try to convert to a Uint8Array, then the 
// constructor ends up taking the remainder by performing a % 255 operation 
const arr = new Uint8Array([255]);
console.log(arr);


// -- This is basically the hex-encoder
// You have effectively converted a string to byte array and then take the 
// hexa-decimal of each and add that to a string which is returned
function arrayToHex(byteArray){
    let hexString = '';
    for(let i = 0; i < byteArray.length; i++){
        hexString += byteArray[i].toString(16).padStart(2, '0');
    }
    return hexString;
}

// Example usage -> corresponding characters for "hello"
const byteArray = new Uint8Array([72, 101, 108, 108, 111]);
const hexString = arrayToHex(byteArray);
console.log(hexString);
