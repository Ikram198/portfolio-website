// const text = document.querySelector("#text-content").innerHTML.split('');
// // const text = text1.innerHTML.slice(-30).split('');

// async function displayCharacter(index, text) {
//     // return new Promise((resolve) => {
//         let string = "";
//         setTimeout(() => {
//             string += text[index];
//             document.querySelector("#text-content").innerHTML=string+"/";
//             console.log(string)
//             // resolve(string); // Resolve the promise after the character is added
//         }, 1000);
//     // })
//     // .then((string)=>{
//         // text.innerHTML=string;});
// }

// async function displayText() {
//     // console.log(text)
//     for (let x = 0; x < text.length; x++) {
//         await displayCharacter(x, text);
//         console.log(text)
//          // Wait for each character to be displayed
//     }
// }

// // Start the display process
// displayText();


const text = document.querySelector("#text-content").innerHTML.split('');
let string = "";
function displayCharacter(index, text) {
    return new Promise(function(resolve){
    setTimeout(() => {
        string += text[index];
        document.querySelector("#text-content").innerHTML = string + "|";
        // console.log(string);
        resolve();
    }, 300);
    });}

async function displayText() {
    for (let x = 0; x < text.length; x++) {
        await displayCharacter(x, text);
        // console.log(text);
    }
}

displayText();