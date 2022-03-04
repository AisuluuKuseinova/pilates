import {
  FormControl,
  FormControlLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
} from "@mui/material";

import React from "react";
import { useProducts } from "../../contexts/ProductContext";
import "./Side.css";

const SideBar = () => {
  const { fetchByParams } = useProducts();
  return (
    <Grid>
      <Paper>
        <FormControl>
          <RadioGroup
            row
            className="side-bar"
            onChange={(e) => fetchByParams("type", e.target.value)}
          >
            <FormControlLabel
              value="mat"
              control={<Radio />}
              label="MAT PILATES"
            />
            <FormControlLabel
              value="clinical"
              control={<Radio />}
              label="CLINICAL PILATES"
            />
            <FormControlLabel
              value="classical"
              control={<Radio />}
              label="CLASSICAL PILATES"
            />
            <FormControlLabel
              value="group reformer"
              control={<Radio />}
              label="GROUP REFORMER PILATES"
            />
            <FormControlLabel value="all" control={<Radio />} label="ALL" />
          </RadioGroup>
        </FormControl>
      </Paper>
    </Grid>
  );
};

export default SideBar;
