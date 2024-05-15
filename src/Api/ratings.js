import axiosClient from "./axiosClient";

const RatingApi ={
    getAll(params){
        const url = '/Ratings';
        return axiosClient.get(url, { params: params });      
    },

    get(id) {
        const url = `/Ratings/${id}`;
        return axiosClient.get(url);  
    },

    add(data){
        const url = `/Ratings`;
        return axiosClient.post(url, data );  
    },

    update(data){
        const url = `/Ratings/${data.id}`;
        return axiosClient.patch(url, data );  
    },
    
    remove(id) {
        const url = `/Ratings/${id}`;
        return axiosClient.delete(url );  
    }
};

export default RatingApi;