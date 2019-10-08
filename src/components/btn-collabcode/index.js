const btnCollabcode = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .btn-collabcode {
        height: 48px;
        width: 100%;
        border-radius: 24px;
        color: #fff;
        font-size: 14px;
        text-transform: uppercase;
        background-color: #f25a70;
        cursor: pointer;
      }
      .input-collabcode + .btn-collabcode {
        margin-top: 45px;
      }
    `;
    $head.insertAdjacentElement("beforeend", $style);
  };

  module.handleClick = (event, path) => {
    event.preventDefault();
    window.location.hash = `#/${path}`;
  };

  module.render = ({ content = "", path = "" }) => {
    module._style();

    return `<input 
              class="btn-collabcode" 
              type="submit" 
              onclick="btnCollabcode.handleClick(event, '${path}')"
              value="${content}">`;
  };

  return {
    render: module.render,
    handleClick: module.handleClick
  };
})();
