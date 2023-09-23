import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FaSpotify, FaItunesNote } from "react-icons/fa"

const HomePageCard = ({
  info: {
    node: {
      frontmatter: { title, cover, date, path, excerpt },
    },
  },
}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <Link to={path}>
        <GatsbyImage image={getImage(cover)} alt={title} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{excerpt}</p>
          <p className="text-gray-700 text-sm">Release Date: {date}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block mr-2 text-green-400 text-xl">
            <FaSpotify />
            <FaItunesNote />
          </span>
        </div>
      </Link>
    </div>
  )
}

export default HomePageCard
