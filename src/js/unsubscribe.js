import { displayForm } from './display-elements';

export const unsubscribe = (element, url) => {
    element.addEventListener("click", () => {
        fetch(url, {
            method: "POST",
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        })
            .then(response => {
                element.setAttribute("disabled", "disabled");
                element.style.opacity = "0.5";
                if (response.ok === true) {
                    element.removeAttribute("disabled");
                    element.style.opacity = "1";
                    localStorage.clear();
                    displayForm();
                    return response.json();
                }
            })
            .then((data) => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    });
}
