/* SHOW/HIDE PASSWORD */

function togglePassword(){

    const password =
    document.getElementById("password");

    if(password.type === "password"){

        password.type = "text";
    }

    else{

        password.type = "password";
    }

}

/* EMAIL VALIDATION */

function isValidEmail(email){

    const pattern =

    /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    return pattern.test(email);

}

/* REGISTER */

function register(){

    const username =
    document.getElementById("username").value;

    const email =
    document.getElementById("email").value;

    const password =
    document.getElementById("password").value;

    const message =
    document.getElementById("message");

    /* EMPTY VALIDATION */

    if(
        username === "" ||
        email === "" ||
        password === ""
    ){

        message.innerHTML =
        "⚠ Please fill all fields";

        return;
    }

    /* EMAIL VALIDATION */

    if(!isValidEmail(email)){

        message.innerHTML =
        "❌ Invalid Email Format";

        return;
    }

    /* PASSWORD VALIDATION */

    if(password.length < 6){

        message.innerHTML =
        "⚠ Password must contain at least 6 characters";

        return;
    }

    /* USER DATA */

    const user = {

        username,
        email,
        password
    };

    /* SAVE USER */

    localStorage.setItem(
        "user",
        JSON.stringify(user)
    );

    message.innerHTML =
    "✅ Registration Successful";
}

/* LOGIN */

function login(){

    const email =
    document.getElementById("email").value;

    const password =
    document.getElementById("password").value;

    const message =
    document.getElementById("message");

    /* GET USER */

    const storedUser =
    JSON.parse(localStorage.getItem("user"));

    /* CHECK LOGIN */

    if(
        storedUser &&
        email === storedUser.email &&
        password === storedUser.password
    ){

        message.innerHTML =
        "✅ Login Successful";

        setTimeout(()=>{

            window.location.href =
            "dashboard.html";

        },1000);

    }

    else{

        message.innerHTML =
        "❌ Invalid Email or Password";
    }

}

/* FORGOT PASSWORD */

function forgotPassword(){

    const email =
    prompt("Enter your registered email");

    const storedUser =
    JSON.parse(localStorage.getItem("user"));

    if(
        storedUser &&
        email === storedUser.email
    ){

        alert(
        "Your password is: " +
        storedUser.password
        );

    }

    else{

        alert("Email not found");
    }

}