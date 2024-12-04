function mergeArrays() {
    const array1 = document.getElementById("array1").value.split(",").map(item => item.trim());
    const array2 = document.getElementById("array2").value.split(",").map(item => item.trim());
    const mergedArray = [...array1, ...array2];
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<strong>Merged Array:</strong> ${mergedArray.join(", ")}`;

}
