import React from 'react'
import Layout from '../components/layout'
import Hello from '../components/hello'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`home`]} />
    <Hello/>
  </Layout>
)

export default IndexPage
