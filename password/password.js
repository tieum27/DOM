//user id and password verify

 function same(id, pwd) {
   return !(id === pwd)
 }

 function lengthId(id) {
   return id.length >= 6
 }

function lengthPwd(pwd) {
  return pwd.length >= 6
}

function idContain(id) {
  return !id.includes("!") && !id.includes("#") && !id.includes("$")
}

function passwordContain(pwd) {
  return pwd.includes("!") || pwd.includes("#") || pwd.includes("$")
}

function pwdNotPwd(pwd) {
  return pwd !== "password"
}

function inputCheck(id) {
  return same(id) && lengthId(id) && idContain(id)
}

function passwordCheck(pwd) {
  return same(pwd) && lengthPwd(pwd) && passwordContain(pwd) && pwdNotPwd(pwd)
}

function run(){
  var user = document.getElementById("inputUserName").value
  var password = document.getElementById("inputPassword").value

  if(inputCheck(user) && passwordCheck(password)) {
    alert("You entered a correct user ID and password!")
  } else if((!inputCheck(user) && !passwordCheck(password))) {
    alert("BOTH of those suck. Quit while you're ahead!")
  } else if(!inputCheck(user)) {
    alert("Bad user ID! Try again.")
  } else if(!passwordCheck(password)) {
    alert("Bad password! Try again.")
  }
}


// ("What is your name?\nMinimum 6 chars")
// ("Enter your password: \nMust contain '!' or '#' or '$'\nNot be 'password'")
