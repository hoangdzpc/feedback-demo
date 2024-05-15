import axiosClient from "./axiosClient";

const serviceTypeApi ={
    getAll(params){
        const url = '/ServiceTypes';
        return axiosClient.get(url, { params: params });      
    },

    get(id) {
        const url = `/ServiceTypes/${id}`;
        return axiosClient.get(url);  
    },

    add(data){
        const url = `/ServiceTypes`;
        return axiosClient.post(url, data );  
    },

    update(data){
        const url = `/ServiceTypes/${data.id}`;
        return axiosClient.patch(url, data );  
    },
    
    remove(id) {
        const url = `/ServiceTypes/${id}`;
        return axiosClient.delete(url );  
    }
};

export default serviceTypeApi;