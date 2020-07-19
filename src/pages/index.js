import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Home</h1>
    <li>
      <Link to="/about">about</Link>
    </li>
  </Layout>
)

export default IndexPage
