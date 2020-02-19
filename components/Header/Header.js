import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SearchUsers from "./../SearchUsers/SearchUsers";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "absolute",
    top: 0,
    left: "20%",
    width: "58.5%",
    maxHeight: "100vh"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <SearchUsers />
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Header;
