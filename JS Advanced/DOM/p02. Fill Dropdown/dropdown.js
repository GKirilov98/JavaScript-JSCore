function addItem() {
    let text = document.getElementById("newItemText").value;
    let val = document.getElementById("newItemValue").value;
    let select = document.getElementById("menu");
    let option = document.createElement("option");
    option.value = val;
    option.textContent = text;
    document.getElementById("newItemText").value = "";
    document.getElementById("newItemValue").value = "";
    select.appendChild(option);
}
