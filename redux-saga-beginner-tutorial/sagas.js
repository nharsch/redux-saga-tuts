import { delay } from 'redux-saga'
import { put, takeEvery, all, call } from 'redux-saga/effects'

export function* helloSaga() {
    console.log('Hello Sagas!')
}

export function* incrementAsync() {
    // call doesn't actually call function, it emits
    // a JS object to the middleware
    yield call(delay, 1000)
    // put is an effect. effects are simple JS objects which contain
    // instructions to be fulfilled by middleware
    //
    // when a middleware retrieves an effect yielded by a saga,
    // the saga is paused intil the effect is fulfilled
    yield put({ type: 'INCREMENT' })


    // PUT: dispatch action to store
    // CALL: call given function
}


export function* watchIncrementAsync() {
    yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}


export default function* rootSaga() {
    // this saga yeilds an array with the results
    // of calling our two sagas
    yield all([
        helloSaga(),
        watchIncrementAsync()
    ])
}
