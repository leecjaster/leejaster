import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FaSpotify, FaItunesNote } from "react-icons/fa"

const HomePageCard = ({ info: { title, excerpt, cover } }) => {
  // const image = getImage(cover)
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      {/* <GatsbyImage image={image} alt="" /> */}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{excerpt}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block mr-2 text-green-400 text-xl">
          <FaSpotify />
        </span>
        <span className="inline-block mr-2">
          <FaItunesNote />
        </span>
        <span className="inline-block mr-2">#winter</span>
      </div>
    </div>
  )
}

export default HomePageCard
