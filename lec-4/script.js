let data = [40, 20, 30, 50];
const container = document.getElementById("data-container");

// Function to render data on the page
function renderData() {
    container.innerHTML = "";
    data.forEach((value, index) => {
        const span = document.createElement("span");
        span.textContent = value;
        span.dataset.index = index;
        container.appendChild(span);
    });
}

// Function to delete a value stylishly
function deleteValue() {
    if (data.length > 0) {
        const indexToDelete = 0; // Change logic here for custom deletion
        const element = container.querySelector(`span[data-index="${indexToDelete}"]`);

        // Add animation class and remove the value
        element.classList.add("crash");
        setTimeout(() => {
            data.splice(indexToDelete, 1);
            renderData();
        }, 500); // Matches animation duration
    } else {
        alert("No more values to delete!");
    }
}

// Function to insert a new value
function insertValue() {
    const newValue = prompt("Enter a new value:");
    if (newValue !== null && newValue.trim() !== "") {
        data.push(newValue.trim());
        renderData();
    } else {
        alert("Invalid value! Please try again.");
    }
}

// Initial render
renderData();