import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { makeStyles } from "@mui/styles";
import { Container } from "@mui/system";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  appbarMain: {
    backgroundColor: "#333",
  },

  toolbarMain: {
    padding: "0px",
    minHeight: 60,
  },

  logo: {
    fontWeight: "bold",
    fontSize: "2rem",
    margin: 0,
    padding: 0,
    cursor: "pointer !important",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <nav>
      {/* <AppBar
        position="relative"
        elevation={0}
        className={classes.appbarDesktop}
      >
        <Container maxWidth="lg">
          <Toolbar className={classes.toolbarDesktop}></Toolbar>
        </Container>
      </AppBar> */}

      <AppBar position="static" elevation={0} className={classes.appbarMain}>
        <Container maxWidth="lg">
          <Toolbar className={classes.toolbarMain}>
            <Link href={"/"}>
              <h1 className="logo">LOGO</h1>
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
      {/* 
      <AppBar
        position="relative"
        elevation={0}
        className={classes.appbarSecondary}
      >
        <Container maxWidth="lg">
          <Toolbar className={classes.toolbarSecondary}>
            <List className={classes.menuList}></List>
          </Toolbar>
        </Container>
      </AppBar> */}
    </nav>
  );
}
