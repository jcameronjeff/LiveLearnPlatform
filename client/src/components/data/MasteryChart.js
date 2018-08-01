import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';

class MasteryChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: [
          'Red', 'Blue', 'Yellow', 'Green'
        ],
        datasets: [
          {
            label: '# of Ansers',
            data: [
              12, 19, 3, 5
            ],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
              'rgba(255,99,132,1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
          }
        ]
      }
    };
  }

  render() {
    return (<Bar
      data={this.state.chartData}
      width={50}
      height={50}
      options={this.state.options}
      ref="chart"/>);
  }
}

export default MasteryChart;
