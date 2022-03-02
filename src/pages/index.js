import * as React from "react"
import { Link } from "gatsby"
import VideoPlayerJS from './../components/player';
//import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div id="outer">
      <div id="outro">
      <div id="hometext">
        <h1 id="homeheader">Building Video Galleries with Gatsby</h1>
        <p id="homeparagraph">At one time or another, we have all seen the "building an image gallery with Gatsby tutorial." Well, it's time to up your game and build a video gallery tutorial!! In this workshop, you will learn how to create video gallery pages with Gatsby using all three of these modern video solutions — Strap in for an amazing workshop!</p>
      </div>
      <ul role="list" id="homelist">
        <li>
          <Link to="/youtube">
            <div id="outerlist">
              <div id="outerimglist">
                <img
                  id="imglist"
                  src="https://tom.imgix.net/magento1.png?auto=format,compress&w=800" />
              </div>
              <div id="outerheaderlist">
                <div id="innerheaderlist">
                  <h3 id="linkheader">Youtube</h3>
                  <p id="linkparagraph">Simple way to use an iframe to embed Youtube Videos on your Gatsby site.</p>
                </div>
              </div>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/mp4">
            <div id="outerlist">
              <div id="outerimglist">
                <img
                  id="imglist"
                  src="https://tom.imgix.net/magento2.png?auto=format,compress&w=800" />
              </div>
              <div id="outerheaderlist">
                <div id="innerheaderlist">
                  <h3 id="linkheader">MP4</h3>
                  <p id="linkparagraph">Simplest video format with wide support to serve in a video tag on your Gatsby site.</p>
                </div>
              </div>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/video">
            <div id="outerlist">
              <div id="outerimglist">
                <img
                  id="imglist"
                  src="https://tom.imgix.net/magento3.png?auto=format,compress&w=800" />
              </div>
              <div id="outerheaderlist">
                <div id="innerheaderlist">
                  <h3 id="linkheader">HLS</h3>
                  <p id="linkparagraph">Most performant video format to serve on your Gatsby site. Will ensure video playback is never interrupted.</p>
                </div>
              </div>
            </div>
          </Link>
        </li>
      </ul>
      </div>
    </div>
  </Layout>
)

export default IndexPage
