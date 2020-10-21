import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      color: "black",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    navLink: {
      color: "#000",
    },
    title: {
      marginRight: theme.spacing(8),
    },
  })
);

export default function Header() {
  const classes = useStyles();
  const activeStyle = { color: "#FFF" };
  const linkStyle = { color: "#000", textDecoration: "none" };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <NavLink to="/" activeStyle={activeStyle} exact style={linkStyle}>
            <Typography variant="h6" className={classes.title} color="inherit">
              Home
            </Typography>
          </NavLink>
          <NavLink to="/messages" activeStyle={activeStyle} style={linkStyle}>
            <Typography variant="h6" className={classes.title} color="inherit">
              Messages
            </Typography>
          </NavLink>
          <NavLink to="/message" activeStyle={activeStyle} style={linkStyle}>
            <Typography variant="h6" className={classes.title} color="inherit">
              Send Message
            </Typography>
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
}
