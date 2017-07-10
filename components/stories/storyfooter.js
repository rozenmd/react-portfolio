import React from 'react'
import FontAwesome from 'react-fontawesome'


export default ({ githubLink }) => {
  const home = "/"
  return (
    <div className="row">
      <div id="footer">
        <div className='footer-top'>
        <a target="_blank" href="https://www.linkedin.com/in/rozenmd">
          <FontAwesome className='social-media-icon' name='linkedin' />
        </a>
          <a target="_blank" href={ githubLink }>
            <FontAwesome className='social-media-icon' name='github-alt' />
          </a>
        </div>
        <div className='footer-bottom'>
          <a className='home-link'
            href={ home }>Max Rozen</a>
        </div>
      </div>
    </div>
  )
}
