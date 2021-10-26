import { getUser } from './get-users';

const urlPerf = '/analytics/performance';
const dataTiming = {};

const t0_LoadFetch = performance.now();
getUser();
const t1_LoadFetch = performance.now();
const resultTimingFecth = t1_LoadFetch - t0_LoadFetch;

dataTiming["Measure the performance of fetching getUseer()"] = `${ resultTimingFecth } ms`;

const t0_LoadPage = performance.now();
window.addEventListener("load", (() => {
    console.log("Page Lodaed!");
})());
const t1_LoadPage = performance.now();

const resultTimingLoadPage = t1_LoadPage - t0_LoadPage;

dataTiming["Page load speed"] = `${ resultTimingLoadPage } ms`;
dataTiming["Page memory usage"] = `${ performance.memory.usedJSHeapSize / Math.pow(1000, 2) } mb`;

fetch(urlPerf, {
    method: "POST",
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify(dataTiming),
})
    .then(response => {
        if (response.ok === true) {
            return response.json();
        }
    })
    .then((data) => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });

console.log(dataTiming);

/*
// Solution from Mariia Seredenko (Web performance API)

export function perfCheck(communityTime) {
    let perfData = window.performance["timing"];
    let data = {};
    data.pageLoad = perfData.domContentLoadedEventEnd - perfData.navigationStart;
    data.usedJSHeapSize = performance.memory.usedJSHeapSize;
    data.communityRequestTime = communityTime;
    console.log('Fetch info: ' + communityTime + ' ms');
    console.log('Page load time: ' + data.pageLoad + ' ms');
    console.log('Pge memory usage: ' + data.usedJSHeapSize + ' bytes');
    fetch('http://localhost:8080/api/analytics/performance', {
        method: 'POST',
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => console.log(data));
}

*/
