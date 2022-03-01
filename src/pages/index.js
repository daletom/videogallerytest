import * as React from "react"
import { Link } from "gatsby"
import VideoPlayerJS from './../components/player';
//import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div>
      <div>
        <h1>Building Video Galleries with Gatsby</h1>
        <p>At one time or another, we have all seen the "building an image gallery with Gatsby tutorial." Well, it's time to up your game and build a video gallery tutorial!! In this workshop, you will learn how to create video gallery pages with Gatsby using all three of these modern video solutions — Strap in for an amazing workshop!</p>
      </div>
      <ul role="list">
        <li>
          <Link to="/video">
            <div>
              <div>
                <img src="https://tom.imgix.net/magento1.png?auto=format,compress&w=800" />
              </div>
              <div>
                <div>
                  <h3>Video</h3>
                  <p>Simple way to use an iframe to embed Youtube Videos on your Gatsby site.</p>
                </div>
              </div>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  </Layout>
)

export default IndexPage
