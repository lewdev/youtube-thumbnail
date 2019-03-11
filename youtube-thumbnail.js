javascript: (function () {
  var re = window.location.href.match(/v=([^\?&"'>]+)/i);
  if (re && re.length > 0) {
    var videoId = re[1];
    window.location='https://i.ytimg.com/vi/' + videoId + '/hqdefault.jpg';
  }
})();