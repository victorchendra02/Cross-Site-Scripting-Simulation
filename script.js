const form = document.getElementById("login-form");
form.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
    event.preventDefault();

    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;

    // Send username and password to server for validation
    // and redirect user to dashboard if successful

    console.log(`Username: ${username}\nPassword: ${password}`);
}
