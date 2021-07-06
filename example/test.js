//import Vizzu from 'https://vizzu-lib-main.storage.googleapis.com/lib/vizzu.js';
import Vizzu from './lib/vizzu.js';


function digestMessage(message) {
    return new Promise(resolve => {
        let msgUint8 = new TextEncoder().encode(message);
        crypto.subtle.digest('SHA-256', msgUint8).then(hashBuffer => {
            let hashArray = Array.from(new Uint8Array(hashBuffer));
            let hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
            resolve(hashHex);
        })
    });
}


let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);
let testCase = urlParams.get('testCase');
let status = 'PASSED';
import('./testCases/' + testCase).then((module) => {
    let chart = new Vizzu('vizzuCanvas');
    chart.initializing.then((chart) => {
        let promise = Promise.resolve(chart);
        for (let i = 0; i < module.default.testSteps.length; i++) {
            promise = promise.then((chart) => {
                let prom = module.default.testSteps[i].task(chart)
                let anim = chart.animation;
                let seekPromise = Promise.resolve();
                for (let j = 20; j <= 100; j+=20) {
                    seekPromise = seekPromise.then(() => {
                        anim.pause();
                        anim.seek(j + '%');
                    }).then(() => new Promise(resolve => setTimeout(resolve, 100))).then(() => {
                        let cavasElement = document.getElementById('vizzuCanvas');
                        let dataURL = cavasElement.toDataURL();
                        return dataURL;
                    }).then(dataURL => digestMessage(dataURL)).then(digestBuffer => {
                            if (module.default.testSteps[i].ref == digestBuffer) {
                                console.log(testCase + ':' + i + ':' + j + ':' + 'PASSED');
                            } else {
                                status = 'FAILED';
                                console.error(testCase + ':' + i + ':' + j + ':' + 'FAILED' + ':' + digestBuffer);
                            }
                        })
                }
                anim.play();
                return prom 
            })
        }
        promise.then(() => {
            window.result = 'status';
        })
    })
})