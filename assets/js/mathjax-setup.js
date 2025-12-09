window.MathJax = {
  tex: {
    tags: "ams",
    inlineMath: [
      ["$", "$"],
      ["\\(", "\\)"],
    ],
    processEscapes: true,
  },
  options: {
    skipHtmlTags: ["script", "noscript", "style", "textarea", "pre", "code", "svg"],
    ignoreHtmlClass: "no-math",
    processHtmlClass: "math",
  },
  startup: {
    ready: function() {
      MathJax.startup.defaultReady();
      MathJax.startup.promise.then(function() {
        // Skip processing elements with no-math class
        document.querySelectorAll('.no-math').forEach(function(el) {
          el.setAttribute('data-mjx-disabled', 'true');
        });
      });
    }
  },
  renderActions: {
    addCss: [
      200,
      function (doc) {
        const style = document.createElement("style");
        style.innerHTML = `
        .mjx-container {
          color: inherit;
        }
      `;
        document.head.appendChild(style);
      },
      "",
    ],
  },
};
