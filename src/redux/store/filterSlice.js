import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  id: 0,
  sortProperty: "",
  order: "",
  gcomp: "PlayStation",
  gplat: []
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    sortByAmount: (state, action) => {
      state.id = action.payload.id
      state.sortProperty = action.payload.sortProperty
      state.order = action.payload.order
      console.log(state.id, state.sortProperty, state.order)
    },
    selectGcomp: (state, action) => {
      if (state.gcomp !== action.payload) state.gplat = []
      state.gcomp = action.payload
    },
    selectGplat: (state, action) => {
      const uniqueElements = new Set(state.gplat);
      if (uniqueElements.has(action.payload)) {
        uniqueElements.delete(action.payload);
      } else {
        uniqueElements.add(action.payload);
      }
      state.gplat = Array.from(uniqueElements);
      console.log(state.gplat);
    }

  },
})

export const { sortByAmount, selectGcomp, selectGplat } = filterSlice.actions

export default filterSlice.reducer