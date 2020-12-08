import {
  createMuiTheme,
  CssBaseline,
  Drawer,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core";
import React, { useState } from "react";
import "fontsource-roboto";
import "./App.css";
import HeaderBar from "./components/HeaderBar";
import DrawerContent from "./components/DrawerContent";
import Tables from "./components/Tables";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
});
const lightTheme = createMuiTheme({
  palette: {
    type: "light",
  },
});
const useStyles = makeStyles((theme) => ({
  root: {},
}));

const Data = [
  {
    name: "table1",
    selected: false,
    columns: [
      {
        name: "column1",
        tag: "first",
        type: "number",
      },
      {
        name: "column2",
        tag: "second",
        type: "text",
      },
    ],
  },
  {
    name: "table2",
    selected: false,
    columns: [
      {
        name: "column3",
        tag: "third",
        type: "number",
      },
      {
        name: "column4",
        tag: "fourth",
        type: "text",
      },
    ],
  },
];


const App = () => {
  const [TableData, updateData]=useState(Data);
  const classes = useStyles();
  const [drawer, toggleDrawer] = useState(false);
  const [dark, toggleTheme] = useState(false);
  return (
    <ThemeProvider theme={dark ? darkTheme : lightTheme}>
      <CssBaseline />
      <div className={classes.root}>
        <React.StrictMode>
          <HeaderBar
            className={classes.appBar}
            dark={dark}
            toggleDrawer={() => {
              toggleDrawer(!drawer);
            }}
            toggleTheme={() => {
              toggleTheme(!dark);
            }}
          ></HeaderBar>
        </React.StrictMode>
        <Drawer
          className={classes.drawer}
          variant="temporary"
          anchor="left"
          open={drawer}
          onClose={() => {
            toggleDrawer(!drawer);
          }}
        >
          <DrawerContent></DrawerContent>
        </Drawer>
        <Tables data={TableData} updateData={updateData}></Tables>
      </div>
    </ThemeProvider>
  );
};

export default App;
