//import React from 'react'
import Grid from "@mui/material/Grid";
import { ProductCard } from "../components/product/productCard";
const prod_list = ["laptop", "macbook", "notebok"];

export const ProductPage = () => {
  return (
    <div style={{margin:'2rem'}}>
      <Grid container spacing={4}>
        {prod_list.map((prod) => (
          <Grid xs={4} item={true} key={prod}>
            <ProductCard name={prod} description={"this is product one"}/>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
