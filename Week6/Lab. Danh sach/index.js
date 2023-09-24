var tableBody = document.getElementsByTagName("tbody")[0];

var tableRows = tableBody.getElementsByTagName("tr");

var singleCheckboxes = document.getElementsByName("check");

var allCheckbox = document.getElementById("checkAll");

var deleteBtn = document.getElementById("remove");

for (let i = 0; i < tableRows.length; i++) {
    let tableCells = tableRows[i].getElementsByTagName("td");
    if ((i + 1) % 2 == 0) {
        for (let j = 0; j < tableCells.length; j++) {
            tableCells[j].classList.add("odd");
        }
    } else {
        for (let j = 0; j < tableCells.length; j++) {
            tableCells[j].classList.add("even");
        }
    }

    tableRows[i].onmouseover = function() {
        for (let j = 0; j < tableCells.length; j++) {
            tableCells[j].classList.add("hovered");
        }
        this.style.cursor = "pointer";
    }

    tableRows[i].onmouseout = function() {
        for (let j = 0; j < tableCells.length; j++) {
            tableCells[j].classList.remove("hovered");
        }
    }

    for (let j = 1; j < tableCells.length; j++) {
        tableCells[j].onclick = function() {
            tableCells[0].children[0].click();
        }
    }
}




for (let i = 0; i < singleCheckboxes.length; i++) {
    singleCheckboxes[i].onchange = function () {
        let tableCells = this.parentNode.parentNode.getElementsByTagName("td");

        for (let j = 0; j < tableCells.length; j++) {
            if (this.checked) {
                tableCells[j].classList.add("selected");
                deleteBtn.classList.remove("hidden");
                let allChecked = true;
                for (let k = 0; k < singleCheckboxes.length; k++) {
                    if (!singleCheckboxes[k].checked) {
                        allChecked = false;
                    }
                }
                if (allChecked) {
                    allCheckbox.checked = true;
                }
            } else {
                tableCells[j].classList.remove("selected");
                allCheckbox.checked = false;
                let allUnchecked = true;
                for (let k = 0; k < singleCheckboxes.length; k++) {
                    if (singleCheckboxes[k].checked) {
                        allUnchecked = false;
                    }
                }
                if (allUnchecked) {
                    deleteBtn.classList.add("hidden");
                }
            }
        }
    };
}


allCheckbox.onchange = function () {
    if (allCheckbox.checked) {
        for (let i = 0; i < singleCheckboxes.length; i++) {
            if (!singleCheckboxes[i].checked) {
                singleCheckboxes[i].click();
            }
        }
    } else {
        for (let i = 0; i < singleCheckboxes.length; i++) {
            if (singleCheckboxes[i].checked) {
                singleCheckboxes[i].click();
            }
        }
    }
}

deleteBtn.onclick = function() {
    for (let i = tableRows.length - 1; i >= 0; i--) {
        if (singleCheckboxes[i].checked) {
            tableBody.removeChild(tableRows[i]);
        }
    }

    for (let i = 0; i < tableRows.length; i++) {
        if ((i + 1) % 2 == 0) {
            for (let j = 0; j < tableRows[i].getElementsByTagName("td").length; j++) {
                tableRows[i].getElementsByTagName("td")[j].classList.remove("even");
                tableRows[i].getElementsByTagName("td")[j].classList.add("odd");

            }
        } else {
            for (let j = 0; j < tableRows[i].getElementsByTagName("td").length; j++) {
                tableRows[i].getElementsByTagName("td")[j].classList.remove("odd");
                tableRows[i].getElementsByTagName("td")[j].classList.add("even");
            }
        }
    }
}