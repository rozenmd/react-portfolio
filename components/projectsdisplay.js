import React, {Component} from 'react'
import CustomLink from './customlink'
import ProjectDescription from './projectdesc'
import {projects} from '../model'


export default class ProjectsDisplay extends Component {

    render() {
        const projectComponents = [];

        for (let project of projects) {
            projectComponents.push(<ProjectDescription project={ project } key={ project.title } description={project.description} year={project.year} />)
        }

        return (
            <div className="row">{ projectComponents }</div>
        )
    }
}
