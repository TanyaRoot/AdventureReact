import { createStore } from 'redux'
import reducer from '../reducer'

const store = createStore(reducer)

//dev only
window.store = store
// console.log(store)

export default store
