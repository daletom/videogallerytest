import * as React from "react"
import { Link } from "gatsby"
import VideoPlayerJS from './../components/player';

import Layout from "../components/layout"
import Seo from "../components/seo"

const Mp4Page = () => (
  <Layout>
    <Seo title="Page video" />
    <div id="outer">
      <div id="outro">
    <div id="outeryoutube">
      <video
        src="https://tom.imgix.net/HLSadvantages.mp4"
        id="youtube"
        controls
        >
      </video>
    </div>
    <div id="hometext">
        <h1 id="homeheader">MP4</h1>
        <p id="homeparagraph">Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique
                pellentesque. Blandit amet, sed aenean erat arcu morbi. Cursus faucibus nunc nisl netus morbi vel
                porttitor vitae ut. Amet vitae fames senectus vitae.</p>
      </div>
      </div>
      </div>
      <div>
    <Link to="/">Go back to the homepage</Link>
    </div>
    <div>
    <Link to="/youtube">Go back to the Youtube page</Link>
    </div>
    <div>
    <Link to="/hls">Go to the HLS page</Link>
    </div>
  </Layout>
)

export default Mp4Page
