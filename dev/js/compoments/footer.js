import React, { Component } from 'react';
import FilterLink from '../containers/filterLink';

class Footer extends Component {
    render() {
        return (
            <div>
                SHOW:{' '}
                <FilterLink filter='SHOW_ALL'>
                    All
                </FilterLink>
                {', '}
                <FilterLink filter='SHOW_ACTIVE'>
                    Active
                </FilterLink>
                {', '}
                <FilterLink filter="SHOW_COMPLETED">
                    completed
                </FilterLink>
            </div>
        );
    }
}

export default Footer;