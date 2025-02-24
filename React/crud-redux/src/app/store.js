import { configureStore } from "@reduxjs/toolkit";
import userDetails from "../feachure/userDetails";


export default configureStore({
    reducer:{
        users : userDetails
    },
})