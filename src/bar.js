
import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Bar extends Component {
    render() {
        return (
          <rect fill={this.props.color}
            width={this.props.width} height={this.props.height}
            x={this.props.offset} y={this.props.availableHeight - this.props.height} />
        );
    }
}

Bar.defaultProps = {
    width: 0,
    height: 0,
    offset: 0
}
