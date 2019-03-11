# youtube-thumbnail
Shortcut that will get the thumbnail of the YouTube video.

# Setup
```javascript
javascript: (function () { var re = window.location.href.match(/v=([^\?&"'>]+)/i); if (re && re.length > 0) { var videoId = re[1]; window.location='https://i.ytimg.com/vi/' + videoId + '/hqdefault.jpg'; } })();
``` 
Two methods:
* Highlight and drag this code onto your bookmarks bar
* or create a bookmark and paste the code in the URL/location field. 

# Usage
When viewing a video on Youtube, just click on the shortcut.
