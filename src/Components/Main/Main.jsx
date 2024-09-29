import {
  Box,
  Container,
  Dialog,
  IconButton,
  Rating,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { Close } from "@mui/icons-material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";


const Main = () => {
  const theme = useTheme();

  //  Array   For  Products   :-----------------------------------------------
  let productImage = [
    {
      image: "/public/images/t-shirts-products/1/final.png",
      name: "T-shart",
      price: 22.5,
      description:
        "Dolor sit amet consectetur adipisicingelit. Impedit dolore asperioressit amet consectetur adipisicingeli  doloret  asperioressit amet consectetur adipisicingelit. Impedit dolore  asamet consectetur adipisicingelit. Impedit dolore as",
      rate: 4,
      images: [
        "/public/images/t-shirts-products/1/final.png",
        "/public/images/t-shirts-products/1/images.jpg",
      ],
      all: "all",
      category: "men",
    },
    {
      image: "/public/images/t-shirts-products/2/2.jpg",
      name: "Glasses",
      price: 18.3,
      description:
        "Ipisicing elit Impedit dolore asperiores debitis odit harum blanditiis nemo sed labore magnam Speriores dolore asperiores debitis odit harum blanditiis nemo sed labore magnam  odit harum blanditiis nemo sed labore magnam consequatur ",
      rate: 3,
      images: [
        "/public/images/t-shirts-products/2/2.jpg",
        "/public/images/t-shirts-products/2/3.jpg",
        "/public/images/t-shirts-products/2/final.jpg",
      ],
      all: "all",
      category: "woman",
    },
    {
      image: "/public/images/t-shirts-products/3/1.jpg",
      name: "Back",
      price: 24.7,
      description:
        "Impedit dolore asperiores debitis odit Speriores dolore asperiores debitis odit harum blanditiis nemo sed labore magnam consequaturSperiores dolore asperiores debitis odit harum blanditiis nemo sed labore magnam consequatur",
      rate: 5,
      images: [
        "/public/images/t-shirts-products/3/1.jpg",
        "/public/images/t-shirts-products/3/2.jpg",
        "/public/images/t-shirts-products/3/4.jpg",
        "/public/images/t-shirts-products/3/final.jpg",
      ],
      all: "all",
      category: "woman",
    },
    {
      image: "/public/images/t-shirts-products/4/3.jpg",
      name: "Smart Watch",
      price: 44.99,
      description:
        "Speriores dolore asperiores debitis odit harum Speriores dolore asperiores debitis odit consequatur  harum blanditiis nemo sed labore magnam consequaturSperiores magnam consequatur blanditiis nemo sed labore magnam consequatur",
      rate: 4,
      images: [
        "/public/images/t-shirts-products/4/3.jpg",
        "/public/images/t-shirts-products/4/4.jpg",
        "/public/images/t-shirts-products/4/final.jpg",
      ],
      all: "all",
      category: "men",
    },
    {
      image: "/public/images/t-shirts-products/3/2.jpg",
      name: "Back",
      price: 24.7,
      description:
        "Impedit dolore asperiores debitis odit Speriores dolore asperiores debitis odit harum blanditiis nemo sed labore magnam nemo sed labore magnam consequatur harum blanditiis nemo sed labore magnam consequatur",
      rate: 5,
      images: [
        "/public/images/t-shirts-products/3/1.jpg",
        "/public/images/t-shirts-products/3/2.jpg",
        "/public/images/t-shirts-products/3/4.jpg",
        "/public/images/t-shirts-products/3/final.jpg",
      ],
      all: "all",
      category: "woman",
    },
    {
      image: "/public/images/t-shirts-products/5/1 (5).jpg",
      name: "Jacet",
      price: 50.8,
      description:
        "Consectetur Speriores dolore asperiores debitis odit harum blanditiis nemo sed labore magnam consequaturSperiores dolore asperiores debitis odit harum blanditiis nemo sed labore asperiores debitis odit harum blanditiis nemo",
      rate: 3,
      images: [
        "/public/images/t-shirts-products/5/1 (5).jpg",
        "/public/images/t-shirts-products/5/1 (6).jpg",
        "/public/images/t-shirts-products/5/100.jpg",
      ],
      all: "all",
      category: "men",
    },
    {
      image: "/public/images/t-shirts-products/6/1.jpg",
      name: "Gold",
      price: 200,
      description:
        "Consectetur Speriores dolore asperiores debitis odit harum blanditiis nemo sed labore magnam consequaturSperiores dolore asperiores debitis odit harum blanditiis nemo  dolore asperiores debitis odit harum blanditiis nemo",
      rate: 5,
      images: [
        "/public/images/t-shirts-products/6/1.jpg",
        "/public/images/t-shirts-products/6/2.jpg",
      ],
      all: "all",
      category: "woman",
    },
    {
      image: "/public/images/t-shirts-products/5/1 (6).jpg",
      name: "T-shart",
      price: 22.5,
      description:
        "Dolor sit amet consectetur adipisicingelit. Speriores dolore asperiores debitis odit harum blanditiis nemo sed labore magnam consequaturSperiores dolore asperiore sed labore magnam consequatur Impedit dolore asperiores",
      rate: 4,
      images: [
        "/public/images/t-shirts-products/5/1 (5).jpg",
        "/public/images/t-shirts-products/5/1 (6).jpg",
        "/public/images/t-shirts-products/5/100.jpg",
      ],
      all: "all",
      category: "men",
    },
    {
      image: "/public/images/t-shirts-products/1/images.jpg",
      name: "T-shart",
      price: 22.5,
      description:
        "Dolor sit amet consectetur adipisicingelit. Impedit dolore asperioressit amet consectetur adipisicingeli  doloret  asperioressit amet consectetur adipisicingelit. Impedit dolore  asamet consectetur adipisicingelit. Impedit dolore as",
      rate: 4,
      images: [
        "/public/images/t-shirts-products/1/final.png",
        "/public/images/t-shirts-products/1/images.jpg",
      ],
      all: "all",
      category: "men",
    },
    {
      image: "/public/images/t-shirts-products/2/final.jpg",
      name: "Glasses",
      price: 18.3,
      description:
        "Ipisicing elit Impedit dolore Speriores dolore asperiores debitis odit harum blanditiis nemo sed labore magnam consequaturSperiores dolore asperiores debitis odit harum blanditiis  odit harum blanditiis nemo sed labore magnam",
      rate: 3,
      images: [
        "/public/images/t-shirts-products/2/2.jpg",
        "/public/images/t-shirts-products/2/3.jpg",
        "/public/images/t-shirts-products/2/final.jpg",
      ],
      all: "all",
      category: "woman",
    },
    {
      image: "/public/images/t-shirts-products/3/final.jpg",
      name: "Back",
      price: 24.7,
      description:
        "Impedit dolore asperiores debitis odit Speriores dolore asperiores debitis odit harum blanditiis nemo sed labore magnam nemo sed labore magnam consequatur harum blanditiis nemo sed labore magnam consequatur",
      rate: 5,
      images: [
        "/public/images/t-shirts-products/3/1.jpg",
        "/public/images/t-shirts-products/3/2.jpg",
        "/public/images/t-shirts-products/3/4.jpg",
        "/public/images/t-shirts-products/3/final.jpg",
      ],
      all: "all",
      category: "woman",
    },
    {
      image: "/public/images/t-shirts-products/4/3.jpg",
      name: "Smart Watch",
      price: 44.99,
      description:
        "Speriores dolore asperiores debitis odit harum Speriores dolore asperiores debitis odit consequatur  harum blanditiis nemo sed labore magnam consequaturSperiores magnam consequatur blanditiis nemo sed labore magnam consequatur",
      rate: 4,
      images: [
        "/public/images/t-shirts-products/4/3.jpg",
        "/public/images/t-shirts-products/4/4.jpg",
        "/public/images/t-shirts-products/4/final.jpg",
      ],
      all: "all",
      category: "men",
    },
  ];

  // Filtter To Products :
  const [filteredProducts, setFilteredProducts] = useState(productImage);

  const [alignment, setAlignment] = useState("left");

  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);


      //     Filtering the  Products
      if (newAlignment === "left") {
        setFilteredProducts(productImage);  
      } else if (newAlignment === "center") {
        setFilteredProducts(
          productImage.filter((item) => item.category === "men")
        ); 
      } else if (newAlignment === "right") {
        setFilteredProducts(
          productImage.filter((item) => item.category === "woman")
        ); 
      }
    }
  };

  // Dilog :--------------
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [open, setOpen] = useState(false);
  const handleClickOpen = (product) => {
    setSelectedProduct(product);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setSelectedProduct(null);
  };

  return (
    <Box sx={{ py: { xs: 1, sm: 5 }, mt: { xs: 3, sm: 5 } }}>
      <Container>
        <Stack
          sx={{
            flexDirection: { xs: "column", md: "row" },
            gap: 2,
            justifyContent: "space-between",
            alignItems: "center",
            textAlign: { xs: "center", md: "start" },
          }}
          className="Header"
        >
          <Box>
            <Typography variant="h6">Selected Products</Typography>
            <Typography fontWeight={300} variant="body1">
              All our new arrivals in a exclusive brand selection
            </Typography>
          </Box>
          <ToggleButtonGroup
            color="error"
            sx={{ gap: 1 }}
            value={alignment}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
          >
            <ToggleButton
              sx={{
                fontSize: { xs: "12px", sm: "14px" },
                height: { xs: "30px", md: "40px" },
                color: theme.palette.text.primary,
              }}
              className="myButton"
              value="left"
              aria-label="left aligned"
            >
              All Products
            </ToggleButton>
            <ToggleButton
              sx={{
                fontSize: { xs: "12px", sm: "14px" },
                height: { xs: "30px", md: "40px" },
                color: theme.palette.text.primary,
              }}
              className="myButton"
              value="center"
              aria-label="centered"
            >
              Men Catogry
            </ToggleButton>
            <ToggleButton
              sx={{
                fontSize: { xs: "12px", sm: "14px" },
                height: { xs: "30px", md: "40px" },
                color: theme.palette.text.primary,
              }}
              className="myButton"
              value="right"
              aria-label="right aligned"
            >
              Woman Catogry
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>

        <Stack
          direction={"row"}
          sx={{ justifyContent: "space-between", flexWrap: "wrap" }}
        >
          {filteredProducts.map((item) => {
            return (
              <Card
                key={item.image}
                sx={{
                  maxWidth: { xs: "100%", sm: "49%", lg: "32%" },
                  mt: 6,
                  //   height: "500px",
                  ":hover .MuiCardMedia-root ": {
                    rotate: "1deg",
                    scale: "1.1",
                    transition: ".2s",
                  },
                }}
              >
                <CardMedia
                  sx={{ height: 300 }}
                  image={item.image}
                  title="green iguana"
                />
                <CardContent>
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    sx={{ justifyContent: "space-between" }}
                  >
                    <Typography variant="h6" sx={{ fontSize: "26px" }}>
                      {item.name}
                    </Typography>
                    <Typography component="p">{`$ ${item.price}`}</Typography>
                  </Stack>
                  <Typography
                    component="p"
                    sx={{ height: "50px", mt: 1, overflow: "hidden" }}
                  >
                    {item.description}
                  </Typography>
                </CardContent>
                <CardActions
                  onClick={() => handleClickOpen(item)}
                  sx={{ justifyContent: "space-between" }}
                >
                  <Button
                    // @ts-ignore
                    size="larg"
                  >
                    <AddShoppingCartOutlinedIcon sx={{ mr: 1 }} /> Add To Cart
                  </Button>
                  <Button size="small">
                    <Rating
                      name="half-rating"
                      defaultValue={item.rate}
                      readOnly
                    />
                  </Button>
                </CardActions>
              </Card>
            );
          })}
        </Stack>

        {/* Dialog :------------------------- */}
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          sx={{
            ".MuiPaper-root": {
              minWidth: { xs: "30%", sm: "70%" },
              height: { xs: "700px", sm: "450px" },
            },
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: "10px",
              right: "20px",
              ": hover": {
                color: "red",
                rotate: "180deg",
                transition: "0.3s",
              },
            }}
          >
            <Close sx={{color:"black"}} />
          </IconButton>
          <ProductDetails product={selectedProduct} />
        </Dialog>
      </Container>
    </Box>
  );
};

export default Main;




const ProductDetails = ({ product }) => {
  //------------------------------------------------------------

  const theme = useTheme();

  if (!product) return null;

  // To Switch the Images :--------------------------
  const [selectedImage, setSelectedImage] = useState(product.image);

  return (
    <Box
      sx={{
        display: "flex",
        alignItem: "center",
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      <Box
        sx={{
          minWidth: "40%",
          display: "flex",
          height: { xs: "350px", sm: "450px" },
        }}
      >
        <img
          style={{ width: "100%", height: "100%" }}
          src={selectedImage}
          alt=""
        />
      </Box>
      <Box
        sx={{
          m: { xs: "10px", sm: "70px" },
          textAlign: { xs: "center", sm: "start" },
        }}
      >
        <Typography variant="h5">{product.name}</Typography>
        <Typography my={0.4} fontSize={"22px"} color={"crimson"} variant="h6">
          ${product.price}
        </Typography>
        <Typography variant="body1" sx={{ fontSize: "14px" }}>
          {product.description}
        </Typography>
        <Stack
          direction={"row"}
          alignItems={"center"}
          gap={1}
          mt={2}
          sx={{ justifyContent: { xs: "center", sm: "flex-start" } }}
        >
          {product.images.map((img, index) => (
            <img
              key={index}
              style={{ width: "80px", height:"80px", cursor: "pointer", borderRadius: "3px" , border:"1px solid #5559",padding:"5px" }}
              src={img}
              alt=""
              onClick={() => setSelectedImage(img)} // تحديث الصورة المحددة عند الضغط
            />
          ))}
        </Stack>
        <Button
          variant="contained"
          sx={{
            fontSize: "14px",
            mt: 2,
            color: "#fff",
            bgcolor: theme.palette.info.main,
          }}
        >
          <AddShoppingCartIcon fontSize="small" />
          Buy
        </Button>
      </Box>
    </Box>
  );
};
