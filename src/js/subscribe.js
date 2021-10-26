import { displayUnsubscribe } from './display-elements';
import { validate } from './email-validator';

export const subscribe = (form, url, input, btn) => {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const dataEmail = { email: input.value };
        if (input.value === "") {
            console.log(input.value)
            alert("Type Email address")
        } else if (!validate(input.value)) {
            alert("Invalid email, only gmail.com, outlook.com and yandex.ru");
            input.value = "";
        } else {
            localStorage.setItem("email", input.value);
            fetch(url, {
                method: "POST",
                headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
                body: JSON.stringify(dataEmail)
            })
                .then(response => {
                    btn.setAttribute("disabled", "disabled");
                    btn.style.opacity = "0.5";
                    if (response.ok === true) {
                        btn.removeAttribute("disabled");
                        btn.style.opacity = "1";
                        displayUnsubscribe();
                        return response.json();
                    }
                    if (response.status === 422) {
                        btn.removeAttribute("disabled");
                        btn.style.opacity = "1";
                        localStorage.clear();
                        return response.json();
                    }
                })
                .then((data) => {
                    if (data.error !== undefined) {
                        alert(`${ input.value }  ${ data.error }`);
                        input.value = "";
                    }
                    console.log('Success:', data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
    }, false);
}
