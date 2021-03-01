var signupName = document.getElementById('signupName');
var signupEmail = document.getElementById('signupEmail');
var signupPassword = document.getElementById('signupPassword');
var signinEmail = document.getElementById('signinEmail');
var signinPassword = document.getElementById('signinPassword');


var signUpArray ;

var username = localStorage.getItem('sessionUsername')
if (username ) {
    document.getElementById('username').innerHTML = "Welcome " + username
}


if (localStorage.getItem('users') == null) {
    signUpArray = [];
} else {
    signUpArray = JSON.parse(localStorage.getItem('users'));
}

//// check if you have any aacount before
function hasAccount() {

    if (localStorage.getItem('users') == null) {

    return false;
    } 

}



////signup process

function signUp() {
    
    if (isEmpty() == false) {
        document.getElementById('exist').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
        return false
    }
    var signUp = {
        name: signupName.value,
        email: signupEmail.value,
        password: signupPassword.value,
    }
    if (signUpArray.length == 0) {
        signUpArray.push(signUp)
        localStorage.setItem('users', JSON.stringify(signUpArray))
        document.getElementById('exist').innerHTML = '<span class="text-success m-3">Success</span>'
        return true
    }
    if (isEmailExist() == false) {
        document.getElementById('exist').innerHTML = '<span class="text-danger m-3">email already exists</span>'

    } else {
        signUpArray.push(signUp)
        localStorage.setItem('users', JSON.stringify(signUpArray))
        document.getElementById('exist').innerHTML = '<span class="text-success m-3">Success</span>'

    }


}


// check if the email field is exsisted or not

function isEmailExist() {
    for (var i = 0; i < signUpArray.length; i++) {
        if (signUpArray[i].email.toLowerCase() == signupEmail.value.toLowerCase()) {
            return false
        }
    }
}

//check if the input in signup form is filled or not

function isEmpty() {

    if (signupName.value == "" || signupEmail.value == "" || signupPassword.value == "") {
        return false
    } else {
        return true
    }
}


///////////login process




function login() {
    if ( hasAccount()==false ) {
        document.getElementById('incorrect').innerHTML = `<span class="text-danger m-3">you don't have any account please sign up to have account </span>`;
       return false;
    }
    if (isLoginEmpty() == false) {
        document.getElementById('incorrect').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
        return false
    }
    var password = signinPassword.value
    var email = signinEmail.value
    for (var i = 0; i < signUpArray.length; i++) {
        if (signUpArray[i].email.toLowerCase() == email.toLowerCase() && signUpArray[i].password.toLowerCase() == password.toLowerCase()) {
            localStorage.setItem('sessionUsername', signUpArray[i].name);
          
            location.href="files/home.html";
        } 
        else {
            document.getElementById('incorrect').innerHTML = '<span class="p-2 text-danger">incorrect email or password</span>'
        }
    }

}
//check if the input in login form is filled or not


function isLoginEmpty() {

    if (signinPassword.value == "" || signinEmail.value == "") {
        return false;
    } else {
        return true;
    }
}

//logout

function logout() {
    localStorage.removeItem('sessionUsername')
}
// console.log(document.links[0].href);




// function check() {
//     let v = document.getElementById("myCheck")
//    v.checked = true;
//   }
  
//   function uncheck() {
//     document.getElementById("myCheck").checked = false;
//   }

// document.getElementById("bg").onclick = function(){

//     document.getElementById("b").checked = true;


// }
