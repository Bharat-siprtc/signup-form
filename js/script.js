function togglePassword() {
    let passInput = document.getElementById("passInput")
    let icon = document.getElementById("toggle-btn")
    if (passInput.type === "password") {
        passInput.type = "text"
        icon.innerHTML = '<i class="bi bi-eye-slash-fill"></i>'
        console.log("changed to text done")

    }
    else {
        passInput.type = "password"
        icon.innerHTML = '<i class="bi bi-eye-fill"></i>'
        console.log("changed to password")
    }
}
function submitForm(event) {
    if (validateForm(event)) {
        event.preventDefault();
        let fname = document.getElementsByName("fname")[0].value
        let lname = document.getElementsByName("lname")[0].value
        let email = document.getElementsByName("email")[0].value
        let password = document.getElementsByName("password")[0].value
        let address = document.getElementsByName("address")[0].value
        console.log("firstname:" + fname)
        console.log("lastname:" + lname)
        console.log("address:" + address)
        console.log("email:" + email)
        console.log("password:" + password)
        document.getElementById("signup-form").reset();
        document.querySelector(".msg-success").style.display = "flex"
    }
}

function validateForm(event) {
    event.preventDefault();
    var fields = ["fname", "lname","address", "email", "password"];
    var i, l = fields.length;
    var fieldname;
    // remove error msg of past
    for (i = 0; i < l; i++) {
        fieldname = fields[i];
        document.getElementById(fieldname+"-err-msg").innerText=null;
    }
    for (i = 0; i < l; i++) {
        fieldname = fields[i];
        console.log(fieldname);
        var fieldElement = document.getElementsByName(fieldname)[0];
        console.log(fieldElement.value);
        
        if (fieldElement.value == null || fieldElement.value === "") {
            var errMsg="*"+fieldname+" is required";
            console.log("id we have to change is:"+fieldname+"-err-msg");
            document.getElementById(fieldname+"-err-msg").innerText=errMsg;
            return false;
        }
    }
    return true;
}

