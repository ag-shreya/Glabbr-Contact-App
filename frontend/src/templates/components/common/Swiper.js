import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import FavCard from "../favorite/FavCard";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function SwiperWrapper({ data, showModal }) {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      keyboard={{
        enabled: true,
      }}
      breakpoints={{
        480: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2.5,
        },
        1024: {
          slidesPerView: 3.5,
        },
      }}
      className="pb-5 pe-md-5"
    >
      {data.map((item, index) => {
        if (item.isFavorite)
          return (
            <SwiperSlide
              style={{ cursor: "pointer" }}
              onClick={() => showModal(item)}
              key={index}
            >
              <FavCard data={item} />
            </SwiperSlide>
          );
      })}
    </Swiper>
  );
}

export default SwiperWrapper;
