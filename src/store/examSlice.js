import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  exam: [],
  examInfo: null,
  isLoading: false,
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
export const sendExam = createAsyncThunk("sendExam", async (args) => {
  try {
    const res = await axios.post(
      `https://exam.e3lanotopia.software/api/v1/send_exam`,
      args
    );
    return res.data;
  } catch (err) {
    console.log(err);
  }
});

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    getExamTry: (state, action) => {
      state.exam = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getExam.fulfilled, (state, action) => {
      state.exam = action.payload;
    });
    builder.addCase(getExamInfo.fulfilled, (state, action) => {
      state.examInfo = action.payload;
    });
    builder.addCase(sendExam.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(sendExam.pending, (state) => {
      state.isLoading = true;
    });
  },
});

export const { getExamTry } = counterSlice.actions;

export default counterSlice.reducer;
