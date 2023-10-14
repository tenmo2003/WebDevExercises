var tableBody = document.querySelector("table tbody");

var btnLoad = document.getElementById("btnLoad");

btnLoad.onclick = function () {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "data.json", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var data = JSON.parse(xhr.responseText);
      data.forEach(function (item) {
        var row = document.createElement("tr");

        var name = document.createElement("td");
        name.textContent = item.name;
        row.appendChild(name);

        var age = document.createElement("td");
        age.textContent = item.age;
        row.appendChild(age);

        var cars = document.createElement("td");
        var carsText =
          item.cars.length +
          "<br>" +
          item.cars
            .map(function (car) {
              return car.name + " - " + car.models.join(",");
            })
            .join("<br>");
        cars.innerHTML = carsText;
        row.appendChild(cars);

        tableBody.appendChild(row);
      });
    } else if (xhr.readyState === 4) {
      console.error("Error:", xhr.status);
    }
  };
  xhr.send();
};
