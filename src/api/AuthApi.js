import axios from "axios";

const baseUrl = 'https://api.mandarin.weniv.co.kr'
const loginReq = '/user/login'
const joinReq = '/user'
const emailReq = '/user/emailvalid'
const accountReq = '/user/accountnamevalid'
const imgReq = '/image/uploadfile'
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
            // 요청은 성공했지만 응답이 없는 경우 (네트워크 오류)
            console.error("요청 오류:", error.request);
            throw "서버에 연결할 수 없습니다.";
        } else {
            // 요청을 보내기 전에 발생한 다른 오류
            console.error("오류:", error.message);
            throw error.message;
        }
    }
}

// // 이메일 유효성 검사
// export const validateEmail = async (email) => {
//     try {
//         const response = await axios.post('https://api.mandarin.weniv.co.kr/user/emailvalid',  
//         email );
//         console.log(response.data)
//         if (response.data && response.data.includes(email)) {
//             // 이미 사용 중인 이메일인 경우
//         console.log('사용중')
        
//             return false;
//         } else{
// // 사용 가능한 이메일인 경우
// console.log('사용안함')
//         }
// return true;
        

//     } catch (error) {
//         console.error('이메일 유효성 검사 에러:', error);
//         return false;
//     }
// };
// export const validateEmail = async (email) => {
//     try {
//         const response = await axios.post('https://api.mandarin.weniv.co.kr/user/emailvalid', email);

//         if (response.data) {
//                         // 이미 사용 중인 이메일인 경우
//                     console.log('사용중')
                    
//                         return false;
//                     } else{
//             // 사용 가능한 이메일인 경우
//             console.log('사용안함')
//             return true;

//                     }

//         } catch (error) {
//         console.error(error);
        
//         }
//     };
// export const validateEmail = async (email) => {
//     try {
//         const response = await axios.post(baseUrl+emailReq, { 
//         user: {email} });
//         console.log(response.data)
//         if (response.data.error && response.data.includes(email)) {
//             // 이미 사용 중인 이메일인 경우
//             return false;
//         }
//         // 사용 가능한 이메일인 경우
//         return true;
//     } catch (error) {
//         console.error('이메일 유효성 검사 에러:', error);
//         return false;
//     }
// };
export const validateEmail = async (email) => {
    try {
        const response = await axios.post(baseUrl+emailReq, { 
        user: {email} });
        const json = response.data
        
        
        // 사용 가능한 이메일인 경우
        return json.message;
    } catch (error) {
        console.error('이메일 유효성 검사 에러:', error);
        
         // 이미 사용 중인 이메일인 경우
        return false;
    }
};

// 계정 유효성 검사
export const validateAccount = async (accountname) => {
    try {
        const response = await axios.post(baseUrl+accountReq, {user: {accountname}} );
        console.log(response.data.message)
        return true;
    } catch (error) {
        console.error('계정 유효성 검사 에러:', error);
        return false;
    }
};
// 이미지 api
export const profileImgApi = async (file) => {
    const formData = new FormData();
    formData.append("image", file);
    try {
        const res = await axios.post(baseUrl+imgReq, formData, {
            headers: {
                "Content-type": "multipart/form-data",
            },
        });
        console.log(res);
        return res.data;
        } catch (error) {
        alert("업로드 실패");
        }
    };
