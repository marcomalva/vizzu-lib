import { data } from '../../../test_data/chart_types_eu.mjs';

const testSteps = [
    chart => chart.animate(
        {
            data: data,
            config:
            {
                channels:
                {
                    y: { attach: 'Value 2 (+)', range:{max: '110%'} },
                    x: { attach: 'Value 3 (+)' },
                    noop: { attach: ['Country'] }
                },
                title: 'Polar Scatter Plot',
                geometry: 'circle',
                coordSystem: 'polar'
            },
            style: {
                plot: {
                    paddingLeft: '3.8em',
                    marker: { guides: {
                            color: null,
                            lineWidth: 0 }
                    },
                    yAxis: {
                        label: {
                           paddingRight: '0em'
                        },
                        color: '#ffffff00',
                        ticks: { color: '#ffffff00' }
                    },
                    xAxis: {
                      title: { paddingTop: '2.4em' },
                      label: { paddingTop: '0.8em' },
//                      interlacing: { color: '#ffffff00' },
                    }
                }
            }
        }
    ),
    chart => chart.feature('tooltip',true)
];

export default testSteps;