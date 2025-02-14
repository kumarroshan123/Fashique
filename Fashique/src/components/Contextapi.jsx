import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";

export let ContextName = createContext();

const ContextData = ({ children }) => {
  const [productdata, setproductdata] = useState([]);
  const [isAuthenticated, setisAuthenticated] = useState(false);
  const [userdetail, setuserdetail] = useState({});
  const [searchvalue,setsearchvalue]=useState("");
  useEffect(() => {
    const f = async () => {
      const res = await fetch("https://dummyjson.com/products?limit=200");
      const data = await res.json();
      console.log(data.products);
      setproductdata(data.products);
    };
    f();
  }, []);
  return (
    <ContextName.Provider
      value={{
        productdata,
        setproductdata,
        isAuthenticated,
        setisAuthenticated,
        userdetail,
        setuserdetail,
        searchvalue,
        setsearchvalue
      }}
    >
      {children}
    </ContextName.Provider>
  );
};

export default ContextData;
