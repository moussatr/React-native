import axios from 'axios';


export const getLessons = async (data) => {
    try {
        const res = await axios.get('http://172.23.144.1:4500/lessons', data);
        console.log(" POE",res.data);
        return res.data;
    } catch (error) {
        console.log(error.response.data);
        
        
    }
    

};

export const getLessonsByIc = async (data) => {
    try {
        const res = await axios.get('http://172.23.144.1:4500/lessons', data);
        console.log(" POE",res.data);
        return res.data;
    } catch (error) {
        console.log(error.response.data);
        
        
    }
    

};

export const postLessons = async (data) => {
    try {
        const res = await axios.get('http://172.23.144.1:4500/lessons', data);
        console.log(" POE",res.data);
        return res.data;
    } catch (error) {
        console.log(error.response.data);
        
        
    }
    

};

export const putLessons = async (data) => {
    try {
        const res = await axios.get('http://172.23.144.1:4500/lessons', data);
        console.log(" POE",res.data);
        return res.data;
    } catch (error) {
        console.log(error.response.data);
        
        
    }
    

};

export const deleteLessons = async (data) => {
    try {
        const res = await axios.get('http://172.23.144.1:4500/lessons', data);
        console.log(" POE",res.data);
        return res.data;
    } catch (error) {
        console.log(error.response.data);
        
        
    }
    

};