import axios from "axios";
import QueryString from "qs";

export const apiuser = axios.create({
    headers: {
        "content-type": "application/json;charset=UTF-8",
    },
    baseURL: "https://betrasua.onrender.com/api/v1",
    timeout: 50000,
});
apiuser.defaults.paramsSerializer = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    serialize: () => {
        return QueryString.stringify(params, { arrayFormat: "repeat" });
    },
};
apiuser.interceptors.request.use((config) => {
    return config;
});

apiuser.interceptors.response.use((response) => {
    if (response) return response;

    return response;
});