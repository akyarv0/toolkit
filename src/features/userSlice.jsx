import { createSlice } from "reselect";

const initialState = {
  user: [],
  loading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {}, // http isteği olmazsa reducers kullanılır.
  extraReducers: {},
  
});
