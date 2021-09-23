import { data } from '/test/integration/test_data/chart_types_eu.js';

const testSteps = [
    chart => chart.animate({
        data: data,
        config: {
            channels: {
                x: { set: ['Year'] },
                y: { set: ['Joy factors', 'Value 2 (+)'] },
                color: { set: ['Joy factors'] }
            },
            title: 'Nightingale (Coxcomb) Chart',
            coordSystem: 'polar'
        },
        style: { // y-axis and its labels are unnecessary on these types of charts.
            plot: {
                yAxis: {
                    title: {
                        color: '#ffffff00'
                    },
                    label: {
                        color: '#ffffff00'
                    }
                },
                marker: {
                    rectangleSpacing: 0.1
                }
            }
        }
    })
];

export default testSteps;