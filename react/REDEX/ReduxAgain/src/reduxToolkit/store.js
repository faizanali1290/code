import { configureStore } from "@reduxjs/toolkit";
import { Incrementreducer } from "../reduxToolkit/slice/incrementSlice";
import {coustomeReducer} from '../reduxToolkit/reducer'
import {api} from './asyncthunk'
import {adminAPi} from './api/rtkquerry'

const store = configureStore({
  reducer: {
    Incrementreducer,
    coustomeReducer,
    api,
    [adminAPi.reducerPath]:adminAPi.reducer,
   
    
  },
  middleware:(getdefaultmiddleware)=>{
    return getdefaultmiddleware().concat(adminAPi.middleware)
  }
  
});

export default store