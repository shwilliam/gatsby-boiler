import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default function Template ({
  data
}) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <SEO title="Blog" keywords={[`blog`]} />
      <article className="f4 f3-ns lh-copy mv4">
        <header className="mb3">
          <h3 className="f-subheadline-ns f2 lh-title fw6">{frontmatter.title}</h3>
          <h4 className="f5 f4-ns">{frontmatter.date}</h4>
        </header>
        <section dangerouslySetInnerHTML={{ __html: html }}/>
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
