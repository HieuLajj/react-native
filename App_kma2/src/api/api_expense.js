import client from './client'
import React,{useState} from 'react';
const addExpense = async(id,inputs) => {
    console.log(inputs)
    const config = {
      headers: {
        Authorization: `jwt ${id}`
      },
    };
    try {
      const res = await client.post('/laihieu/expense/add_expense'
      ,
      {
        title: inputs.title,
        description: inputs.description,
        amount: inputs.amount,
      }
      ,
      config
      );
      if (res.data.success){
        console.log("update anh thanh cong")
      }  
      console.log("ok fine")
    } catch (error) {
      console.log(error.message);
    }
}

const deleteExpense = async(id,id_item)=>{
  const config = {
    headers: {
      Authorization: `jwt ${id}`
    },
   };
   try {
    const res = await client.delete(`/laihieu/expense/delete/${id_item}`
    ,
    config
    );
    if (res.data.success){
      console.log("xoa thanh ong")
    }  
    return res.json;
   // console.log(data3)
  } catch (error) {
    console.log(error.message);
  }
}

const listbyuser = async(id)=>{
    const config = {
        headers: {
          Authorization: `jwt ${id}`
        },
    };
    try {
        const res = await client.get('/laihieu/expense/listbyuser'
        ,
        config
        );
        if (res.data.success){
          console.log("update anh thanh cong")
        }  
       // setData3(res.data)
       
        return await res.data
       // console.log(data3)
      } catch (error) {
        console.log(error.message);
      }
  }
export {
    addExpense,
    listbyuser,
    deleteExpense,
}