import React, {Component} from 'react'
import CustomLink from './customlink'
import FontAwesome from 'react-fontawesome'

class ProjectDescription extends Component {

    getColor(tag) {
        switch (tag) {

            case '#data-viz':
                return '#6da3f9';
            case '#random':
                return '#e86a5c';
            case '#project':
                return '#ba8cd1';
            default:
                return '#c7ccd6'
        }
    }

    getLinkIcon(link) {
        const getComponent = (name) => {
            return (<a href={link.url} target="_blank" key={name}>
                <span key={ name } className="icon-wrap">
                  <FontAwesome className="social-media-icon" name={name} size='lg'/>
                </span>
            </a>)
        };
        switch (link.name) {
            case 'twitter':
                return getComponent('twitter');
            case 'github':
                return getComponent('github');
            case 'internal':
                return getComponent('arrow-right');
            case 'external':
                return getComponent('link');
            default:
                return null
        }
    }

    render() {

        const {title, description, tags, links, uri, internal, year} = this.props.project;

        const colorTags = tags.map((tag) => {
            const style = {
                'backgroundColor': this.getColor(tag)
            };
            return <span key={tag} className="project-tag" style={ style }>{ tag }</span>
        });

        const titleComponent = <h2 className="project-title">{ title }</h2>;
        const created = <span>Created: {year}</span>;
        const desc = <span>{description}</span>;
        const link = internal ?
            (<CustomLink to={uri}>{titleComponent}</CustomLink>)
            : <a className='custom-link' href={uri}>{titleComponent}</a>;

        return (
            <div className="col-md-6 col-centered project-desc-container">
                { link } {desc} <br/>{created}
                <div className="project-details">
                    { colorTags }
                    { links.map(this.getLinkIcon) }
                </div>
            </div>
        )
    }
}

ProjectDescription.propTypes = {
    title: React.PropTypes.string,
    description: React.PropTypes.string,
    tag: React.PropTypes.string,
    uri: React.PropTypes.string,
    year: React.PropTypes.number,
    links: React.PropTypes.array
};

export default ProjectDescription
