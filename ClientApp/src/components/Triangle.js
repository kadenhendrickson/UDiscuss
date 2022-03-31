import React, { Component } from 'react';

export class Triangle extends Component {
  static displayName = Triangle.name;

    render() {
        const width = 5;
        const height = 5;
        const fill = "black";
    return (
        <svg width={width} height={height}>
            <path
                fill={fill}
                //d={`M 0 0 L ${width} 0 L ${width/2} ${height} L 0 0`}
                d={`M ${width}  ${height} L 0 ${height} L ${width/2} 0 Z`}
            />
        </svg>
    );
  }
}
