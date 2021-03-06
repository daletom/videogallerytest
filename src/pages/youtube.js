import * as React from "react"
import { Link } from "gatsby"
import VideoPlayerJS from './../components/player';

import Layout from "../components/layout"
import Seo from "../components/seo"

const YoutubePage = () => (
  <Layout>
    <Seo title="Page video" />
    <div id="outer">
      <div id="outro">
    <div id="outeryoutube">
      <iframe
        src="https://www.youtube.com/embed/ESXDew_724Y"
        title="My title"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
        id="youtube"
      />
    </div>
    <div id="hometext">
        <h1 id="homeheader">Youtube</h1>
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
    <Link to="/mp4">Go to the MP4 page</Link>
    </div>
  </Layout>
)

export default YoutubePage
