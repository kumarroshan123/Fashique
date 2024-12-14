import { Link } from "react-router-dom";
import { ContextName } from "./Contextapi";
import { useContext } from "react";
import logo from "../assets/logo.png";
import bag from "../assets/bag.png";
import like from "../assets/like.png";
import profile from "../assets/profile.jpg";
import studio from "../assets/studio.png"

<link
  href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css"
  rel="stylesheet"
></link>;

const Navbar = () => {
  const { isAuthenticated ,setisAuthenticated, userdetail } = useContext(ContextName);
  console.log(userdetail);
  return (
    <>
      <div className="navbar">
        <div className="nav-image">
          <Link to="">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="nav-list">
          <div className="men category">
            <Link to="" className="list-link">
              MEN
            </Link>
            <ul className="submenu">
              <li className="category-link topwear">
                <Link to="/topwear">Topwear</Link>
                <ul className="subcategory">
                  <li>
                    <Link to="/topwear/tshirts" className="subcategory-link">
                      T-Shirts
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/topwear/casual-shirts"
                      className="subcategory-link"
                    >
                      Casual Shirts
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/topwear/formal-shirts"
                      className="subcategory-link"
                    >
                      Formal Shirts
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/topwear/sweatshirts"
                      className="subcategory-link"
                    >
                      Sweatshirts
                    </Link>
                  </li>
                  <li>
                    <Link to="/topwear/sweaters" className="subcategory-link">
                      Sweaters
                    </Link>
                  </li>
                  <li>
                    <Link to="/topwear/jackets" className="subcategory-link">
                      Jackets
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/topwear/blazers-coats"
                      className="subcategory-link"
                    >
                      Blazers & Coats
                    </Link>
                  </li>
                  <li>
                    <Link to="/topwear/suits" className="subcategory-link">
                      Suits
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/topwear/rain-jackets"
                      className="subcategory-link"
                    >
                      Rain Jackets
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/topwear/indian-festive-wear"
                      className="subcategory-link"
                    >
                      Indian & Festive Wear
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="category-link bottomwear">
                <Link to="/bottomwear">Bottomwear</Link>
                <ul className="subcategory">
                  <li>
                    <Link to="/bottomwear/jeans" className="subcategory-link">
                      Jeans
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/bottomwear/casual-trousers"
                      className="subcategory-link"
                    >
                      Casual Trousers
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/bottomwear/formal-trousers"
                      className="subcategory-link"
                    >
                      Formal Trousers
                    </Link>
                  </li>
                  <li>
                    <Link to="/bottomwear/shorts" className="subcategory-link">
                      Shorts
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/bottomwear/track-pants-joggers"
                      className="subcategory-link"
                    >
                      Track Pants & Joggers
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="category-link innerwear">
                <Link to="/innerwear">Innerwear & Sleepwear</Link>
                <ul className="subcategory">
                  <li>
                    <Link
                      to="/innerwear/briefs-trunks"
                      className="subcategory-link"
                    >
                      Briefs & Trunks
                    </Link>
                  </li>
                  <li>
                    <Link to="/innerwear/boxers" className="subcategory-link">
                      Boxers
                    </Link>
                  </li>
                  <li>
                    <Link to="/innerwear/vests" className="subcategory-link">
                      Vests
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/innerwear/sleepwear-loungewear"
                      className="subcategory-link"
                    >
                      Sleepwear & Loungewear
                    </Link>
                  </li>
                  <li>
                    <Link to="/innerwear/thermals" className="subcategory-link">
                      Thermals
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="category-link footwear">
                <Link to="/footwear">Footwear</Link>
                <ul className="subcategory">
                  <li>
                    <Link
                      to="/footwear/casual-shoes"
                      className="subcategory-link"
                    >
                      Casual Shoes
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/footwear/sports-shoes"
                      className="subcategory-link"
                    >
                      Sports Shoes
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/footwear/formal-shoes"
                      className="subcategory-link"
                    >
                      Formal Shoes
                    </Link>
                  </li>
                  <li>
                    <Link to="/footwear/sneakers" className="subcategory-link">
                      Sneakers
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/footwear/sandals-floaters"
                      className="subcategory-link"
                    >
                      Sandals & Floaters
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/footwear/flip-flops"
                      className="subcategory-link"
                    >
                      Flip Flops
                    </Link>
                  </li>
                  <li>
                    <Link to="/footwear/socks" className="subcategory-link">
                      Socks
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="category-link accessories">
                <Link to="/accessories">Fashion Accessories</Link>
                <ul className="subcategory">
                  <li>
                    <Link
                      to="/accessories/wallets"
                      className="subcategory-link"
                    >
                      Wallets
                    </Link>
                  </li>
                  <li>
                    <Link to="/accessories/belts" className="subcategory-link">
                      Belts
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/accessories/perfumes-body-mists"
                      className="subcategory-link"
                    >
                      Perfumes & Body Mists
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/accessories/trimmers"
                      className="subcategory-link"
                    >
                      Trimmers
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/accessories/deodorants"
                      className="subcategory-link"
                    >
                      Deodorants
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/accessories/ties-cufflinks-pocket-squares"
                      className="subcategory-link"
                    >
                      Ties, Cufflinks & Pocket Squares
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/accessories/phone-cases"
                      className="subcategory-link"
                    >
                      Phone Cases
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/accessories/rings-wristwear"
                      className="subcategory-link"
                    >
                      Rings & Wristwear
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/accessories/helmets"
                      className="subcategory-link"
                    >
                      Helmets
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/accessories/bags-backpacks"
                      className="subcategory-link"
                    >
                      Bags & Backpacks
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/accessories/luggages-trolleys"
                      className="subcategory-link"
                    >
                      Luggages & Trolleys
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="women category">
            <Link to="" className="list-link">
              WOMEN
            </Link>
            <ul className="submenu">
              <li className="category-link topwear">
                <Link to="/indian-fusion-wear">Indian & Fusion Wear</Link>
                <ul className="subcategory">
                  <li>
                    <Link
                      to="/indian-fusion-wear/kurtas-suits"
                      className="subcategory-link"
                    >
                      Kurtas & Suits
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/indian-fusion-wear/kurtis-tunics-tops"
                      className="subcategory-link"
                    >
                      Kurtis, Tunics & Tops
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/indian-fusion-wear/sarees"
                      className="subcategory-link"
                    >
                      Sarees
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/indian-fusion-wear/ethnic-wear"
                      className="subcategory-link"
                    >
                      Ethnic Wear
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/indian-fusion-wear/leggings-salwars-churidars"
                      className="subcategory-link"
                    >
                      Leggings, Salwars & Churidars
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/indian-fusion-wear/skirts-palazzos"
                      className="subcategory-link"
                    >
                      Skirts & Palazzos
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/indian-fusion-wear/dress-materials"
                      className="subcategory-link"
                    >
                      Dress Materials
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/indian-fusion-wear/lehenga-cholis"
                      className="subcategory-link"
                    >
                      Lehenga Cholis
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/indian-fusion-wear/dupattas-shawls"
                      className="subcategory-link"
                    >
                      Dupattas & Shawls
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/indian-fusion-wear/jackets"
                      className="subcategory-link"
                    >
                      Jackets
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/indian-fusion-wear/belts-scarves-more"
                      className="subcategory-link"
                    >
                      Belts, Scarves & More
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="category-link topwear">
                <Link to="/watches-wearables">Watches & Wearables</Link>
              </li>
              <li className="category-link topwear">
                <Link to="/western-wear">Western Wear</Link>
                <ul className="subcategory">
                  <li>
                    <Link
                      to="/western-wear/dresses"
                      className="subcategory-link"
                    >
                      Dresses
                    </Link>
                  </li>
                  <li>
                    <Link to="/western-wear/tops" className="subcategory-link">
                      Tops
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/western-wear/t-shirts"
                      className="subcategory-link"
                    >
                      T-shirts
                    </Link>
                  </li>
                  <li>
                    <Link to="/western-wear/jeans" className="subcategory-link">
                      Jeans
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/western-wear/trousers-capris"
                      className="subcategory-link"
                    >
                      Trousers & Capris
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/western-wear/shorts-skirts"
                      className="subcategory-link"
                    >
                      Shorts & Skirts
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/western-wear/co-ords"
                      className="subcategory-link"
                    >
                      Co-ords
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/western-wear/playsuits"
                      className="subcategory-link"
                    >
                      Playsuits
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/western-wear/jumpsuits"
                      className="subcategory-link"
                    >
                      Jumpsuits
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/western-wear/shrugs"
                      className="subcategory-link"
                    >
                      Shrugs
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/western-wear/sweaters-sweatshirts"
                      className="subcategory-link"
                    >
                      Sweaters & Sweatshirts
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/western-wear/jackets-coats"
                      className="subcategory-link"
                    >
                      Jackets & Coats
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/western-wear/blazers-waistcoats"
                      className="subcategory-link"
                    >
                      Blazers & Waistcoats
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="category-link topwear">
                <Link to="/plus-size">Plus Size</Link>
              </li>
              <li className="category-link topwear">
                <Link to="/maternity">Maternity</Link>
              </li>
              <li className="category-link topwear">
                <Link to="/sunglasses-frames">Sunglasses & Frames</Link>
              </li>
              <li className="category-link topwear">
                <Link to="/footwear">Footwear</Link>
                <ul className="subcategory">
                  <li>
                    <Link to="/footwear/flats" className="subcategory-link">
                      Flats
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/footwear/casual-shoes"
                      className="subcategory-link"
                    >
                      Casual Shoes
                    </Link>
                  </li>
                  <li>
                    <Link to="/footwear/heels" className="subcategory-link">
                      Heels
                    </Link>
                  </li>
                  <li>
                    <Link to="/footwear/boots" className="subcategory-link">
                      Boots
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/footwear/sports-shoes-floaters"
                      className="subcategory-link"
                    >
                      Sports Shoes & Floaters
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="category-link topwear">
                <Link to="/sports-active-wear">Sports & Active Wear</Link>
              </li>
              <li className="category-link topwear">
                <Link to="/clothing">Clothing</Link>
              </li>
              <li className="category-link topwear">
                <Link to="/sports-accessories">Sports Accessories</Link>
              </li>
              <li className="category-link topwear">
                <Link to="/sports-equipment">Sports Equipment</Link>
              </li>
              <li className="category-link topwear">
                <Link to="/lingerie-sleepwear">Lingerie & Sleepwear</Link>
                <ul className="subcategory">
                  <li>
                    <Link
                      to="/lingerie-sleepwear/bra"
                      className="subcategory-link"
                    >
                      Bra
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/lingerie-sleepwear/briefs"
                      className="subcategory-link"
                    >
                      Briefs
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/lingerie-sleepwear/shapewear"
                      className="subcategory-link"
                    >
                      Shapewear
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/lingerie-sleepwear/sleepwear-loungewear"
                      className="subcategory-link"
                    >
                      Sleepwear & Loungewear
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/lingerie-sleepwear/swimwear"
                      className="subcategory-link"
                    >
                      Swimwear
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/lingerie-sleepwear/camisoles-thermals"
                      className="subcategory-link"
                    >
                      Camisoles & Thermals
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="category-link topwear">
                <Link to="/beauty-personal-care">Beauty & Personal Care</Link>
                <ul className="subcategory">
                  <li>
                    <Link
                      to="/beauty-personal-care/makeup"
                      className="subcategory-link"
                    >
                      Makeup
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/beauty-personal-care/skincare"
                      className="subcategory-link"
                    >
                      Skincare
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/beauty-personal-care/premium-beauty"
                      className="subcategory-link"
                    >
                      Premium Beauty
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/beauty-personal-care/lipsticks"
                      className="subcategory-link"
                    >
                      Lipsticks
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/beauty-personal-care/fragrances"
                      className="subcategory-link"
                    >
                      Fragrances
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="category-link topwear">
                <Link to="/gadgets">Gadgets</Link>
                <ul className="subcategory">
                  <li>
                    <Link
                      to="/gadgets/smart-wearables"
                      className="subcategory-link"
                    >
                      Smart Wearables
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/gadgets/fitness-gadgets"
                      className="subcategory-link"
                    >
                      Fitness Gadgets
                    </Link>
                  </li>
                  <li>
                    <Link to="/gadgets/headphones" className="subcategory-link">
                      Headphones
                    </Link>
                  </li>
                  <li>
                    <Link to="/gadgets/speakers" className="subcategory-link">
                      Speakers
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="category-link topwear">
                <Link to="/jewellery">Jewellery</Link>
                <ul className="subcategory">
                  <li>
                    <Link
                      to="/jewellery/fashion-jewellery"
                      className="subcategory-link"
                    >
                      Fashion Jewellery
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/jewellery/fine-jewellery"
                      className="subcategory-link"
                    >
                      Fine Jewellery
                    </Link>
                  </li>
                  <li>
                    <Link to="/jewellery/earrings" className="subcategory-link">
                      Earrings
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="category-link topwear">
                <Link to="/backpacks">Backpacks</Link>
              </li>
              <li className="category-link topwear">
                <Link to="/handbags-bags-wallets">
                  Handbags, Bags & Wallets
                </Link>
              </li>
              <li className="category-link topwear">
                <Link to="/luggages-trolleys">Luggages & Trolleys</Link>
              </li>
            </ul>
          </div>
          
          <div className="homeliving category">
            <Link to="" className="list-link">
              HOME & LIVING
            </Link>
            <ul className="submenu">
  <li className="category-link topwear">
    <Link to="/bed-linen-furnishing">Bed Linen & Furnishing</Link>
    <ul>
      <li>
        <Link to="/bed-linen-furnishing/bed-runners" className="subcategory-link">Bed Runners</Link>
      </li>
      <li>
        <Link to="/bed-linen-furnishing/mattress-protectors" className="subcategory-link">Mattress Protectors</Link>
      </li>
      <li>
        <Link to="/bed-linen-furnishing/bedsheets" className="subcategory-link">Bedsheets</Link>
      </li>
      <li>
        <Link to="/bed-linen-furnishing/bedding-sets" className="subcategory-link">Bedding Sets</Link>
      </li>
      <li>
        <Link to="/bed-linen-furnishing/blankets-quilts-dohars" className="subcategory-link">Blankets, Quilts & Dohars</Link>
      </li>
      <li>
        <Link to="/bed-linen-furnishing/pillows-pillow-covers" className="subcategory-link">Pillows & Pillow Covers</Link>
      </li>
      <li>
        <Link to="/bed-linen-furnishing/bed-covers" className="subcategory-link">Bed Covers</Link>
      </li>
      <li>
        <Link to="/bed-linen-furnishing/diwan-sets" className="subcategory-link">Diwan Sets</Link>
      </li>
      <li>
        <Link to="/bed-linen-furnishing/chair-pads-covers" className="subcategory-link">Chair Pads & Covers</Link>
      </li>
      <li>
        <Link to="/bed-linen-furnishing/sofa-covers" className="subcategory-link">Sofa Covers</Link>
      </li>
    </ul>
  </li>
  <li className="category-link topwear"> 
    <Link to="/flooring">Flooring</Link>
    <ul>
      <li>
        <Link to="/flooring/floor-runners" className="subcategory-link">Floor Runners</Link>
      </li>
      <li>
        <Link to="/flooring/carpets" className="subcategory-link">Carpets</Link>
      </li>
      <li>
        <Link to="/flooring/floor-mats-dhurries" className="subcategory-link">Floor Mats & Dhurries</Link>
      </li>
      <li>
        <Link to="/flooring/door-mats" className="subcategory-link">Door Mats</Link>
      </li>
    </ul>
  </li>
  <li className="category-link topwear">
    <Link to="/bath">Bath</Link>
    <ul>
      <li>
        <Link to="/bath/bath-towels" className="subcategory-link">Bath Towels</Link>
      </li>
      <li>
        <Link to="/bath/hand-face-towels" className="subcategory-link">Hand & Face Towels</Link>
      </li>
      <li>
        <Link to="/bath/beach-towels" className="subcategory-link">Beach Towels</Link>
      </li>
      <li>
        <Link to="/bath/towels-set" className="subcategory-link">Towels Set</Link>
      </li>
      <li>
        <Link to="/bath/bath-rugs" className="subcategory-link">Bath Rugs</Link>
      </li>
      <li>
        <Link to="/bath/bath-robes" className="subcategory-link">Bath Robes</Link>
      </li>
      <li>
        <Link to="/bath/bathroom-accessories" className="subcategory-link">Bathroom Accessories</Link>
      </li>
      <li>
        <Link to="/bath/shower-curtains" className="subcategory-link">Shower Curtains</Link>
      </li>
    </ul>
  </li>
  <li className="category-link topwear">
    <Link to="/lamps-lighting">Lamps & Lighting</Link>
    <ul>
      <li>
        <Link to="/lamps-lighting/floor-lamps" className="subcategory-link">Floor Lamps</Link>
      </li>
      <li>
        <Link to="/lamps-lighting/ceiling-lamps" className="subcategory-link">Ceiling Lamps</Link>
      </li>
      <li>
        <Link to="/lamps-lighting/table-lamps" className="subcategory-link">Table Lamps</Link>
      </li>
      <li>
        <Link to="/lamps-lighting/wall-lamps" className="subcategory-link">Wall Lamps</Link>
      </li>
      <li>
        <Link to="/lamps-lighting/outdoor-lamps" className="subcategory-link">Outdoor Lamps</Link>
      </li>
      <li>
        <Link to="/lamps-lighting/string-lights" className="subcategory-link">String Lights</Link>
      </li>
    </ul>
  </li>
  <li className="category-link topwear">
    <Link to="/home-decor">Home Décor</Link>
    <ul>
      <li>
        <Link to="/home-decor/plants-planters" className="subcategory-link">Plants & Planters</Link>
      </li>
      <li>
        <Link to="/home-decor/aromas-candles" className="subcategory-link">Aromas & Candles</Link>
      </li>
      <li>
        <Link to="/home-decor/clocks" className="subcategory-link">Clocks</Link>
      </li>
      <li>
        <Link to="/home-decor/mirrors" className="subcategory-link">Mirrors</Link>
      </li>
      <li>
        <Link to="/home-decor/wall-decor" className="subcategory-link">Wall Décor</Link>
      </li>
      <li>
        <Link to="/home-decor/festive-decor" className="subcategory-link">Festive Decor</Link>
      </li>
      <li>
        <Link to="/home-decor/pooja-essentials" className="subcategory-link">Pooja Essentials</Link>
      </li>
      <li>
        <Link to="/home-decor/wall-shelves" className="subcategory-link">Wall Shelves</Link>
      </li>
      <li>
        <Link to="/home-decor/fountains" className="subcategory-link">Fountains</Link>
      </li>
      <li>
        <Link to="/home-decor/showpieces-vases" className="subcategory-link">Showpieces & Vases</Link>
      </li>
      <li>
        <Link to="/home-decor/ottoman" className="subcategory-link">Ottoman</Link>
      </li>
    </ul>
  </li>
  <li className="category-link topwear">
    <Link to="/cushions-cushion-covers">Cushions & Cushion Covers</Link>
  </li>
  <li className="category-link topwear">
    <Link to="/curtains">Curtains</Link>
  </li>
  <li className="category-link topwear">
    <Link to="/home-gift-sets">Home Gift Sets</Link>
  </li>
  <li className="category-link topwear">
    <Link to="/kitchen-table">Kitchen & Table</Link>
    <ul>
      <li>
        <Link to="/kitchen-table/table-runners" className="subcategory-link">Table Runners</Link>
      </li>
      <li>
        <Link to="/kitchen-table/dinnerware-serveware" className="subcategory-link">Dinnerware & Serveware</Link>
      </li>
      <li>
        <Link to="/kitchen-table/cups-mugs" className="subcategory-link">Cups and Mugs</Link>
      </li>
      <li>
        <Link to="/kitchen-table/bakeware-cookware" className="subcategory-link">Bakeware & Cookware</Link>
      </li>
      <li>
        <Link to="/kitchen-table/kitchen-storage-tools" className="subcategory-link">Kitchen Storage & Tools</Link>
      </li>
      <li>
        <Link to="/kitchen-table/bar-drinkware" className="subcategory-link">Bar & Drinkware</Link>
      </li>
      <li>
        <Link to="/kitchen-table/table-covers-furnishings" className="subcategory-link">Table Covers & Furnishings</Link>
      </li>
    </ul>
  </li>
  <li className="category-link topwear">
    <Link to="/storage">Storage</Link>
    <ul>
      <li>
        <Link to="/storage/bins" className="subcategory-link">Bins</Link>
      </li>
      <li>
        <Link to="/storage/hangers" className="subcategory-link">Hangers</Link>
      </li>
      <li>
        <Link to="/storage/organisers" className="subcategory-link">Organisers</Link>
      </li>
      <li>
        <Link to="/storage/hooks-holders" className="subcategory-link">Hooks & Holders</Link>
      </li>
      <li>
        <Link to="/storage/laundry-bags" className="subcategory-link">Laundry Bags</Link>
      </li>
    </ul>
  </li>
  <li className="category-link topwear">
    <Link to="/brands">Brands</Link>
    <ul>
      <li>
        <Link to="/brands/hm" className="subcategory-link">H&M</Link>
      </li>
      <li>
        <Link to="/brands/marks-spencer" className="subcategory-link">Marks & Spencer</Link>
      </li>
      <li>
        <Link to="/brands/home-centre" className="subcategory-link">Home Centre</Link>
      </li>
      <li>
        <Link to="/brands/spaces" className="subcategory-link">Spaces</Link>
      </li>
      <li>
        <Link to="/brands/ddecor" className="subcategory-link">D'Decor</Link>
      </li>
      <li>
        <Link to="/brands/story-home" className="subcategory-link">Story@Home</Link>
      </li>
      <li>
        <Link to="/brands/pure-home-living" className="subcategory-link">Pure Home & Living</Link>
      </li>
      <li>
        <Link to="/brands/swayam" className="subcategory-link">Swayam</Link>
      </li>
      <li>
        <Link to="/brands/raymond-home" className="subcategory-link">Raymond Home</Link>
      </li>
      <li>
        <Link to="/brands/maspar" className="subcategory-link">Maspar</Link>
      </li>
      <li>
        <Link to="/brands/my-trident" className="subcategory-link">My Trident</Link>
      </li>
      <li>
        <Link to="/brands/cortina" className="subcategory-link">Cortina</Link>
      </li>
      
    </ul>
  </li>
</ul>

          </div>
          <div className="beauty category">
            <Link to="" className="list-link">
              BEAUTY
            </Link>
            <ul className="submenu">
  <li className="category-link topwear">
    <Link to="/beauty/makeup" >Makeup</Link>
    <ul className="subcategory">
      <li><Link to="/beauty/makeup/lipstick" className="subcategory-link">Lipstick</Link></li>
      <li><Link to="/beauty/makeup/lip-gloss" className="subcategory-link">Lip Gloss</Link></li>
      <li><Link to="/beauty/makeup/lip-liner" className="subcategory-link">Lip Liner</Link></li>
      <li><Link to="/beauty/makeup/mascara" className="subcategory-link">Mascara</Link></li>
      <li><Link to="/beauty/makeup/eyeliner" className="subcategory-link">Eyeliner</Link></li>
      <li><Link to="/beauty/makeup/kajal" className="subcategory-link">Kajal</Link></li>
      <li><Link to="/beauty/makeup/eyeshadow" className="subcategory-link">Eyeshadow</Link></li>
      <li><Link to="/beauty/makeup/foundation" className="subcategory-link">Foundation</Link></li>
      <li><Link to="/beauty/makeup/primer" className="subcategory-link">Primer</Link></li>
      <li><Link to="/beauty/makeup/concealer" className="subcategory-link">Concealer</Link></li>
      <li><Link to="/beauty/makeup/compact" className="subcategory-link">Compact</Link></li>
      <li><Link to="/beauty/makeup/nail-polish" className="subcategory-link">Nail Polish</Link></li>
    </ul>
  </li>
  <li className="category-link skincare">
    <Link to="/beauty/skincare" >Skincare, Bath & Body</Link>
    <ul className="subcategory">
      <li><Link to="/beauty/skincare/face-moisturiser" className="subcategory-link">Face Moisturiser</Link></li>
      <li><Link to="/beauty/skincare/cleanser" className="subcategory-link">Cleanser</Link></li>
      <li><Link to="/beauty/skincare/masks-peel" className="subcategory-link">Masks & Peel</Link></li>
      <li><Link to="/beauty/skincare/sunscreen" className="subcategory-link">Sunscreen</Link></li>
      <li><Link to="/beauty/skincare/serum" className="subcategory-link">Serum</Link></li>
      <li><Link to="/beauty/skincare/face-wash" className="subcategory-link">Face Wash</Link></li>
      <li><Link to="/beauty/skincare/eye-cream" className="subcategory-link">Eye Cream</Link></li>
      <li><Link to="/beauty/skincare/lip-balm" className="subcategory-link">Lip Balm</Link></li>
      <li><Link to="/beauty/skincare/body-lotion" className="subcategory-link">Body Lotion</Link></li>
      <li><Link to="/beauty/skincare/body-wash" className="subcategory-link">Body Wash</Link></li>
      <li><Link to="/beauty/skincare/body-scrub" className="subcategory-link">Body Scrub</Link></li>
      <li><Link to="/beauty/skincare/hand-cream" className="subcategory-link">Hand Cream</Link></li>
      
    </ul>
  </li>
  <li className="category-link haircare">
    <Link to="/beauty/haircare" >Haircare</Link>
    <ul className="subcategory">
      <li><Link to="/beauty/haircare/shampoo" className="subcategory-link">Shampoo</Link></li>
      <li><Link to="/beauty/haircare/conditioner" className="subcategory-link">Conditioner</Link></li>
      <li><Link to="/beauty/haircare/hair-cream" className="subcategory-link">Hair Cream</Link></li>
      <li><Link to="/beauty/haircare/hair-oil" className="subcategory-link">Hair Oil</Link></li>
      <li><Link to="/beauty/haircare/hair-gel" className="subcategory-link">Hair Gel</Link></li>
      <li><Link to="/beauty/haircare/hair-color" className="subcategory-link">Hair Color</Link></li>
      <li><Link to="/beauty/haircare/hair-serum" className="subcategory-link">Hair Serum</Link></li>
      <li><Link to="/beauty/haircare/hair-accessory" className="subcategory-link">Hair Accessory</Link></li>
    </ul>
  </li>
  <li className="category-link fragrances">
    <Link to="/beauty/fragrances" >Fragrances</Link>
    <ul className="subcategory">
      <li><Link to="/beauty/fragrances/perfume" className="subcategory-link">Perfume</Link></li>
      <li><Link to="/beauty/fragrances/deodorant" className="subcategory-link">Deodorant</Link></li>
      <li><Link to="/beauty/fragrances/body-mist" className="subcategory-link">Body Mist</Link></li>
    </ul>
  </li>
  <li className="category-link appliances">
    <Link to="/beauty/appliances" >Appliances</Link>
    <ul className="subcategory">
      <li><Link to="/beauty/appliances/hair-straightener" className="subcategory-link">Hair Straightener</Link></li>
      <li><Link to="/beauty/appliances/hair-dryer" className="subcategory-link">Hair Dryer</Link></li>
      <li><Link to="/beauty/appliances/epilator" className="subcategory-link">Epilator</Link></li>
    </ul>
  </li>
  <li className="category-link mens-grooming">
    <Link to="/beauty/mens-grooming" >Men's Grooming</Link>
    <ul className="subcategory">
      <li><Link to="/beauty/mens-grooming/trimmers" className="subcategory-link">Trimmers</Link></li>
      <li><Link to="/beauty/mens-grooming/beard-oil" className="subcategory-link">Beard Oil</Link></li>
      <li><Link to="/beauty/mens-grooming/hair-wax" className="subcategory-link">Hair Wax</Link></li>
    </ul>
  </li>
  <li className="category-link beauty-gift">
    <Link to="/beauty/gifts" >Beauty Gift & Makeup Set</Link>
    <ul className="subcategory">
      <li><Link to="/beauty/gifts/beauty-gift" className="subcategory-link">Beauty Gift</Link></li>
      <li><Link to="/beauty/gifts/makeup-kit" className="subcategory-link">Makeup Kit</Link></li>
    </ul>
  </li>
  <li className="category-link premium-beauty">
    <Link to="/beauty/premium" >Premium Beauty</Link>
  </li>
  <li className="category-link wellness-hygiene">
    <Link to="/beauty/wellness-hygiene" >Wellness & Hygiene</Link>
  </li>
  <li className="category-link top-brands">
    <Link to="/beauty/brands" >Top Brands</Link>
    <ul className="subcategory">
      <li><Link to="/beauty/brands/lakme" className="subcategory-link">Lakme</Link></li>
      <li><Link to="/beauty/brands/maybelline" className="subcategory-link">Maybelline</Link></li>
      <li><Link to="/beauty/brands/loreal" className="subcategory-link">L'Oreal</Link></li>
      <li><Link to="/beauty/brands/philips" className="subcategory-link">Philips</Link></li>
      <li><Link to="/beauty/brands/bath-body-works" className="subcategory-link">Bath & Body Works</Link></li>
      <li><Link to="/beauty/brands/the-body-shop" className="subcategory-link">The Body Shop</Link></li>
      <li><Link to="/beauty/brands/biotique" className="subcategory-link">Biotique</Link></li>
      <li><Link to="/beauty/brands/mamaearth" className="subcategory-link">Mamaearth</Link></li>
      <li><Link to="/beauty/brands/mcaffeine" className="subcategory-link">MCaffeine</Link></li>
      <li><Link to="/beauty/brands/nivea" className="subcategory-link">Nivea</Link></li>
      
    </ul>
  </li>
</ul>

          </div>
          
          <div className="studio category">
            <Link to="" className="list-link">
              STUDIO
            </Link>
            <ul className="submenu studio-menu">
              <li>
                <img id="studio" src={studio} alt="" />
              </li>
              <li>
                <button>Explore Studio</button>
              </li>
            </ul>
          </div>
          <div className="groceries category">
            <Link to="" className="list-link">
              GROCERIES
            </Link>
          </div>
        </div>
        
        <div className="nav-search">
          <div className="search-img">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              fill="black"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001a1.007 1.007 0 0 0-.117.128l3.85 3.85a1 1 0 0 0 1.415-1.415l-3.85-3.85a1.007 1.007 0 0 0-.128-.117zm-5.442.656a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11z" />
            </svg>
          </div>
          <div className="search-input">
            <input type="text" placeholder="Search for products , categories" />
          </div>
        </div>
        <div className="profile">
          <div className="nav-profile">
            <div>
              <img src={profile} alt="" />
            </div>
            <div>
              <p>
                <b>Profile</b>
              </p>
            </div>
            <ul className="profile-dropdown">
              {!isAuthenticated ? (
                <div className="userdetail">
                  <p><b>Welcome</b></p>
                  <p>To access account and manage orders</p>
                  <li>
                    <Link to="/login" id="login">Login / Signup</Link>
                  </li>
                </div>
              ) : (
                <div className="userdetail">
                  <p><b>Welcome {userdetail.username}</b></p>
                  <p>{userdetail.phone}</p>
                </div>
              )}
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
                <Link to="/coupons">Coupons</Link>
              </li>
              {
                isAuthenticated?<button onClick={()=>{
                  setisAuthenticated(false);
                }}>Logout</button>:""
              }
            </ul>
          </div>
          <div className="nav-profile">
            <div>
              <img src={like} alt="" />
            </div>
            <div>
              <p>
                <b>Wishlist</b>
              </p>
            </div>
          </div>
          <div className="nav-profile">
            <div>
              <img src={bag} alt="" />
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
