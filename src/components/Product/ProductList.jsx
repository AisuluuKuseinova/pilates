import { Grid, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContext";
import MediaCard from "../Product/ProductCard";

import Side from "../Sidebar/Side";

const ProductList = ({ products }) => {
  const { getProducts } = useProducts();

  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, []);

  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);

  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);

  return (
    <div
      style={{
        background: "#FCF6EC",
      }}
    >
      <Side />
      <div>
        <section>
          <TextField
            label="Search"
            variant="standard"
            color="success"
            sx={{ margin: "4vw", width: "25vw" }}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </section>
        <Grid container spacing={6}>
          {products ? (
            products.map((item) => (
              <Grid item>
                <MediaCard item={item} key={item.id} />
              </Grid>
            ))
          ) : (
            <>
              <h2>...Loading</h2>
            </>
          )}
        </Grid>
      </div>
    </div>
  );
};

export default ProductList;
