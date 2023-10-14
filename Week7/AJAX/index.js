var btn = document.querySelector("button");

btn.onclick = function () {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "abc.htm", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      document.querySelector("div").innerHTML = xhr.responseText;
    } else if (xhr.readyState === 4) {
      console.error("Error:", xhr.status);
    }
  };
  xhr.send();
};
