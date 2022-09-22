import { data } from '../../../test_data/chart_types_eu.mjs';


const testSteps = [
    chart => chart.animate({
        data: Object.assign(data, {
            filter: record =>
                record.Country == 'Austria' ||
                record.Country == 'Belgium' ||
                record.Country == 'Bulgaria' ||
                record.Country == 'Cyprus' ||
                record.Country == 'Czechia' ||
                record.Country == 'Denmark' ||
                record.Country == 'Estonia' ||
                record.Country == 'Greece' ||
                record.Country == 'Germany' ||
                record.Country == 'Spain' ||
                record.Country == 'Finland' ||
                record.Country == 'France' ||
                record.Country == 'Croatia' ||
                record.Country == 'Hungary'
        }),
        config: {
            channels: {
                x: { set: 'Year' },
                y: { set: ['Country', 'Value 2 (+)'], range: { min: '0%', max: '110%' }  },
                color: { set: 'Country' }
            },
            title: 'Stacked Column',
            geometry: 'rectangle',
            orientation: 'horizontal',
            split: false,
            legend: 'color'
        },
        style: {
            plot: {
                paddingLeft: '0em'
            }
        }
    }
 ),

/*

    chart => chart.animate({
        config: {
            channels: {
                x: { set: null },
                y: { set: ['Country','Year', 'Value 2 (+)'], range: { min: '0%', max: '110%' }  },
                color: { set: 'Country' }
            },
            title: 'Stacked Column / Aggregate(?), Sum(?), - Discrete(?)',
            geometry: 'rectangle',
            orientation: 'horizontal',
            split: false,
            legend: 'color'
        },
        style: {
            plot: {
                paddingLeft: '0em'
            }
        }
    },
       {
            duration: 2,
        }
    ),

    chart => chart.animate({
        config: {
            channels: {
                x: { set: null },
                y: { set: ['Country', 'Value 2 (+)'], range: { min: '0%', max: '110%' }  },
                color: { set: 'Country' },
                label: { set:['Value 2 (+)']}
            },
            title: 'Stacked Column / Aggregate(?), Sum(?), - Discrete(?)',
            geometry: 'rectangle',
            orientation: 'horizontal',
            split: false
        }
    },
    {
         delay: 0, duration: 0.5,
     }
 ),
 chart => chart.animate({
    config: {
        channels: {
            x: { set: null },
            y: { set: ['Country','Year', 'Value 2 (+)'], range: { min: '0%', max: '110%' }  },
            color: { set: 'Country' },
            label: { set:null }
            
        },
        title: 'Stacked Column / Drill down(?), + Discrete(?)',
        geometry: 'rectangle',
        orientation: 'horizontal',
        split: false,
        legend: 'color'
    },
    style: {
        plot: {
            paddingLeft: '0em'
        }
    }
},
   {
       delay:1, duration: 2,
    }
),



 chart => chart.animate({
        config: {
            channels: {
                x: { set: 'Year' },
                y: { set: ['Country', 'Value 2 (+)'], range: { min: '0%', max: '110%' }  },
                color: { set: 'Country' }
            },
            title: 'Stacked Column',
            geometry: 'rectangle',
            orientation: 'horizontal',
            split: false,
            legend: 'color'
        },
        style: {
            plot: {
                paddingLeft: '0em'
            }
        }
    }
 ),
 chart => chart.animate({
    config: {
        channels: {
            x: { set: ['Value 2 (+)', 'Year'] },
            y: { set: ['Country'], range: { min: '0%', max: '100%' } },
            color: { set: null }
        },
        title: 'Bar / Aggregate(?), Sum(?)',
        geometry: 'rectangle',
        orientation: 'horizontal',
        split: false,
        legend: null
    },
    style: {
        plot: {
            paddingLeft: '8em'
        }
    }
},
   {
       easing: 'cubic-bezier(0.65,0,0.65,1)',
        geometry: { 
            delay: 0.5, 
            duration: 0.5, 
//                easing: 'linear' 
        },
        x: {
            delay: 0.5,
            duration: 0.75,
//                easing: 'ease-out'
        }, 
        y: {
            delay: 0,
            duration: 0.75,
//                easing: 'cubic-bezier(65,0,65,1)'
        }
    }
),

chart => chart.animate({
    config: {
        channels: {
            x: { set: ['Value 2 (+)'] },
            y: { set: ['Country'] },
            color: { set: null },
            label: { set: ['Value 2 (+)']}
        },
        title: 'Bar / Aggregate(?), Sum(?)',
        geometry: 'rectangle',
        orientation: 'horizontal',
        split: false,
        legend: null
    }
},
   {
    delay: 0, duration: 0.4,
    }
),
chart => chart.animate({
    config: {
        channels: {
            x: { set: ['Value 2 (+)', 'Year'] },
            y: { set: ['Country'] },
            color: { set: null },
            label: { set: null }
        },
        title: 'Bar / Aggregate(?), Sum(?)',
        geometry: 'rectangle',
        orientation: 'horizontal',
        split: false,
        legend: null
    }
},
   {
        delay: 2, duration: 0.4
    }
),
*/


chart => chart.animate({
    config: {
        channels: {
            x: { set: 'Year' },
            y: { set: ['Country', 'Value 2 (+)'], range: { min: '0%', max: '110%' }  },
            color: { set: 'Country' }
        },
        title: 'Stacked Column / Drill down(?), + Discrete(?)',
        geometry: 'rectangle',
        orientation: 'horizontal',
        split: false,
        legend: 'color'
    },
    style: {
        plot: {
            paddingLeft: '0em'
        }
    }
}
),
chart => chart.animate({
    config: {
        channels: {
            x: { set: ['Year', 'Value 2 (+)'] },
            y: { set: ['Country'] },
            color: { set: ['Country'] },
            label: { set: null}
        },
        title: '1 Column / Total(?), Aggregate',
        geometry: 'rectangle',
        orientation: 'horizontal',
        split: false,
        legend: null
    },
    style: {
        plot: {
            paddingLeft: '8em'
        }
    }
},
{
    delay: 0, duration: 1,
/*
        coordSystem: {
            delay: 0,
            duration: 1,
        },
        x: {
            delay: 0.75,
            duration: 1,
                easing: 'ease-out'
        }, 
        y: {
            delay: 0,
            duration: 1,
                easing: 'ease-out'
        }
        */
    }
),

chart => chart.animate({
    config: {
        channels: {
            x: { set: null },
            y: { set: ['Value 2 (+)', 'Year', 'Country'] },
            color: { set: null }
        },
        title: '2 Column / Total(?), Aggregate',
        geometry: 'rectangle',
        orientation: 'horizontal',
        split: false,
        legend: null
    },
    style: {
        plot: {
            paddingLeft: '8em'
        }
    }
},
{
    delay: 0, duration: 2, 
    x: {
        delay: 0,
        duration: 1,
        easing: 'ease-out'
    }, 
    y: {
        delay: 1,
        duration: 1,
        easing: 'ease-in'
    }
 }
),

chart => chart.animate({
    config: {
        channels: {
            x: { set: null },
            y: { set: ['Value 2 (+)'] },
            color: { set: null },
            label: { set: ['Value 2 (+)']}
        },
        title: '3 Column / Total(?), Aggregate',
        geometry: 'rectangle',
        orientation: 'horizontal',
        split: false,
        legend: null
    },
    style: {
        plot: {
            paddingLeft: '8em'
        }
    }
},
{
    delay: 0, duration: 1
 }
),

chart => chart.animate({
    config: {
        channels: {
            x: { set: null },
            y: { set: ['Value 2 (+)', 'Country', 'Year'] },
            color: { set: null },
            label: { set: null}
        },
        title: '1 Column / Sum(?)',
        geometry: 'rectangle',
        orientation: 'horizontal',
        split: false,
        legend: null
    },
    style: {
        plot: {
            paddingLeft: '8em'
        }
    }
},
{
    delay: 2, duration: 1,
 }
),

chart => chart.animate({
    config: {
        channels: {
            x: { set: null },
            y: { set: ['Value 2 (+)', 'Country', 'Year'] },
            color: { set: 'Country' },
            label: { set: null}
        },
        title: '2 Stacked Column / Drill down(?), + Discrete(?)',
        geometry: 'rectangle',
        orientation: 'horizontal',
        split: false,
        legend: 'color'
    },
    style: {
        plot: {
            paddingLeft: '0em'
        }
    }
},
{
    delay: 0, duration: 2,
 }
),

chart => chart.animate({
    config: {
        channels: {
            x: { set: ['Year', 'Value 2 (+)'] },
            y: { set: ['Country'] },
            color: { set: 'Country' },
            label: { set: null}
        },
        title: '3 Stacked Column / Drill down(?), + Discrete(?)',
        geometry: 'rectangle',
        orientation: 'horizontal',
        split: false,
        legend: null
    },
    style: {
        plot: {
            paddingLeft: '8em'
        }
    }
},
{
    delay: 0, duration: 2,
 }
),

chart => chart.animate({
    config: {
        channels: {
            x: { set: 'Year' },
            y: { set: ['Country', 'Value 2 (+)'], range: { min: '0%', max: '110%' }  },
            color: { set: 'Country' }
        },
        title: '4 Stacked Column / Drill down(?), + Discrete(?)',
        geometry: 'rectangle',
        orientation: 'horizontal',
        split: false,
        legend: 'color'
    },
    style: {
        plot: {
            paddingLeft: '0em'
        }
    }
},
{
    delay: 0, duration: 2,
 }
),

chart => chart.animate({
    config: {
       channels: {
           x: { set: ['Year', 'Country'] },
           y: { set: 'Value 2 (+)', range: { min: '0%', max: '110%' }  },
           color: { set: 'Country' }
       },
       title: 'Groupped Column / Comparison(?), Group(?)',
       geometry: 'rectangle',
       orientation: 'horizontal',
       split: false,
       legend: null
   },
   style: {
       plot: {
           paddingLeft: '8em'
       }
   }
},
{
    delay: 2, duration: 1,
 }
),

 chart => chart.animate({
         config: {
            channels: {
                x: { set: 'Year' },
                y: { set: ['Country', 'Value 2 (+)'], range: { min: '0%', max: '110%' }  },
                color: { set: 'Country' }
            },
            title: 'Stacked Column / Sum(?), Stack(?)',
            geometry: 'rectangle',
            orientation: 'horizontal',
            split: false,
            legend: 'color'
        },
        style: {
            plot: {
                paddingLeft: '0em'
            }
        }
    },
    {
     delay: 1
     }
 ),

 chart => chart.animate({
         config: {
            channels: {
                x: { set: 'Year' },
                y: { set: ['Country', 'Value 2 (+)'], range: { min: '0%', max: '110%' }  },
                color: { set: 'Country' }
            },
            title: 'Splitted Column / Components(?)',
            geometry: 'rectangle',
            orientation: 'horizontal',
            split: true,
            legend: 'color'
        },
        style: {
            plot: {
                paddingLeft: '0em'
            }
        }
    }
 ),

 chart => chart.animate({
         config: {
            channels: {
                x: { set: 'Year' },
                y: { set: ['Country', 'Value 2 (+)'], range: { min: '0%', max: '110%' }  },
                color: { set: 'Country' }
            },
            title: 'Stacked Column / Sum(?), Stack(?)',
            geometry: 'rectangle',
            orientation: 'horizontal',
            split: false,
            legend: 'color'
        },
        style: {
            plot: {
                paddingLeft: '0em'
            }
        }
    },
    {
     delay: 1
     }
 ),

 chart => chart.animate({
    config: {
        channels: {
            x: { set: 'Year' },
            y: { set: ['Country', 'Value 2 (+)'], range: { min: '0%', max: '100%' } },
            color: { set: 'Country' }
        },
        title: 'Stacked Percentage Column / Ratio%(?)',
        align: 'stretch'
    },
    style: {
        plot: {
            paddingLeft: '0em',
            yAxis: {
                label: {
                   paddingRight: '0.8em',
                    fontSize: 13
                }
            }
        }
    }
}),


chart => chart.animate({
    config: {
       channels: {
           x: { set: 'Year' },
           y: { set: ['Country', 'Value 2 (+)'], range: { min: '0%', max: '110%' }  },
           color: { set: 'Country' }
       },
       title: 'Stacked Column / Sum(?), Stack(?)',
       geometry: 'rectangle',
       orientation: 'horizontal',
       split: false,
       legend: 'color',
       align: 'min'
   },
   style: {
       plot: {
           paddingLeft: '0em'
       }
   }
},
{
 delay: 1
 }
),
chart => chart.animate({
    config: {
       channels: {
           x: { set: 'Value 5 (+/-)' },
           y: { set: 'Value 2 (+)', range: { min: '0%', max: '110%' }  },
           color: { set: 'Country' },
           noop: { set:'Year' }
       },
       title: 'Scatter plot / + Continuous(?)',
       geometry: 'circle',
       orientation: 'horizontal',
       split: false,
       legend: 'color',
       align: 'min'
   },
   style: {
       plot: {
           paddingLeft: '0em'
       }
   }
},
{
    style: {
        delay: 0.5,
        duration: 1.5,
    },
     geometry: {
         delay: 0,
         duration: 1.3,
     },
     x: {
         delay: 1.25,
         duration: 1,
//                easing: 'ease-out'
     }, 
     y: {
         delay: 0.75,
         duration: 1,
//             easing: 'cubic-bezier(65,0,65,1)'
     }
 }
),
chart => chart.animate({
    config: {
       channels: {
           x: { set: 'Year' },
           y: { set: ['Country', 'Value 2 (+)'], range: { min: '0%', max: '110%' }  },
           color: { set: 'Country' },
           noop: { set: null }
       },
       title: 'Stacked Column / - Continuous(?)',
       geometry: 'rectangle',
       orientation: 'horizontal',
       split: false,
       legend: 'color',
       align: 'min'
   },
   style: {
       plot: {
           paddingLeft: '0em'
       }
   }
},
{
    delay: 1,
    style: {
        delay: 1.3,
        duration: 1.5,
    },
     geometry: {
         delay: 1.5,
         duration: 1.3,
     },
     x: {
         delay: 0,
         duration: 1,
//                easing: 'ease-out'
     }, 
     y: {
         delay: 0.75,
         duration: 1,
//             easing: 'cubic-bezier(65,0,65,1)'
     }
 }
),


chart => chart.animate({
    config: {
        channels: {
            x: { set: 'Year' },
            y: { set: 'Value 2 (+)', range: { min: '0%', max: '110%' }  },
            color: { set: 'Country' }
        },
        title: 'Lollipop / Distribute(?)',
        geometry: 'circle',
        orientation: 'horizontal',
        split: false
    }
},
   {
        coordSystem: {
            delay: 0,
            duration: 1,
        },
        geometry: { 
            delay: 0, 
            duration: 0.5, 
//                easing: 'linear' 
        },
        x: {
            delay: 0.5,
            duration: 0.5,
//                easing: 'ease-out'
        }, 
        y: {
            delay: 0,
            duration: 0.75,
//                easing: 'cubic-bezier(65,0,65,1)'
        }
    }
),

    chart => chart.feature('tooltip',true)
];

export default testSteps;