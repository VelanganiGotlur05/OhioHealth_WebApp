import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../api';

export const saveEmployee = createAsyncThunk(
  'employee/saveEmployee',
  async (formData) => {
    const res = await api.post('/', formData);
    return res.data;
  }
);

export const getEmployees = createAsyncThunk(
  'employee/getEmployees',
  async () => {
    const res = await api.get('/retrieveEmployee');
    console.log('retrieve', res.data)
    return res.data;
  }
);

const employeeSlice = createSlice({
  name: 'employee',
  initialState: {
    employeeList: [],  // Initializing employeeList as an empty array
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(saveEmployee.pending, (state) => {
        state.loading = true;
      })
      .addCase(saveEmployee.fulfilled, (state, action) => {
        state.loading = false;
        // Ensuring employeeList is always an array
        if (Array.isArray(state.employeeList)) {
          state.employeeList.push(action.payload);  // Safely pushing the new employee
        }
      })
      .addCase(saveEmployee.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getEmployees.fulfilled, (state, action) => {
        state.employeeList = action.payload;
      });
  }
});


export default employeeSlice.reducer;