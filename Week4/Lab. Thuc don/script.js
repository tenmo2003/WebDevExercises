var table = document.getElementById("menu");
var tableData = table.getElementsByTagName("td");
var selectedRow = null;

function selected(data) {
    for (var i = 0; i < tableData.length; i++) {
        tableData[i].classList.remove("active");
    }

    data.classList.add("active");
    selectedRow = data.innerText;
    updateSelectedInfo();
}

function updateSelectedInfo() {
    var selectedInfo = document.getElementById("selected-info");
    selectedInfo.textContent = (selectedRow || "None");
}

// Attach the click event to the table rows
for (var i = 0; i < tableData.length; i++) {
    tableData[i].addEventListener("click", function () {
        selected(this);
    });
}