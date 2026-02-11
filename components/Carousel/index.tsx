import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFlip } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cube";
import "swiper/css/effect-flip";

import Enterprise from "./Slides/Enterprise";
import EcoBag from "./Slides/EcoBag";
import Featured from "./Slides/Featured";
import Events from "./Slides/Events";
import BioSet from "./Slides/BioSet";
import WorldCup from "./Slides/WorldCup";
import PromoShirts from "./Slides/PromoShirts";
import PromoLoveMonth from "./Slides/PromoLoveMonth";

export default function Carousel() {
  return (
    <div
      className="w-full h-screen lg:h-[700px] flex items-center justify-center relative overflow-hidden pb-15"     
    >
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        centeredSlides={true}
        effect="flip"
        loop={true}
        autoplay={{
          delay: 25000,
          disableOnInteraction: false,
        }}
        speed={800}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Navigation, Pagination, Autoplay, EffectFlip]}
        className="w-full h-full"
      >
        <SwiperSlide>
          <PromoLoveMonth />
        </SwiperSlide> 

        <SwiperSlide>
          <WorldCup />
        </SwiperSlide> 
       
        <SwiperSlide>
          <Enterprise />
        </SwiperSlide>       

        <SwiperSlide>
          <EcoBag />
        </SwiperSlide>

        <SwiperSlide>
          <Featured />
        </SwiperSlide>        

        <SwiperSlide>
          <Events />
        </SwiperSlide>

        <SwiperSlide>
          <BioSet />
        </SwiperSlide>
      </Swiper>

      {/* Navegación personalizada para mejor responsividad */}
      <div className="swiper-button-prev hidden! md:flex! after:text-white! after:text-lg! md:after:text-xl!"></div>
      <div className="swiper-button-next hidden! md:flex! after:text-white! after:text-lg! md:after:text-xl!"></div>
    </div>
  );
}
