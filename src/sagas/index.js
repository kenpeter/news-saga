
import { put, takeLatest, all } from 'redux-saga/effects';

function* fetchNews() {
  // wait promise
  const json = 
    yield fetch('https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc')
    .then(response => response.json(), );

  // got it, update ui
  yield put({ type: "NEWS_RECEIVED", json: json.articles});
}

// 1 flow action
function* actionWatcher() {
     yield takeLatest('GET_NEWS', fetchNews)
}

// 1. wait all
// 2. arr of 1 flow
export default function* saga() {
  yield all([
    actionWatcher(),
  ]);
}