import React from "react"
import { Link } from "gatsby"

// components
import Layout from "../components/layout"
import Head from "../components/head"

const IndexPage = () => {
  return (
    <div>
      <Layout>
        <Head title="Home" />
        <h1>Hello</h1>
        <h2>I'm Joris, a full-stack developer living in beautiful Ambilly</h2>
        <p>
          Need a developer? <Link to="/contact">Contact me</Link>
        </p>
        <Link to="/about">Contact me</Link>
      </Layout>
    </div>
  )
}

export default IndexPage
