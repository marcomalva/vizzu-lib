import { data } from '../../../test_data/chart_types_eu.mjs';

const testSteps = [
    chart => chart.animate({
        data: Object.assign(data, {
            filter: record =>
                ['AT', 'BE', 'DE', 'DK', 'ES', 'FI', 'FR', 'IT', 'NL', 'SE']
                .includes(record.Country_code)
        }),
        config: {
            channels: {
                x: { set: ['Year', 'Joy factors'] },
                y: { set: ['Value 3 (+)', 'Country_code'] },
                color: { set: ['Country_code'] }
            },
            title: 'Stacked Area',
            geometry: 'area',
            coordSystem: 'polar'
        }
    }),
    chart => chart.animate(
        {
            data: { 
                filter: record => data.filter(record) 
                    && record.Year < 12 && record.Year > 6 
            },
            config: {
                align: 'min'
            }
        })
];

export default testSteps;