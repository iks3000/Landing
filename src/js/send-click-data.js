export const sendClickData = () => {
    if (window.Worker) {
        const myWorker = new Worker("../src/js/worker.js");
        const arrClick = [];
        document.body.addEventListener("click", (e) => {
            if (e.target.dataset.attr) {
                arrClick.push(e.target.dataset.attr);
            }
            if (arrClick.length === 5) {
                myWorker.postMessage(arrClick);
                localStorage.clear();
                arrClick.length = 0;
            }
            console.log('Count of Clicks = ', arrClick.length)
        }, false);
    }
}
