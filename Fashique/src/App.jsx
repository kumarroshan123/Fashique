import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Signup from "./components/signup";
import Login from "./components/login";
import Profile from "./profile";
import Homepage from "./components/Homepage";

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        {/* <Route path="/men" element={<Men />}>
          <Route path="topwear" element={<Placeholder category="Men - Topwear" />} />
          <Route path="bottomwear" element={<Placeholder category="Men - Bottomwear" />} />
          <Route path="innerwear-sleepwear" element={<Placeholder category="Men - Innerwear & Sleepwear" />} />
          <Route path="footwear" element={<Placeholder category="Men - Footwear" />} />
          <Route path="sports-activewear" element={<Placeholder category="Men - Sports & Active Wear" />} />
          <Route path="gadgets" element={<Placeholder category="Men - Gadgets" />} />
          <Route path="fashion-accessories" element={<Placeholder category="Men - Fashion Accessories" />} />
          <Route path="plus-size" element={<Placeholder category="Men - Plus Size" />} />
        </Route>

        <Route path="/women" element={<CategoryLayout />}>
          <Route path="indian-fusion-wear" element={<Placeholder category="Women - Indian & Fusion Wear" />} />
          <Route path="western-wear" element={<Placeholder category="Women - Western Wear" />} />
          <Route path="lingerie-sleepwear" element={<Placeholder category="Women - Lingerie & Sleepwear" />} />
          <Route path="beauty-personal-care" element={<Placeholder category="Women - Beauty & Personal Care" />} />
          <Route path="footwear" element={<Placeholder category="Women - Footwear" />} />
          <Route path="sports-activewear" element={<Placeholder category="Women - Sports & Active Wear" />} />
          <Route path="jewellery" element={<Placeholder category="Women - Jewellery" />} />
          <Route path="gadgets" element={<Placeholder category="Women - Gadgets" />} />
          <Route path="handbags-wallets" element={<Placeholder category="Women - Handbags & Wallets" />} />
        </Route>

        <Route path="/groceries" element={<CategoryLayout />}></Route>

        <Route path="/home-living" element={<CategoryLayout />}>
          <Route path="bed-linen-furnishing" element={<Placeholder category="Home & Living - Bed Linen & Furnishing" />} />
          <Route path="flooring" element={<Placeholder category="Home & Living - Flooring" />} />
          <Route path="bath" element={<Placeholder category="Home & Living - Bath" />} />
          <Route path="lamps-lighting" element={<Placeholder category="Home & Living - Lamps & Lighting" />} />
          <Route path="home-decor" element={<Placeholder category="Home & Living - Home Décor" />} />
          <Route path="kitchen-table" element={<Placeholder category="Home & Living - Kitchen & Table" />} />
          <Route path="storage" element={<Placeholder category="Home & Living - Storage" />} />
        </Route>

        <Route path="/beauty" element={<CategoryLayout />}>
          <Route path="makeup" element={<Placeholder category="Beauty - Makeup" />} />
          <Route path="skincare" element={<Placeholder category="Beauty - Skincare" />} />
          <Route path="haircare" element={<Placeholder category="Beauty - Haircare" />} />
          <Route path="fragrances" element={<Placeholder category="Beauty - Fragrances" />} />
          <Route path="appliances" element={<Placeholder category="Beauty - Appliances" />} />
          <Route path="mens-grooming" element={<Placeholder category="Beauty - Men's Grooming" />} />
          <Route path="gift-sets" element={<Placeholder category="Beauty - Gift & Makeup Set" />} />
          <Route path="premium" element={<Placeholder category="Beauty - Premium Beauty" />} />
          <Route path="wellness-hygiene" element={<Placeholder category="Beauty - Wellness & Hygiene" />} />
        </Route> */}

        {/* <Route path="/profile" element={<Profile />}> */}
          <Route path="/" element={<Homepage />}/>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="orders" element={<Placeholder category="Profile - Orders" />} />
          <Route path="wishlist" element={<Placeholder category="Profile - Wishlist" />} />
          <Route path="gift-cards" element={<Placeholder category="Profile - Gift Cards" />} />
          <Route path="insider" element={<Placeholder category="Profile - Myntra Insider" />} />
          <Route path="credit" element={<Placeholder category="Profile - Myntra Credit" />} />
          <Route path="coupons" element={<Placeholder category="Profile - Coupons" />} />
          <Route path="saved-cards" element={<Placeholder category="Profile - Saved Cards" />} />
          <Route path="saved-vpa" element={<Placeholder category="Profile - Saved VPA" />} />
          <Route path="saved-addresses" element={<Placeholder category="Profile - Saved Addresses" />} /> */}
        {/* </Route> */}
      </Routes>
    </>
  )
}

export default App
