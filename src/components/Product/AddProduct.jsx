import { Box, Button, Grid, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContext";

const AddProduct = () => {
  const { addProduct } = useProducts();

  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: 0,
    picture: "",
    type: "",
  });

  const handleInp = (e) => {
    if (e.target.name === "price") {
      let obj = {
        ...product,
        [e.target.name]: Number(e.target.value),
      };

      setProduct(obj);
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };

      setProduct(obj);
    }
  };

  return (
    <Box sx={{ bgcolor: "#FCF6EC", height: "100vh", padding: "20vh auto" }}>
      <center variant="h6" gutterBottom>
        <h2 sx={{ fontFamily: "Cormorant Garamond" }}>WELCOME, ADMIN!</h2>
        <h3>Add a new course!</h3>
      </center>

      <Grid
        item
        xs={12}
        md={6}
        sx={{
          margin: "10vh auto",
          boxShadow: 3,
          borderRadius: 3,
          bgcolor: "rgb(125, 142, 125);",
        }}
      >
        <form>
          <TextField
            fullWidth
            id="outlined-basic"
            label="NAME"
            variant="outlined"
            name="name"
            color="success"
            onChange={handleInp}
          />
          <TextField
            fullWidth
            id="outlined-basic"
            label="DESCRIPTION"
            variant="outlined"
            name="description"
            color="success"
            margin="dense"
            onChange={handleInp}
          />{" "}
          <TextField
            fullWidth
            id="outlined-basic"
            label="PRICE"
            variant="outlined"
            name="price"
            color="success"
            margin="dense"
            onChange={handleInp}
          />{" "}
          <TextField
            fullWidth
            id="outlined-basic"
            label="PICTURE"
            variant="outlined"
            name="picture"
            color="success"
            margin="dense"
            onChange={handleInp}
          />
          <TextField
            fullWidth
            id="outlined-basic"
            label="TYPE"
            variant="outlined"
            color="success"
            name="type"
            margin="dense"
            onChange={handleInp}
          />
          <Stack direction="row" spacing={2} sx={{ bgcolor: "#004d40" }}>
            <Button
              id="button"
              sx={{
                bgcolor: "#263238",
                borderColor: "error.main",
                fontFamily: "Cormorant Garamond",
              }}
              color="success"
              size="large"
              fullWidth
              onClick={() => {
                addProduct(product);

                navigate("/products");
              }}
            >
              CREATE COURSE
            </Button>
          </Stack>
        </form>
      </Grid>
    </Box>
  );
};

export default AddProduct;
