import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const listPets = createAsyncThunk("pets/listPets", async () => {
  const response = await axios("http://192.168.0.82:4000/api/v1/pets");

  return response.data.pets;
});

export const createPet = createAsyncThunk(
  "pets/createPet",
  async ({ name, lat, lng, urlImage }) => {
    const response = await axios.post("http://192.168.0.82:4000/api/v1/pets", {
      name,
      lat,
      lng,
      urlImage,
    });

    return response.data.pet;
  }
);

export const petSlice = createSlice({
  name: "pets",
  initialState: {
    pets: [],
    selectedPet: false,
  },
  reducers: {
    selectOnePet: (state, action) => {
      const pet = state.pets.find((pet) => pet._id === action.payload);
      state.selectedPet = pet;
    },
    removeSelectedPet: (state) => {
      state.selectedPet = false;
    },
  },
  extraReducers: {
    [listPets.pending]: (state, action) => {
      state.pets = [];
    },
    [listPets.fulfilled]: (state, action) => {
      state.pets = action.payload;
    },
    [createPet.fulfilled]: (state, action) => {
      state.pets.push(action.payload);
    },
  },
});

export const { selectOnePet, removeSelectedPet } = petSlice.actions;

export default petSlice.reducer;
