import { formDetails, inputEmail, unsubscribeBtn } from './query-selectors';

export const displayForm = () => {
    inputEmail.value = "";
    formDetails.style.display = "flex";
    unsubscribeBtn.style.display = "none";
};

export const displayUnsubscribe = () => {
    formDetails.style.display = "none";
    unsubscribeBtn.style.display = "block";
};
