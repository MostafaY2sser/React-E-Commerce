import {
  ExpandMore,
  ShoppingCart,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import {
  Box,
  Container,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled, useTheme } from "@mui/material/styles";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import Badge from "@mui/material/Badge";
import { useState } from "react";



// Search Input :-------------------------------------
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  "&:hover": {
    border: "1px solid #333",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#777",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));



//   Shopping  Icon  :----------------------------------
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));


//  Selected List  For Search :----------
const options = ["All Categorries", "Car", "Clothes", "Electronics"];



// _________________________________________________________________________________________________________________
const Header_2 = () => {
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };



  
  // ____________________________________________________________________________________________________________________
  return (
    <div>
      <Container
        sx={{
          my: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Stack alignItems={"center"}>
          <ShoppingCartOutlined />
          <Typography variant="body2">E-Commerce</Typography>
        </Stack>

        {/*  Search --------------  */}
        <Search
          sx={{
            flexGrow: 0.4,
            borderRadius: "50px",
            display: "flex",
            justifyContent: "space-between",
            overflow: "hidden",
            border: "1px solid  #777",
            // minWidth:"300px"
          }}
        >
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
          <Box>
            <List
              component="nav"
              aria-label="Device settings"
              sx={{
                p: "0",
                m: "0",
                cursor: "pointer",
                // @ts-ignore
                bgcolor: theme.palette.myColor.main,
              }}
            >
              <ListItem
                id="lock-button"
                aria-haspopup="listbox"
                aria-controls="lock-menu"
                aria-label="when device is locked"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClickListItem}
                sx={{ width: "151px" }}
              >
                <ListItemText
                  secondary={options[selectedIndex]}
                  sx={{ textAlign:"center" }}
                />
                <ExpandMore />
              </ListItem>
            </List>
            <Menu
              id="lock-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "lock-button",
                role: "listbox",
              }}
            >
              {options.map((option, index) => (
                <MenuItem
                  key={option}
                  selected={index === selectedIndex}
                  onClick={(event) => handleMenuItemClick(event, index)}
                  sx={{ fontSize: "14px" }}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Search>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton>
            <Person2OutlinedIcon />
          </IconButton>
          <IconButton>
            <StyledBadge badgeContent={4} color="error">
              <ShoppingCart />
            </StyledBadge>
          </IconButton>
        </Box>
      </Container>
    </div>
  );
};

export default Header_2;
