var submitBtn = document.getElementById("submit");

submitBtn.onclick = function() {
    var allPassed = true;

    var name = document.getElementById("name").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirm = document.getElementById("confirm").value;
    var email = document.getElementById("email").value;
    var dob = document.getElementById("dob").value;

    var nameError = document.getElementById("nameError");

    if (name == "") {
        nameError.textContent = "Quý vị chưa nhập họ tên";
        allPassed = false;
    } else {
        nameError.textContent = "";
    }

    var usernameError = document.getElementById("usernameError");

    if (username == "") {
        usernameError.textContent = "Quý vị chưa nhập tên sử dụng";
        allPassed = false;
    } else {
        usernameError.textContent = "";
    }

    var passwordError = document.getElementById("passwordError");

    if (password == "") {
        passwordError.textContent = "Quý vị chưa nhập mật khẩu";
        allPassed = false;
    } else if (password != confirm) {
        passwordError.textContent = "Mật khẩu và gõ lại mật khẩu không trùng nhau";
        allPassed = false;
    } else {
        passwordError.textContent = "";
    }

    var emailError = document.getElementById("emailError");

    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email == "") {
        emailError.textContent = "Quý vị chưa nhập email";
        allPassed = false;
    }
    else if (!re.test(email)) {
        emailError.textContent = "Email không đúng định dạng";
        allPassed = false;
    } else {
        emailError.textContent = "";
    }

    var dobError = document.getElementById("dobError");

    // Check dob in format dd/mm/yyyy
    if (dob == "") {
        dobError.textContent = "Quý vị chưa nhập ngày sinh";
        allPassed = false;
    } else if (!/^\d{2}\/\d{2}\/\d{4}$/.test(dob)) {
        dobError.textContent = "Ngày sinh không đúng định dạng";
        allPassed = false;
    } else {
        dobError.textContent = "";
    }

    if (allPassed) {
        alert("Quý vị đã đăng nhập thành công");
    }
}

var portraitInput = document.getElementById("portrait");
portraitInput.onchange = function() {
    var img = document.getElementById("preview");
    img.src = URL.createObjectURL(this.files[0]);
}