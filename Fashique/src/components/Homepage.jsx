import pic1 from "../assets/pic1.png"
import pic2 from "../assets/pic2.png"
import pic3 from "../assets/pic3.png"
import pic4 from "../assets/pic4.png"
import pic5 from "../assets/pic5.png"
import pic6 from "../assets/pic6.png"
import pic7 from "../assets/pic5.png"
import pic8 from "../assets/pic8.png"
import pic9 from "../assets/pic9.png"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Homepage=()=>{
   const arr1=[pic3,pic4,pic5];
   const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
   return (
    <>
      <div className="home-main">
        <div>
            <div><img id="home-pic1" src={pic1} alt="" /></div>
        </div>
        <div>
            <img id="home-pic2" src={pic2} alt="" />
        </div>
        <div>
            <div className="carousel">
                <Slider {...settings}>
                {arr1.map((ele,i)=>{
                    return <div key={i}><img src={ele} alt="Test Image" /></div>
                })}
                </Slider>
            </div>
            <div>
                <img src={pic6} alt="" />
            </div>
        </div>
      </div>
    </>
   )
}

export default Homepage