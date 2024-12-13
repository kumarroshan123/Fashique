import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";

export let ContextName=createContext();

const ContextData=({children})=>{
    let [productdata,setproductdata]= useState();
    useEffect(()=>{
        const f=async()=>{
            const res= await fetch("");
            const data= await res.json();
            setproductdata(productdata);
        }
    },)
    return <ContextName.Provider value={{productdata,setproductdata}} >{children}</ContextName.Provider>
}

export default ContextData