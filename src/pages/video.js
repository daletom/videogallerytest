/*import React from "react"
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

export default VideoPage */

import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const VideoPage = () => (
  <Layout>
    <Seo title="Page video" />
    <h1>Hi from the video page</h1>
    <p>It's not working now</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default VideoPage
