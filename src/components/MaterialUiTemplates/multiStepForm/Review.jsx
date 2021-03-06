import { Typography, List, ListItem, ListItemText, Grid } from "@mui/material";
import React from "react";

const products = [
  {
    name: "Product 1",
    desc: "A nice thing",
    currency: "$",
    price: 9.99,
  },
  {
    name: "Product 2",
    desc: "Another thing",
    currency: "$",
    price: 3.45,
  },
  {
    name: "Product 3",
    desc: "Something else",
    currency: "$",
    price: 6.51,
  },
  {
    name: "Product 4",
    desc: "Best thing of all",
    currency: "$",
    price: 14.11,
  },
  { name: "Shipping", desc: "", price: "Free" },
];

const addresses = ["1 MUI Drive", "Reactville", "Anytown", "99999", "USA"];
const payments = [
  { name: "Card type", detail: "Visa" },
  { name: "Card holder", detail: "Mr John Smith" },
  { name: "Card number", detail: "xxxx-xxxx-xxxx-1234" },
  { name: "Expiry date", detail: "04/2024" },
];

const calcTotalPrice = (items) => {
  let sum = 0;

  items.forEach((i) => {
    const price = i?.price || 0;

    if (typeof price === "number") {
      sum += price;
    }
  });

  return sum;
};

export default function Review() {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {products.map((product) => {
          return (
            <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
              <ListItemText primary={product.name} secondary={product.desc} />
              <Typography variant="body2">
                {product.currency}
                {product.price}
              </Typography>
            </ListItem>
          );
        })}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            ${calcTotalPrice(products)}
          </Typography>
        </ListItem>
      </List>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>John Smith</Typography>
          <Typography gutterBottom>{addresses.join(", ")}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
