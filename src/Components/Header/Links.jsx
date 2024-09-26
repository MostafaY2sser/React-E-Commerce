import { ExpandMore, KeyboardArrowRightOutlined } from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

// eslint-disable-next-line react/prop-types
const Links = ({ title }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box
        sx={{ ":hover .show-one": { display: "block" }, position: "relative" }}
      >
        <Stack
          sx={{ cursor: "pointer" }}
          direction={"row"}
          alignItems={"center"}
        >
          <Typography sx={{ fontWeight: "500" }}>{title}</Typography>
          <Box sx={{ flexGrow: 1 }}></Box>
          <ExpandMore />
        </Stack>

        <Box
          sx={{
            display: "none",
            minWidth: "170px",
            position: "absolute",
            top: "100%",
            left: "0",
            zIndex: "999",
          }}
          className=" show-one"
        >
          <Paper sx={{ mt: 1 }}>
            <List sx={{}}>
              <ListItem disablePadding>
                <ListItemButton sx={{ py: 0, my: 0 }}>
                  <ListItemText
                    sx={{ ".MuiTypography-root": { fontSize: "16px" } }}
                    primary="Dashboard"
                  />
                </ListItemButton>
              </ListItem>
              <ListItem
                sx={{
                  ":hover .show-two": { display: "block" },
                  position: "relative",
                }}
                disablePadding
              >
                <ListItemButton sx={{ py: 0, my: 0 }}>
                  <ListItemText
                    sx={{ ".MuiTypography-root": { fontSize: "16px" } }}
                    primary="Products"
                  />
                  <KeyboardArrowRightOutlined fontSize="small" />
                </ListItemButton>
                <Box
                  className="show-two"
                  sx={{
                    display: "none",
                    minWidth: "150px",
                    position: "absolute",
                    left: "100%",
                    top: 0,
                  }}
                >
                  <Paper sx={{ ml: 1 }}>
                    <List>
                      <ListItem disablePadding>
                        <ListItemButton sx={{ py: 0, my: 0 }}>
                          <ListItemText
                            sx={{ ".MuiTypography-root": { fontSize: "14px" } }}
                            primary="Add Product"
                          />
                        </ListItemButton>
                      </ListItem>
                      <ListItem disablePadding>
                        <ListItemButton sx={{ py: 0, my: 0 }}>
                          <ListItemText
                            sx={{ ".MuiTypography-root": { fontSize: "14px" } }}
                            primary="Edit Product"
                          />
                        </ListItemButton>
                      </ListItem>
                      <ListItem disablePadding>
                        <ListItemButton sx={{ py: 0, my: 0 }}>
                          <ListItemText
                            sx={{ ".MuiTypography-root": { fontSize: "14px" } }}
                            primary="Remove Product"
                          />
                        </ListItemButton>
                      </ListItem>
                    </List>
                  </Paper>
                </Box>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton sx={{ py: 0, my: 0 }}>
                  <ListItemText
                    sx={{ ".MuiTypography-root": { fontSize: "16px" } }}
                    primary="Orders"
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton sx={{ py: 0, my: 0 }}>
                  <ListItemText
                    sx={{ ".MuiTypography-root": { fontSize: "16px" } }}
                    primary="Profile"
                  />
                </ListItemButton>
              </ListItem>
            </List>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default Links;
