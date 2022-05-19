
import{CAP_NHAT_EMAIL,CAP_NHAT_ID} from '../reducers/infoReducer';
export const updateEmail=(email)=> async dispatch =>{
    try {
        await console.log("bat dau len server")
        new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve()
            },3000)
        });
        await console.log("Da Cap Nhap Len Server")
        dispatch({
            type: CAP_NHAT_EMAIL,
            email:email
        })
    } catch (error) {
      
    }
}