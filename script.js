// DOM elements
const addBtn = document.getElementById("addBtn");
const itemInput = document.getElementById("itemInput");
const shoppingList = document.getElementById("shoppingList");

// Add button event listener
addBtn.addEventListener("click", addItem);

// Add item function
function addItem() {
    const itemText = itemInput.value.trim();

    if (itemText === "") {
        alert("Please enter an item!");
        return;
    }

    // 1. Create a new <li>
    const li = document.createElement("li");
    li.textContent = itemText;

    // 2. Create remove button
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.className = "remove-btn";

    // 3. Append the button to <li>
    li.appendChild(removeBtn);

    // 4. Add the <li> to the list
    shoppingList.appendChild(li);

    // 5. Clear input
    itemInput.value = "";

    // Remove item when clicking remove button
    removeBtn.addEventListener("click", () => {
        li.remove();
    });
}
