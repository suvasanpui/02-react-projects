import React from "react";
import { useEffect } from "react";
import { reducer } from "./Reducer";
import { createContext, useContext, useReducer } from "react";

//this is a api key
const api_key = "https://dummyjson.com/products/search?";

const initialstate = {
  query: "smartphone",
  total: 0,
  isLoading: true,
};

//create a context
const AppContext = createContext();

//create context provider
const AppProvider = ({ children }) => {
  //declare useReducer hook
  const [state, dispatch] = useReducer(reducer, initialstate);

  //declare fetchData() function
  try{
    const fetchData = async (url) => {
      const data = await fetch(url).then((res) => res.json());
      console.log(data);
    }
  }catch(e){
    console.log(e);
  }

  //use useEfect() hook for perform side effect
  useEffect(() => {
    fetchData(`${api_key}q=${initialstate.query}`); //call fetchData() with parameter api key
  });

  return <AppContext.Provider>{children}</AppContext.Provider>;
};

//create a custom hook
const useGlobalcontext=()=>{
  useContext(AppContext);
}
export { AppContext, AppProvider };
