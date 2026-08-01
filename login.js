
// alert("login js connected");
// function login(){

//     let username =
//     document.getElementById("username").value;


//     let password =
//     document.getElementById("password").value;


//     if(username === "manager" && password === "1234"){

//         alert("Login Successful");

//         window.location.href="index.html";

//     }

//     else{

//         alert("Wrong Username or Password");

//     }

// }

// localStorage.setItem("isLogin", "true");
// window.location.href = "index.html";


// function login(){

//     let username = document.getElementById("username").value;
//     let password = document.getElementById("password").value;


//     if(username === "manager" && password === "1234"){

//         localStorage.setItem("isLogin","true");

//         alert("Login Successful");

//         window.location.href = "index.html";

//     }
//     else{

//         alert("Wrong Username or Password");

//     }

// }


// function login(){

//     let username = document.getElementById("username").value;

//     let password = document.getElementById("password").value;


//     if(username == "manager" && password == "1234"){

//         alert("Login Success");


//         window.location.href = "index.html";

//     }

//     else{

//         alert("Wrong Username or Password");

//     }

// }

 

// if(username == "manager" && password == "1234"){

//     localStorage.setItem("isLogin","true");

//     alert("Login Success");

//     window.location.href = "index.html";

// }


// step-3

function login(){

    let username = document.getElementById("username").value;

    let password = document.getElementById("password").value;


    if(username == "manager" && password == "1234"){

        localStorage.setItem("isLogin","true");

        alert("Login Success");

        window.location.href = "index.html";

    }

    else{

        alert("Wrong Username or Password");

    }

}