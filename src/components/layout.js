import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
// import { ThemeProvider } from "@material-ui/core/styles"
// import theme from "../theme.js"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      {/* <ThemeProvider theme={theme}> */}
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
         
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
      </div>
      {/* </ThemeProvider> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
