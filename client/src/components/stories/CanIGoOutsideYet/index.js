import React, { Component } from 'react'
import Highlight from 'react-highlight'
import StoryHeader from '../storyheader'
import StoryFooter from '../storyfooter'

export default class canigooutsideyet extends Component {
  render() {
    const heading = 'Can I Go Outside Yet?'
    const subheading = "A simple way to check if it's worth going outside today"
    const date = 'July 2017'
    const githubLink = 'https://github.com/rozenmd/CanIGoOutsideYet'
    const angular_route =
      "app.config(function($routeProvider){\n$routeProvider\n.when('/', {\ntemplateUrl: 'home.html'\n})\n.when('/weather', {\ntemplateUrl: 'map.html'\n})\n.when('/about', {\ntemplateUrl: 'about-max-rozen.html'\n});\n\n});"

    return (
      <div id="canigooutsideyet">
        <StoryHeader heading={heading} subheading={subheading} date={date} />
        <div className="container">
          <div className="row">
            <p>
              I wrote this{' '}
              <a
                href="https://maxrozen.com/single-page/can-i-go-outside-yet/"
                target="_blank"
              >
                web app
              </a>{' '}
              back in 2015 to experiment with AngularJS, and test my
              understanding of JavaScript.
            </p>
            <p>
              Originally, my idea was that it would send a notification via
              email each time an API responded with a southerly wind at the
              Bureau of Meteorology's Sydney Airport weather station on a given
              day.{' '}
            </p>
            <p>
              I quickly realised IP based geolocation in HTML5 was now accurate
              enough to get you somewhat accurate weather forecasting using
              www.wunderground.com, so I quickly figured out how to use their
              API for a fun little weather app.
            </p>
            <p>
              On the technical implementation side, I wrote a simple router in
              Angular to switch between tabs in the app, and used leaflet and
              markercluster libraries to display weather stations over a map of
              Australia.
            </p>
            <p>
              See below for a snippet of how simple JavaScript front-end routing
              used to be:
            </p>
            <Highlight className="javascript">{angular_route}</Highlight>
          </div>

          <div className="custom-code">
            <StoryFooter githubLink={githubLink} />
          </div>
        </div>
      </div>
    )
  }
}
