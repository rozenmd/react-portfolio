import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import SiteHeader from './siteheader'

export default (props) => {
  return (

        <div className="row img-container">
          <div className="col-md-12 col-centered about-img-container">
            <img className="about-img" src="/img/me.JPG" />
          </div>
          <div className=" row about-text">
            <p>Full Stack Software Engineer <a target="_blank" href="https://twitter.com/mxrozen">@MxRozen</a>.</p>
          </div>
        </div>


  )
}
