import { Box, Container, Rating, Stack , Typography, useTheme } from "@mui/material";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined'



const Main = () => {

    const theme = useTheme()


    

    const [alignment, setAlignment] = useState('left');
    const handleAlignment = ( event, newAlignment ) => {
        if (newAlignment !== null) {
            setAlignment(newAlignment);
        }
    };


    return (
        <Box sx={{py:{xs:1,sm:5},mt:{xs:3,sm:5}}}  >
            <Container>


                <Stack  sx={{flexDirection:{xs:"column",md:"row"} ,gap:2 ,justifyContent:"space-between",alignItems:"center",textAlign:{xs:"center",md:"start"}}} className="Header">
                    <Box>
                        <Typography variant="h6">Selected Products</Typography>
                        <Typography fontWeight={300} variant="body1">All our new arrivals in a exclusive brand selection</Typography>
                    </Box>
                    <ToggleButtonGroup color="error" sx={{gap:1,}} value={alignment}
                        exclusive
                        onChange={handleAlignment}
                        aria-label="text alignment"
                        >
                        <ToggleButton  sx={{fontSize:{xs:"12px",sm:"14px"},height:{xs:"30px",md:"40px"},color:theme.palette.text.primary}}  className="myButton" value="left" aria-label="left aligned">
                            All Products
                        </ToggleButton>
                        <ToggleButton   sx={{fontSize:{xs:"12px",sm:"14px"},height:{xs:"30px",md:"40px"},color:theme.palette.text.primary}} className="myButton" value="center" aria-label="centered">
                            Men  Catogry
                        </ToggleButton>
                        <ToggleButton  sx={{fontSize:{xs:"12px",sm:"14px"},height:{xs:"30px",md:"40px"},color:theme.palette.text.primary}}  className="myButton"  value="right" aria-label="right aligned">
                            Woman Catogry
                        </ToggleButton>
                        </ToggleButtonGroup>
                </Stack>


                <Stack direction={"row"} sx={{justifyContent:"space-between", flexWrap:"wrap"}}>
                    {["aaa","bbb","ccc","dd","kl","fd"].map((item)=>{
                        return(
                            <Card key={item} sx={{ maxWidth:{xs:"100%", sm:"49%",lg:"32%"} ,mt:6 ,":hover .MuiCardMedia-root ":{rotate:"1deg",scale:"1.1",transition:".2s"},}}>
                        <CardMedia
                            sx={{ height: 300 }}
                            image="/public/images/banner-1.webp"
                            title="green iguana"
                        />
                        <CardContent>
                                <Stack direction={"row"} alignItems={"center"} sx={{justifyContent:"space-between"}} >
                                    <Typography variant="h6" >T-Shert</Typography>
                                    <Typography component="p">$12.99</Typography>
                                </Stack>
                                <Typography component="p">Consectetur ipsum, dolor sit amet consectetur adipisicing elit. Impedit dolore asperiores debitis odit harum blanditiis nemo sed labore magnam consequatur.</Typography>
                        </CardContent>
                        <CardActions sx={{justifyContent:"space-between"}}>
                            <Button 
// @ts-ignore
                            size="larg">
                                <AddShoppingCartOutlinedIcon sx={{mr:1}}/> Add To Cart
                            </Button>
                            <Button size="small">
                                <Rating name="half-rating" defaultValue={2.3} precision={0.5}  readOnly  />
                            </Button>
                        </CardActions>
                    </Card>
                        )
                    })}
                </Stack>


            </Container>
        </Box>
    );
}

export default Main;