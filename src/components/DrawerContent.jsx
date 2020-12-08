import {
  Avatar,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import DashboardIcon from "@material-ui/icons/Dashboard";
import TableChartIcon from "@material-ui/icons/TableChart";
import FindInPageIcon from "@material-ui/icons/FindInPage";
import DescriptionIcon from "@material-ui/icons/Description";
import InfoIcon from "@material-ui/icons/Info";
import UserImage from "../images/user_image.png";

const useStyle = makeStyles(() => ({
  wrapper: {
    width: 200,
  },
  icon: { color: "white" },
  drawerHeader: {
    height: "150px",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
}));

const DrawerContent = () => {
  const classes = useStyle();
  return (
    <div className={classes.wrapper}>
      <Grid container className={classes.drawerHeader}>
        <Avatar src={UserImage}></Avatar>
        <Typography>DB Management</Typography>
      </Grid>
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon></DashboardIcon>
          </ListItemIcon>
          <ListItemText>Dashboard</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <TableChartIcon></TableChartIcon>
          </ListItemIcon>
          <ListItemText>Tables</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <FindInPageIcon></FindInPageIcon>
          </ListItemIcon>
          <ListItemText>Pages</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DescriptionIcon></DescriptionIcon>
          </ListItemIcon>
          <ListItemText>Documentation</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <InfoIcon></InfoIcon>
          </ListItemIcon>
          <ListItemText>About</ListItemText>
        </ListItem>
      </List>
    </div>
  );
};

export default DrawerContent;
