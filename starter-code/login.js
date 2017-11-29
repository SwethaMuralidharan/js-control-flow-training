console.log("login.js loaded");
var userLogin={username:"octocat_rules",password:"yellowpencil"};
var userLoggedIn=true;
var userpassword;

for(var i=0;i<3;i++)
{
  userpassword=window.prompt("Enter Password for user "+userLogin.username);
  if(userpassword!=userLogin.password)
  {
    console.log("Password doesn't match");
    alert("Incorrect Password. Try Again!");
  }
  else {
    console.log("Passwords match");
    break;
  }
}
