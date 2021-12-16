import { data } from "/test/integration/test_options/data2.js";


export default class Chart {
    static static(width) {
        return chart => {
            let name = width.pathname.split("/").pop().split(".").shift();
            let pos1 = name.split("-").shift();
            console.log("plot xAxis ticks position: " + pos1);
            return chart.animate(
            {
                data: data,
                config : {
                    geometry: "circle",
                    channels: {
                        x: { attach: [ "Foo"] },
                        y: { attach: [ "Bar"] }
                    },
                    title: null,
                    legend: null,
                },
                style: {
                    plot: { 
                        xAxis: {
                            ticks: {
                                position: pos1
                            }
                        }
                    }
                }
            });
        }
    }

    static animated(width) {
        return chart => {
            let name = width.pathname.split("/").pop().split(".").shift();
            let pos2 = name.split("-").pop();
            console.log("plot xAxis ticks position: " + pos2);
            return chart.animate(
            {
                style: {
                    plot: { 
                        xAxis: {
                            ticks: {
                                position: pos2
                            }
                        }
                    }
                }
            })
        };
    }
};
