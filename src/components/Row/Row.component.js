
import React, { Component } from 'react';
import Cell from '../Cell/Cell.component';

class Row extends Component {

    render() {
        return (
            <div>
                <Cell title={this.props.data[0]} />
                <Cell title={this.props.data[1]} />
                <Cell title={this.props.data[2]} />
            </div>
        )
    }
}

export default Row;