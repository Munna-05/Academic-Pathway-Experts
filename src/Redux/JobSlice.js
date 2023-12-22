import {createSlice} from '@reduxjs/toolkit'


export const jobSlice = createSlice({
    name:"jobs",
    initialState:{
        data:null,
        loading:false,
        error:null
    },
    reducers:{
        setJobs:(state,action)=>{
            state.data = action.payload
        },
        seLoading:(state,action)=>{
            state.loading = action.payload
        },
        setError:(state,action)=>{
            state.error=action.payload
        }
    }
})


export const {setJobs,setLoading,setError} = jobSlice.actions;

export default jobSlice.reducer;