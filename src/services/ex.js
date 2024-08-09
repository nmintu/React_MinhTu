import { request } from "@/config/request";
import { apiuser } from "@/config/apiuser";
export const HomeAPI = {
    getUsers: async () => {
        const response = await request.get(`/users`);
        return response.data;
    },
    putLogin: async (address, typeSocial) => {
        const response = await apiuser.put(`/user`, { address, typeSocial });
        return response.data;
    },
    postVerifySocial: async ({ address, typeSocial }) => {
        const response = await apiuser.post(`/user/verifySocial`, { address, typeSocial });
        return response.data;
    },
    getSocial: async ({ address }) => {
        const response = await apiuser.get(`/user/social?address=${address}`);
        return response.data;
    },
    getUser: async ({ address }) => {
        const response = await apiuser.get(`/user?address=${address}`);
        return response.data;
    },


};