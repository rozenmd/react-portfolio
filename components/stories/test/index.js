import React, {Component} from 'react'
import Highlight from 'react-highlight'
import StoryHeader from '../storyheader'
import StoryFooter from '../storyfooter'


export default class test extends Component {


    render() {

        const heading = 'Test';
        const subheading = 'Test2';
        const date = 'June 2017';
        const githubLink = 'InsertLinkHere';


        return (
            <div id="alexa-planes-story">
                <StoryHeader heading={ heading } subheading={ subheading } date={ date }/>
                <div className="container">

                    <div class="row">
                        Gotta put stuff in rows
                    </div>


                    <div className="custom-code">
                        <Highlight className='python'>
                            Declare a variable above and throw it in here
                        </Highlight>
                        <br />


                        <StoryFooter githubLink={ githubLink }/>
                    </div>
                </div>
            </div>

        )
    }
}
