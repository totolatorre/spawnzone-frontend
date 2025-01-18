import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cart/cartSlice'
import videogamesApi from './features/videogames/videogamesApi'
import ordersApi from './features/orders/ordersApi'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [videogamesApi.reducerPath]: videogamesApi.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(videogamesApi.middleware, ordersApi.middleware),
})