import { Link, NavLink, Outlet } from "react-router-dom";
import { AppBar, Toolbar, Button, Typography, Box } from "@mui/material";

export default function Parent() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Приложение с промокодом
          </Typography>

          <Button color="inherit" component={Link} to="">
            Ввод промокода
          </Button>

          <Button color="inherit" component={NavLink} to="activated">
            Активировано
          </Button>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          paddingTop: "16px",
          paddingBottom: "16px",
          paddingLeft: "16px",
          paddingRight: "16px",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}
