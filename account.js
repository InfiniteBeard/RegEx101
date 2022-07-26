window.onload = init;
let password = "";

const emailField = "email";
const passwordField = "password";
const passwordRepeatField = "passwordRepeat";
const usernameField = "username";

/***
 * Handles the create account button press.
 */
function createAccount() {
    handleEmail();
    handlePassword();
    handlePasswordRepeat();
    handleUsername();
}

/***
 * Displays an error message on a specified input field
 * @param inputField the field that will display the error
 * @param message the errror message that will display
 */
function displayError(inputField, message){
    document.getElementById(inputField + "Help").innerText = message;
    document.getElementById(inputField).classList.add("is-invalid");
}

/***
 * Retrieves the current value of the email field and validates the value.
 */
function handleEmail(){
    let email= document.getElementById(emailField).value;
    validateEmail(email);
}

/***
 * Retrieves the current value of the password repeat field and validates the value.
 */
function handlePasswordRepeat(){
    let passwordRepeat= document.getElementById("passwordRepeat").value;
    validatePasswordRepeat(passwordRepeat);
}

/***
 * Retrieves the current value of the password field and validates the value.
 */
function handlePassword() {
    let password= document.getElementById("password").value;
    validatePassword(password);
}

/***
 * Retrieves the current value of the username field and validates the value.
 */
function handleUsername(){
    let username= document.getElementById("username").value;
    validateUsername(username);
}

/***
 * Adds function hooks the the controls on the page. 
 */
function init(){
    document.getElementById("create-account").onclick = createAccount;
    document.getElementById("username").onchange = handleUsername;
    document.getElementById("email").onchange = handleEmail;
    document.getElementById("password").onchange = handlePassword;
    document.getElementById("passwordRepeat").onchange = handlePasswordRepeat;
}

/***
 * Checks to see if the specified value is a valid email.
 * @param email the specified value that will be checked.
 * @returns true if the specified value is a valid email, false otherwise.
 */
function isEmailValid(email){
    let regexp = new RegExp(".*");
    return regexp.test(email);
}

/***
 * Checks to see if the specified value is a valid password.
 * @param password the specifeid value that will be checked.
 * @returns true if the specified value is a valid password, false otherwise.
 */
function isPasswordComplex(password){
    let regexp = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*#?&])(?=.{8,})");
    return regexp.test(password);
}

/***
 * Checks to see if the specified value is alphanumeric.
 * @param username the specified value that will be checked.
 * @returns true if the specified is a alphanumeric, false otherwise.
 */
function isUsernameAlphaNumeric(username){
    let regexp = new RegExp("^[a-zA-Z0-9]*$");
    return regexp.test(username);
}

/***
 * Removes an error message from the specified field.
 * @param the specified field that the error will be removed from.
 */
function removeError(inputField){
    document.getElementById(inputField + "Help").innerText = "";
    document.getElementById(inputField).classList.remove("is-invalid");
    
}

/***
 * Verifies that the specified value is a valid email by using a series of checks.
 * If the value is not a valid email a relevant error message will be displayed on
 * the email field.
 * @param email the specified value.
 */
function validateEmail(email){
    if(!email){
        displayError(emailField, "The email cannot be blank.");
    } else if (!isEmailValid(email)){
        displayError(emailField, "The email is not valid.");
    } else {
        removeError(emailField);
    }
}


/***
 * Verifies that the specified value is a valid password through a series of checks.
 * If the specified value is not a valid password a relevant error message will be
 * displayed on the password field.
 * @param password the specified value
 */
function validatePassword(password){
    if(!password){
        displayError(passwordField, "Password cannot be blank.");
    }
    else if(!isPasswordComplex(password))
    {
        displayError(passwordField, "The password is not complex enough. Passwords must have:" 
        + "\n A length of at least 8 characters"
        + "\n At least one uppercase character" 
        + "\n At least one lowercase character"
        + "\n At least one number"
        + "\n At least one special character (@$!%*#?&)");
    } else {
        removeError(passwordField);
    }
}


/***
 * Verifies that the specified value is a valid repeated password through a series of checks.
 * If the specified value is not a valid repeated password a relevant error message will be
 * displayed on the repeated password field.
 * @param password the specified value
 */
function validatePasswordRepeat(passwordRepeat){
    if(!passwordRepeat){
        displayError(passwordRepeatField, "Password cannot be blank");
    }
    else if(passwordRepeat != password){
        displayError(passwordRepeatField, "Does not match password");
    } else {
        removeError(passwordRepeatField);
    }
    
}

/***
 * Verifies that the specified value is a valid user name. If the value is not valid 
 * than a relevant error message will be displayed on the username field.
 * @param username the specified value
 */
function validateUsername(username){
    let minLength = 4;
    let maxLength = 16;
    if(!username){
        displayError(usernameField, "The username cannot be blank.");
    } else if(username.length < minLength || username.length > maxLength){
        displayError(usernameField, `The username must be between ${minLength} and ${maxLength} characters.`);
    } else if(!isUsernameAlphaNumeric(username)){
        displayError(usernameField, "The username must be made of only alphanumeric characters.")
    }  else {
        removeError(usernameField);
    }
}

console.log("------VALID EMAILS------")
console.log("patricia@gmail.com is " +  isEmailValid("patricia@gmail.com"));
console.log("alex1@notspam2.io is " + isEmailValid("alex1@notspam2.io"));
console.log("joshua.foster.10@us.af.mil is " + isEmailValid("joshua.foster.10@us.af.mil"));
console.log("eric_o@tinker.interns is " + isEmailValid("eric_o@tinker.interns"));
console.log("1234567890@example.com is " + isEmailValid("1234567890@example.com"));
console.log("------INVALID EMAILS------")
console.log("lexie@powerlifters@io is " + isEmailValid("lexie@powerlifters@io"));
console.log("friday@veggiedog... is " + isEmailValid("friday@veggiedog..."));
console.log("t maxwell@ou.edu is " + isEmailValid("t maxwell@ou.edu"));