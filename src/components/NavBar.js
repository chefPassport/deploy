import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import "../index.css";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.black, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.black, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
}));

export default function NavBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <Link
          exact={true}
          to="/profile"
          style={{ textDecoration: "none" }}
          className="textColor"
        >
          Profile
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link
          exact={true}
          to="/"
          style={{ textDecoration: "none" }}
          className="textColor"
        >
          Sign In
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>Sign Out</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Button color="inherit">
          <Link
            exact={true}
            to="/home"
            style={{ textDecoration: "none" }}
            className="textColor"
          >
            Home
          </Link>
        </Button>
      </MenuItem>
      <MenuItem>
        <Button color="inherit">
          <Link
            exact={true}
            to="/gallery"
            style={{ textDecoration: "none" }}
            className="textColor"
          >
            Gallery
          </Link>
        </Button>
      </MenuItem>
      <MenuItem>
        <Button color="inherit">
          <Link
            exact={true}
            to="/profile"
            style={{ textDecoration: "none" }}
            className="textColor"
          >
            Profile
          </Link>
        </Button>
      </MenuItem>
      <MenuItem>
        <Button color="inherit">
          <Link
            exact={true}
            to="/"
            style={{ textDecoration: "none" }}
            className="textColor"
          >
            Sign In/Sign Up
          </Link>
        </Button>
      </MenuItem>
      <MenuItem>
        <Button color="inherit">Sign Out</Button>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <img src={process.env.PUBLIC_URL + "/Logo.jpg"} height="35px" />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Button color="inherit">
              <Link
                exact={true}
                to="/home"
                style={{ textDecoration: "none" }}
                className="textColor"
              >
                Home
              </Link>
            </Button>
            <Button
              edge="end"
              aria-label="account of current user"
              color="inherit"
            >
              <Link
                exact={true}
                to="/gallery"
                style={{ textDecoration: "none" }}
                className="textColor"
              >
                Gallery
              </Link>
            </Button>
            <Button
              edge="end"
              aria-label="account of current user"
              color="inherit"
            >
              <Link
                exact={true}
                to="/profile"
                style={{ textDecoration: "none" }}
                className="textColor"
              >
                Profile
              </Link>
            </Button>
            <Button
              edge="end"
              aria-label="account of current user"
              color="inherit"
            >
              <Link
                exact={true}
                to="/"
                style={{ textDecoration: "none" }}
                className="textColor"
              >
                Sign In/Sign Up
              </Link>
            </Button>
            <Button
              edge="end"
              aria-label="account of current user"
              color="inherit"
            >
              Sign Out
            </Button>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
