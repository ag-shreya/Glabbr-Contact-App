import { takeLatest, put, call } from "redux-saga/effects";
import * as types from "./actionTypes";
import * as actions from "./actions";
import * as api from "../../helpers/backend_helper";

function* onGetItems(action) {
  try {
    const response = yield call(() => api.getItems(action.params));
    yield put(actions.getContactItemsSuccess(response));
  } catch (error) {
    yield put(actions.getContactItemsFail(error.response));
  }
}

function* onPostItems(action) {
  try {
    const response = yield call(() => api.postItem(action.payload));
    yield put(actions.postContactItemSuccess(response));
  } catch (error) {
    yield put(actions.postContactItemFail(error.response));
  }
}

function* onDeleteItem(action) {
  try {
    const response = yield call(() => api.deleteItem(action.id));
    yield put(actions.deleteContactSuccess(response));
  } catch (error) {
    yield put(actions.deleteContactFail(error.response));
  }
}

function* onUpdateItem(action) {
  try {
    const response = yield call(() => api.updateItem(action.payload));
    yield put(actions.updateContactSuccess(response));
  } catch (error) {
    yield put(actions.updateContactFail(error.response));
  }
}

function* onGetFavoriteItems() {
  try {
    const response = yield call(api.getFavoriteItems);
    yield put(actions.getFavoriteItemsSuccess(response));
  } catch (error) {
    yield put(actions.getFavoriteItemsFail(error.response));
  }
}

function* PostSaga() {
  yield takeLatest(types.GET_ITEMS, onGetItems);
  yield takeLatest(types.POST_ITEMS, onPostItems);
  yield takeLatest(types.DELETE_ITEM, onDeleteItem);
  yield takeLatest(types.PUT_ITEM, onUpdateItem);
  yield takeLatest(types.GET_FAVORITE_ITEMS, onGetFavoriteItems);
}

export default PostSaga;
