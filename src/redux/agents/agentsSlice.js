import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAgents = createAsyncThunk("agents/getAgents", async () => {
  const { data } = await axios(
    `${process.env.REACT_APP_VALORANT_ENDPOINT}/agents`
  );

  return data.data;
});

const agentsSlice = createSlice({
  name: "agents",
  initialState: {
    agents: [],
    filteredAgents: [],
    status: "idle",
    error: null
  },
  reducers: {
    setFilteredAgents: (state, action) => {
      const filteredAgents = state.agents.filter((agent) =>
        agent.displayName.toLowerCase().includes(action.payload.toLowerCase())
      );

      state.filteredAgents = filteredAgents;
    }
  },

  extraReducers: {
    [fetchAgents.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchAgents.fulfilled]: (state, action) => {
      state.status = "succeeded";

      state.agents = action.payload;
      state.filteredAgents = action.payload;
    },
    [fetchAgents.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error;
    }
  }
});

export const { setFilteredAgents } = agentsSlice.actions;

export default agentsSlice.reducer;
