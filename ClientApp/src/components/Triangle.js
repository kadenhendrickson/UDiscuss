import React, { Component } from 'react';

export class Triangle extends Component {
    static displayName = Triangle.name;

    render() {
        const width = this.props.width;
        const height = this.props.height;
        const fill = this.props.color;

        if (this.props.isUp)
        {
            return (
                <svg width={width} height={height} stroke="black">
                    <path role="button"
                        fill={fill}
                        d={`M ${width}  ${height} L 0 ${height} L ${width / 2} 0 Z`}
                    />
                </svg>
            );
        }
        else
        {
            return (
                <svg width={width} height={height} stroke="black">
                    <path role="button"
                        fill={fill}
                        d={`M 0 0 L ${width} 0 L ${width / 2} ${height} L 0 0`}
                    />
                </svg>
            );
        }


    }
}
