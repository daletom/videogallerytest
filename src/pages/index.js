import * as React from "react"
//import { Link } from "gatsby"
import VideoPlayerJS from './../components/player';
//import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
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
  </Layout>
)

export default IndexPage
