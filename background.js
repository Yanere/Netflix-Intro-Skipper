chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.executeScript(tab.id, {
    file: "inject.js",
  });
  alert("Yanere Netflix skipper active");
});
