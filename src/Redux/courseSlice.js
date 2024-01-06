    import { createSlice } from '@reduxjs/toolkit';

    export const courseSlice = createSlice({
      name: 'courses',
      initialState: {
        data: null,
        loading: false,
        error: null,
      },
      reducers: {
        setCourses: (state, action) => {
          console.log("🚀 ~ file: courseSlice.js:13 ~ action:", action.payload)
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
    
    export const { setCourses, setLoading, setError} = courseSlice.actions;
    
    
    export default courseSlice.reducer;
    