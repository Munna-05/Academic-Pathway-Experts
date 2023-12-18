    // blogslice.js
    import { createSlice } from '@reduxjs/toolkit';

    export const serviceSlice = createSlice({
      name: 'service',
      initialState: {
        data: null,
        loading: false,
        error: null,
      },
      reducers: {
        setService: (state, action) => {
          console.log("🚀 ~ file: serviceSlice.js:13 ~ action:", action.payload)
          state.data = action.payload;
        },
        setLoading: (state, action) => {
          state.loading = action.payload;
        },
        setError: (state, action) => {
          state.error = action.payload;
        },
      
      },
    });
    
    export const { setService, setLoading, setError} = serviceSlice.actions;
    
    
    export default serviceSlice.reducer;
    