let listeners =[];
export let isAuthorized = false;
const EMAIL = 'hismailforyou@gmail.com';
const PASSWORD = '12345';
export const authorizeUser = (email, password) => {
    isAuthorized = email === EMAIL && password === PASSWORD;
    listeners.map(fn => fn(isAuthorized));
    return isAuthorized;
};
export const addListener = fn => {
    listeners.push(fn);
};
export const removeListener = fn => {
    listeners = listeners.filter(listener => listener !== fn);
};
