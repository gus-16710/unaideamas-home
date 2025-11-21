import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFlip } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cube";
import "swiper/css/effect-flip";

import Enterprise from "./Slides/Enterprise";
import EcoBag from "./Slides/EcoBag";
import Featured from "./Slides/Featured";
import Calendars from "./Slides/Calendars";
import Events from "./Slides/Events";
import BioSet from "./Slides/BioSet";
import Mugs from "./Slides/Mugs";

export default function Carousel() {
  return (
    <motion.div
      className="w-full h-screen lg:h-[700px] flex items-center justify-center relative overflow-hidden pb-15"
      initial={{ opacity: 0, y: -40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        centeredSlides={true}
        effect="flip"
        loop={true}
        // autoplay={{
        //   delay: 10000,
        //   disableOnInteraction: false,
        // }}
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
          <Mugs />
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
          <Calendars />
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
    </motion.div>
  );
}
