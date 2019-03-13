import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`home`]} />
    <div className="f1 fw6 tc mv5">home</div>
  </Layout>
)

export default IndexPage
