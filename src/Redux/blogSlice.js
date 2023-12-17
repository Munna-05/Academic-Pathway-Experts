    // blogslice.js
    import { createSlice } from '@reduxjs/toolkit';

    export const blogSlice = createSlice({
      name: 'blogs',
      initialState: {
        data: null,
        loading: false,
        error: null,
      },
      reducers: {
        setBlogs: (state, action) => {
          console.log("🚀 ~ file: blogSlice.js:13 ~ action:", action.payload)
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
    
    export const { setBlogs, setLoading, setError} = blogSlice.actions;
    
    
    export default blogSlice.reducer;
    