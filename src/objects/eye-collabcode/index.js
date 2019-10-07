const eyeCollabcode = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .eye-collabcode {
        display: block;
        text-indent: -9999px;
        background-image: url(/img/eye.png);
        background-repeat: no-repeat;
        background-position: center;
        width: 24px;
        height: 15px;
        opacity: 0.5;
        cursor: pointer;
        transition: opacity 200ms linear;
        margin-left: auto;
        transform: translateY(-200%);
        margin-right: 4px;
      }
      .eye-collabcode.-active {
        opacity: 1;
      }
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module.handleClick = function() {
    const attrFor = this.getAttribute("for");
    const $input = document.querySelector(`#${attrFor}`);

    if ($input.getAttribute("type") === "password") {
      this.classList.remove("-active");
      $input.setAttribute("type", "text");
    } else {
      this.classList.add("-active");
      $input.setAttribute("type", "password");
    }
  };

  module.render = ({ attrFor = "" }) => {
    module._style();
    return `<label
      for="${attrFor}";
      onClick="eyeCollabcode.handleClick.bind(this)()";
      class="eye-collabcode">Mostrar senha</label>`;
  };

  return {
    render: module.render,
    handleClick: module.handleClick
  };
})();
