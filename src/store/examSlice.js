import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  exam: [],
  examInfo: null,
};

export const getExam = createAsyncThunk("getExam", async (args) => {
  try {
    const res = await axios.get(
      `https://exam.e3lanotopia.software/api/v1/get_exam_questions/${args}`
    );
    return res.data;
  } catch (err) {
    console.log(err);
  }
});
export const getExamInfo = createAsyncThunk("getExamInfo", async (args) => {
  try {
    const res = await axios.get(
      `https://exam.e3lanotopia.software/api/v1/get_exame/${args}`
    );
    return res.data;
  } catch (err) {
    console.log(err);
  }
});

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getExam.fulfilled, (state, action) => {
      state.exam = action.payload;
    });
    builder.addCase(getExamInfo.fulfilled, (state, action) => {
      state.examInfo = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function

export default counterSlice.reducer;
