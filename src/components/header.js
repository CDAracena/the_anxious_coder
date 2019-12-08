import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import brandColors from '../utils/commonstyles.js'

const Header = ({ siteTitle }) => (
  <header
    style={styles.headerContainer}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: 20,
      }}
    >
  
        <Link
          to="/"
          style={styles.headerTitle}
        >
          {siteTitle}
        </Link>
      
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

const styles = {
  headerContainer: {
    background: brandColors.black,
      marginBottom: `1.45rem`,
  },
  headerTitle: {
    color: brandColors.white,
    textDecoration: `none`,
    fontSize: 28,
    fontWeight: 800
  }
}
