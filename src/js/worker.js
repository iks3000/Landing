onmessage = function (e) {
    console.log("Message received from main script", e.data);
    const workerResult = e.data;
    const dataEmail = { workerResult };
    fetch('/analytics/user', {
        method: "POST",
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(dataEmail),
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
}
