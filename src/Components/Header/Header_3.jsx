import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import WindowIcon from "@mui/icons-material/Window";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import VideoLabelIcon from "@mui/icons-material/VideoLabel";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import { Close, ExpandMore } from "@mui/icons-material";
import Links from "./Links";

// ____________________________________________________________________________________________
const Header_3 = () => {
  const theme = useTheme();

  //   selcted Menu :------------------------------
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  //   Drawar :----------------------------
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  // ____________________________________________________________________________________________
  return (
    <div  >
      <Container
        sx={{
          display: "flex",
          alignItem: "center",
          justifyContent: "space-between",
        }}
      >
        {/*  Left  :--------------------------------------------------------------- */}
        <Box sx={{}}>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            // @ts-ignore
            sx={{
              width: { xs: "150px", sm: "200px" },
              // @ts-ignore
              bgcolor: theme.palette.myColor.main,
              color: theme.palette.text.primary,
            }}
          >
            <WindowIcon />
            <Typography
              variant="body1"
              sx={{ p: "0", textTransform: "capitalize", mx: 1 }}
            >
              Categories
            </Typography>
            <Box flexGrow={"1"}></Box>
            <KeyboardArrowRightOutlinedIcon />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem
              sx={{
                fontSize: "16px",
                display: "flex",
                alignItem: "center",
                justifyContent: "space-between",
              }}
              onClick={handleClose}
            >
              <DirectionsBikeIcon sx={{ fontSize: "25px" }} />
              Bikes
            </MenuItem>
            <MenuItem
              sx={{
                fontSize: "16px",
                display: "flex",
                alignItem: "center",
                justifyContent: "space-between",
              }}
              onClick={handleClose}
            >
              <VideoLabelIcon sx={{ fontSize: "25px", mr: "20px" }} />
              Electronics
            </MenuItem>
            <MenuItem
              sx={{
                fontSize: "16px",
                display: "flex",
                alignItem: "center",
                justifyContent: "space-between",
              }}
              onClick={handleClose}
            >
              <MenuBookIcon sx={{ fontSize: "25px" }} />
              Books
            </MenuItem>
            <MenuItem
              sx={{
                fontSize: "16px",
                display: "flex",
                alignItem: "center",
                justifyContent: "space-between",
              }}
              onClick={handleClose}
            >
              <SportsEsportsIcon sx={{ fontSize: "25px" }} />
              Games
            </MenuItem>
          </Menu>
        </Box>

        {useMediaQuery("(min-width:1100px)") && (
          <Stack direction={"row"} gap={3} sx={{}}>
            <Links title={"Home"} />
            <Links title={"Mega Menu"} />
            <Links title={"Full Screen Menu"} />
            <Links title={"pages"} />
            <Links title={"User Account"} />
            <Links title={"Vendor Account"} />
          </Stack>
        )}

        {/*  Right :----------------------------------------------------------------------- */}
        {useMediaQuery("(max-width:1100px)") && (
          <IconButton onClick={toggleDrawer("left", true)}>
            <MenuIcon />
          </IconButton>
        )}

        <Drawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
          sx={{
            ".MuiPaper-root": { xs: { width: "60%" }, md: { width: "40%" } },
            position: "relative",
          }}
        >
          <Box
            sx={{
              width: "80%",
              mx: "auto",
              mt: "50px",
              ".MuiPaper-root": { width: "100%" },
            }}
          >
            <IconButton
              onClick={toggleDrawer("left", false)}
              sx={{
                position: "absolute",
                top: "10px",
                right: "20px",
                ":hover": {
                  color: "red",
                  rotate: "180deg",
                  transition: "0.3s",
                },
              }}
            >
              <Close />
            </IconButton>

            {[
              { mainLink: "Home", subLinks: ["Link 1", "Link 2", "Link 3"] },
              {
                mainLink: "Mega menu",
                subLinks: ["Link 1", "Link 2", "Link 3"],
              },
              {
                mainLink: "full screen menu",
                subLinks: ["Link 1", "Link 2", "Link 3"],
              },
              { mainLink: "pages", subLinks: ["Link 1", "Link 2", "Link 3"] },
              {
                mainLink: "user account",
                subLinks: ["Link 1", "Link 2", "Link 3"],
              },
              {
                mainLink: "vendor account",
                subLinks: ["Link 1", "Link 2", "Link 3"],
              },
            ].map((item) => {
              return (
                <Accordion
                  key={item.mainLink}
                  elevation={0}
                  sx={{
                    bgcolor: "initial",
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    sx={{ fontSize: "20px" }}
                  >
                    <Typography>{item.mainLink}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <List sx={{ py: 0, my: 0 }}>
                      {item.subLinks.map((link) => {
                        return (
                          <ListItem key={link} sx={{ py: 0, my: 0 }}>
                            <ListItemButton>
                              <ListItemText primary={link} />
                            </ListItemButton>
                          </ListItem>
                        );
                      })}
                    </List>
                  </AccordionDetails>
                </Accordion>
              );
            })}
          </Box>
        </Drawer>
      </Container>
    </div>
  );
};

export default Header_3;

//  1  :  44
