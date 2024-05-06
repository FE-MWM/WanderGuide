/**@type {Chrome} */
let chrome;

chrome.action.onClicked.addListener(function () {
  chrome.windows.create({
    url: "index.html",
    type: "popup",
    width: 1280,
    height: 900
  });
});
