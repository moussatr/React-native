import axios from 'axios';

export const getClasse = async (data) => {
    try {
        const res = await axios.get(
            'http://172.23.144.1:4500/classes', data
        );
        console.log('getClasse', res.status);
        return res.data;
    } catch (error) {
        console.log('error', error)
        return error.response;
    }
};

export const getClasseById = async (data) => {
    try {
        const res = await axios.get(
            'http://172.23.144.1:4500/classes', data
        );
        console.log(' getClasseById', res.status);
        return res.data;
    } catch (error) {
        console.log('error', error)
        return error.response;
    }
};

export const postClasse = async (data) => {
    try {
        const res = await axios.get(
            'http://172.23.144.1:4500/classes', data
        );
        console.log('postClasse', res.status);
        return res.data;
    } catch (error) {
        console.log('error', error)
        return error.response;
    }
};

export const putClasse = async (data) => {
    try {
        const res = await axios.get(
            'http://172.23.144.1:4500/classes', data
        );
        console.log('putClasse', res.status);
        return res.data;
    } catch (error) {
        console.log('error', error)
        return error.response;
    }
};

export const deleteClasse = async (data) => {
    try {
        const res = await axios.get(
            'http://172.23.144.1:4500/classes', data
        );
        console.log('deleteClasse', res.status);
        return res.data;
    } catch (error) {
        console.log('error', error)
        return error.response;
    }
};

