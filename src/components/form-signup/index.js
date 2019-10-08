const formSignup = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .form-signup {
        padding: 0 35px 40px;
      }
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module._children = () => {
    const $emailLabel = labelCollabcode.render("E-mail");
    const $emailInput = inputCollbacode.render({
      placeholder: "example@gmail.com",
      type: "email"
    });

    const $usernameLabel = labelCollabcode.render("Username");
    const $usernameInput = inputCollbacode.render({ placeholder: "Username" });

    const $passwordLabel = labelCollabcode.render("Password");
    const $passwordInput = inputCollbacode.render({
      placeholder: "******",
      type: "password"
    });

    const $confirmPasswordLabel = labelCollabcode.render("Confirm password");
    const $confirmPasswordInput = inputCollbacode.render({
      placeholder: "******",
      type: "password"
    });

    const $btn = btnCollabcode.render({ content: "Signup", path: "login" });

    return `
      ${$usernameLabel}
      ${$usernameInput}

      ${$emailLabel}
      ${$emailInput}

      ${$passwordLabel}
      ${$passwordInput}

      ${$confirmPasswordLabel}
      ${$confirmPasswordInput}

      ${$btn}
    `;
  };

  module.render = () => {
    module._style();
    return `<form class="form-signup" action="" method="POST">${module._children()}</form>`;
  };
  return {
    render: module.render
  };
})();
