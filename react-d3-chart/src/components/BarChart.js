import { Component } from 'react';
import * as d3 from "d3";
import ReactFauxDOM from 'react-faux-dom';

class BarChart extends Component {

 static defaultProps = {
        height: 500, 
         width:600,
         data: [],
         chartBg: '#f4f4f4',
         barColor: 'steelBlue',
         barWidth: 40,
         barOffset: 10    
 }


 shouldComponentUpdate(nextProps) {
      let shouldUpdate = this.props.data !== nextProps.data;
      console.log(shouldUpdate);
      return shouldUpdate;
  }

 render() {    
    const chart = ReactFauxDOM.createElement('div');

     let tooltip = d3.select('body').append('div')
            .style('position', 'absolute')
            .style('background', '#eee')
            .style('opacity', '0')
            .style('padding', '10px')
            .style('border', '1px #000 solid')
            .style('border-radius', '5px');

     let yScale = d3.scaleLinear()
        .domain([0, d3.max(this.props.data)])
        .range([0, this.props.height]);

      let xScale = d3.scaleBand()
            .domain(d3.range(0,this.props.data.length))
            .range([0, this.props.width]);

    d3.select(chart).append('svg')
        .attr('width',this.props.width)
        .attr('height', this.props.height)
        .style('background',this.props.chartBg)
        .selectAll('rect')
        .data(this.props.data)
        .enter()
        .append('rect')
        .style('fill', this.props.barColor)
        .attr('width', this.props.barWidth)
        .attr('height',(d) => yScale(d))
        .attr('x', (d,i) => xScale(i))
        .attr('y', (d) => this.props.height - yScale(d))
        .on('mouseover', (d) => {
            tooltip.style('opacity',1);
            tooltip.html(d)
            .style('left', (d3.event.pageX+'px'))
            .style('top', (d3.event.pageY+'px'))
        })
        .on('mouseout', (d) => {
            tooltip.style('opacity', 0);
        })

      return chart.toReact();
  }
}

export default BarChart;
