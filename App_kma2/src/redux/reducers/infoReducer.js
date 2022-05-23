export const CAP_NHAT_EMAIL = "CAP_NHAT_EMAIL";
export const CAP_NHAT_NAME = "CAP_NHAT_NAME";
export const CAP_NHAT_PHONE = "CAP_NHAT_PHONE";
export const CAP_NHAT_TOKEN = "CAP_NHAT_TOKEN";
export const CAP_NHAT_AVATAR = "CAP_NHAT_AVATAR";

const initialState = {
    email: "",
    name: "",
    phone: "",
    token: "",
    avatar: "",
}

export default function actionForReducer(state = initialState, payload){
    switch(payload.type){
        case CAP_NHAT_EMAIL:
            return{
                ...state,
                email: payload.email
            }
        case CAP_NHAT_NAME:
            return{
                ...state,
                name: payload.name
            }
        case CAP_NHAT_PHONE:
            return{
                ...state,
                phone: payload.phone
            }
        case CAP_NHAT_TOKEN:
            return{
                ...state,
                token: payload.token
            }
        case CAP_NHAT_AVATAR:
            return{
                ...state,
                avatar:payload.avatar
            }
        default:
            return state
    }
}

