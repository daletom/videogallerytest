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
import VideoPlayerJS from './../components/player';

import Layout from "../components/layout"
import Seo from "../components/seo"

const VideoPage = () => (
  <Layout>
    <Seo title="Page video" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div 
        style={{
            width: '98vw', 
            height: '100vh', 
            display: 'flex',
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center'
     }}>
        <div
          style={{
            margin: '10px'
          }}
        >
            <VideoPlayerJS
                autoplay={false}
                width={"640px"}
                height={"360px"}
                id={"HLSadvantages"}
              />
        </div>
        <div
          style={{
            margin: '10px'
          }}
        >
            <VideoPlayerJS
                autoplay={false}
                width={"640px"}
                height={"360px"}
                id={"gotopening"}
              />
        </div>
        <div
          style={{
            margin: '10px'
          }}
        >
            <VideoPlayerJS
                autoplay={false}
                width={"640px"}
                height={"360px"}
                id={"disney_zeek_dance2"}
              />
        </div>
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default VideoPage
