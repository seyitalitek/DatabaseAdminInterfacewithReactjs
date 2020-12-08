import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Typography,
} from "@material-ui/core";
import ColumnForm from "./ColumnForm";

const AddTableDialog = (props) => {

  const [newData, setNewData] = useState({
    name: "",
    selected: false,
    columns: [],
  });

  function changeName(name) {
    let data = { ...newData };
    data.name = name;
    setNewData(data);
  }

  function addColumn() {
    let data = { ...newData };
    data.columns.push({  name: "", tag: "", type: "" });
    setNewData(data);

  }
  function deleteColumn(nameOfColumn) {
    let data = { ...newData };
    for (let i = 0; i < data.columns.length; i++) {
      const element = data.columns[i];
      console.log(element.id);

      if (element.name === nameOfColumn) {
        data.columns.splice(i, 1);
        break;
      }
    }
    setNewData(data);

  }

  function setFieldsinData(nameOfColumn, value, field){
    let data = { ...newData };
    for (let i = 0; i < data.columns.length; i++) {
      const element = data.columns[i];

      if (element.name === nameOfColumn) {
        data.columns[i][field] = value;
        break;
      }
    }
    setNewData(data);
  }


  return (
    <React.Fragment>
      <Dialog fullWidth open={props.open} maxWidth="md" scroll="body">
        <form id="newtable">
          <DialogTitle>Add a new Table</DialogTitle>
          <DialogContent>
            <DialogContentText id="a">
              Descripton about Action
            </DialogContentText>
            <TextField
              autoComplete="off"
              autoFocus
              margin="dense"
              id="name"
              label="Name of Table"
              variant="standard"
              type="text"
              fullWidth
              color="secondary"
              onChange={(event) => {
                changeName(event.target.value);
              }}
            />

            <Typography>Columns</Typography>
            {newData.columns.map((column, index) => (
              <ColumnForm

                key={index}
                childkey={index + 1}
                size={newData.columns.length}
                deleteSelf={deleteColumn}
                setData={setFieldsinData}
                name={column.name}
                type={column.type}
                tag={column.tag}

              ></ColumnForm>
            ))}
            <DialogActions>
              <Button color="primary" variant="contained" onClick={addColumn}>
                <Typography>Add Column</Typography>
              </Button>
            </DialogActions>
          </DialogContent>
          <DialogActions>
            <Button color="primary" variant="contained" onClick={()=>{
                props.updateData(newData);
                props.closeAction();
                setNewData({
                    name: "",
                    selected:false,
                    columns: [],
                  });
            }}>
              Add
            </Button>
            <Button
              color="secondary"
              variant="contained"
              onClick={() => {
                props.closeAction();
                setNewData({
                  name: "",
                  selected:false,
                  columns: [],
                });
              }}
            >
              Cancel
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </React.Fragment>
  );
};

export default AddTableDialog;
