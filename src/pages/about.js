import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

// import { Container } from './styles';

function AboutPage() {
  return (
    <Layout>
      <SEO title="About" />
      <h1>About</h1>
      <li>
        <Link to="/">home</Link>
      </li>
    </Layout>
  )
}

export default AboutPage
