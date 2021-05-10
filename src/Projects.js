import React, { Component } from 'react';
import PROJECTS from './content/project'



class Project extends Component {
    render() {
        const { name, link, logo, role, description } = this.props.project;
        return (
            <div style={{ display: 'inline-block', width: 300, margin: 10 }}>
                <div style={{ textAlign: 'left' }}>
                    <a href={link} target='_blank'><img src={logo} alt={name} style={{ width: 100 }} /></a>
                    <h4>{role}</h4>
                    <p>{description}</p>
                </div>
            </div>
        )
    }
}

class Projects extends Component {
    render() {
        return (
            <div>
                <h2> Work Experience</h2>
                <div>
                    {
                        PROJECTS.map(PROJECT => {
                            return (
                                <Project key={PROJECT.id} project={PROJECT} />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Projects;