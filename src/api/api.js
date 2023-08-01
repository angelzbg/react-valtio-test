import fundsProxy from "../valtio/funds";
import routerProxy from "../valtio/mockRouter";

const getRandomInt = (min = 1, max = 10000000) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
};

export const createFund = (name, volume) => {
    const newFund = { name, volume, id: getRandomInt() };
    fundsProxy.funds.push(newFund);
    routerProxy.page = routerProxy.pages.funds;
};
