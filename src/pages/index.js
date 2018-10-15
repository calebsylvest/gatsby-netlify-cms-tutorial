import React from "react"
import { graphql, Link } from "gatsby"

export default ({data}) => {
  console.log(data)
  return (
    <div>
      <h1>Hello worldzz!</h1>
      <h2>{data.allMarkdownRemark.totalCount} Posts</h2>

      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link
            to={node.frontmatter.path}>
            <h3>{node.frontmatter.title}</h3>
          </Link>
          <span>{node.frontmatter.date}</span>
          <p>{node.excerpt}</p>
        </div>
      ))}

    </div>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            path
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`
