import {
  GET_ITEMS,
  GET_ITEM_SUCCESS,
  GET_ITEM_FAIL,
  // GET_POST_DETAILS,
  // GET_POST_DETAILS_SUCCESS,
  // GET_POST_DETAILS_FAIL,
  DELETE_ITEM,
  DELETE_ITEM_SUCCESS,
  DELETE_ITEM_FAIL,
  PUT_ITEM,
  PUT_ITEM_SUCCESS,
  PUT_ITEM_FAIL,
  GET_FAVORITE_ITEMS,
  GET_FAVORITE_ITEM_SUCCESS,
  GET_FAVORITE_ITEM_FAIL,
  TOGGLE_FAVORITE_ITEM,
  TOGGLE_FAVORITE_ITEM_SUCCESS,
  TOGGLE_FAVORITE_ITEM_FAIL,
} from "./actionTypes";

export const getItems = () => {
  return {
    type: GET_ITEMS,
  };
};

export const getItemsSuccess = (contact) => {
  return {
    type: GET_ITEM_SUCCESS,
    payload: contact,
  };
};

export const getItemsFail = (error) => {
  return {
    type: GET_ITEM_FAIL,
    payload: error,
  };
};

// export const getPostDetails = (id) => {
//   return {
//     type: GET_POST_DETAILS,
//     payload: id,
//   };
// };

// export const getPostDetailsSuccess = (post) => {
//   return {
//     type: GET_POST_DETAILS_SUCCESS,
//     payload: post,
//   };
// };

// export const getPostDetailsFail = (error) => {
//   return {
//     type: GET_POST_DETAILS_FAIL,
//     payload: error,
//   };
// };

export const deleteItem = () => {
  return {
    type: DELETE_ITEM,
  };
};

export const deleteItemSuccess = (contact) => {
  return {
    type: DELETE_ITEM_SUCCESS,
    payload: contact,
  };
};

export const deleteItemFail = (error) => {
  return {
    type: DELETE_ITEM_FAIL,
    payload: error,
  };
};

export const updateItem = () => {
  return {
    type: PUT_ITEM,
  };
};

export const updateItemSuccess = (contact) => {
  return {
    type: PUT_ITEM_SUCCESS,
    payload: contact,
  };
};

export const updateItemFail = (error) => {
  return {
    type: PUT_ITEM_FAIL,
    payload: error,
  };
};

export const getFavoriteItems = () => {
  return {
    type: GET_FAVORITE_ITEMS,
  };
};

export const getFavoriteItemsSuccess = (contact) => {
  return {
    type: GET_FAVORITE_ITEM_SUCCESS,
    payload: contact,
  };
};

export const getFavoriteItemsFail = (error) => {
  return {
    type: GET_FAVORITE_ITEM_FAIL,
    payload: error,
  };
};

export const updateFavoriteItems = () => {
  return {
    type: TOGGLE_FAVORITE_ITEM,
  };
};

export const updateFavoriteItemsSuccess = (contact) => {
  return {
    type: TOGGLE_FAVORITE_ITEM_SUCCESS,
    payload: contact,
  };
};

export const updateFavoriteItemsFail = (error) => {
  return {
    type: TOGGLE_FAVORITE_ITEM_FAIL,
    payload: error,
  };
};
