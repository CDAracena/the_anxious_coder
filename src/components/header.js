import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import brandColors from "../utils/commonstyles.js"

import headerStyles from "../styles/components/header.module.css"

import Img from "gatsby-image"

const Header = ({ siteTitle }) => {
  const anxiousLogo = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "anxious-coder-logo@3x.png" }) {
        childImageSharp {
          fixed(width: 66, height: 42) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <header style={styles.headerContainer}>
      <div style={styles.linkContainer}>
        <a href="/" className={headerStyles.headerlink}>
          <Img
            alt="The Anxious Coder Logo"
            fixed={anxiousLogo.file.childImageSharp.fixed}
          />

          {siteTitle}
        </a>

        <a href="/about/" className={headerStyles.headerlink}>
          About
        </a>
      </div>
    </header>
  )
}

export default Header

const styles = {
  headerContainer: {
    // background: brandColors.black,
    marginBottom: `1.45rem`,
  },
  headerTitle: {
    color: brandColors.white,
    textDecoration: `none`,
    fontSize: 28,
    fontWeight: 800,
    flex: 1,
  },
  linkContainer: {
    margin: `0 auto`,
    maxWidth: 960,
    padding: 20,
    display: "flex",
    justifyContent: "space-between",
  },
}
