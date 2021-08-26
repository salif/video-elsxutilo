chrome.browserAction.onClicked.addListener((tab) => {
  chrome.tabs.executeScript(
    { code: "navigator.clipboard.writeText(location.host.concat(location.pathname.replace(new RegExp('/', 'g'), ' '))).catch(alert); document.querySelector('video').src" }, 
    (r) => {
      if (r.length > 0) {
        if(null != r[0] && r[0].length > 0) {
          chrome.tabs.create({ url: r[0] });
        }
      }
    });
});
