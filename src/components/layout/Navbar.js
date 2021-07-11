import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

export class Navbar extends Component {

    static defaultProps = {
        title: 'Github User Finder'
    };

    static propTypes = {
        title: PropTypes.string.isRequired
    }

    render() {
        return (
            <Fragment>
                <nav className="navbar bg-dark">
                    <h1>
                        <i className="fab fa-github" />
                        {this.props.title}
                    </h1>
                </nav>
                <div style={{
                    width: "50%",
                    padding: "1rem", 
                    margin: "1rem", 
                    border: "2px solid black", 
                    backgroundColor: "grey",
                    color: "whitesmoke"
                    }}>

                    <p>Thanks for landing here</p>
                    <br />
                    <p>Just type the username and you will get the results</p>
                </div>
            </Fragment>
        );
    }
}

export default Navbar
