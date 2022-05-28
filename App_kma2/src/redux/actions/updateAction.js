
import{CAP_NHAT_EMAIL,CAP_NHAT_PHONE,CAP_NHAT_TOKEN,CAP_NHAT_NAME,CAP_NHAT_AVATAR,CAP_NHAT,} from '../reducers/infoReducer';
export const updateInfomation=(email,name,phone,token,avatar)=> async dispatch =>{
    try {
        dispatch({
            type: CAP_NHAT,
            email:email,
            name:name,
            phone:phone,
            token:token,
            avatar:avatar,
        })
    } catch (error) {     
    }
}


