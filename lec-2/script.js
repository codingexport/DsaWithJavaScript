const data = [1, 2, 4, 5, 5, 6, 7]
document.getElementById("arrayDisplay").innerText = data.join(" , ")

function GetElement() {
    let x = document.getElementById("element").value;
    x = parseInt(x);
    if (!isNaN(x) && x >= 0 && x < data.length) {
        document.getElementById('output').innerHTML = `Array index ${x} contains value: ${data[x]}`;

    } else {
        document.getElementById('output').innerHTML = "Please enter a valid index within the range of the array";
    }
}



// for (let i = 0; i < data.length; i++) {
//     const element = data[i];
//     document.write(`Array ${i} , is ${data[i]} <br>`);
// }
// let x = 4
// document.write(`<h1>The value of ${x} is ${data[x]}</h1>`);