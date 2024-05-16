chrome.action.onClicked.addListener(function () {
  chrome.windows.create({
    url: "index.html",
    type: "popup",
    width: 1500,
    height: 1300
  });
});
