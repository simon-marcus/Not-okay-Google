chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
  const googleApps = [{
      "appUrl": "https://calendar.google.com",
      "image": "https://raw.githubusercontent.com/simon-marcus/faviconfix/main/img/calendar.svg"
    },
    {
      "appUrl": "https://drive.google.com",
      "image": "https://raw.githubusercontent.com/simon-marcus/faviconfix/main/img/drive.svg"
    },
    {
      "appUrl": "https://maps.google.com",
      "image": "https://raw.githubusercontent.com/simon-marcus/faviconfix/main/img/maps.svg"
    },
    {
      "appUrl": "google.com/maps",
      "image": "https://raw.githubusercontent.com/simon-marcus/faviconfix/main/img/maps.svg"
    },
    {
      "appUrl": "https://mail.google.com",
      "image": "https://raw.githubusercontent.com/simon-marcus/faviconfix/main/img/mail.svg"
    },
    {
      "appUrl": "meet.google.com",
      "image": "https://raw.githubusercontent.com/simon-marcus/faviconfix/main/img/meet.svg"
    },
  ]
  if (changeInfo.status === 'complete') {
    chrome.tabs.query({
      currentWindow: true
    }, tabs => {
      tabs.forEach(tab => {
        var tabUrl = tab.url;
        googleApps.forEach(app => {
          if (tabUrl.includes(app.appUrl)) {
            chrome.tabs.executeScript(tabId, {
              code: `document.querySelector(\'link[rel*="icon"]\').href ="${app.image}"`
            });
            if (tabUrl.includes("meet.google")) {
              console.log("meet.google")
            }
          }
        });
      })
    });


  }
})