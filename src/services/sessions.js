import axios from 'axios';

export const getSessions = async (data) => {
    try {
        const res = await axios.get(
            'http://172.23.144.1:4500/classes', data
        );
        console.log('getSessions', res.status);
        return res.data;
    } catch (error) {
        console.log('error', error)
        return error.response;
    }
};

export const postSessions = async (data) => {
    try {
        const res = await axios.get(
            'http://172.23.144.1:4500/classes', data
        );
        console.log('postSessions', res.status);
        return res.data;
    } catch (error) {
        console.log('error', error)
        return error.response;
    }
};

export const getSessionsById = async (data) => {
    try {
        const res = await axios.get(
            'http://172.23.144.1:4500/classes', data
        );
        console.log('getSessionsById', res.status);
        return res.data;
    } catch (error) {
        console.log('error', error)
        return error.response;
    }
};

export const putSessions = async (data) => {
    try {
        const res = await axios.get(
            'http://172.23.144.1:4500/classes', data
        );
        console.log('putSessions', res.status);
        return res.data;
    } catch (error) {
        console.log('error', error)
        return error.response;
    }
};

export const deleteSessions = async (data) => {
    try {
        const res = await axios.get(
            'http://172.23.144.1:4500/classes', data
        );
        console.log('deleteSessions', res.status);
        return res.data;
    } catch (error) {
        console.log('error', error)
        return error.response;
    }
};