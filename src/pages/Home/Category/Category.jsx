import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";

import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";
import img4 from "../../../assets/home/slide4.jpg";
import img5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
const Category = () => {
  return (
    <div className="mb-10">
      <section>
        <SectionTitle
        subHeading={'From 11.00am to 10.00pm'}
        heading={'Order Online'}
        ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-16 text-white">Salads</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={ img2 } alt="" />
          <h3 className="text-4xl uppercase text-center -mt-16 text-white">Pizza</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-16 text-white">Soups</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-16 text-white">Cake</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="" />
          <h3 className="text-4xl uppercase text-center  text-white">Salads</h3>
        </SwiperSlide>
      </Swiper>
      </section>
    </div>
  );
};

export default Category;
