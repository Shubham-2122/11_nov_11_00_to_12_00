import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


// read data
export const showuser = createAsyncThunk(
    "showuser",async(argu,{rejectWithValue})=>{
        const res = await axios.get("http://localhost:3000/users")
        try {
            const resp =  res.data
            return resp;
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

// createdata
export const createdata = createAsyncThunk(
    "createdata",async(data,{rejectWithValue})=>{
        const res = await axios.post("http://localhost:3000/users",data)
        try {
            const resp = res.data
            return resp
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)


export const userDetails = createSlice({
    name:"userDetail",
    initialState:{
        user : [],
        loading : false,
        error : null
    },
    reducers:{
        userpending:(state,action)=>{
            state.loading = true;
        },
        userfullfield:(state,action)=>{
            state.loading = false;
            state.user.push(action.payload)
        },
        userreject:(state,action)=>{
            state.loading = false;
            state.error = action.payload
        }
    },
    extraReducers:(bulider)=>{
        bulider
        // pending
        .addCase(showuser.pending,(state)=>{
            state.loading = true;
        })
        .addCase(showuser.fulfilled,(state,action)=>{
            state.loading = false;
            state.user = action.payload;
        })
        .addCase(showuser.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload
        })
        // create
        .addCase(createdata.pending,(state)=>{
            state.loading = true
        })
        .addCase(createdata.fulfilled,(state,action)=>{
            state.user.push(action.payload)
        })
        .addCase(createdata.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload
        })
    }
})

export const {userpending,userfullfield,userreject} = userDetails.actions;

export default userDetails.reducer;