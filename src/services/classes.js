import axios from 'axios';

export const getClasse = async (data) => {
    try {
        const res = await axios.get(
            'http://192.168.1.25:4500/classes', data
        );
        console.log('getClasse', res.status);
        return res.data;
    } catch (error) {
        console.log('error', error)
        return error.response;
    }
};