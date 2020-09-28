import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

const about = () => {
  return (
    <div>
      <Layout>
        <Head title="About" />
        <h1>About Myself</h1>
        <p>
          Full-stack developper
        </p>
        <Link to="/contact">Contact me</Link>
      </Layout>
    </div>
  )
}

export default about
