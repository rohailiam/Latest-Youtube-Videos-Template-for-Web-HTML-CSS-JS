
const videoIds = ["xYWqcduyQ7c", "CSReQOcxgvU", "WxgC50Rpxxk"];

const videoLink = "https://www.youtube.com/embed/";
const imgLink = "https://img.youtube.com/vi/";

setInitialVideos();

function setInitialVideos() {
  let otherVids = document.querySelectorAll(".other-videos div");
  for (let i = 0; i < otherVids.length; i++)
    otherVids[i].style.backgroundImage = `url(${imgLink}${ videoIds[i] }/0.jpg)`;
  document.getElementById("main-video").src = videoLink + videoIds[0];
}

function switchVideo(id) {
    let mainVid = document.getElementById("main-video");
    mainVid.src = videoLink + videoIds[id] + "?autoplay=1";
  }
    
    function youtube_parser(url) {
      var regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return match && match[7].length == 11 ? match[7] : false;
}