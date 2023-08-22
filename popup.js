document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("copyButton").addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const tab = tabs[0];
      const title = tab.title;
      const url = tab.url;
      const content = `${title}, ${url}`;

      // Copy content to clipboard
      navigator.clipboard.writeText(content).then(function () {
        console.log("Copied to clipboard:", content);
      });
    });
  });
});
