var table = document.getElementById("menu");

var tableData = table.getElementsByTagName("td");

var selected = null;

function selected(data) {
    for (var i = 0; i < tableData.length; i++) {
        tableData[i].className = "normal";
    }

    data.className = "active";
}