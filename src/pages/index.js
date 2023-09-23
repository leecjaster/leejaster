import * as React from "react"
import { Link, graphql } from "gatsby"
import Video from "../components/video"
import HomePageSection from "../components/homePageSection"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const IndexPage = ({ data }) => (
  <Layout>
    {console.log("data", data)}
    <div className="container mx-auto px-6">
      <Video
        videoSrcURL="https://www.youtube.com/embed/aRCvSgcWEZg"
        videoTitle="Lee Jaster | Thirty East on YouTube"
      />
    </div>
    <div className="container mx-auto text-center mt-10 mb-10">
      <h2 className="font-raleway font-bold text-center m-10">Bio</h2>
      <p className="font-source-sans-pro">
        Hailing from East Texas, calling Austin, TX home as he explores
        songrwriting...
      </p>
      <HomePageSection
        title="Discography"
        data={data.allMarkdownRemark.edges}
      />
      <HomePageSection title="Demos" data={data.allMarkdownRemark.edges} />
      <HomePageSection title="Songs" data={data.allMarkdownRemark.edges} />
      <HomePageSection title="Writings" data={data.allMarkdownRemark.edges} />
      <HomePageSection title="Photos" data={data.allMarkdownRemark.edges} />
      <HomePageSection title="Press" data={data.allMarkdownRemark.edges} />
    </div>
  </Layout>
)

export const discography = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            path
            date
            title
            cover {
              absolutePath
              childImageSharp {
                gatsbyImageData(width: 300)
              }
            }
          }
        }
      }
    }
  }
`

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
