import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Mp4Page = () => (
  <Layout>
    <SEO title="Home" />
    <div className="relative bg-white py-4 sm:py-8">
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-4 lg:items-start">
        <div className="relative sm:py-16 lg:py-0">
          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
            {/* Testimonial card*/}
            <div className="w-full">
            <video controls style={{height: '320px'}}>
                <source src="https://tom.imgix.net/HLSadvantages.mp4" type="video/mp4" />
            </video>
           </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
          {/* Content area */}
          <div className="pt-12 sm:pt-16 lg:pt-20">
            <h2 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">
              MP4 Video
            </h2>
            <div className="mt-6 text-gray-500 space-y-6">
              <p className="text-lg">
                Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique
                pellentesque. Blandit amet, sed aenean erat arcu morbi. Cursus faucibus nunc nisl netus morbi vel
                porttitor vitae ut. Amet vitae fames senectus vitae.
              </p>
            </div>
          </div>

          {/* Stats section */}
          <div className="mt-10">
            <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
                <ul className="border-t-2 border-gray-100 pt-6">
                  <li className="text-3xl font-extrabold tracking-tight text-gray-900">Pros</li>
                  <li className="text-xl font-medium text-gray-500">Easy to embed</li>
                  <li className="text-xl font-medium text-gray-500">Cheap to Use</li>
                  <li className="text-xl font-medium text-gray-500">Great Distribution</li>
                  <li className="text-xl font-medium text-gray-500">Good Performance</li>
                </ul>
                <ul className="border-t-2 border-gray-100 pt-6">
                  <li className="text-3xl font-extrabold tracking-tight text-gray-900">Cons</li>
                  <li className="text-xl font-medium text-gray-500">Ads & Links off your site</li>
                  <li className="text-xl font-medium text-gray-500">Design & Player</li>
                </ul>
            </dl>
            <div className="mt-10">
              <a href="youtube" className="text-base font-medium text-indigo-600">
                {' '}
                Learn how to use a Youtube embed with Gatsby <span aria-hidden="true">&larr;</span>{' '}
              </a>
            </div>
            <div className="mt-10">
              <a href="hls" className="text-base font-medium text-indigo-600">
                {' '}
                Learn how to use HLS video with Gatsby <span aria-hidden="true">&rarr;</span>{' '}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default Mp4Page
