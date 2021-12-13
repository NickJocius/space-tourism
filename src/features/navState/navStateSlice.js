import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  expanded: true,
}

export const navStateSlice = createSlice({
    name: 'navExpand',
    initialState,
    reducers: {
        toggleExpand: (state, action) => {
            state.expanded = !state.expanded
        }
    }
})

export const { toggleExpand } = navStateSlice.actions;

export default navStateSlice.reducer;