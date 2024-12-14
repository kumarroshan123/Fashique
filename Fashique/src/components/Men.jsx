import { useContext, useState, useEffect } from "react";
import { ContextName } from "./Contextapi";
import like from "../assets/like.png"
import './Menpage.css'

const Men = () => {
  const { productdata,userdetail } = useContext(ContextName);
  const [filterdata, setfilterdata] = useState([]);
  const [category, setCategory] = useState("");
  const [sortby, setSortby] = useState("");
  console.log(userdetail)

  useEffect(() => {
    if (!productdata || productdata.length === 0) return;
    let filteredData = productdata.filter(
      (item) =>
        
        item.category == "mens-shirts" ||
        item.category == "mens-shoes" ||
        item.category === "mens-watches"
    );
    productdata.map((ele)=>{
        console.log(ele.category);
    })

    if (category && category !== "") {
      filteredData = filteredData.filter((item) => item.category === category);
    }

    if (sortby === "price-desc") {
      filteredData.sort((a, b) => b.price - a.price);
    } else if (sortby === "price-asc") {
      filteredData.sort((a, b) => a.price - b.price);
    } else if (sortby === "rating-desc") {
      filteredData.sort((a, b) => b.rating - a.rating);
    } else if (sortby === "rating-asc") {
      filteredData.sort((a, b) => a.rating - b.rating);
    }

    setfilterdata(filteredData);
  }, [category, sortby, productdata]);

  return (
    <div className="mens-div">
      <p>Men's</p>
      <div>
        <div className="filters">
          <p>
            <b>FILTERS</b>
          </p>
          <div className="mens-category">
            <span><b>Category:</b></span>
            <select
              name="men-category"
              id="men-category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">All</option>
              <option value="mens-shirts">MEN'S SHIRTS</option>
              <option value="mens-shoes">MEN'S SHOES</option>
              <option value="mens-watches">MEN'S WATCHES</option>
            </select>
          </div>
          <div className="sortby">
            <span><b>Sort By:</b></span>
            <select
              name="men-sortby"
              id="men-sortby"
              value={sortby}
              onChange={(e) => setSortby(e.target.value)}
            >
              <option value="">All</option>
              <option value="price-desc">Price High to Low</option>
              <option value="price-asc">Price Low to High</option>
              <option value="rating-desc">Rating High to Low</option>
              <option value="rating-asc">Rating Low to High</option>
            </select>
          </div>
        </div>
        <div className="products">
          {filterdata && filterdata.length > 0 ? (
            filterdata.map((ele, i) => (
              <div className="data-div" key={i}>
                <div className="image-div-product">
                    <div><img src={ele.thumbnail} alt="" />
                  <p>
                    {ele.rating} <span>&#9733;</span> | {ele.stock}k
                  </p></div>
                  <div className="button-div"><button onClick={()=>{
                        const users = JSON.parse(localStorage.getItem("users")) || {};
                        const user = users[userdetail.username];
                        if (user) {
                          const isProductInWishlist = user.wishlist.some(item => item.id === ele.id);
                          console.log("hi",isProductInWishlist);
                          if (!isProductInWishlist) {
                            const newWishlist = [...user.wishlist, ele];
                            const updatedUser = { ...user, wishlist: newWishlist };
                            users[userdetail.username] = updatedUser;
                            localStorage.setItem("users", JSON.stringify(users));
                            alert("Item Added to your Wishlist");
                          } else {
                            alert("Item is already in your Wishlist");
                          }
                        }else {
                            alert("Please Login/SignUp first !!");
                        } 
                  }}>🖤</button></div>
                  
                </div>
                <p>
                  <b>{ele.brand}</b>
                </p>
                <p>{ele.title}</p>
                <p>
                  <b>Rs. {ele.price}</b>
                </p>
                <button className="addtobag" onClick={()=>{
                     const users = JSON.parse(localStorage.getItem("users")) || {};
                     const user = users[userdetail.username];
                     if (user) {
                       const isProductInBag = user.bag.some(item => item.id === ele.id);
                       if (!isProductInBag) {
                         const newBag = [...user.bag, ele];
                         const updatedUser = { ...user, bag: newBag };
                         users[userdetail.username] = updatedUser;
                         localStorage.setItem("users", JSON.stringify(users));
                         alert("Item Added to your Bag");
                       } else {
                         alert("Item is already in your Bag");
                       }
                     } else {
                       alert("Please Login/SignUp first !!");
                     }
                }}>Add To Bag</button>
              </div>
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Men;
