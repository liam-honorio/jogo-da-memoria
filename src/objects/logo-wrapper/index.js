const logoWrapper = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .avatar-wrapper {
        text-align: center;
        transform: translate(-50%,-25%);
        margin-left: 50%;
        display: inline-block;
      }
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module.render = (...$children) => {
    module._style();

    return `<div class="avatar-wrapper">${$children.join("")}</div>`;
  };

  return {
    render: module.render
  };
})();
