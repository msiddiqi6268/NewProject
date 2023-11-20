import { HOST_API } from "./constants"  // intitial server url
import axios from 'axios'


// Configuration for sending data to server ====================================
let config = {
    headers: {
        'Content-Type': 'application/json',
    }
}


// =============================================================================
// Sending Registration request to server
// =============================================================================

export const registerRequest = (data) => {
    const body = JSON.stringify(data)
    return axios.post(`/api/auth/register`, body, config)
}


// =============================================================================
// Sending Logout Request to server
// =============================================================================
export const logout= ()=>{
    let config = {
        headers:{
            'Content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
        }
    }
    const body = JSON.stringify({refreshToken:localStorage.getItem('refreshToken')})
    let res =axios.post(`/api/gen/logout`,body, config);
    return res;
}

// =============================================================================
// Sending Login Request
// =============================================================================
export const loginRequest = (data) => {
    const body = JSON.stringify(data)
    return axios.post(`${HOST_API}/auth/jwt/create/`, body, config)
}

