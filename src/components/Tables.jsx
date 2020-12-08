import {
  Button,
  Grid,
  IconButton,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import VisibilityIcon from "@material-ui/icons/Visibility";
import React, { useState } from "react";
import AddTableDialog from "./AddTableDialog";
import SeeTableDialog from "./SeeTableDialog";
import UpdateTableDialog from "./UpdateTableDialog";

const useStyle = makeStyles({
  wrapper: {
    marginTop: "30px",
  },
  flexGrid: {
    display: "flex",
    justifyContent: "space-around",
  },
});

const makeRow = (data, deleteTable, selectTable, seeDetails, seeUpdate) => {
  return data.map((table, index) => (
    <TableRow key={index}>
      <TableCell>
        <Checkbox
          onClick={() => {
            selectTable(table.name);
          }}
          checked={table.selected}
        />
      </TableCell>
      <TableCell>{index}</TableCell>
      <TableCell>{table.name}</TableCell>
      <TableCell>
        <IconButton
          onClick={() => {
            deleteTable(table.name);
          }}
        >
          <DeleteIcon />
        </IconButton>
      </TableCell>
      <TableCell>
        <IconButton
          onClick={() => {
            seeUpdate(table.name);
          }}
        >
          <EditIcon />
        </IconButton>
      </TableCell>
      <TableCell>
        <IconButton
          onClick={() => {
            seeDetails(table.name);
          }}
        >
          <VisibilityIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  ));
};

const Tables = (props) => {
  const classes = useStyle();
  const [open, setOpen] = React.useState(false);
  const [seeDetails, toggleDetails] = useState(false);
  const [dataToSee, setDataToSee] = useState({ name: "", selected:false, columns: [] });
  const [seeUpdateDialog, toggleUpdateDialogDetails] = useState(false);
  const [dataToChange, setDataToChange] = useState({ name: "", selected:false, columns: [] });
  console.log(props.data)
  const openAddDialog = () => {
    setOpen(true);
  };
  const closeAddDialog = () => {
    setOpen(false);
  };
  function updateData(newData) {
    let temp = [...props.data];
    temp.push(newData);
    props.updateData(temp);
  }
  function deleteTable(name) {
    let temp = [...props.data];
    for (let i = 0; i < props.data.length; i++) {
      const element = props.data[i];
      if (element.name === name) {
        temp.splice(i, 1);
      }
      props.updateData(temp);
    }
  }
  function updateTable(name, newTableData) {
    let temp = [...props.data];
    for (let i = 0; i < props.data.length; i++) {
      const element = props.data[i];
      if (element.name === name) {
        temp[i] = {...newTableData};
      }
      props.updateData(temp);
    }
  }
  function toggleSelectTable(name) {
    let temp = [...props.data];
    for (let i = 0; i < props.data.length; i++) {
      const element = props.data[i];
      if (element.name === name) {
        temp[i].selected = !temp[i].selected;
      }
      props.updateData(temp);
    }
  }

  function showDetails(name) {
    let temp;
    for (let i = 0; i < props.data.length; i++) {
      const element = props.data[i];
      if (element.name === name) {
        temp = { ...element };
      }
      setDataToSee(temp);
      toggleDetails(true);
    }
  }

  function showDetailsToUpdate(name) {
    let temp;
    for (let i = 0; i < props.data.length; i++) {
      const element = props.data[i];
      if (element.name === name) {
        temp = { ...element };
      }
      setDataToChange(temp);
      toggleUpdateDialogDetails(true);
    }
  }

  function deleteSelectedColumns(){
    let temp = props.data.filter(
      table=>!table.selected
    );
      props.updateData(temp);
    }
  

  return (
    <Grid className={classes.wrapper} spacing={1} container>
      <Grid item xs={1}></Grid>
      <Grid container item xs={10} spacing={2}>
        <Grid item xs={12} className={classes.flexGrid}>
          <Button onClick={openAddDialog} color="primary" variant="contained">
            Add Table
          </Button>
          <Button color="secondary" variant="contained" onClick={deleteSelectedColumns}>
            Delete Selected Tables
          </Button>
          <AddTableDialog
            open={open}
            closeAction={closeAddDialog}
            updateData={updateData}
          />
          <SeeTableDialog
            open={seeDetails}
            closeAction={() => {
              toggleDetails(false);
            }}
            data={dataToSee}
          ></SeeTableDialog>
          <UpdateTableDialog
            open={seeUpdateDialog}
            closeAction={()=>{toggleUpdateDialogDetails(false)}}
            updateData={updateTable}
            data={dataToChange}
          ></UpdateTableDialog>
        </Grid>
        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Typography>Select</Typography>
                  </TableCell>
                  <TableCell><Typography>Table ID</Typography></TableCell>
                  <TableCell><Typography>Table Name</Typography></TableCell>
                  <TableCell><Typography>Delete</Typography></TableCell>
                  <TableCell><Typography>Update</Typography></TableCell>
                  <TableCell><Typography>See Details</Typography></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {makeRow(
                  props.data,
                  deleteTable,
                  toggleSelectTable,
                  showDetails,
                  showDetailsToUpdate
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
      <Grid item xs={1}></Grid>
    </Grid>
  );
};

export default Tables;
