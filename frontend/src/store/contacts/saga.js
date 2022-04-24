import { takeLatest, put, call } from "redux-saga/effects";
import {
  GET_ITEMS,
  // GET_POST_DETAILS
} from "./actionTypes";

import {
  getItemsSuccess,
  getItemsFail,
  //   getPostDetailsSuccess,
  //   getPostDetailsFail,
} from "./actions";

import { getItems, getPostDetails } from "../../helpers/backend_helper";

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

function* PostSaga() {
  yield takeLatest(GET_ITEMS, onGetItems);
  // yield takeLatest(GET_POST_DETAILS, onGetPostDetails);
}

export default PostSaga;
