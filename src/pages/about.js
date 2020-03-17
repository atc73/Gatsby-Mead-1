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
          My name is the Boss. I am a full-stack developper and a salsa dancer.
          I love teaching new stuffs and teaching them afterwards.
        </p>
        <Link to="/contact">Contact me</Link>
      </Layout>
    </div>
  )
}

export default about
