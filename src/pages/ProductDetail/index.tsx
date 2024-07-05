import { Box, Button, CircularProgress, Stack, TextField, Typography } from "@mui/material";
import Products from "../Homes/Products";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { IProduct } from "src/interfaces/product";

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState<IProduct>();
    const [loading, setLoading] = useState<boolean>(false);

    const handlerGetProduct = async () => {
        setLoading(true);
        try {
            const { data } = await axios.get("http://localhost:3000/products/" + id);
            setProduct(data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    console.log(product);


    useEffect(() => {
        handlerGetProduct();
    }, [])

    return (
        <>

            <Box>
                <Stack
                    flexDirection={"row"}
                    gap={5}
                    justifyContent={"space-between"}
                    alignItems={"start"}
                >
                    <Box width={"50%"}>
                        <img
                            src={product?.image}
                            alt=""
                            width={"100%"}
                        />
                    </Box>
                    <Box width={"50%"}>
                        <Typography variant="h3">
                            {product?.title}
                        </Typography>
                        <Typography variant="body1" mt={2}>
                            {product?.description}
                        </Typography>
                        <Typography variant="h3" mt={2} fontSize={"30px"} fontWeight={600}>
                            ${product?.price}
                        </Typography>
                        <Box>
                            <TextField
                                type="number"
                                sx={{
                                    width: "100px",
                                    display: "block",
                                    textAlign: "center",
                                    margin: "32px 0",
                                    "& .MuiInputBase-input": {
                                        height: "8px",
                                        textAlign: "center",
                                        fontSize: "18px",
                                    },
                                }}
                                defaultValue={1}
                            />
                        </Box>
                        <Stack spacing={2} direction="row">
                            <Button variant="contained" sx={{ height: "55px" }} fullWidth>
                                Add to cart
                            </Button>
                            <Button variant="outlined" sx={{ height: "55px" }} fullWidth>
                                Buy now
                            </Button>
                        </Stack>
                    </Box>
                </Stack>
                <Box>
                    <Typography variant="h3" my={5} fontSize={"30px"} fontWeight={600}>
                        Products
                    </Typography>
                    <Products />
                </Box>
            </Box>
            {loading && <Box position={"fixed"}
                top={0} bottom={0} left={0}
                right={0} display={"flex"} justifyContent={"center"}
                alignItems={"center"} bgcolor={"#ffffffcf"}>
                <CircularProgress />
            </Box>
            }
        </>
    );
};

export default ProductDetail;
