import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  planet: 'moon',
}

export const planetSlice = createSlice({
    name: 'planet',
    initialState,
    reducers: {
        switchPlanet: (state, action) => {
            state.planet = action.payload
        }
    }
})

export const { switchPlanet } = planetSlice.actions;

export default planetSlice.reducer;