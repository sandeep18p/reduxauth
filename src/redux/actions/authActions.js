import { createAsyncThunk } from '@reduxjs/toolkit';

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ username, password }, thunkAPI) => {
    try {
      const res = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      const data = await res.json();
      if (res.status === 200) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('userId', data.id);
        return { status: res.status, token: data.token, userId: data.id };
      }
      return thunkAPI.rejectWithValue({ status: res.status, error: data.message });
    } catch (error) {
      return thunkAPI.rejectWithValue({ status: 500, error: 'Internal Server Error' });
    }
  }
);
