import React from "react";
import SwiperWrapper from "../common/Swiper";

function Favorite(props) {
  return (
    <div className="py-5">
      <h2 className="text-heading">Favorite</h2>
      <div>
        <div className="site-card-wrapper">
          <SwiperWrapper {...props} />
        </div>
      </div>
    </div>
  );
}

export default Favorite;
