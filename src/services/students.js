import axios from 'axios'
import {useState} from 'react'

export const login = async (data) => {
    try {
        const res = await axios.post('http://192.168.208.79:4500/students/login', data);
        console.log(res.data);
        return res.data;
    } catch (error) {
        console.log(error.response.data);
        
        
    }

}

export const register = async (data) => {
    try {
        const res = await axios.post('http://192.168.208.79:4500/students/register', data);
        console.log(res.data);
        return res.data;
    } catch (error) {
        console.log(error.response.data);
        
        
    }
    

}


export const getMeApi1 = async (data) => {
    try {
        const res = await axios.get(
            'http://192.168.208.79:4500/students/me',data
        );
        return res.data;
    } catch (error) {
        console.log('error', error)
        return error.response;
    }
}

export const getMeApi = async (data) => {
    try {
        const res = await axios.get(
            'http://192.168.208.79:4500/students',data
        );
        return res.data;
    } catch (error) {
        console.log('error', error)
        return error.response;
    }
}