import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
      <div className="space-y-12">
        <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Building Video Galleries with Gatsby</h1>
          <p className="text-xl text-gray-500">At one time or another, we have all seen the "building an image gallery with Gatsby tutorial." Well, it's time to up your game and build a video gallery tutorial!! In this workshop, you will learn how to create video gallery pages with Gatsby using all three of these modern video solutions — Strap in for an amazing workshop!</p>
        </div>
        <ul
            role="list"
            className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
          >
            <li>
            <Link to="/youtube/">
              <div className="space-y-4">
                  <div className="aspect-w-3 aspect-h-2">
                    <img className="object-cover shadow-lg rounded-lg" src="https://tom.imgix.net/magento1.png?auto=format,compress&w=800" alt="" />
                  </div>
                <div className="space-y-2">
                  <div className="text-lg leading-6 font-medium space-y-1">
                    <h3>Youtube</h3>
                    <p className="text-indigo-600">Simple way to use an iframe to embed Youtube Videos on your Gatsby site.</p>
                  </div>
                </div>
              </div>
              </Link>
            </li>
            <li>
              <Link to="/mp4/">
              <div className="space-y-4">
                  <div className="aspect-w-3 aspect-h-2">
                    <img className="object-cover shadow-lg rounded-lg" src="https://tom.imgix.net/magento2.png?auto=format,compress&w=800" alt="" />
                  </div>
                <div className="space-y-2">
                  <div className="text-lg leading-6 font-medium space-y-1">
                    <h3>MP4</h3>
                    <p className="text-indigo-600">Use MP4, a tried and true video format to host your own video urls.</p>
                  </div>
                </div>
              </div>
              </Link>
            </li>
            <li>
            <Link to="/hls/">
              <div className="space-y-4">
                  <div className="aspect-w-3 aspect-h-2">
                    <img className="object-cover shadow-lg rounded-lg" src="https://tom.imgix.net/magento3.png?auto=format,compress&w=800" alt="" />
                  </div>
                <div className="space-y-2">
                  <div className="text-lg leading-6 font-medium space-y-1">
                    <h3>HLS</h3>
                    <p className="text-indigo-600">A newer format that can intelligently adjust bitrate to ensure your video never stops playing.</p>
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
