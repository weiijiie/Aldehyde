document.getElementById('submit').onclick = onSubmitClick;

function onSubmitClick() {
    const form = document.inputForm;

    let username = form.username.value;
    let email = form.email.value;
    let age = form.age.value;

    console.log(`Username: ${username}`);
    console.log(`Email: ${email}`);
    console.log(`Age: ${age}\n`);

    if (!isUsernameValid(username)) {
        console.log('invalid username');
    }

    if (!isEmailValid(email)) {
        console.log('invalid email');
    }

    if (!isAgeValid(age)) {
        console.log('invalid age');
    }
}

function isUsernameValid(username) {
    return /^[a-z0-9]+$/i.test(username);
}

function isEmailValid(email) {
    return /^.+@.+$/i.test(email);
}

function isAgeValid(age) {
    return age !== "" && age <= 150 && age >= 0;
}