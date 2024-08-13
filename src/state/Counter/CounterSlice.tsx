import { createSlice } from "@reduxjs/toolkit";

//declaring the type
interface counterProps {
  value: number;
}

//declaring the usestate and setting it to zero
const initialState: counterProps = {
  value: 0,
};

//main counterslice
export const CounterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      if (state.value > 0.0) {
        state.value -= 1;
      }
    },
  },
});

//exporting the actions
export const { increment, decrement } = CounterSlice.actions;

//exporting the reducer
// export default CounterSlice.reducer;
export const counterReducer = CounterSlice.reducer;
