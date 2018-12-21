import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Scale, Max} from 'd3'

export default class DataSeries extends Component {

  render() {
      var yScale = Scale.linear()
        .domain([0, Max(this.props.data)])
        .range([0, this.props.height]);

      var xScale = Scale.ordinal()
        .domain(d3.range(this.props.data.length))
        .rangeRoundBands([0, this.props.width], 0.05);

      var bars = _.map(this.props.data, function(point, i) {
        return (
          <Bar height={yScale(point)} width={xScale.rangeBand()} offset={xScale(i)} availableHeight={props.height} color={props.color} key={i} />
        )
      });

      return (
        <g>{bars}</g>
      );
  }
}
DataSeries.defaultProps = {
    title: '',
    data: []
}
