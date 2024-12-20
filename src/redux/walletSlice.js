import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  address: null
}

const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    setAddress: (state, action) => {
      state.address = action.payload
    }
  }
})

export const { setAddress, clearAddress } = walletSlice.actions

export default walletSlice.reducer
