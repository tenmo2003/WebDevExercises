var tabscontainer = document.getElementById("container");
var tabs = document.getElementsByTagName("span");
var frame = document.getElementById("contentFrame");
var selectedRow = null;

function selected(data) {
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("active");
    }

    data.classList.add("active");

    switch (data.innerText) {
        case "VnExpress":
            frame.src = "https://vnexpress.net";
            break;
        case "Dantri":
            frame.src = "https://dantri.com.vn";
            break;
        case "VOANews":
            frame.src = "https://voanews.com";
            break;
        case "Zing":
            frame.src = "https://zing.vn";
            break;
    }
}

// Attach the click event to the table rows
for (var i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", function () {
        selected(this);
    });
}