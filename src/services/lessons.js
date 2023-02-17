import axios from 'axios';


export const getLessons = async (data) => {
    try {
        const res = await axios.get('http://192.168.208.79:4500/lessons', data);
        console.log(" POE",res.data);
        return res.data;
    } catch (error) {
        console.log(error.response.data);
        
        
    }
    

}