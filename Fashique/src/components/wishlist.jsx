import { useContext, useState } from "react"
import { ContextName } from "./Contextapi"
import './wishlist.css'

const Wishlist = ()=>{
    const {userdetail} =useContext(ContextName);
    const users=JSON.parse(localStorage.getItem('users'));
    const [wishlist,setWishlist]= useState(users[userdetail.username]?.wishlist || []);
    return (
        <div className="wishlist-main">
            <p><b>My Wishlist {wishlist.length} items</b></p>
            <div>
            {!wishlist? <div><b>No items Added in Wishlist</b></div>: wishlist.map((ele)=>{
                return (
                    <div key={ele.id} className="wishlist-container-div">
                        <div className="wishlist-image-div">
                            <img className="wishlist-image" src={ele.thumbnail} alt="" />
                            <button onClick={()=>{
                                const user = users[userdetail.username];
                                if (user) {
                                  const updatedWishlist = user.wishlist.filter((item) => item.id !== ele.id);
                                  user.wishlist = updatedWishlist;
                                  users[userdetail.username] = user;
                                  localStorage.setItem("users", JSON.stringify(users));
                                  setWishlist(updatedWishlist);
                                  alert("Item removed from Wishlist");
                                }
                            }}>&#10006;</button>
                        </div>
                        <div className="wishlist-body-div">
                            <div>
                            <p>{ele.title}</p>
                            <p><b>Rs. {ele.price}</b></p>
                            </div>
                            <div>
                              <button className="wishlist-move-to-bag" onClick={()=>{
                                  const user = users[userdetail.username];
                                  if (user) {
                                    const isInBag = user.bag.some((bagItem) => bagItem.id === ele.id);
                                    if (!isInBag) {
                                      user.bag = [...user.bag, ele];
                                      user.wishlist = user.wishlist.filter((wishlistItem) => wishlistItem.id !== ele.id);
                                      users[userdetail.username] = user;
                                      localStorage.setItem("users", JSON.stringify(users));
                                      setWishlist(user.wishlist);
                                      alert("Item moved to Bag");
                                    } else {
                                      alert("Item is already in the Bag");
                                    }
                                  }
                              }}>Move to Bag</button>
                            </div>  

                        </div>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default Wishlist