import React, {Component} from 'react'
import {browserHistory} from 'react-router'
import SiteHeader from './siteheader'

export default (props) => {
    return (

        <div className="row img-container">
            <div className="row about-text">
                <p className="lead">My name is Max Rozen, I'm a Full Stack Software Engineer, with a focus on Data
                    Engineering for Analytics Platforms at EYC3. Much
                    of my
                    work lies in the backend using Python, though I've been known to help out on the front-end in
                    AngularJS and React.
                </p>
                <p>In fact, this site is built using React + React Router!</p>

                <hr/>
                <p >If you have any questions about me or you just want to get in touch,
                    you can reach me at:</p>
                <p className="thick"><strong><a href="https://www.linkedin.com/in/rozenmd"
                                                target="_blank">LinkedIn</a></strong></p>
                <p className="thick"><strong><a href="https://twitter.com/mxrozen"
                                                target="_blank">Twitter</a></strong></p>
                <p className="thick"><strong><a href="https://github.com/rozenmd"
                                                target="_blank">Github</a></strong></p>
            </div>
        </div>


    )
}
