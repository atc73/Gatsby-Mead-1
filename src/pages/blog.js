import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import Layout from "../components/layout"
import blogStyles from "./blog.module.scss"
import Head from "../components/head"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "dddd Wo MMMM, YYYY ")
          }
        }
      }
    }
  `)

  const blogs = data.allContentfulBlogPost.edges.map(blog => {
    return (
      <li className={blogStyles.post} key={blog.node.id}>
        <Link to={`/blog/${blog.node.slug}`}>
          <h2>{blog.node.title}</h2>
          <p>{blog.node.publishedDate}</p>
        </Link>
      </li>
    )
  })

  return (
    <div>
      <Layout>
        <Head title="Blog" />
        <h1>Blog</h1>
        <ol className={blogStyles.posts}>{blogs}</ol>
      </Layout>
    </div>
  )
}

export default BlogPage
