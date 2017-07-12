import React, {Component} from 'react'
import CustomLink from './customlink'
import FontAwesome from 'react-fontawesome'

export default class HomeNav extends Component {

    render() {
        const {onClick} = this.props;


        return (
            <ul className="home-nav">
                <li><a className="custom-link" data-name="about" onClick={ onClick }>ABOUT</a></li>
                <li><a className="custom-link" data-name="projects" onClick={ onClick }>PROJECTS</a></li>

                <li><a className="custom-link" href="https://maxrozen.com/legacy/blog/">LEGACY</a></li>
                <li>
                    <a target="_blank" href="https://www.linkedin.com/in/rozenmd">
                        <FontAwesome className='social-media-icon' name='linkedin'/>
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://github.com/rozenmd">
                        <FontAwesome className='social-media-icon' name='github-alt'/>
                    </a>
                </li>
            </ul>
        )
    }
}
