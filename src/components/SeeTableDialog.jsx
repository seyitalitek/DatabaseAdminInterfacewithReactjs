import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";

const SeeTableDialog = (props) => {
  return (
    <React.Fragment>
      <Dialog fullWidth open={props.open} maxWidth="md" scroll="body">
        <form id="newtable">
          <DialogTitle>{props.data.name}</DialogTitle>
          <DialogContent>
            <DialogContentText id="a">Columns of this Table</DialogContentText>
            <Grid container>
              <Grid item xs={12}>
                <TableContainer component={Paper}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Number</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Tag</TableCell>
                        <TableCell>Type</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {props.data.columns.map((column, index) => (
                        <TableRow key={index}>
                          <TableCell>{index + 1}</TableCell>
                          <TableCell>{column.name}</TableCell>
                          <TableCell>{column.tag}</TableCell>
                          <TableCell>{column.type}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </Grid>
          </DialogContent>

          <DialogActions>
            <Button
              color="secondary"
              variant="contained"
              onClick={() => {
                props.closeAction();
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

export default SeeTableDialog;
