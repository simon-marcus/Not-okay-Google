chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
  const googleApps = [{
      "appUrl": "https://calendar.google.com",
      "image": "img/calendar.svg"
    },
    {
      "appUrl": "https://drive.google.com",
      "image": "img/drive.svg"
    },
    {
      "appUrl": "https://maps.google.com",
      "image": "img/maps.svg"
    },
    {
      "appUrl": "google.com/maps",
      "image": "img/maps.svg"
    },
    {
      "appUrl": "https://mail.google.com",
      "image": "img/mail.svg"
    },
    {
      "appUrl": "meet.google.com",
      "image": "img/meet.svg"
    },
  ]
  if (changeInfo.status === 'complete') {
    chrome.tabs.query({
      active: true,
      lastFocusedWindow: true
    }, tabs => {
      var tabUrl = tabs[0].url;
      googleApps.forEach(app => {        
        if (tabUrl.includes(app.appUrl)) {
          console.log(chrome.runtime.getURL(app.image));
          chrome.tabs.executeScript(tabId, {
            code: `document.querySelector(\'link[rel*="icon"]\').href = "${chrome.runtime.getURL(app.image)}"`
          });
        }
      });
    });
  }
})