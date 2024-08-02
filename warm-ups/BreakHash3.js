import crypto from "crypto";

// Function to find an input string that produces a hash start
function findHashWithPrefix(prefix){
    let input = 0;
    while (true) {
        let inputStr = `
harkirat => Raman | Rs 100
Ram => Ankit | Rs 10
` + input.toString();
        let hash = crypto.createHash("sha256").update(inputStr).digest("hex");
        if (hash.startsWith(prefix)){
            return { input: inputStr, hash };
        }
        input++;
    }
}

const result = findHashWithPrefix('00000');
console.log(`Input: ${result.input}`);
console.log(`Hash: ${result.hash}`);
