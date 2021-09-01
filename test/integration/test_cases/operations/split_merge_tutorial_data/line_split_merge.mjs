import { data } from '/test/integration/test_data/tutorial.js';

const testSteps = [
  chart => chart.animate(
    {
      data: data,
      config: {
        channels: {
          x: { attach: ['Timeseries'] },
          y: { attach: ['Values 1'], range: '0,1.1,%' },
          color: { attach: ['Categ. Parent'] },
          label: { attach: ['Values 1'] }
        },
        title: 'Operations: Area - Merged.',
        geometry: 'line'
      }
    }
  ),
  chart => chart.animate(
    {
      config: {
        channels: {
          y: { attach: ['Categ. Parent'] }
      },
        title: 'Operations: Area - Splitted.',
        split: true,
      },
    }
  ),
  chart => chart.animate(
    {
      config: {
        channels: {
          y: { detach: ['Categ. Parent'] }
      },
        title: 'Operations: Area - Merged.',
        split: false,
      },
    }
  )
];

export default testSteps;