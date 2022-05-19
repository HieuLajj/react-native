import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import {
  ADD_TRANSACTION,
  DELETE_TRANSACTION,
  GET_TRANSACTIONS,
} from "./actionTypes";
import axios from "axios";

// InitialState
const initState = {
  transactions: [],
};

// Create context
export const AppContext = createContext(initState);

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initState);

  // Actions

  // GET Contacts
  const getTransaction = async () => {
    try {
      const res = await axios.get("http://192.168.1.8:4000/api/transactions");
      dispatch({
        type: GET_TRANSACTIONS,
        payload: res.data,
      });
    } catch (error) {
      console.log("Err", error);
    }
  };
  const addTransaction = async (transaction) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post(
        "http://192.168.1.8:4000/api/transactions",
        transaction,
        config
      );
      dispatch({
        type: ADD_TRANSACTION,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // Delete
  const deleteTransaction = async (id) => {
    console.log("ID :", id);
    try {
      await axios.delete(`http://192.168.1.8:4000/api/transactions/${id}`);
      dispatch({
        type: DELETE_TRANSACTION,
        payload: id,
      });
    } catch (error) {
      console.log(error);
    }
  };
  // Return
  return (
    <AppContext.Provider
      value={{
        transactions: state.transactions,
        addTransaction,
        deleteTransaction,
        getTransaction,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
