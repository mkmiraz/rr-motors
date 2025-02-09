import { Link } from "react-router-dom";
import car1 from "../../assets/img/01.png";
import car2 from "../../assets/img/02.png";
import loader1 from "../../assets/img/loader1.gif";
import loader2 from "../../assets/img/loader2.gif";
import loader3 from "../../assets/img/loader3.gif";
import loader4 from "../../assets/img/loader4.gif";
import loader5 from "../../assets/img/loader5.gif";
import loader6 from "../../assets/img/loader6.gif";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import ProductCard from "../ProductCard/ProductCard";
import Footer from "../Footer/Footer";

const ProductSlider = () => {
  return (
    <>
      <div className="product_area w-full z-10 bg-[url('./src/assets/img/building-bg.jpg')] bg-cover bg-center h-[800px] relative">
        <div className="container mt-20 py-2">
          <div className="title_area pt-10 flex justify-center items-center flex-col">
            <h2 className="text-4xl font-bold">
              Let s Check Latest <span className="text_red">Cars</span>
            </h2>
            <p className="mt-6 w-[55%] mx-auto leading-[<value>] text-black text-center opacity-65">
              Car Dealer is the most enticing, creative, modern and multipurpose
              auto dealer Premium React Theme. Suitable for any car dealer
              websites, business or corporate websites.
            </p>
            <span className="title_border mt-5"></span>
          </div>
          <div className="slider  w-[70%] h-fit mt-10 mx-auto p-3">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              loop={true}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination]}
            >
              <SwiperSlide>
                <div className="slider_area w-fit ">
                  <Link to={"#"} className="slider_img ">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVn6bwqpKenE_jVHop3BkN30B7n329gzjQKQ&s"
                      alt=""
                    />
                    <div className="slider_text">
                      <h3 className="text-white text-xl uppercase font-semibold opacity-95">
                        yellow ferrari 458
                      </h3>
                      <span className="text_red text-lg font-semibold">
                        Check Now
                      </span>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slider_area w-fit ">
                  <Link to={"#"} className="slider_img ">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVn6bwqpKenE_jVHop3BkN30B7n329gzjQKQ&s"
                      alt=""
                    />
                    <div className="slider_text">
                      <h3 className="text-white text-xl uppercase font-semibold opacity-95">
                        yellow ferrari 458
                      </h3>
                      <span className="text_red text-lg font-semibold">
                        Check Now
                      </span>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slider_area w-fit ">
                  <Link to={"#"} className="slider_img ">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVn6bwqpKenE_jVHop3BkN30B7n329gzjQKQ&s"
                      alt=""
                    />
                    <div className="slider_text">
                      <h3 className="text-white text-xl uppercase font-semibold opacity-95">
                        yellow ferrari 458
                      </h3>
                      <span className="text_red text-lg font-semibold">
                        Check Now
                      </span>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="car_img absolute bottom-0 left-0 w-full flex justify-between items-center  ">
          <img className="w-[600px] h-fit object-cover" src={car2} alt="" />
          <img className="w-[600px] h-fit object-cover" src={car1} alt="" />
        </div>
      </div>

      <div className="container py-10">
        <div className="title_area pt-10 flex justify-center items-center flex-col">
          <h2 className="text-4xl font-bold">
            Our Featured <span className="text_red">Cars</span>
          </h2>
          <p className="mt-6 w-[55%] mx-auto leading-[<value>] text-black text-center opacity-65">
            Car Dealer is the most enticing, creative, modern and multipurpose
            auto dealer Premium React Theme. Suitable for any car dealer
            websites, business or corporate websites.
          </p>
          <span className="title_border mt-5"></span>
        </div>
        <ProductCard />
      </div>

      <div className="car_img  py-10 px-7 w-full flex justify-around items-center box-border">
        <img className="w-[250px] h-fit object-cover" src={loader1} alt="" />
        <img className="w-[250px] h-fit object-cover" src={loader2} alt="" />
        <img className="w-[250px] h-fit object-cover" src={loader3} alt="" />
        <img className="w-[250px] h-fit object-cover" src={loader4} alt="" />
        <img className="w-[250px] h-fit object-cover" src={loader5} alt="" />
        <img className="w-[250px] h-fit object-cover" src={loader6} alt="" />
      </div>

      <Footer />
    </>
  );
};

export default ProductSlider;
