import React from "react";
import { Stack } from "@mui/material";

import { categories } from "../utils/constants";


const Sidebar = ({selectedCategory, setSelectedCategory}) => (
  <Stack
    direction="row"
    sx={{
      overflow: "auto",
      height: { sx: "auto", md: "90%" },
      flexDirection: { md: "column" },
    }}
  >
    {categories.map((category) => (
      <button
        className="category-btn"
        onClick={() => setSelectedCategory(category.name)}
        style={{
          background: category.name === selectedCategory && "green",
          color: "white",
        }}
        key={category.name}
      >
        <span style={{color: category.name === selectedCategory && 'white', marginRight: '45px'}}>{category.icon}</span>
        <span>{category.name}</span>
      </button>
    ))}
  </Stack>
);

export default Sidebar;
