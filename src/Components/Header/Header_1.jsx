import { useContext, useState } from "react";
import { ColorModeContext } from "../../theme";
import {
  Box,
  Container,
  IconButton,
  ListItem,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import {
  DarkModeOutlined,
  ExpandMore,
  LightModeOutlined,
} from "@mui/icons-material";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

//  Selected Menu :-----------------------------
const options = ["AR", "EN"];

// ______________________________________________________________________________________________________
const Header_1 = () => {
  // Dark  Mode :------------------------------------
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();

  //  Selected Menu :-----------------------------
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
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

  // ___________________________________________________________________________________________________
  return (
    <Box
      sx={{
        bgcolor: "#2B3445",
        borderBottomRightRadius: 6,
        borderBottomLeftRadius: 6,
      }}
    >
      <Container>
        <Stack direction={"row"} alignItems={"center"}>
          <Typography
            sx={{
              mr: 2,
              p: "4px 10px",
              bgcolor: "#D23F57",
              borderRadius: "12px",
              fontSize: "12px",
              fontWeight: "bold",
              color: "#fff",
            }}
            variant="body2"
          >
            HOT
          </Typography>

          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: 300,
              color: "#fff",
              ml: { xs: "-12px", sm: "0" },
            }}
            variant="body2"
          >
            Free Express Shipping
          </Typography>

          <Box flexGrow={"1"} />

          {/* Dark  Mode ---------------------------- */}
          <div className="dark">
            {theme.palette.mode === "light" ? (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                <LightModeOutlined sx={{ color: "white" }} />
              </IconButton>
            ) : (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                <DarkModeOutlined />
              </IconButton>
            )}
          </div>

          {/* Selected  Menu  ---------------------------- */}
          <List
            component="nav"
            aria-label="Device settings"
            sx={{ p: "0", m: "0", cursor: "pointer" }}
          >
            <ListItem
              id="lock-button"
              aria-haspopup="listbox"
              aria-controls="lock-menu"
              aria-label="when device is locked"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClickListItem}
              sx={{ px: { xs: 0, sm: 1 } }}
            >
              <ListItemText
                secondary={options[selectedIndex]}
                sx={{
                  ".MuiTypography-root": { fontSize: "14px", color: "#fff" },
                }}
              />
              <ExpandMore sx={{ color: "#fff" }} />
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
                sx={{ fontSize: "12px" }}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>

          <TwitterIcon
            sx={{
              fontSize: "16px",
              color: "#fff",
              cursor: "pointer",
              transition: ".3s",
              "&:hover": { color: "blue" },
            }}
          />
          <FacebookIcon
            sx={{
              fontSize: "16px",
              mx: 1,
              color: "#fff",
              cursor: "pointer",
              transition: ".3s",
              "&:hover": { color: "blue" },
            }}
          />
          <InstagramIcon
            sx={{
              fontSize: "16px",
              color: "#fff",
              cursor: "pointer",
              transition: ".3s",
              "&:hover": { color: "red" },
            }}
          />
        </Stack>
      </Container>
    </Box>
  );
};

export default Header_1;
