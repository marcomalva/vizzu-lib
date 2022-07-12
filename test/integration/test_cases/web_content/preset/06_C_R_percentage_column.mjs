import { data } from '../../../test_data/chart_types_eu.mjs';

const testSteps = [
  chart => chart.animate(
    {
      data: Object.assign(data, {
        filter: record =>
            record.Country == 'Austria' ||
            record.Country == 'Belgium' ||
            record.Country == 'Bulgaria' ||
            record.Country == 'Cyprus' ||
            record.Country == 'Czechia' ||
            record.Country == 'Denmark' 
          }),
          config: chart.constructor.presets.percentageColumn({
            x:'Country',
            y:'Value 2 (+)',
            stackedBy: 'Joy factors', 
            title: 'Percentage Column Chart'
          }),
      style: {
          plot: {
            paddingLeft: '1.2em',
            yAxis: {
                  label: {
                     paddingRight: '0.8em'
                  }
              },
              xAxis: {
                  label: { paddingTop: '0.8em' }
              }
          }
      }
    }
  ),
  chart => chart.feature('tooltip',true)
];

export default testSteps;