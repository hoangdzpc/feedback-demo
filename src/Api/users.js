import axiosClient from "./axiosClient";

const usersApi ={
    getAll(params){
        const url = '/Users';
        return axiosClient.get(url, { params: params });      
    },

    get(id) {
        const url = `/Users/${id}`;
        return axiosClient.get(url);  
    },

    add(data){
        const url = `/Users`;
        return axiosClient.post(url, data );  
    },

    update(data){
        const url = `/Users/${data.id}`;
        return axiosClient.patch(url, data );  
    },
    
    remove(id) {
        const url = `/Users/${id}`;
        return axiosClient.delete(url );  
    }
};

export default usersApi;