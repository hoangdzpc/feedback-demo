import axiosClient from "./axiosClient";

const suggestCommentApi ={
    getAll(params){
        const url = '/SuggestComments';
        return axiosClient.get(url, { params: params });      
    },

    get(id) {
        const url = `/SuggestComments/${id}`;
        return axiosClient.get(url);  
    },

    add(data){
        const url = `/SuggestComments`;
        return axiosClient.post(url, data );  
    },

    update(data){
        const url = `/SuggestComments/${data.id}`;
        return axiosClient.patch(url, data );  
    },
    
    remove(id) {
        const url = `/SuggestComments/${id}`;
        return axiosClient.delete(url );  
    }
};

export default suggestCommentApi;