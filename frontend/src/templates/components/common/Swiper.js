import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import FavCard from "../favorite/FavCard";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function SwiperWrapper({ data, showModal }) {
  return (
    <Swiper spaceBetween={30} slidesPerView={3.5} className="pb-5 pe-5">
      {data.map((item, index) => {
        return (
          <SwiperSlide
            style={{ cursor: "pointer" }}
            onClick={() => showModal(item)}
            key={index}
          >
            <FavCard />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default SwiperWrapper;
