import React,{ Component } from 'react';
import Cell from '../Cell/Cell.component'

class Row extends Component {
  render() {
    return (
        <div>
        <Cell text=" " color="white"/><Cell text=" " color="white"/><Cell text=" " color="white"/>
        </div>
    );
  }
}

export default Row