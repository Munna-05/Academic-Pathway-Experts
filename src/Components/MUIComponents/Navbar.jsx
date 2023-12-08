import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useNavigate } from "react-router-dom";
import { Chip, Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { removeUser } from "../../Redux/userSlice";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

export const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  console.log("🚀 ~ file: Navbar.jsx:25 ~ Navbar ~ token:", token);

  const pages = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact us", path: "/contact-us" },
    { name: "Our Services", path: "/contact-us" },
    { name: "Our Blogs", path: "/blogs" },
    { name: "Job Openings", path: "/job-openings" },
  ];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleNavigate = (path) => {
    navigate(path);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(removeUser());
    navigate("/");
  };
  return (
    <AppBar
      position="fixed"
      variant="elevation"
      elevation={0}
      sx={{ backdropFilter: "blur(5px)" }}
      color="transparent"
    >
      <Container maxWidth="xl" sx={{ color: "white" }}>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            onClick={() => navigate("/")}
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              fontSize: 30,
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            - APE -
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page, i) => (
                <MenuItem key={i} onClick={handleCloseNavMenu}>
                  <Typography
                    onClick={() => handleNavigate(page.path)}
                    textAlign="center"
                  >
                    {page?.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box
            justifyContent={"center"}
            mx={40}
            py={1}
            borderRadius={25}
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              background: "white",
            }}
          >
            {pages.map((res, i) => (
              <button
                key={i}
                // onClick={()=>{
                //   handleCloseNavMenu()
                //   navigate(`/${res.path}`)
                // }}
                // sx={{ my: 2, color: "inverted", display: "block" }}
                // className="text-white "
                onClick={() => handleNavigate(res?.path)}
                className=" mx-4 text-xs  text-stone-600 hover:text-teal-600 hover:font-semibold duration-200"
              >
                {res?.name}
              </button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              {/* <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}> */}
              {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
              {!token ? (
                <button
                  onClick={() => navigate("/login")}
                  className="text-stone-500 outline-none hover:text-stone-200 hover:border-stone-200 hover:scale-[102%] duration-200 text-sm border px-4 py-1 w-28 rounded-full border-stone-500 "
                >
                  Log in
                </button>
              ) : (
                <Grid display={"flex"} gap={2}>
                  <div className="cursor-pointer" onClick={() => navigate("/profile")}>
                    {" "}
                    <Avatar src="https://i.pinimg.com/originals/bb/8b/97/bb8b976467f63fc083bcc18f2c47b760.jpg" />
                  </div>
                  <IconButton sx={{ p: 0 }}>
                    <button
                      onClick={handleLogout}
                      className="text-red-500 outline-none hover:text-stone-200 hover:border-stone-200 hover:scale-[102%] duration-200 text-sm border px-4 py-1 w-28 rounded-full border-red-500 "
                    >
                      Log out
                    </button>
                  </IconButton>
                </Grid>
              )}
            </Tooltip>
            {/* <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
