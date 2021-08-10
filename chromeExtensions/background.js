let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ color });
    console.log('Default background color set to %cgreen', `color: ${color}`);

    chrome.webRequest.onBeforeRequest.addListener(
        function(details) {
            return {cancel: details.url.indexOf("://www.evil.com/") != -1};
        },
        {urls: ["<all_urls>"]},
        ["blocking"]
    );

});

