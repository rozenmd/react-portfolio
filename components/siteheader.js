import React from 'react'
import { browserHistory } from 'react-router'

export default (props) => {
  return (
    <nav className="navbar navbar-default navbar-static-top mynav">
        <span onClick={browserHistory.goBack} className="site-header">M.R</span>
    </nav>
)
}
