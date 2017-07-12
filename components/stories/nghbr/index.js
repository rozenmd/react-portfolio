import React, {Component} from 'react'
import Highlight from 'react-highlight'
import StoryHeader from '../storyheader'
import StoryFooter from '../storyfooter'


export default class nghbr extends Component {


    render() {

        const heading = 'NGHBR';
        const subheading = 'A hyperlocal social network for the suburbs';
        const date = 'July 2017';
        const githubLink = 'https://github.com/rozenmd/NGHBR';


        return (
            <div id="nghbr">
                <StoryHeader heading={ heading } subheading={ subheading } date={ date }/>
                <div className="container">


                    <div className="row">
                        <p>This app was written as part of a Positive Computing course at the University of Sydney.
                            Our assignment was to create an application that would help better society. I ended up
                            joining
                            a group of talented developers and together we decided the best way to achieve this goal was
                            to create
                            yet another social network</p>
                        <p>Here's a Youtube video we came up with to promote the project: <a
                            href="https://www.youtube.com/watch?v=oVNPMYoqPJU" target="_blank">https://www.youtube.com/watch?v=oVNPMYoqPJU</a>
                        </p>
                        <p>
                            So in the end the idea was to improve neighbourhood interactions by creating a place for
                            neighbours to chat, post events, share power tools and just hang out.
                        </p>
                        <p>On the technical side, it was written in Java using Spring MVC with Hibernate ORM, and a
                            MySQL database. Ironically enough, login was provided by Facebook.js OAuth2.</p>

                    </div>


                    <div className="custom-code">
                        <StoryFooter githubLink={ githubLink }/>
                    </div>
                </div>
            </div>

        )
    }
}
