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
            }
        }
    ),
    chart => chart.feature('tooltip',true)
];

export default testSteps;