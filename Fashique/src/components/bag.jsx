import { useContext, useState } from "react";
import { ContextName } from "./Contextapi";

const bag = () => {
  const { userdetail } = useContext(ContextName);
  const users = JSON.parse(localStorage.getItem("users"));
  const [bag, setBag] = useState(
    users[userdetail.username]?.bag || []
  );
  return (
    <div>
        <div className="bag-image-div">
            <img src="" alt="" />
        </div>
        <div className="address-image-div">
            <img src="" alt="" />
        </div>
        <div className="bag-main-body">
                <div className="bag-list-div">
                    {bag &&  bag.map((ele)=>{
                        return (
                            <div>
                                <div>
                                    <img src={ele.thumbnail} alt="" />
                                </div>
                                <div>
                                    <p>{ele.brand}</p>
                                    <p>{ele.title}</p>
                                    <p>Qty:1</p>
                                    <p>{ele.price}</p>
                                    <p>7 days return available</p>
                                </div>
                            </div>
                        )
                    }) }
                </div>
                <div className="bag-total-div">
                   
                </div>
        </div>
    </div>
  )
};
