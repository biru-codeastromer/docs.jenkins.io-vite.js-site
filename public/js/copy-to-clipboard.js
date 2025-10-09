(function () {
  "use strict";

  // --- Delegated listener for elements that use data-copy attribute (vanilla) ---
  document.addEventListener("click", async (e) => {
    const btn = e.target.closest("[data-copy]");
    if (!btn) return;
    try {
      await navigator.clipboard.writeText(btn.getAttribute("data-copy"));
      btn.setAttribute("data-tooltip", "Copied!");
      setTimeout(() => btn.removeAttribute("data-tooltip"), 1200);
    } catch {}
  });

  // --- jQuery code that augments code blocks with a copy button and language label ---
  $(function () {
    var CMD_RX = /^\$ (\S[^\\\n]*(\\\n(?!\$ )[^\\\n]*)*)(?=\n|$)/gm;
    var LINE_CONTINUATION_RX = /( ) *\\\n *|\\\n( ?) */g;
    var TRAILING_SPACE_RX = / +$/gm;

    var config = (document.getElementById("site-script") || { dataset: {} }).dataset;
    var uiRootPath = config.uiRootPath == null ? "." : config.uiRootPath;
    var svgAs = config.svgAs;
    var supportsCopy = !!window.navigator.clipboard;

    [].slice
      .call(document.querySelectorAll(".ctc pre.highlight, .ctc .literalblock pre"))
      .forEach(function (pre) {
        var code, language, lang, copy, toast, toolbox;
        if (pre.classList.contains("highlight")) {
          code = pre.querySelector("code");
          if ((language = code.dataset.lang) && language !== "console") {
            (lang = document.createElement("span")).className = "source-lang";
            lang.appendChild(document.createTextNode(language));
          }
        } else if (pre.innerText.startsWith("$ ")) {
          var block = pre.parentNode.parentNode;
          block.classList.remove("literalblock");
          block.classList.add("listingblock");
          pre.classList.add("highlightjs", "highlight");
          (code = document.createElement("code")).className = "language-console hljs";
          code.dataset.lang = "console";
          code.appendChild(pre.firstChild);
          pre.appendChild(code);
        } else {
          return;
        }

        (toolbox = document.createElement("div")).className = "source-toolbox";
        if (lang) toolbox.appendChild(lang);

        if (supportsCopy) {
          (copy = document.createElement("button")).className = "copy-button";
          copy.setAttribute("title", "Copy to clipboard");

          if (svgAs === "svg") {
            var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            svg.setAttribute("class", "copy-icon");
            var use = document.createElementNS("http://www.w3.org/2000/svg", "use");
            use.setAttribute("href", uiRootPath + "/img/octicons-16.svg#icon-clippy");
            svg.appendChild(use);
            copy.appendChild(svg);
          } else {
            copy.innerHTML = '<ion-icon size="large" name="copy-outline" class="copy-icon"></ion-icon>';
          }

          (toast = document.createElement("span")).className = "copy-toast";
          toast.appendChild(document.createTextNode("Copied!"));
          copy.appendChild(toast);
          toolbox.appendChild(copy);
        }

        pre.parentNode.appendChild(toolbox);

        if (copy) copy.addEventListener("click", writeToClipboard.bind(copy, code));
      });

    function extractCommands(text) {
      var cmds = [];
      var m;
      while ((m = CMD_RX.exec(text))) cmds.push(m[1].replace(LINE_CONTINUATION_RX, "$1$2"));
      return cmds.join(" && ");
    }

    function writeToClipboard(code) {
      var text = code.innerText.replace(TRAILING_SPACE_RX, "");
      if (code.dataset.lang === "console" && text.startsWith("$ ")) text = extractCommands(text);
      window.navigator.clipboard.writeText(text).then(
        function () {
          this.classList.add("clicked");
          // force reflow for animation restart
          this.offsetHeight; // eslint-disable-line no-unused-expressions
          this.classList.remove("clicked");
        }.bind(this),
        function () {}
      );
    }
  });
})();
