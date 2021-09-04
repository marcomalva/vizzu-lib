import { data } from '/test/integration/test_data/chart_types_eu.js';

const testSteps = [
    chart => chart.animate(
        {
            data: data,
            config: {
                channels:
                {
                    x: { set: ['Value 5 (+/-)'], range: '-0.1,1.1,%' },
                    y: { set: ['Joy factors'], range: '-0.1,1.1,%' },
                    lightness: { set: ['Year'] }
                },
                title: 'Distribution by Y',
                geometry: 'circle'
            }
        }
    ),   
    chart => chart.animate(
        {
            config: {
                channels:
                {
                    x: { set: ['Year'] },
                    y: { set: ['Value 5 (+/-)'] },
                    noop: { set: ['Joy factors'] }
                },
                title: 'Distribution by X'
            }
        }
    ),
    chart => chart.animate(
        {
            config: {
                channels:
                {
                    x: { set: ['Value 5 (+/-)'] },
                    y: { set: ['Joy factors'] },
                    noop: { set: null }
                },
                title: 'Distribution by Y'
            }
        }
    )
];

export default testSteps;