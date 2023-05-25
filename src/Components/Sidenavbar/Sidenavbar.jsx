import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {
  FaBookReader,
  FaChalkboardTeacher,
  FaCog,
  FaCogs,
  FaCompress,
  FaExpand,
  FaHandsHelping,
  FaHome,
  FaInbox,
  FaLanguage,
  FaPowerOff,
  FaSearch,
  FaUserCheck,
  FaUserCircle,
  FaUserGraduate,
  FaUsers,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { Button, Dropdown, Input } from "antd";
import Logo from "../../Assets/Imgs/Demo-School-Logo.png";
import I from "../../Assets/Imgs/my-photo.jpg";
import "./Sidenavbar.scss";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Sidenavbar() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  //   const [open, setOpen] = useState(false);

  const itemsLanguage = [
    {
      key: "1",
      label: <div className="header__lang">uz</div>,
    },
    {
      key: "2",
      label: <div className="header__lang">ru</div>,
    },
    {
      key: "3",
      label: <div className="header__lang">en</div>,
    },
  ];

  const itemsProfile = [
    {
      key: "1",
      label: (
        <div className="header__profile-item">
          <FaUserCircle /> My Profile
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div className="header__profile-item">
          <FaCog /> Edit Profile
        </div>
      ),
    },
    {
      key: "3",
      label: (
        <div className="header__profile-item">
          <FaInbox /> Inbox
        </div>
      ),
    },
    {
      key: "4",
      label: (
        <div className="header__profile-item">
          <FaHandsHelping /> Help
        </div>
      ),
    },
    {
      key: "5",
      label: (
        <div className="header__profile-item">
          <FaPowerOff /> Sign Out
        </div>
      ),
    },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}>
            <MenuIcon />
          </IconButton>
          <div className="header">
            <div>
              <Input className="header__input" placeholder="Qidiruv" />
              <button className="header__search">
                <FaSearch />
              </button>
            </div>
            <Link to="/dashboard">
              <img className="header__logo" src={Logo} alt="Logo" />
            </Link>
            <div className="header__box">
              <Dropdown
                menu={{ items: itemsLanguage }}
                placement="bottom"
                arrow>
                <Button className="header__btn">
                  <FaLanguage style={{ fontSize: "30px" }} />
                </Button>
              </Dropdown>
              <button
                className="header__display"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}>
                {isOpen ? <FaCompress /> : <FaExpand />}
              </button>
              <Dropdown
                menu={{ items: itemsProfile }}
                placement="bottomRight"
                arrow>
                <Button className="header__btn">
                  <img className="header__profile" src={I} alt="Profile" />
                </Button>
              </Dropdown>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem
            className="header__list-item"
            disablePadding
            sx={{ display: "block" }}
            onClick={() => navigate("/dashboard")}>
            <ListItemButton
              sx={{
                minHeight: 77,
                justifyContent: open ? "initial" : "center",
                px: 3,
              }}>
              <ListItemIcon
                sx={{
                  minWidth: 63,
                  mr: open ? 2 : "auto",
                  justifyContent: "center",
                }}>
                <FaHome className="header__icon" />
              </ListItemIcon>
              <ListItemText primary="Bosh sahifa" />
            </ListItemButton>
          </ListItem>
          <ListItem
            className="header__list-item"
            disablePadding
            sx={{ display: "block" }}
            onClick={() => navigate("/students")}>
            <ListItemButton
              sx={{
                minHeight: 77,
                justifyContent: open ? "initial" : "center",
                px: 3,
              }}>
              <ListItemIcon
                sx={{
                  minWidth: 63,
                  mr: open ? 2 : "auto",
                  justifyContent: "center",
                }}>
                <FaUserGraduate className="header__icon" />
              </ListItemIcon>
              <ListItemText primary="Talabalar" />
            </ListItemButton>
          </ListItem>
          <ListItem
            className="header__list-item"
            disablePadding
            sx={{ display: "block" }}
            onClick={() => navigate("/teachers")}>
            <ListItemButton
              sx={{
                minHeight: 77,
                justifyContent: open ? "initial" : "center",
                px: 3,
              }}>
              <ListItemIcon
                sx={{
                  minWidth: 63,
                  mr: open ? 2 : "auto",
                  justifyContent: "center",
                }}>
                <FaChalkboardTeacher className="header__icon" />
              </ListItemIcon>
              <ListItemText primary="O'qituvchilar" />
            </ListItemButton>
          </ListItem>
          <ListItem
            className="header__list-item"
            disablePadding
            sx={{ display: "block" }}
            onClick={() => navigate("/courses")}>
            <ListItemButton
              sx={{
                minHeight: 77,
                justifyContent: open ? "initial" : "center",
                px: 3,
              }}>
              <ListItemIcon
                sx={{
                  minWidth: 63,
                  mr: open ? 2 : "auto",
                  justifyContent: "center",
                }}>
                <FaBookReader className="header__icon" />
              </ListItemIcon>
              <ListItemText primary="Kurslar" />
            </ListItemButton>
          </ListItem>
          <ListItem
            className="header__list-item"
            disablePadding
            sx={{ display: "block" }}
            onClick={() => navigate("/groups")}>
            <ListItemButton
              sx={{
                minHeight: 77,
                justifyContent: open ? "initial" : "center",
                px: 3,
              }}>
              <ListItemIcon
                sx={{
                  minWidth: 63,
                  mr: open ? 2 : "auto",
                  justifyContent: "center",
                }}>
                <FaUsers className="header__icon" />
              </ListItemIcon>
              <ListItemText primary="Guruhlar" />
            </ListItemButton>
          </ListItem>
          <ListItem
            className="header__list-item"
            disablePadding
            sx={{ display: "block" }}
            onClick={() => navigate("/lids")}>
            <ListItemButton
              sx={{
                minHeight: 77,
                justifyContent: open ? "initial" : "center",
                px: 3,
              }}>
              <ListItemIcon
                sx={{
                  minWidth: 63,
                  mr: open ? 2 : "auto",
                  justifyContent: "center",
                }}>
                <FaUserCheck className="header__icon" />
              </ListItemIcon>
              <ListItemText primary="Lidlar" />
            </ListItemButton>
          </ListItem>
          <ListItem
            className="header__list-item"
            disablePadding
            sx={{ display: "block" }}
            onClick={() => navigate("/settings")}>
            <ListItemButton
              sx={{
                minHeight: 77,
                justifyContent: open ? "initial" : "center",
                px: 3,
              }}>
              <ListItemIcon
                sx={{
                  minWidth: 63,
                  mr: open ? 2 : "auto",
                  justifyContent: "center",
                }}>
                <FaCogs className="header__icon-end" />
              </ListItemIcon>
              <ListItemText primary="Sozlamalar" />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
      </Drawer>
    </Box>
  );
}
