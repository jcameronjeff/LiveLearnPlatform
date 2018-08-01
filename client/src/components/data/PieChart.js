import React, {Component} from 'react';
import {Doughnut, Chart} from 'react-chartjs-2';

class PieChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                datasets: [
                    {
                        label: 'Mastery',
                        data: [
                            60, 30
                        ],
                        backgroundColor: ['rgba(66, 244, 75, 0.2)', 'rgba(255, 99, 132, 0.2)']
                    }
                ],
                labels: ['Correct', 'Incorrect']

            },
            options: Chart.defaults.doughnut
        }
    }

    render() {
        return (<Doughnut
            data={this.state.chartData}
            options={this.state.options}
            width={50}
            height={50}/>);
    }

}

export default PieChart;