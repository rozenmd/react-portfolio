import React, { Component } from 'react'
import Highlight from 'react-highlight'
import StoryHeader from '../storyheader'
import StoryFooter from '../storyfooter'

export default class billdivider extends Component {
  render() {
    const heading = 'Blog Posting and Filtering!'
    const subheading = 'Extending my React Portfolio site'
    const date = 'July 2017'
    const githubLink = 'https://github.com/rozenmd/react-portfolio'

    return (
      <div id="billdivider">
        <StoryHeader heading={heading} subheading={subheading} date={date} />
        <div className="container">
          <div className="row">
            <p>
              So I made a little extension to the React app that hosts my blog
              and portfolio site - Now I'll be able to both blog and post
              projects, without making the UX a pain!
            </p>
            <p>
              My next goal with the filtering will be to grab the unique set of
              tags that my posts use to filter. So watch this space for data
              visualisation posts!
            </p>
          </div>

          <div className="custom-code">
            <StoryFooter githubLink={githubLink} />
          </div>
        </div>
      </div>
    )
  }
}
