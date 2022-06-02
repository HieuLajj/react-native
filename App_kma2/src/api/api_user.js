import client from './client'
const loginUser = async(inputs) => {
   try {
        
       const res = await client.post('/laihieu/user/sign_in',{...inputs}) 
       console.log(res.data);
       return await res.data     
    } catch (error) {
        console.log(error.message);    
    }
}

const registerUser = async(inputs)=>{
    try {
        const res = await client.post('/laihieu/user/add_user',{...inputs})
        return await res.data
    } catch (error) {
        console.log(error.message)
    }
}
export {
    loginUser,
    registerUser,
}