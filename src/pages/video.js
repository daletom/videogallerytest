import React from "react"
import VideoPlayerJS from './../components/player';

const VideoPage = ({ videoId }) => {
  return <div 
        style={{
            width: '98vw', 
            height: '100vh', 
            display: 'flex',
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center'
     }}>
        <div>
            <VideoPlayerJS
                autoplay={false}
                width={"640px"}
                height={"360px"}
                id={videoId}
              />
        </div>
    </div>
}

export default VideoPage