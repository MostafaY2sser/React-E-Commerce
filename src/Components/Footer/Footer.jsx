import { Box, Container, Stack, Typography, useTheme } from "@mui/material";


const Footer = () => {


    const theme = useTheme()


    return (
      <Box sx={{borderTopLeftRadius: 8,bo20rderTopRightRadius: 8,bgcolor:"#2B3445", mt:5,py:3}}>
        <Container >
            <Stack  direction={"row"} alignItems={"center"} textAlign={"center"} justifyContent={"center"}>
                <Typography sx={{mx:1,fontSize:{xs:"10px",sm:"20px"},color:"#fff"}} variant="body1">Designed and Developed By </Typography>
                <Typography sx={{mx:1,fontSize:{xs:"12px",sm:"20px"} ,color: theme.palette.error.main,cursor:"pointer"}} variant="body1">Mostafa Yasser</Typography>
                <Typography  sx={{mx:1,fontSize:{xs:"10px", sm:"20px",color:"#fff"}}} variant="body1">©2024</Typography>
            </Stack>
        </Container>
      </Box>
    );
}
 
export default Footer;