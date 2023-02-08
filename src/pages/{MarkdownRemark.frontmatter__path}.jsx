import * as React from "react"
import { graphql } from "gatsby"

export default function Component(props) {
  return <pre>{JSON.stringify(props, null, 2)}</pre>
}

export const query = graphql`
  query ($id: String) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        path
        date
      }
    }
  }
`