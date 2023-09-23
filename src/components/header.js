import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"

function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false)

  return (
    <nav className="shadow-lg fixed z-10 bg-white w-full">
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
              className="flex items-center px-3 py-2 text-black rounded hover:text-grey hover:border-grey"
            >
              <svg
                className="w-5 h-5 fill-black"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div
            className={`${
              isExpanded ? `block` : `hidden`
            } w-full flex justify-end text-right`}
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
