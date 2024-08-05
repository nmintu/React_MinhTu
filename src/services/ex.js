import { request } from "@/config/request";
export const HomeAPI = {
    // getAllUser: async () => {
    //     const response = await request.get(`/users`);

    //     return response.data;
    // },
    getUsers: async () => {
        const response = await request.get(`/users`);
        return response.data;
    },

};