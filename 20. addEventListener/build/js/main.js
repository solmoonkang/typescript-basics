"use strict";
document.addEventListener("click", (event) => {
});
document.addEventListener("keypress", (event) => {
});
document.addEventListener("submit", (event) => {
});
function handleEvent(eventName, callBack) {
    if (eventName === 'click') {
        callBack({ x: 0, y: 0 });
    }
    else if (eventName === 'keypress') {
        callBack({ key: 'Enter' });
    }
}
handleEvent('click', (e) => { });
