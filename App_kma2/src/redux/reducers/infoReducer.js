export const CAP_NHAT_EMAIL = "CAP_NHAT_EMAIL";
export const CAP_NHAT_NAME = "CAP_NHAT_NAME";
export const CAP_NHAT_PHONE = "CAP_NHAT_PHONE";
export const CAP_NHAT_TOKEN = "CAP_NHAT_TOKEN";
export const CAP_NHAT_AVATAR = "CAP_NHAT_AVATAR";
export const CAP_NHAT = "CAP_NHAT";

const initialState = {
    email: "",
    name: "",
    phone: "",
    token: "",
    avatar: "",
}

export default function actionForReducer(state = initialState, payload){
    switch(payload.type){
        case CAP_NHAT:
            return{
                ...state,
                email: payload.email,
                name: payload.name,
                phone: payload.phone,
                token: payload.token,
                avatar:payload.avatar,
            }
        default:
            return state
    }
}

