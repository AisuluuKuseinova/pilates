import { Box, Button, Grid, Stack, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContext";

const EditProduct = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const { getProductDetails, productDetails, saveEditedProduct } =
    useProducts();

  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: 0,
    picture: "",
    type: "",
  });

  const handleInput = (e, product, setProduct) => {
    let obj = {
      ...product,
      [e.target.name]: e.target.value,
    };
    setProduct(obj);
  };

  useEffect(() => {
    getProductDetails(id);
  }, []);

  useEffect(() => {
    setProduct(productDetails);
  }, [productDetails]);

  return (
    <div>
      <Box sx={{ bgcolor: "#FCF6EC", height: "100vh", padding: "20vh auto" }}>
        <center variant="h6" gutterBottom>
          EDIT COURSE
        </center>

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            margin: "10vh auto",
            boxShadow: 3,
            borderRadius: 3,
            bgcolor: "rgb(125, 142, 125)",
          }}
        >
          <form>
            <TextField
              value={product.name}
              fullWidth
              id="outlined-basic"
              label="NAME"
              variant="outlined"
              name="name"
              color="success"
              onChange={(e) => handleInput(e, product, setProduct)}
            />
            <TextField
              value={product.description}
              fullWidth
              id="outlined-basic"
              label="DESCRIPTION"
              variant="outlined"
              name="description"
              color="success"
              margin="dense"
              onChange={(e) => handleInput(e, product, setProduct)}
            />{" "}
            <TextField
              value={product.price}
              fullWidth
              id="outlined-basic"
              label="PRICE"
              variant="outlined"
              name="price"
              color="success"
              margin="dense"
              onChange={(e) => handleInput(e, product, setProduct)}
            />{" "}
            <TextField
              value={product.picture}
              fullWidth
              id="outlined-basic"
              label="PICTURE"
              variant="outlined"
              name="picture"
              color="success"
              margin="dense"
              onChange={(e) => handleInput(e, product, setProduct)}
            />
            <TextField
              value={product.type}
              fullWidth
              id="outlined-basic"
              label="TYPE"
              variant="outlined"
              name="type"
              color="success"
              margin="dense"
              onChange={(e) => handleInput(e, product, setProduct)}
            />
            <Stack direction="row" spacing={2} sx={{ bgcolor: "#00695c" }}>
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
                  saveEditedProduct(product);
                  navigate("/products");
                }}
              >
                EDIT COURSE
              </Button>
            </Stack>
          </form>
        </Grid>
      </Box>
    </div>
  );
};

export default EditProduct;
