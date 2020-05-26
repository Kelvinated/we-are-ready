import React from 'react'
import Layout from '../components/Layout'
import { Link, graphql, useStaticQuery } from 'gatsby'

const InsightsPage = () => {
  const data = useStaticQuery(graphql`
  query {
    allMarkdownRemark {
     edges {
       node {
         frontmatter {
           title
           date
         }
         fields {
           slug
         }
       }
     }
   }
 }
  `)

  return (
    <>
      <Layout>
        <h1>Blog</h1>
        <ol>
            {data.allMarkdownRemark.edges.map((edge) => {
              return (
                <li>
                  <Link to={`/blog/${edge.node.fields.slug}`}>
                    <h2>{edge.node.frontmatter.title}</h2>
                    <p>{edge.node.frontmatter.date}</p>
                  </Link>
                </li>
              )
            })}
        </ol>
      </Layout>
    </>
  )
}

export default InsightsPage