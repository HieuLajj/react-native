
import{CAP_NHAT_EMAIL,CAP_NHAT_PHONE,CAP_NHAT_TOKEN,CAP_NHAT_NAME,CAP_NHAT_AVATAR} from '../reducers/infoReducer';
export const updateEmail=(email)=> async dispatch =>{
    try {
        dispatch({
            type: CAP_NHAT_EMAIL,
            email:email
        })
    } catch (error) {     
    }
}
export const updatePhone=(phone)=> async dispatch =>{
    try {
        dispatch({
            type: CAP_NHAT_PHONE,
            phone:phone
        })
    } catch (error) {     
    }
}
export const updateName=(name)=> async dispatch =>{
    try {
        dispatch({
            type: CAP_NHAT_NAME,
            name:name
        })
    } catch (error) {     
    }
}
export const updateToken=(token)=> async dispatch =>{
    try {
        dispatch({
            type: CAP_NHAT_TOKEN,
            token:token
        })
    } catch (error) {     
    }
}
export const updateAvatar=(avatar)=> async dispatch =>{
    try {
        dispatch({
            type: CAP_NHAT_AVATAR,
            avatar:avatar
        })
    } catch (error) {     
    }
}

