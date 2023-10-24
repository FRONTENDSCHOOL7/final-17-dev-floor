import axios from "axios";

const url = 'https://api.mandarin.weniv.co.kr/user/login'

export const loginApi = async(email,password) => {
    const loginAccount = {
        'user': {
            'email': email,
            'password': password
        }
    }
    try {
        const response = await axios.post(url, loginAccount, {
            header: {
                "Content-type" : "application/json"
            }
        })
        return response.data;
    } catch (error) {
        throw error
    }
}


