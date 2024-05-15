import axiosClient from "./axiosClient";

const ratedEntitieApi ={
    getAll(params){
        const url = '/RatedEntities';
        return axiosClient.get(url, { params: params });      
    },

    get(id) {
        const url = `/RatedEntities/${id}`;
        return axiosClient.get(url);  
    },

    add(data){
        const url = `/RatedEntities`;
        return axiosClient.post(url, data );  
    },

    update(data){
        const url = `/RatedEntities/${data.id}`;
        return axiosClient.patch(url, data );  
    },
    
    remove(id) {
        const url = `/RatedEntities/${id}`;
        return axiosClient.delete(url );  
    }
};

export default ratedEntitieApi;