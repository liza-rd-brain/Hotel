import "./registration.scss";
debugger;

let signInList = document.querySelectorAll(".registration");
console.log(signInList);

for (let i = 0; i < signInList.length; i++) {
  $(signInList[i])
    .find(".signIn__button")
    .on("click", function(e) {
      toggleHidden(i);
    });
  $(signInList[i])
    .find(".signUp__button")
    .on("click", function(e) {
      toggleHidden(i);
    });
}

function toggleHidden(i) {
  console.log("test");
  debugger;
  $(signInList[i])
    .find(".registration__signIn")
    .toggleClass("hidden");
  $(signInList[i])
    .find(".registration__signUp")
    .toggleClass("hidden");
}

/* let signUpList = document.querySelectorAll(".registration__signUp");
console.log(signUpList);

for (let i = 0; i < signUpList.length; i++) {
  $(signUpList[i])
    .find(".toggle-acces__button")
    .on("click", function(e) {
      debugger;
      $(signUpList[i]).toggleClass("hidden");
    });
} */

/*   $("toggle-acces__button").on("click", function(e) {
    $(".registration__signUp_hidden")
      .addClass("registration__signUp")
      .removeClass("registration__signUp_hidden");
    $(".registration__signIn").toggleClass("registration__signIn_hidden");
  });
 */
/* let toggleAccesSignUp = $(".registration__signUp").find(
    ".toggle-acces__button"
  );

  toggleAccesSignUp.on("click", function(e) {
    $(".registration__signIn_hidden")
      .addClass("registration__signIn")
      .removeClass("registration__signIn_hidden");
    $(".registration__signUp").toggleClass("registration__signUp_hidden");
  });

  let toggleAccesSignIn = $(".registration__signIn").find(
    ".toggle-acces__button"
  );

  toggleAccesSignIn.on("click", function(e) {
    $(".registration__signUp_hidden")
      .addClass("registration__signUp")
      .removeClass("registration__signUp_hidden");
    $(".registration__signIn").toggleClass("registration__signIn_hidden");
  }); */
