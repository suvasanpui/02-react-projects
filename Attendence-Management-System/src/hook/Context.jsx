import React, { createContext, useContext, useReducer, useState } from "react";
import reducer from "./Reducer";

  //declare initial state
  const initialState={
    isLogin:true,
  }

  //create a context
  const AppContext=createContext();

  //context provider
  const AppContextProvider=({children})=>{
    //this is a useReducer state
    const [state,dispatch]=useReducer(reducer,initialState);

    //declare login form handling function
    const loginHandling=()=>{
      dispatch({
        type:"IS_SIGN_UP",
      })
    }

    //declare signup form handling
    const signupHandling=()=>{
      dispatch({
        type:"IS_LOGIN",
      })
    }
    
    //return context
    return(
      <AppContext.Provider value={{...state,loginHandling,signupHandling}}>
        {children}
      </AppContext.Provider>
    );
  }


  const useGlobalContext=()=>{
    return useContext(AppContext);
  }

export {useGlobalContext,AppContextProvider,AppContext};

