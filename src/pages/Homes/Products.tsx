import { useEffect, useState } from "react";
import axios from "axios";
import { IProduct } from "../../interfaces/product";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import Loading from "src/components/Loading";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handlerGetProducts = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get("http://localhost:3000/products");
      setProducts(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handlerGetProducts();
  }, []);

  return (
    <>
      {loading && <Loading />}
      <Stack direction="row" justifyContent={"space-between"} flexWrap={'wrap'} gap={5}>
        {products.map((product: IProduct) => (
          <Card sx={{ maxWidth: 345 }} key={product.id}>
            <Link to={`/product-detail/${product.id}`}>
            <CardMedia
              sx={{ height: 140 }}
              image={product.image}
              title="green iguana"
            /></Link>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Add to cart</Button>
              <Link to={`/product-detail/${product.id}`}>
              <Button size="small">View detail</Button>
              </Link>
            </CardActions>
          </Card>
        ))}
      </Stack>
    </>
  );
};

export default Products;
