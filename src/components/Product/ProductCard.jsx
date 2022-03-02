import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useProducts } from "../../contexts/ProductContext";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { ADMIN } from "../../sos/consts";
import { IconButton } from "@mui/material";
export default function MediaCard({ item }) {
  const { deleteProduct, addProductToCart, checkProductInCart } = useProducts();
  const {
    user: { email },
  } = useAuth();
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        maxWidth: 345,
        bgcolor: "rgb(125, 142, 125)",
      }}
    >
      <CardMedia
        component="img"
        height="200"
        width="200"
        image={item.picture}
        alt="picture"
        color=" #FCF6EC"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" color=" #FCF6EC" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" color=" #FCF6EC">
          {item.description}
        </Typography>
        <Typography variant="body2" color=" #FCF6EC">
          {item.price}
        </Typography>
      </CardContent>
      <CardActions>
        {email === ADMIN ? (
          <>
            <Button
              sx={{ bgcolor: "#FCF6EC", color: " rgb(125, 142, 125)" }}
              size="small"
              onClick={() => deleteProduct(item.id)}
            >
              DELETE
            </Button>
            <Button
              sx={{ bgcolor: "#FCF6EC", color: " rgb(125, 142, 125)" }}
              size="small"
              onClick={() => navigate(`/edit/${item.id}`)}
            >
              EDIT
            </Button>
          </>
        ) : (
          <IconButton onClick={() => addProductToCart(item)}>
            <ShoppingCartIcon
              color={checkProductInCart(item.id) ? "success" : ""}
            />
          </IconButton>
        )}
      </CardActions>
    </Card>
  );
}
