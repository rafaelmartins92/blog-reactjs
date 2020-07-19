import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

// import { Container } from './styles';

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>About</h1>
    <li>
      <Link to="/">home</Link>
    </li>
  </Layout>
)

export default AboutPage
