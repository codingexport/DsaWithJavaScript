let data = [40, 20, 30, 50, 80, 90, 70, 10, 20];

function insertElement() {
    const new1 = parseInt(document.getElementById('newElement').value);
    const position = parseInt(document.getElementById('position').value);

    if (isNaN(new1) || isNaN(position) || position < 0 || position > data.length) {
        document.getElementById('output').innerHTML = "Invalid input. Please enter valid numbers.";
        return;
    }

    for (let i = data.length - 1; i >= 0; i--) {
        if (i >= position) {
            data[i + 1] = data[i];
            if (i === position) {
                data[i] = new1;
            }
        }
    }

    document.getElementById('output').innerHTML = `Updated Array: [${data.join(', ')}]`;
}

document.write(`<p>The Array is [${data}]</p>`);