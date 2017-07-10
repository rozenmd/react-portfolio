import React, {Component} from 'react'
import HomeNav from './homenav'
import ProjectsDisplay from './projectsdisplay'
import About from './about'

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            aboutSectionVisible: false
        }
    }

    onClick(e) {
        const item = e.target.getAttribute('data-name');
        if (item === 'about' && !this.state.aboutSectionVisible) {
            this.setState({aboutSectionVisible: true})
        } else if (item === 'projects' && this.state.aboutSectionVisible) {
            this.setState({aboutSectionVisible: false})
        }
    }

    render() {

        const {aboutSectionVisible} = this.state;

        const bottomDisplay = aboutSectionVisible ? <About /> :
            <ProjectsDisplay>{ this.props.children }</ProjectsDisplay>;

        return (
            <div className="container">
                <h1 className="home-title">Max Rozen</h1>
                <div>
                    <HomeNav onClick={::this.onClick}/>
                </div>

                <div className="divider"></div>

                { bottomDisplay }

            </div>
        )
    }
}
