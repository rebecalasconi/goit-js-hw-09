!function(){"use strict";var e,t=document.querySelector("button[data-start]"),o=document.querySelector("button[data-stop]");o.addEventListener("click",(function(){t.disabled=!1,clearInterval(e),console.log("The timer has been stopped!"),o.disabled=!0})),t.addEventListener("click",(function(){e=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0)),console.log("New backgorund-color every 1 sec!")}),1e3),t.disabled=!0,o.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.716f189e.js.map
