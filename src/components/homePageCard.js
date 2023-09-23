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
      <Link to={path} className="no-underline">
        <GatsbyImage image={getImage(cover)} alt={title} />
        <div className="px-6 py-4">
          <p className="text-gray-700 text-black text-xs uppercase mb-2">
            {date}
          </p>
          <div className="font-bold text-black text-lg mb-0">{title}</div>
          {excerpt && (
            <p className="text-gray-700 text-black text-base">{excerpt}</p>
          )}
        </div>
        <div className="px-6 pt-0 pb-2">
          <span className="flex justify-start mr-2 text-xl">
            <FaSpotify className="text-green-400 mr-2" />
            <FaItunesNote className="text-black" />
          </span>
        </div>
      </Link>
    </div>
  )
}

export default HomePageCard
