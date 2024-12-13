import { Link } from "react-router-dom";
import { ContextName } from "./Contextapi";
import { useContext } from "react";
const Navbar = () => {
  const {isAuthenticated}= useContext(ContextName)
  let username,usermobile="";
  return (
    <>
      <div className="navbar">
        <div className="nav-image">
          <Link to="">
            <img src="" alt="" />
          </Link>
        </div>
        <div className="nav-list">
          <div className="men category">
            <Link to="">MEN</Link>
            <ul className="submenu">
              <li>
                <Link to="">Topwear</Link>
              </li>
              <li>
                <Link to="">T-Shirts</Link>
              </li>
              <li>
                <Link to="">Casual Shirts</Link>
              </li>
              <li>
                <Link to="">Formal Shirts</Link>
              </li>
              <li>
                <Link to="">Sweatshirts</Link>
              </li>
              <li>
                <Link to="">Sweaters</Link>
              </li>
              <li>
                <Link to="">Jackets</Link>
              </li>
              <li>
                <Link to="">Blazers & Coats</Link>
              </li>
              <li>
                <Link to="">Suits</Link>
              </li>
              <li>
                <Link to="">Rain Jackets</Link>
              </li>
              <li>
                <Link to="">Indian & Festive Wear</Link>
              </li>
              <li>
                <Link to="">Kurtas & Kurta Sets</Link>
              </li>
              <li>
                <Link to="">Sherwanis</Link>
              </li>
              <li>
                <Link to="">Nehru Jackets</Link>
              </li>
              <li>
                <Link to="">Dhotis</Link>
              </li>
              <li>
                <Link to="">Bottomwear</Link>
              </li>
              <li>
                <Link to="">Jeans</Link>
              </li>
              <li>
                <Link to="">Casual Trousers</Link>
              </li>
              <li>
                <Link to="">Formal Trousers</Link>
              </li>
              <li>
                <Link to="">Shorts</Link>
              </li>
              <li>
                <Link to="">Track Pants & Joggers</Link>
              </li>
              <li>
                <Link to="">Innerwear & Sleepwear</Link>
              </li>
              <li>
                <Link to="">Briefs & Trunks</Link>
              </li>
              <li>
                <Link to="">Boxers</Link>
              </li>
              <li>
                <Link to="">Vests</Link>
              </li>
              <li>
                <Link to="">Sleepwear & Loungewear</Link>
              </li>
              <li>
                <Link to="">Thermals</Link>
              </li>
              <li>
                <Link to="">Plus Size</Link>
              </li>
              <li>
                <Link to="">Footwear</Link>
              </li>
              <li>
                <Link to="">Casual Shoes</Link>
              </li>
              <li>
                <Link to="">Sports Shoes</Link>
              </li>
              <li>
                <Link to="">Formal Shoes</Link>
              </li>
              <li>
                <Link to="">Sneakers</Link>
              </li>
              <li>
                <Link to="">Sandals & Floaters</Link>
              </li>
              <li>
                <Link to="">Flip Flops</Link>
              </li>
              <li>
                <Link to="">Socks</Link>
              </li>
              <li>
                <Link to="">Personal Care & Grooming</Link>
              </li>
              <li>
                <Link to="">Sunglasses & Frames</Link>
              </li>
              <li>
                <Link to="">Watches</Link>
              </li>
              <li>
                <Link to="">Sports & Active Wear</Link>
              </li>
              <li>
                <Link to="">Sports Shoes</Link>
              </li>
              <li>
                <Link to="">Sports Sandals</Link>
              </li>
              <li>
                <Link to="">Active T-Shirts</Link>
              </li>
              <li>
                <Link to="">Track Pants & Shorts</Link>
              </li>
              <li>
                <Link to="">Tracksuits</Link>
              </li>
              <li>
                <Link to="">Jackets & Sweatshirts</Link>
              </li>
              <li>
                <Link to="">Sports Accessories</Link>
              </li>
              <li>
                <Link to="">Swimwear</Link>
              </li>
              <li>
                <Link to="">Gadgets</Link>
              </li>
              <li>
                <Link to="">Smart Wearables</Link>
              </li>
              <li>
                <Link to="">Fitness Gadgets</Link>
              </li>
              <li>
                <Link to="">Headphones</Link>
              </li>
              <li>
                <Link to="">Speakers</Link>
              </li>
              <li>
                <Link to="">Fashion Accessories</Link>
              </li>
              <li>
                <Link to="">Wallets</Link>
              </li>
              <li>
                <Link to="">Belts</Link>
              </li>
              <li>
                <Link to="">Perfumes & Body Mists</Link>
              </li>
              <li>
                <Link to="">Trimmers</Link>
              </li>
              <li>
                <Link to="">Deodorants</Link>
              </li>
              <li>
                <Link to="">Ties, Cufflinks & Pocket Squares</Link>
              </li>
              <li>
                <Link to="">Accessory Gift Sets</Link>
              </li>
              <li>
                <Link to="">Caps & Hats</Link>
              </li>
              <li>
                <Link to="">Mufflers, Scarves & Gloves</Link>
              </li>
              <li>
                <Link to="">Phone Cases</Link>
              </li>
              <li>
                <Link to="">Rings & Wristwear</Link>
              </li>
              <li>
                <Link to="">Helmets</Link>
              </li>
              <li>
                <Link to="">Bags & Backpacks</Link>
              </li>
              <li>
                <Link to="">Luggages & Trolleys</Link>
              </li>
            </ul>
          </div>
          <div className="women category">
            <Link to="">WOMEN</Link>
            <div className="women category">
              <Link to="">WOMEN</Link>
              <ul className="submenu">
                <li>
                  <Link to="">Indian & Fusion Wear</Link>
                </li>
                <li>
                  <Link to="">Kurtas & Suits</Link>
                </li>
                <li>
                  <Link to="">Kurtis, Tunics & Tops</Link>
                </li>
                <li>
                  <Link to="">Sarees</Link>
                </li>
                <li>
                  <Link to="">Ethnic Wear</Link>
                </li>
                <li>
                  <Link to="">Leggings, Salwars & Churidars</Link>
                </li>
                <li>
                  <Link to="">Skirts & Palazzos</Link>
                </li>
                <li>
                  <Link to="">Dress Materials</Link>
                </li>
                <li>
                  <Link to="">Lehenga Cholis</Link>
                </li>
                <li>
                  <Link to="">Dupattas & Shawls</Link>
                </li>
                <li>
                  <Link to="">Jackets</Link>
                </li>
                <li>
                  <Link to="">Belts, Scarves & More</Link>
                </li>
                <li>
                  <Link to="">Watches & Wearables</Link>
                </li>
                <li>
                  <Link to="">Western Wear</Link>
                </li>
                <li>
                  <Link to="">Dresses</Link>
                </li>
                <li>
                  <Link to="">Tops</Link>
                </li>
                <li>
                  <Link to="">Tshirts</Link>
                </li>
                <li>
                  <Link to="">Jeans</Link>
                </li>
                <li>
                  <Link to="">Trousers & Capris</Link>
                </li>
                <li>
                  <Link to="">Shorts & Skirts</Link>
                </li>
                <li>
                  <Link to="">Co-ords</Link>
                </li>
                <li>
                  <Link to="">Playsuits</Link>
                </li>
                <li>
                  <Link to="">Jumpsuits</Link>
                </li>
                <li>
                  <Link to="">Shrugs</Link>
                </li>
                <li>
                  <Link to="">Sweaters & Sweatshirts</Link>
                </li>
                <li>
                  <Link to="">Jackets & Coats</Link>
                </li>
                <li>
                  <Link to="">Blazers & Waistcoats</Link>
                </li>
                <li>
                  <Link to="">Plus Size</Link>
                </li>
                <li>
                  <Link to="">Maternity</Link>
                </li>
                <li>
                  <Link to="">Sunglasses & Frames</Link>
                </li>
                <li>
                  <Link to="">Footwear</Link>
                </li>
                <li>
                  <Link to="">Flats</Link>
                </li>
                <li>
                  <Link to="">Casual Shoes</Link>
                </li>
                <li>
                  <Link to="">Heels</Link>
                </li>
                <li>
                  <Link to="">Boots</Link>
                </li>
                <li>
                  <Link to="">Sports Shoes & Floaters</Link>
                </li>
                <li>
                  <Link to="">Sports & Active Wear</Link>
                </li>
                <li>
                  <Link to="">Clothing</Link>
                </li>
                <li>
                  <Link to="">Footwear</Link>
                </li>
                <li>
                  <Link to="">Sports Accessories</Link>
                </li>
                <li>
                  <Link to="">Sports Equipment</Link>
                </li>
                <li>
                  <Link to="">Lingerie & Sleepwear</Link>
                </li>
                <li>
                  <Link to="">Bra</Link>
                </li>
                <li>
                  <Link to="">Briefs</Link>
                </li>
                <li>
                  <Link to="">Shapewear</Link>
                </li>
                <li>
                  <Link to="">Sleepwear & Loungewear</Link>
                </li>
                <li>
                  <Link to="">Swimwear</Link>
                </li>
                <li>
                  <Link to="">Camisoles & Thermals</Link>
                </li>
                <li>
                  <Link to="">Beauty & Personal Care</Link>
                </li>
                <li>
                  <Link to="">Makeup</Link>
                </li>
                <li>
                  <Link to="">Skincare</Link>
                </li>
                <li>
                  <Link to="">Premium Beauty</Link>
                </li>
                <li>
                  <Link to="">Lipsticks</Link>
                </li>
                <li>
                  <Link to="">Fragrances</Link>
                </li>
                <li>
                  <Link to="">Gadgets</Link>
                </li>
                <li>
                  <Link to="">Smart Wearables</Link>
                </li>
                <li>
                  <Link to="">Fitness Gadgets</Link>
                </li>
                <li>
                  <Link to="">Headphones</Link>
                </li>
                <li>
                  <Link to="">Speakers</Link>
                </li>
                <li>
                  <Link to="">Jewellery</Link>
                </li>
                <li>
                  <Link to="">Fashion Jewellery</Link>
                </li>
                <li>
                  <Link to="">Fine Jewellery</Link>
                </li>
                <li>
                  <Link to="">Earrings</Link>
                </li>
                <li>
                  <Link to="">Backpacks</Link>
                </li>
                <li>
                  <Link to="">Handbags, Bags & Wallets</Link>
                </li>
                <li>
                  <Link to="">Luggages & Trolleys</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="groceries">
            <Link to="">Groceries</Link>
          </div>
          <div className="homeliving category">
            <Link to="">HOME & LIVING</Link>
            <ul className="submenu">
              <li>
                <Link to="">Bed Linen & Furnishing</Link>
              </li>
              <ul>
                <li>
                  <Link to="">Bed Runners</Link>
                </li>
                <li>
                  <Link to="">Mattress Protectors</Link>
                </li>
                <li>
                  <Link to="">Bedsheets</Link>
                </li>
                <li>
                  <Link to="">Bedding Sets</Link>
                </li>
                <li>
                  <Link to="">Blankets, Quilts & Dohars</Link>
                </li>
                <li>
                  <Link to="">Pillows & Pillow Covers</Link>
                </li>
                <li>
                  <Link to="">Bed Covers</Link>
                </li>
                <li>
                  <Link to="">Diwan Sets</Link>
                </li>
                <li>
                  <Link to="">Chair Pads & Covers</Link>
                </li>
                <li>
                  <Link to="">Sofa Covers</Link>
                </li>
              </ul>
              <li>
                <Link to="">Flooring</Link>
              </li>
              <ul>
                <li>
                  <Link to="">Floor Runners</Link>
                </li>
                <li>
                  <Link to="">Carpets</Link>
                </li>
                <li>
                  <Link to="">Floor Mats & Dhurries</Link>
                </li>
                <li>
                  <Link to="">Door Mats</Link>
                </li>
              </ul>
              <li>
                <Link to="">Bath</Link>
              </li>
              <ul>
                <li>
                  <Link to="">Bath Towels</Link>
                </li>
                <li>
                  <Link to="">Hand & Face Towels</Link>
                </li>
                <li>
                  <Link to="">Beach Towels</Link>
                </li>
                <li>
                  <Link to="">Towels Set</Link>
                </li>
                <li>
                  <Link to="">Bath Rugs</Link>
                </li>
                <li>
                  <Link to="">Bath Robes</Link>
                </li>
                <li>
                  <Link to="">Bathroom Accessories</Link>
                </li>
                <li>
                  <Link to="">Shower Curtains</Link>
                </li>
              </ul>
              <li>
                <Link to="">Lamps & Lighting</Link>
              </li>
              <ul>
                <li>
                  <Link to="">Floor Lamps</Link>
                </li>
                <li>
                  <Link to="">Ceiling Lamps</Link>
                </li>
                <li>
                  <Link to="">Table Lamps</Link>
                </li>
                <li>
                  <Link to="">Wall Lamps</Link>
                </li>
                <li>
                  <Link to="">Outdoor Lamps</Link>
                </li>
                <li>
                  <Link to="">String Lights</Link>
                </li>
              </ul>
              <li>
                <Link to="">Home Décor</Link>
              </li>
              <ul>
                <li>
                  <Link to="">Plants & Planters</Link>
                </li>
                <li>
                  <Link to="">Aromas & Candles</Link>
                </li>
                <li>
                  <Link to="">Clocks</Link>
                </li>
                <li>
                  <Link to="">Mirrors</Link>
                </li>
                <li>
                  <Link to="">Wall Décor</Link>
                </li>
                <li>
                  <Link to="">Festive Decor</Link>
                </li>
                <li>
                  <Link to="">Pooja Essentials</Link>
                </li>
                <li>
                  <Link to="">Wall Shelves</Link>
                </li>
                <li>
                  <Link to="">Fountains</Link>
                </li>
                <li>
                  <Link to="">Showpieces & Vases</Link>
                </li>
                <li>
                  <Link to="">Ottoman</Link>
                </li>
              </ul>
              <li>
                <Link to="">Cushions & Cushion Covers</Link>
              </li>
              <li>
                <Link to="">Curtains</Link>
              </li>
              <li>
                <Link to="">Home Gift Sets</Link>
              </li>
              <li>
                <Link to="">Kitchen & Table</Link>
              </li>
              <ul>
                <li>
                  <Link to="">Table Runners</Link>
                </li>
                <li>
                  <Link to="">Dinnerware & Serveware</Link>
                </li>
                <li>
                  <Link to="">Cups and Mugs</Link>
                </li>
                <li>
                  <Link to="">Bakeware & Cookware</Link>
                </li>
                <li>
                  <Link to="">Kitchen Storage & Tools</Link>
                </li>
                <li>
                  <Link to="">Bar & Drinkware</Link>
                </li>
                <li>
                  <Link to="">Table Covers & Furnishings</Link>
                </li>
              </ul>
              <li>
                <Link to="">Storage</Link>
              </li>
              <ul>
                <li>
                  <Link to="">Bins</Link>
                </li>
                <li>
                  <Link to="">Hangers</Link>
                </li>
                <li>
                  <Link to="">Organisers</Link>
                </li>
                <li>
                  <Link to="">Hooks & Holders</Link>
                </li>
                <li>
                  <Link to="">Laundry Bags</Link>
                </li>
              </ul>
              <li>
                <Link to="">Brands</Link>
              </li>
              <ul>
                <li>
                  <Link to="">H&M</Link>
                </li>
                <li>
                  <Link to="">Marks & Spencer</Link>
                </li>
                <li>
                  <Link to="">Home Centre</Link>
                </li>
                <li>
                  <Link to="">Spaces</Link>
                </li>
                <li>
                  <Link to="">D'Decor</Link>
                </li>
                <li>
                  <Link to="">Story@Home</Link>
                </li>
                <li>
                  <Link to="">Pure Home & Living</Link>
                </li>
                <li>
                  <Link to="">Swayam</Link>
                </li>
                <li>
                  <Link to="">Raymond Home</Link>
                </li>
                <li>
                  <Link to="">Maspar</Link>
                </li>
                <li>
                  <Link to="">My Trident</Link>
                </li>
                <li>
                  <Link to="">Cortina</Link>
                </li>
                <li>
                  <Link to="">Random</Link>
                </li>
                <li>
                  <Link to="">Ellementry</Link>
                </li>
                <li>
                  <Link to="">ROMEE</Link>
                </li>
                <li>
                  <Link to="">SEJ by Nisha Gupta</Link>
                </li>
              </ul>
            </ul>
          </div>
          <div className="beauty category">
            <ul className="submenu">
              <li>
                Makeup
                <ul>
                  <li>
                    <Link to="">Lipstick</Link>
                  </li>
                  <li>
                    <Link to="">Lip Gloss</Link>
                  </li>
                  <li>
                    <Link to="">Lip Liner</Link>
                  </li>
                  <li>
                    <Link to="">Mascara</Link>
                  </li>
                  <li>
                    <Link to="">Eyeliner</Link>
                  </li>
                  <li>
                    <Link to="">Kajal</Link>
                  </li>
                  <li>
                    <Link to="">Eyeshadow</Link>
                  </li>
                  <li>
                    <Link to="">Foundation</Link>
                  </li>
                  <li>
                    <Link to="">Primer</Link>
                  </li>
                  <li>
                    <Link to="">Concealer</Link>
                  </li>
                  <li>
                    <Link to="">Compact</Link>
                  </li>
                  <li>
                    <Link to="">Nail Polish</Link>
                  </li>
                </ul>
              </li>
              <li>
                Skincare, Bath & Body
                <ul>
                  <li>
                    <Link to="">Face Moisturiser</Link>
                  </li>
                  <li>
                    <Link to="">Cleanser</Link>
                  </li>
                  <li>
                    <Link to="">Masks & Peel</Link>
                  </li>
                  <li>
                    <Link to="">Sunscreen</Link>
                  </li>
                  <li>
                    <Link to="">Serum</Link>
                  </li>
                  <li>
                    <Link to="">Face Wash</Link>
                  </li>
                  <li>
                    <Link to="">Eye Cream</Link>
                  </li>
                  <li>
                    <Link to="">Lip Balm</Link>
                  </li>
                  <li>
                    <Link to="">Body Lotion</Link>
                  </li>
                  <li>
                    <Link to="">Body Wash</Link>
                  </li>
                  <li>
                    <Link to="">Body Scrub</Link>
                  </li>
                  <li>
                    <Link to="">Hand Cream</Link>
                  </li>
                  <li>
                    <Link to="">Baby Care</Link>
                  </li>
                  <li>
                    <Link to="">Masks</Link>
                  </li>
                </ul>
              </li>
              <li>
                Haircare
                <ul>
                  <li>
                    <Link to="">Shampoo</Link>
                  </li>
                  <li>
                    <Link to="">Conditioner</Link>
                  </li>
                  <li>
                    <Link to="">Hair Cream</Link>
                  </li>
                  <li>
                    <Link to="">Hair Oil</Link>
                  </li>
                  <li>
                    <Link to="">Hair Gel</Link>
                  </li>
                  <li>
                    <Link to="">Hair Color</Link>
                  </li>
                  <li>
                    <Link to="">Hair Serum</Link>
                  </li>
                  <li>
                    <Link to="">Hair Accessory</Link>
                  </li>
                </ul>
              </li>
              <li>
                Fragrances
                <ul>
                  <li>
                    <Link to="">Perfume</Link>
                  </li>
                  <li>
                    <Link to="">Deodorant</Link>
                  </li>
                  <li>
                    <Link to="">Body Mist</Link>
                  </li>
                </ul>
              </li>
              <li>
                Appliances
                <ul>
                  <li>
                    <Link to="">Hair Straightener</Link>
                  </li>
                  <li>
                    <Link to="">Hair Dryer</Link>
                  </li>
                  <li>
                    <Link to="">Epilator</Link>
                  </li>
                </ul>
              </li>
              <li>
                Men's Grooming
                <ul>
                  <li>
                    <Link to="">Trimmers</Link>
                  </li>
                  <li>
                    <Link to="">Beard Oil</Link>
                  </li>
                  <li>
                    <Link to="">Hair Wax</Link>
                  </li>
                </ul>
              </li>
              <li>
                Beauty Gift & Makeup Set
                <ul>
                  <li>
                    <Link to="">Beauty Gift</Link>
                  </li>
                  <li>
                    <Link to="">Makeup Kit</Link>
                  </li>
                </ul>
              </li>
              <li>Premium Beauty</li>
              <li>Wellness & Hygiene</li>
              <li>
                Top Brands
                <ul>
                  <li>
                    <Link to="">Lakme</Link>
                  </li>
                  <li>
                    <Link to="">Maybelline</Link>
                  </li>
                  <li>
                    <Link to="">L'Oreal</Link>
                  </li>
                  <li>
                    <Link to="">Philips</Link>
                  </li>
                  <li>
                    <Link to="">Bath & Body Works</Link>
                  </li>
                  <li>
                    <Link to="">The Body Shop</Link>
                  </li>
                  <li>
                    <Link to="">Biotique</Link>
                  </li>
                  <li>
                    <Link to="">Mamaearth</Link>
                  </li>
                  <li>
                    <Link to="">MCaffeine</Link>
                  </li>
                  <li>
                    <Link to="">Nivea</Link>
                  </li>
                  <li>
                    <Link to="">Lotus Herbals</Link>
                  </li>
                  <li>
                    <Link to="">L'Oreal Professionnel</Link>
                  </li>
                  <li>
                    <Link to="">KAMA AYURVEDA</Link>
                  </li>
                  <li>
                    <Link to="">M.A.C</Link>
                  </li>
                  <li>
                    <Link to="">Forest Essentials</Link>
                  </li>
                </ul>
              </li>
            </ul>
            <Link to="">BEAUTY</Link>
          </div>
          <div className="studio category">
            <Link to="">STUDIO</Link>
            <ul className="submenu">
              <li>
                <img src="" alt="" />
              </li>
              <li>
                <button>Explore Studio</button>
              </li>
            </ul>
          </div>
        </div>
        <div className="nav-search">
          <div className="search-img">
            <img src="" alt="" />
          </div>
          <div className="search-input">
            <input type="text" placeholder="Search for products" />
          </div>
        </div>
        <div>
          <div className="nav-profile">
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <p>
                <b>Profile</b>
              </p>
            </div>
            <ul className="profile-dropdown">
                {isAuthenticated ?<div><li>Welcome</li>
              <li>To access account and manage orders</li>
              <li>
                <Link to="/login">Login / Signup</Link>
              </li></div>:<div><li><br />Welcome {username}</li>
              <li><br>{usermobile}</br></li></div>}
              <hr />
              <li>
                <Link to="/orders">Orders</Link>
              </li>
              <li>
                <Link to="/wishlist">Wishlist</Link>
              </li>
              <li>
                <Link to="/gift-cards">Gift Cards</Link>
              </li>
              <li>
                <Link to="/contact-us">Contact Us</Link>
              </li>
              <li>
                <Link to="/myntra-insider">Myntra Insider</Link>
                <span>New</span>
              </li>
              <li>
                <Link to="/myntra-credit">Myntra Credit</Link>
              </li>
              <li>
                <Link to="/coupons">Coupons</Link>
              </li>
              <li>
                <Link to="/saved-cards">Saved Cards</Link>
              </li>
              <li>
                <Link to="/saved-vpa">Saved VPA</Link>
              </li>
              <li>
                <Link to="/saved-addresses">Saved Addresses</Link>
              </li>
            </ul>
          </div>
          <div className="nav-wishlist">
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <p>
                <b>Wishlist</b>
              </p>
            </div>
          </div>
          <div className="nav-cart">
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <p>
                <b>Bag</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
