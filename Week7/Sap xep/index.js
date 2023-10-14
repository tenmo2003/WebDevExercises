// var productCodeCell = document.querySelector("#productCode");
// var productNameCell = document.querySelector("#productName");

// var tableRows = document.querySelector("#table tbody").children;

// column1Asc = false;
// column2Asc = false;

// productCodeCell.onclick = () => {
//     column1Asc = !column1Asc;
//     sortTableToColumn(1, column1Asc);
// }
// productNameCell.onclick = () => {
//     column2Asc = !column2Asc;
//     sortTableToColumn(2, column2Asc);
// }

if (document.querySelector("table.sortable") != null) {
	var tableRows = document.querySelectorAll("table.sortable tbody tr");

	var tableHeaders = document.querySelectorAll("table.sortable thead th");

	for (let i = 0; i < tableHeaders.length; i++) {
		if (tableHeaders[i].classList.contains("sortcol")) {
			tableHeaders[i].onclick = () => {
				let asc = false;
				if (
					tableRows[0].children[i].innerText >
					tableRows[1].children[i].innerText
				) {
					asc = true;
				}
				sortTableToColumn(i, asc);
				if (asc) {
					tableHeaders[i].classList.add("asc");
					tableHeaders[i].classList.remove("desc");
				} else {
					tableHeaders[i].classList.remove("asc");
					tableHeaders[i].classList.add("desc");
				}
				for (let j = 0; j < tableHeaders.length; j++) {
					if (i !== j) {
						tableHeaders[j].classList.remove("asc");
						tableHeaders[j].classList.remove("desc");
					}
				}
			};
		}
	}
}

function sortTableToColumn(columnIndex, asc) {
	for (let i = 0; i < tableRows.length - 1; i++) {
		for (let j = i + 1; j < tableRows.length; j++) {
			if (asc) {
				if (
					tableRows[i].children[columnIndex].innerText >
					tableRows[j].children[columnIndex].innerText
				) {
					for (let k = 0; k < tableRows[i].children.length; k++) {
						let temp = tableRows[i].children[k].innerText;
						tableRows[i].children[k].innerText =
							tableRows[j].children[k].innerText;
						tableRows[j].children[k].innerText = temp;
					}
				}
			} else {
				if (
					tableRows[i].children[columnIndex].innerText <
					tableRows[j].children[columnIndex].innerText
				) {
					for (let k = 0; k < tableRows[i].children.length; k++) {
						let temp = tableRows[i].children[k].innerText;
						tableRows[i].children[k].innerText =
							tableRows[j].children[k].innerText;
						tableRows[j].children[k].innerText = temp;
					}
				}
			}
		}
	}
}
