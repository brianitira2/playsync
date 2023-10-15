import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => (
  <Paper
    component="form"
    onSubmit={() => {}}
    sx={{
      borderRadius: 15,
      border: "1px solid #e3e3e3",
      pl: 2,
      boxShadow: "none",
      mr: { sm: 5 },
    }}
  >
    <input
      className="search-bar"
      placeholder="search..."
      value=""
      onChange={() => {}}
    />

    <IconButton type="submit" sx={{ P: "10px", color: "orangered" }}>
      <Search />
    </IconButton>
  </Paper>
);

export default SearchBar;
