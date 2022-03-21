import { configureStore } from '@reduxjs/toolkit'
import gameBoardReducer from '../GameBoard/gameBoardSlice'

export const store = configureStore({
  reducer: {
      gameBoard: gameBoardReducer
  },
})