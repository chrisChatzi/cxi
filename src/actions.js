import { } from './general/logic.js'

export const route = (path) => {
    return {
        type: "ROUTE",
        path
    };
};
export const filter_projects = (projects) => {
    return {
        type: "filter_projects",
        projects
    };
};