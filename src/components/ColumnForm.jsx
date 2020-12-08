import React from "react";
import { IconButton, TextField } from "@material-ui/core";
import IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";

const ColumnForm = (props) => {
  return (
    <div
      key={props.childkey + props.size}
      id={`columnFeatures${props.childkey}`}
    >
      <TextField
        autoComplete="off"
        margin="dense"
        id={`column${props.childkey}`}
        label="Name of Column"
        variant="standard"
        color="secondary"
        key={props.childkey}
        onChange={(event) => {
          props.setData(props.name, event.target.value, "name");
        }}
        value={props.name}
      />

      <TextField
        autoComplete="off"
        margin="dense"
        id={`tag${props.childkey}`}
        label="Tag"
        variant="standard"
        color="secondary"
        key={props.childkey + props.size * 4}
        onChange={(event) => {
          props.setData(props.name, event.target.value, "tag");
        }}
        value={props.tag}
      />
      <TextField
        autoComplete="off"
        margin="dense"
        id={`type${props.childkey}`}
        label="Type"
        variant="standard"
        color="secondary"
        key={props.childkey + props.size * 3}
        onChange={(event) => {
          props.setData(props.name, event.target.value, "type");
        }}
        value={props.type}
      />

      <IconButton
        key={props.childkey + 2 * props.size}
        onClick={() => {
          props.deleteSelf(props.name);
        }}
        color="secondary"
      >
        <IndeterminateCheckBoxIcon />
      </IconButton>
    </div>
  );
};

export default ColumnForm;
