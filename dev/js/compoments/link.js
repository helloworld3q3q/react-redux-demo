import React, { Component } from 'react';

class Link extends Component {
    render() {
        if (this.props.active) {
            return (
                <span> {this.props.children} </span>
            );
        } else {
            return (
                <a href="javascript:;" onClick={ () => {this.props.setVisibility(this.props.filter)}}>
                    {this.props.children}
                </a>
            );
        }
    }
}

export default Link;