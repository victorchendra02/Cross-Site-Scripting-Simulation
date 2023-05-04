const form = document.getElementById("login-form");
form.addEventListener("submit", handleFormSubmit);

const rememberCheckbox = document.getElementById("remember");
rememberCheckbox.addEventListener("change", handleRememberChange);

function handleFormSubmit(event) {
    event.preventDefault();

    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;
    const remember = rememberCheckbox.checked;

    if (remember) {
        setCookie("username", username, 30);
        setCookie("password", password, 30);
    } else {
        deleteCookie("username");
        deleteCookie("password");
    }

    // Send username and password to server for validation
    // and redirect user to dashboard if successful

    console.log(`Username: ${username}\nPassword: ${password}\nRemember: ${remember}`);
}

function handleRememberChange(event) {
    const checked = event.target.checked;
    const username = getCookie("username");
    const password = getCookie("password");

    if (checked && username && password) {
        document.getElementById("username").value = username;
        document.getElementById("password").value = password;
    }
}

function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
    const cookieName = name + "=";
    const cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        while (cookie.charAt(0) == " ") {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(cookieName) == 0) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }

    return "";
}

function deleteCookie(name) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/;";
}
