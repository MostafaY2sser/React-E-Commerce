import { Box, Container, Stack, Typography } from "@mui/material";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import CreditScoreOutlinedIcon from "@mui/icons-material/CreditScoreOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import AccessAlarmOutlinedIcon from "@mui/icons-material/AccessAlarmOutlined";
import { useTheme } from "@emotion/react";

const IconSection = () => {

    const theme = useTheme()

  return (
    <Container  data-aos="zoom-in-up" >
      <Stack 
        direction={"row"}
        gap={1.5}
        sx={{
          mt:2,
          py: 3,
          flexWrap: "wrap",
          justifyContent: "space-between",
          width: "100%",
          bgcolor: theme.palette.bgIcon.main
        }}
      >
        <MyBox
          icon={ElectricBoltIcon}
          title={"Fast Delivery"}
          subTitle={"Start from $10"}
        />
        <MyBox
          icon={CreditScoreOutlinedIcon}
          title={"Money Guarantee"}
          subTitle={"7 Days Back"}
        />
        <MyBox
          icon={WorkspacePremiumOutlinedIcon}
          title={"365 Days"}
          subTitle={"For free return"}
        />
        <MyBox
          icon={AccessAlarmOutlinedIcon}
          title={"Payment"}
          subTitle={"Secure system"}
        />
      </Stack>
    </Container>
  );
};

export default IconSection;

// eslint-disable-next-line react/prop-types
const MyBox = ({ icon: MyIcon, title, subTitle }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent:{xs:"flex-start", sm:"center"},
        gap: 2,
        width: { xs: "48%", md: "24%" },
      }}
    >
      <MyIcon />
      <Stack>
        <Typography variant="body1">{title}</Typography>
        <Typography
          sx={{ fontWeight: 300, color: theme.palette.text.secondary }}
          variant="body1"
        >
          {subTitle}
        </Typography>
      </Stack>
    </Box>
  );
};
