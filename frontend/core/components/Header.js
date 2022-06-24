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
import ListItem from "@mui/material/ListItem";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  appbarMain: {
    backgroundColor: "#333",
  },

  appbarSecondary: {
    backgroundColor: "#555",
  },

  toolbarMain: {
    padding: "0px",
    minHeight: 60,
  },

  toolbarSecondary: {
    padding: "0px",
    minHeight: 30,
  },

  logo: {
    fontWeight: "bold",
    fontSize: "2rem",
    margin: 0,
    padding: 0,
    cursor: "pointer !important",
  },

  menuList: {
    display: "flex",
    flexDirection: "row",
    padding: 0,
  },

  meunListItem: {
    padding: 0,
    paddingRight: 20,
    cursor: "pointer",
    textTransform: "uppercase",
  },

  listItemLink: {
    color: "#fff",
    textDecoration: "none",
  },
}));

export default function Header({ categories }) {
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

      <AppBar
        position="relative"
        elevation={0}
        className={classes.appbarSecondary}
      >
        <Container maxWidth="lg">
          <Toolbar className={classes.toolbarSecondary}>
            Categories:
            <List className={classes.menuList}>
              {categories.map((category) => (
                <ListItem key={category.name} className={classes.menuListItem}>
                  <Link href={`/category/${encodeURIComponent(category.slug)}`}>
                    <a className={classes.listItemLink}>{category.name}</a>
                  </Link>
                </ListItem>
              ))}
            </List>
          </Toolbar>
        </Container>
      </AppBar>
    </nav>
  );
}
