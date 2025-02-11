import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Hero = () => {
  return (
    <Swiper
   
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper container my-6"
    >
      <SwiperSlide>
        <img src={img1} alt="Slide 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img2} alt="Slide 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img3} alt="Slide 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img4} alt="Slide 1" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Hero;
/* 4272x2848 */