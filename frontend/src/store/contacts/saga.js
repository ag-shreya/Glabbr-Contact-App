import { takeLatest, put, call } from "redux-saga/effects";
import {
  GET_ITEMS,
  // GET_POST_DETAILS,
  DELETE_ITEM,
  PUT_ITEM,
  GET_FAVORITE_ITEMS,
  TOGGLE_FAVORITE_ITEM,
} from "./actionTypes";

import {
  getItemsSuccess,
  getItemsFail,
  //   getPostDetailsSuccess,
  //   getPostDetailsFail,
  deleteItemSuccess,
  deleteItemFail,
  updateItemSuccess,
  updateItemFail,
  getFavoriteItemsSuccess,
  getFavoriteItemsFail,
  updateFavoriteItemsSuccess,
  updateFavoriteItemsFail,
} from "./actions";

import {
  getItems,
  // postItems,
  deleteItem,
  updateItem,
  getFavoriteItems,
  updateFavoriteItems,
} from "../../helpers/backend_helper";

function* onGetItems() {
  try {
    const response = yield call(getItems);
    yield put(getItemsSuccess(response));
  } catch (error) {
    yield put(getItemsFail(error.response));
  }
}

// function* onGetPostDetails({ payload: id }) {
//   try {
//     const response = yield call(getPostDetails, id);
//     yield put(getPostDetailsSuccess(response));
//   } catch (error) {
//     yield put(getPostDetailsFail(error.response));
//   }
// }

function* onDeleteItem({ payload: id }) {
  try {
    const response = yield call(deleteItem, id);
    yield put(deleteItemSuccess(response));
  } catch (error) {
    yield put(deleteItemFail(error.response));
  }
}

function* onUpdateItem({ payload: id }) {
  try {
    const response = yield call(updateItem, id);
    yield put(updateItemSuccess(response));
  } catch (error) {
    yield put(updateItemFail(error.response));
  }
}

function* onGetFavoriteItems() {
  try {
    const response = yield call(getFavoriteItems);
    yield put(getFavoriteItemsSuccess(response));
  } catch (error) {
    yield put(getFavoriteItemsFail(error.response));
  }
}

function* onUpdateFavoriteItem({ payload: id }) {
  try {
    const response = yield call(updateFavoriteItems, id);
    yield put(updateFavoriteItemsSuccess(response));
  } catch (error) {
    yield put(updateFavoriteItemsFail(error.response));
  }
}

function* PostSaga() {
  yield takeLatest(GET_ITEMS, onGetItems);
  // yield takeLatest(GET_POST_DETAILS, onGetPostDetails);
  yield takeLatest(DELETE_ITEM, onDeleteItem);
  yield takeLatest(PUT_ITEM, onUpdateItem);
  yield takeLatest(GET_FAVORITE_ITEMS, onGetFavoriteItems);
  yield takeLatest(TOGGLE_FAVORITE_ITEM, onUpdateFavoriteItem);
}

export default PostSaga;
