let email = document.getElementById("iemail").value;

if (email === "") {
    document.getElementById("iemail").style.border = "1px solid red";
    document.getElementById("iemail").focus();
    return false;
}