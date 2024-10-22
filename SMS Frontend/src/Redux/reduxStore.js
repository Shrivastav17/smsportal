
import { configureStore } from '@reduxjs/toolkit'         
import libraryReducer from './Reducers/librarySlicer'
import groupReducer from './Reducers/groupSlicer'


export const reduxStore = configureStore({
  reducer: {
    library:libraryReducer,
    group:groupReducer
  },
})