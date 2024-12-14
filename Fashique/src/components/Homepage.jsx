import pic1 from "../assets/pic1.png"
import pic2 from "../assets/pic2.png"


const Homepage=()=>{
   return (
    <>
      <div className="home-main">
        <div>
            <div><img id="home-pic1" src={pic1} alt="" /></div>
        </div>
        <div>
            <img id="home-pic2" src={pic2} alt="" />
        </div>
      </div>
    </>
   )
}

export default Homepage