import React from "react"

import SEO from "../components/seo"
import Layout from "../components/Layout"
import PostItem from "../components/PostItem"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PostItem
      slug="/about"
      background="red"
      category="Misc"
      date="20 de Julho 2020"
      timeToRead="5"
      title="Vamos aprender JS"
      description="Dicas para aprender JS"
    />
  </Layout>
)

export default IndexPage
