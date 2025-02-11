import { useContext, useState } from "react";
import { ContextName } from "./Contextapi";
import pic12 from "../assets/pic12.png";
import './bag.css'

const Bag = () => {
  const { userdetail } = useContext(ContextName);
  const users = JSON.parse(localStorage.getItem("users"));
  const [bag, setBag] = useState(users[userdetail.username]?.bag || []);
  const totalPrice = bag.reduce((acc, item) => acc + item.price, 0);
  const removeFromBag = (id) => {
    const user = users[userdetail.username];
    if (user) {
      const updatedBag = user.bag.filter((item) => item.id !== id);
      user.bag = updatedBag;
      users[userdetail.username] = user;
      localStorage.setItem("users", JSON.stringify(users));
      setBag(updatedBag);
      alert("Item removed from Bag");
    }
  };
  return (
    <div>
      {bag.length === 0 ? ( // 🔹 Check if bag is empty
        <div className="empty-bag">
          <h2>Your Bag is Empty 🛍️</h2>
          <p>Looks like you haven't added anything yet.</p>
        </div>
      ) : (
        <>
          <div className="bag-image-div">
            <img src={pic12} alt="" />
          </div>
          <div className="address-image-div">
            <img src="" alt="" />
          </div>
          <div className="bag-main-body">
            <div className="bag-list-div">
              {bag.map((ele) => (
                <div className="bag-item" key={ele.id}>
                  <div>
                    <img src={ele.thumbnail} alt="" />
                  </div>
                  <div>
                    <p>{ele.brand}</p>
                    <p>{ele.title}</p>
                    <p>Qty:1</p>
                    <p>{ele.price}</p>
                    <p>7 days return available</p>
                    <button
                      className="remove-btn"
                      onClick={() => removeFromBag(ele.id)}
                    >
                      &#10006; Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="bag-total-div">
              <h3>Order Summary</h3>
              <p>Total Items: {bag.length}</p>
              <p>Coupon Discount: 50</p>
              <p>Platform Fee: $20</p>
              <p>Shipping Fee: $10</p>
              <p><b>Total Price: Rs. {totalPrice-30}</b></p>
              <button className="place-order-btn" onClick={() => alert("Order Placed!")}>
                Place Order
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default Bag;