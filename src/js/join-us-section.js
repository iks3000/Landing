
import { unsubscribe } from './unsubscribe';
import { subscribe } from './subscribe';
import { displayForm, displayUnsubscribe } from './display-elements';
import { getTitle, getButton, joinSection, formDetails, inputEmail, unsubscribeBtn } from './query-selectors';

const emailLocalStorage = localStorage.getItem("email");

const urlUnsubscribe = '/unsubscribe';
const urlSubscribe = '/subscribe';

export const events = () => {
    window.addEventListener("load", () => {
        if (joinSection !== null) joinSection.style.display = "block";
        if (inputEmail !== null) {
            subscribe(formDetails, urlSubscribe, inputEmail, getButton);
        };
        unsubscribe(unsubscribeBtn, urlUnsubscribe);
        console.log(emailLocalStorage);
        emailLocalStorage ? displayUnsubscribe() : displayForm();
    });
};

class Creator {
    constructor(title, button) {
        this.title = title;
        this.button = button;
    }
}

const standardType = new Creator("Join Our Program", "Subscribe");
const advancedType = new Creator("Join Our Advanced Program", "Subscribe to Advanced");

export function changeContentStandard() {
    window.addEventListener("load", () => {
        getTitle.innerHTML = standardType.title;
        getButton.innerHTML = standardType.button;
    });
}

export function changeContentAdvance() {
    window.addEventListener("load", () => {
        getTitle.innerHTML = advancedType.title;
        getButton.innerHTML = advancedType.button;
    });
}

export const remove = () => {
    joinSection.remove();
};


/*

// Solution from Mariia Seredenko (Web performance API)

let startTime = Date.now();
xhttp.onreadystatechange = function () {
    if (xhttp.readyState === XMLHttpRequest.DONE) {
        let endTime = Date.now();
        let communityTime = endTime - startTime;
        perfCheck(communityTime);

*/