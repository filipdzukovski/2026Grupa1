import { configureStore } from '@reduxjs/toolkit'; //za kreiranje na prodavnicata/store
import {createLogger} from 'redux-logger' // fiskalen aparat
import SayHelloReducer from './reducers/SayHelloReducer' // vraboteniot(prodavachot)

const reducer = {
    //sojuz na rabotnici / lista na vraboteni
    SayHelloReducer: SayHelloReducer
}
const logger = createLogger();

export default configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger) 
})