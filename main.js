function validatePassword() {
    var userRole;

    const codeInput = document.getElementById("code");
    const codeMessage = document.getElementById("codeMessage");
    
    const code = codeInput.value;

    if (code == "president01") {
        userRole = "president";
        window.location.href = "homepage.html";
    } else if (code == "committee01") {
        userRole = "committee"
        window.location.href = "homepage.html"
    } else {
        codeMessage.textContent = "Wrong Code";
    }
}