function downloadMP4() {
  let video_url = document.querySelector(
    "#playback-root > div.Playerstyle__divPresentationsHolder-sc-e6eru7-1.gIGwbt > div.Playerstyle__divMainPresentationHolder-sc-e6eru7-4.eTYXmu.main-holder > div > div > div > div > div > video"
  ).src;
  let video_name = document.querySelector(
    "#app > div.SharedVideoPagestyle__divMain-sc-b3x1f7-0.hzgJDE.main > div > div > div.SharedVideoPagestyle__divVideoWrap-sc-b3x1f7-7.inHITY.video-wrap > div > div.os-padding > div > div > div.SharedVideoPagestyle__divTitleWrap-sc-b3x1f7-15.dKHCnk.title-wrap > p"
  ).innerText;


  fetch(video_url)
    .then((response) => response.blob())
    .then((blob) => {
      const blobUrl = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = blobUrl;
      if(video_name.endsWith('.mp4')){
        link.download = video_name;
      } else{
        link.download = video_name + ".mp4";
      }
      if(!video_name.startsWith()){
        link.download = "Lösungsvideo " + video_name;
      }
      if(video_name.includes("_")){
        link.download = link.download.split('_').join('.');
      }
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(blobUrl);
    })
    .catch((error) => console.error("Error downloading MP4:", error));
}

downloadMP4();
