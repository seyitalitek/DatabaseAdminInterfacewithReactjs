import {
  AppBar,
  createMuiTheme,
  Grid,
  IconButton,
  makeStyles,
  TextField,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import "fontsource-roboto";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SettingsIcon from "@material-ui/icons/Settings";
import ToggleOffIcon from '@material-ui/icons/ToggleOff';
import ToggleOnIcon from '@material-ui/icons/ToggleOn';
const useStyle = makeStyles(() => ({
  appBarIcon: { color: "white" },
  appBarLogo: { flex: 1 },
  typography: {marginRight:"5px",},
}));

const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});
const HeaderBar = (props) => {
  const classes = useStyle();
  return (
    <Grid item xs={12} className={props.className}>
      <ThemeProvider theme={theme}>
        <AppBar position="static">
          <Toolbar>
            <IconButton onClick={props.toggleDrawer}>
              <MenuIcon></MenuIcon>
            </IconButton>
            <div className={classes.appBarLogo}></div>

            <form autoComplete="off">
              <TextField
                id="filled-search"
                margin="none"
                type="search"
                variant="standard"
                placeholder="Search"
              />
            </form>
            <IconButton>
              <SearchIcon></SearchIcon>
            </IconButton>
            <IconButton>
              <MailOutlineIcon></MailOutlineIcon>
            </IconButton>
            <IconButton>
              <SettingsIcon></SettingsIcon>
            </IconButton>
            <IconButton>
              <AccountCircleIcon></AccountCircleIcon>
            </IconButton>
            <IconButton onClick={props.toggleTheme}>
              <Typography className={classes.typography} variant="caption">Dark Mode </Typography>
              {props.dark ? <ToggleOffIcon/> :
              <ToggleOnIcon/>}
            </IconButton>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </Grid>
  );
};

export default HeaderBar;
