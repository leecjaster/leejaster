import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { FaSlidersH } from "react-icons/fa"
import { GrClose } from "react-icons/gr"

function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false)

  return (
    <nav className="shadow-lg sticky top-0 z-10 bg-white w-full">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-between p-6">
          <div className="flex items-center flex-shrink-0 mr-6 text-white">
            <StaticImage
              src="../images/lee-jaster-logo.png"
              loading="eager"
              width={50}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt=""
            />
          </div>
          <div className="block lg:hidden">
            <button
              onClick={() => toggleExpansion(!isExpanded)}
              className="flex items-center px-3 py-2 text-black rounded hover:text-grey hover:border-grey transition duration-150 ease-out hover:ease-in"
            >
              {!isExpanded ? <FaSlidersH size={24} /> : <GrClose size={24} />}
            </button>
          </div>
          <div
            className={`${
              isExpanded ? `block` : `hidden`
            } w-full flex justify-end text-right transition ease-in`}
          >
            <div className="text-sm lg:flex-grow">
              <Link
                to={`/`}
                className="block mt-4 mr-4 text-black lg:inline-block lg:mt-0"
              >
                Home
              </Link>
              <Link
                to={`/bio`}
                className="block mt-4 mr-4 text-black lg:inline-block lg:mt-0"
              >
                Bio
              </Link>
              <Link
                to={`/discography`}
                className="block mt-4 mr-4 text-black lg:inline-block lg:mt-0"
              >
                Discography
              </Link>
              <Link
                to={`/demos`}
                className="block mt-4 mr-4 text-black lg:inline-block lg:mt-0"
              >
                Demos
              </Link>
              <Link
                to={`/songs`}
                className="block mt-4 mr-4 text-black lg:inline-block lg:mt-0"
              >
                Songs
              </Link>
              <Link
                to={`/writings`}
                className="block mt-4 mr-4 text-black lg:inline-block lg:mt-0"
              >
                Writings
              </Link>
              <Link
                to={`/photos`}
                className="block mt-4 mr-4 text-black lg:inline-block lg:mt-0"
              >
                Photos
              </Link>
              <Link
                to={`/videos`}
                className="block mt-4 mr-4 text-black lg:inline-block lg:mt-0"
              >
                Videos
              </Link>
              <Link
                to={`/Press`}
                className="block mt-4 mr-4 text-black lg:inline-block lg:mt-0"
              >
                Press
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
