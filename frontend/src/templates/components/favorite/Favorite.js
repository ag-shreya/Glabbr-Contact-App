import React from "react";
import SwiperWrapper from "../common/Swiper";
import { useSelector } from "react-redux";

function Favorite(props) {
  const { favoriteContact, loadingFavoriteItems } = useSelector(
    (state) => state.PostReducer
  );
  return (
    <div className="py-5">
      <h2 className="text-heading">Favorite</h2>
      <div>
        {!loadingFavoriteItems && (
          <div className="site-card-wrapper">
            <SwiperWrapper {...props} data={favoriteContact} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Favorite;
