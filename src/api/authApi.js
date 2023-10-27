import axios from "axios";

const baseUrl = 'https://api.mandarin.weniv.co.kr'
const loginReq = '/user/login'
const joinReq = '/user'
const emailReq = '/user/emailvalid'
const accountReq = '/user/accountnamevalid'
// login
export const loginApi = async(email,password) => {
    const loginAccount = {
        'user': {
            'email': email,
            'password': password
        }
    }
    try {
        const response = await axios.post(baseUrl+loginReq, loginAccount, {
            header: {
                "Content-type" : "application/json"
            }
        })
        return response.data;
    } catch (error) {
        throw error
    }
}
// join
export const joinApi = async(joinData) => {
    // const joinAccount = {
    //     'user': {
    //         'email': email,
    //         'password': password,
    //         'accountname': accountname,
    //         'username': username,
    //         'intro': intro,
    //         'image': image
    //     }
    // }
    try {
        const response = await axios.post(baseUrl+joinReq, joinData,{
        headers: {
            "Content-type" : "application/json"
        },
        })
        return response.data;
    } catch (error) {
        if (error.response) {
            // 서버에서 응답을 받은 경우
            console.error("서버 응답 오류:", error.response.data);
            throw error.response.data;
        } else if (error.request) {
            // 요청은 성공했지만 응답이 없는 경우 (네트워크 오류 등)
            console.error("요청 오류:", error.request);
            throw "서버에 연결할 수 없습니다.";
        } else {
            // 요청을 보내기 전에 발생한 다른 오류
            console.error("오류:", error.message);
            throw error.message;
        }
    }
}

// 이메일 유효성 검사
export const validateEmail = async (email) => {
    try {
        const response = await axios.post(baseUrl+emailReq, { 
        user: {email} });
        if (response.data && response.data.exists) {
            // 이미 사용 중인 이메일인 경우
            return false;
        }
    
        // 사용 가능한 이메일인 경우
        return true;
    } catch (error) {
        console.error('이메일 유효성 검사 에러:', error);
        return false;
    }
};

// 계정 유효성 검사
export const validateAccount = async (accountName) => {
    try {
        const response = await axios.post(baseUrl+accountReq, { user: {accountName}  });
        if(response.data && response.data.exists) {
            return false; //이미 사용중인 계정아이디
        }
        return true;
    } catch (error) {
        console.error('계정 유효성 검사 에러:', error);
        return false;
    }
};




