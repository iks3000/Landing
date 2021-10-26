import { containerUser, communityBlock } from './query-selectors';
import { bigCommunityLink } from './query-selectors';
const urlcommunity = '/community';

const description = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor.",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.",
    "Aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
];

export const getUser = () => {
    const dataSucceed = (parsedData) => {

        for (let i = 0, j = 0; i < parsedData.length; i++, j++) {
            parsedData[i].description = description[j];
            if (j == description.length - 1) {
                j = -1;
            }
        };

        let htmlUsers = '';

        parsedData.map(user => {
            let htmlSegment = `
                <div class="user">
                    <img class="user-img" src="${ user.avatar }" >
                    <p class="user-description">${ user.description }</p>
                    <p class="user-name">${ user.firstName } ${ user.lastName }</p>
                    <p class="user-position">${ user.position }</p>
                </div>
            `;
            htmlUsers += htmlSegment;
        });
        containerUser.innerHTML = htmlUsers;
    }

    const dataError = () => {
        bigCommunityLink.remove();
        communityBlock.remove();
    }

    const handleError = (response) => {
        if (!response.ok) {
            throw new Error((response.status + ': ' + response.statusText));
        }
        return response.json();
    }

    const createRequest = (url, succeed, fail) => {
        fetch(url)
            .then(response => handleError(response))
            .then(data => succeed(data))
            .catch(error => fail(error));
    }
    createRequest(urlcommunity, dataSucceed, dataError);
};

/*
// or another way

window.addEventListener("load", () => {
    performance.mark("getUserStart");
    fetch(urlcommunity)
        .then(response => response.json())
        .then((data) => {

            for (let i = 0, j = 0; i < data.length; i++, j++) {
                data[i].description = description[j];
                if (j == description.length - 1) {
                    j = -1;
                }
            };

            let htmlUsers = '';
            data.map(user => {
                let htmlSegment = `
                    <div class="user">
                        <img class="user-img" src="${ user.avatar }" >
                        <p class="user-description">${ user.description }</p>
                        <p class="user-name">${ user.firstName } ${ user.lastName }</p>
                        <p class="user-position">${ user.position }</p>
                    </div>
                `;
                htmlUsers += htmlSegment;
            });
            containerUser.innerHTML = htmlUsers;
        })
        .catch(err => communityBlock.remove());
});
*/