import { ArrowForward } from "@mui/icons-material";
import { Box, Button, Container, Link, Stack, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./styles.css";
import IconSection from "./IconSection";



//  Array For  Slider :------------
const arrayForSlider = [
    { text: "MEN", img: "/public/images/hero-1.jpg" },
    { text: "WOMAN", img: "/public/images/hero-2.jpg" },
];

// ____________________________________________________________________________________________________________________________________
const Hero = () => {


  // ____________________________________________________________________________________________________________________________________
  return (
    <Box   >
      <Container
        sx={{
          mt: 3,
          pt:3,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 1,
        }}
      >
        <Swiper
          style={{ position: "relative" }}
          pagination={true}
          modules={[Pagination]}
          loop={true}
          className="mySwiper"
        >
          {arrayForSlider.map((item) => {
            return (
              <SwiperSlide key={item.img}>
                <img src={item.img} alt="" />
                <Stack
                  alignItems={"start"}
                  sx={{
                    position: "absolute",
                    top: { xs: "15%", sm: "20%" },
                    left: { xs: "3%", sm: "10%" },
                    zIndex: "999",
                  }}
                >
                  <Typography
                    sx={{ color: "#111", fontSize: { xs: "14px", sm: "24px" } }}
                    variant="h6"
                  >
                    LIFESTYLE COLLECTION
                  </Typography>
                  <Typography
                    sx={{
                      color: "#111",
                      fontSize: { xs: "26px", sm: "40px" },
                      fontWeight: "600",
                      my: { xs: 0, sm: 1 },
                    }}
                    variant="h3"
                  >
                    {item.text}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#111",
                      fontSize: { xs: "18px", sm: "26px" },
                      fontWeight: "600",
                    }}
                    variant="h5"
                  >
                    SALE UP TO
                    <span style={{ color: "rgb(230, 4, 4)" }}> 30% OFF</span>
                  </Typography>
                  <Typography
                    sx={{
                      color: "#111",
                      fontSize: { xs: "11px", sm: "16px" },
                      my: { xs: 0, sm: 1 },
                    }}
                    // @ts-ignore
                    variant="p"
                  >
                    Get Free Shipping on Orders Over $99.00
                  </Typography>
                  <Button
                    sx={{
                      display: "block",
                      fontSize: { xs: "10px", sm: "16px" },
                      color: "white",
                      bgcolor: "#333",
                      border: "1px solid transparent",
                      mt: 2,
                      px: 2,
                      "&:hover": {
                        bgcolor: "transparent",
                        borderColor: "#333",
                        color: "#111",
                      },
                    }}
                  >
                    Show More
                  </Button>
                </Stack>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "row", md: "column" },
            width: { xs: "100%", md: "37%" },
          }}
        >
          <Box sx={{ position: "relative", width: { xs: "49%", md: "100%" } }}>
            <img
              style={{ width: "100%" }}
              src="/public/images/banner-1.webp"
              alt=""
            />
            <Stack
              sx={{
                position: "absolute",
                top: "50%",
                transform: { xs: "translateY(-60%)", sm: "translateY(-60%)" },
                left: { xs: 10, sm: 31 },
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: "#2B3445",
                  fontSize: { xs: "12", sm: "18px" },
                  fontWeight: 300,
                }}
              >
                NEW ARRIVALS
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#2B3445",
                  lineHeight: "16px",
                  fontSize: { xs: "12px", sm: "20px" },
                  mt: 1,
                }}
              >
                SUMMER
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  color: "#2B3445",
                  fontSize: { xs: "12px", sm: "20px" },
                  my: 1,
                }}
              >
                SALE 20% OFF
              </Typography>

              <Link
                sx={{
                  color: "#2B3445",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  transition: "0.2s",
                  fontSize: { xs: "12px", sm: "18px" },
                  bgcolor: "white",
                  width: "90%",
                  pl: 1,
                  borderRadius: 1,
                  "&:hover": {
                    color: "#D23F57",
                  },
                }}
                href="#"
                underline="none"
              >
                shop now
                <ArrowForward sx={{ fontSize: "13px" }} />
              </Link>
            </Stack>
          </Box>

          <Box sx={{ flexGrow: 1 }}></Box>

          <Box sx={{ position: "relative", width: { xs: "49%", md: "100%" } }}>
            <img
              style={{ width: "100%" }}
              src="/public/images/banner-2.webp"
              alt=""
            />
            <Stack
              sx={{
                position: "absolute",
                top: "50%",
                transform: { xs: "translateY(-60%)", sm: "translateY(-60%)" },
                left: { xs: 10, sm: 31 },
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: "#2B3445",
                  fontSize: { xs: "12", sm: "18px" },
                  fontWeight: 300,
                }}
              >
                GAMING 4K
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#2B3445",
                  lineHeight: "16px",
                  fontSize: { xs: "12px", sm: "20px" },
                  mt: 1,
                }}
              >
                DESKTOPS &
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  color: "#2B3445",
                  fontSize: { xs: "12px", sm: "20px" },
                  my: 1,
                }}
              >
                LAPTOPS
              </Typography>

              <Link
                sx={{
                  color: "#2B3445",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  transition: "0.2s",
                  fontSize: { xs: "12px", sm: "18px" },
                  bgcolor: "white",
                  width:{xs:"100%",sm:"90%"},
                  px: "5px",
                  borderRadius: 1,
                  "&:hover": {
                    color: "#D23F57",
                  },
                }}
                href="#"
                underline="none"
              >
                shop now
                <ArrowForward sx={{ fontSize: "13px" }} />
              </Link>
            </Stack>
          </Box>
        </Box>
      </Container>
      <IconSection/>
    </Box>


  );
};

export default Hero;
