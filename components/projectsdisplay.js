import React, {Component} from 'react'
import CustomLink from './customlink'
import ProjectDescription from './projectdesc'
import {projects} from '../model'


export default class ProjectsDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {items: []};
        this.getInitialState = this.getInitialState.bind(this);
        this.filterProjects = this.filterProjects.bind(this);
        this.filterBlogs = this.filterBlogs.bind(this);
        this.clearFilter = this.clearFilter.bind(this);
    }

    componentWillMount() {
        this.setState({items: this.getInitialState()})
    }

    filterProjects() {
        let project_list = this.getInitialState();
        this.setState({items:project_list.filter(project => project.props.project.tags.includes('#project'))})
    }

    filterBlogs() {
        let project_list = this.getInitialState();
        this.setState({items:project_list.filter(project => project.props.project.tags.includes('#blog'))})
    }

    clearFilter() {
        this.setState({items: this.getInitialState()})
    }

    getInitialState() {
        let initialItems = [];
        for (let project of projects) {
            initialItems.push(<ProjectDescription project={ project } key={ project.title }
                                                  description={project.description} year={project.year}/>)
        }
        return initialItems;
    }

    render() {

        return (
            <div className="row">
                <p className="home-nav">
                    <a className="btn" onClick={this.clearFilter}>All</a> |
                    <a className="btn" onClick={this.filterProjects}>Projects</a> |
                    <a className="btn" onClick={this.filterBlogs}>Blog</a>

                </p>
                { this.state.items }
            </div>
        )
    }
}
