import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";

export let ContextName=createContext();

const ContextData=({children})=>{
    const [productdata,setproductdata]= useState();
    const [isAuthenticated,setisAuthenticated] = useState(false);
    useEffect(()=>{
        const f=async()=>{
            const res= await fetch("https://dummyjson.com/products");
            const data= await res.json();
            setproductdata(productdata);
        }
    },[])
    return <ContextName.Provider value={{productdata,setproductdata,isAuthenticated,setisAuthenticated}} >{children}</ContextName.Provider>
}

export default ContextData