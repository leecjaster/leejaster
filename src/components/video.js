import React from "react"

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <div className="aspect-w-16 aspect-h-9">
    <iframe
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      width="100%"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </div>
)
export default Video
