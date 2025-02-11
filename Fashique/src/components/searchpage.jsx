import { useContext, useState, useEffect } from "react";
import { ContextName } from "./Contextapi";

const SearchResults = () => {
  const { productdata,searchvalue} = useContext(ContextName);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (searchvalue && Array.isArray(productdata)) {
      const results = productdata.filter((item) =>
        item.title.toLowerCase().includes(searchvalue.toLowerCase()) ||
        item.category.toLowerCase().includes(searchvalue.toLowerCase())
      );
      setFilteredProducts(results);
    }
  }, [productdata,searchvalue]);

  return (
    <div className="search-results">
      <h2>Search Results for "{searchvalue}"</h2>
      {filteredProducts.length > 0 ? (
        <div className="products-grid">
          {filteredProducts.map((ele, i) => (
            <div className="product-card" key={i}>
              <img src={ele.thumbnail} alt={ele.title} />
              <p><b>{ele.brand}</b></p>
              <p>{ele.title}</p>
              <p><b>Rs. {ele.price}</b></p>
            </div>
          ))}
        </div>
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
};

export default SearchResults;