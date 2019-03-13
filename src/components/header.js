import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <header className="cf">
    <h1 className="fw6 fr-ns mb0 mt3 pt1 link hot-pink">
      <Link to="/">
        {siteTitle}
      </Link>
    </h1>
    <nav className="fl-ns mt3 pt3">
      <Link to="/" activeClassName="bb bw1" className="b link dark-gray hover-hot-pink pb1">Home</Link>
      <Link to="/blog" activeClassName="bb bw1" className="b link dark-gray hover-hot-pink ml3 pb1">Blog</Link>
      <Link to="/about" activeClassName="bb bw1" className="b link dark-gray hover-hot-pink ml3 pb1">About</Link>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired
}

export default Header
