import React, { useEffect, useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getFullUserData } from "../redux/actions";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { useNavigate, useParams } from "react-router-dom";

// const useButtonStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     "& > *": {
//       margin: theme.spacing(2),
//     },
//   },
// }));
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
//   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
//   createData("Eclair", 262, 16.0, 24, 6.0),
//   createData("Cupcake", 305, 3.7, 67, 4.3),
//   createData("Gingerbread", 356, 16.0, 49, 3.9),
// ];

const useStyles = makeStyles({
  table: {
    marginTop: 100,
    minWidth: 900,
  },
});

const View = () => {
  const classes = useStyles();
  let dispatch = useDispatch();
  const { user } = useSelector((state) => state.data);
  console.log("user",user)
  let { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getFullUserData(id));
  }, [ id ]);
  

  return (
    <div>
      {/* <div className={buttonStyle.root}>
        <Button variant="contained" color="primary" onClick={() => navigate("/addUser")}>
          Add User
        </Button>
      </div> */}
      <Button
        style={{ width: "100px", marginTop: "20px" }}
        variant="contained"
        color="secondary"
        type="submit"
        onClick={() => navigate("/")}
      >
        Go Back
      </Button>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">Contact</StyledTableCell>
              <StyledTableCell align="center">Address</StyledTableCell>
              <StyledTableCell align="center">Age</StyledTableCell>
              <StyledTableCell align="center">Mobile No.</StyledTableCell>
              <StyledTableCell align="center">Birth-Date</StyledTableCell>
              <StyledTableCell align="center">Gender</StyledTableCell>
              <StyledTableCell align="center">Language</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <StyledTableRow key={user.id}>
              <StyledTableCell component="th" scope="row">
                {user.name}
              </StyledTableCell>
              <StyledTableCell align="center">{user.email}</StyledTableCell>
              <StyledTableCell align="center">{user.contact}</StyledTableCell>
              <StyledTableCell align="center">{user.address}</StyledTableCell>
              <StyledTableCell align="center">{user.age}</StyledTableCell>
              <StyledTableCell align="center">{user.number}</StyledTableCell>
              <StyledTableCell align="center">{user.birth_date}</StyledTableCell>
              <StyledTableCell align="center">{user.gender}</StyledTableCell>
              <StyledTableCell align="center">{user.language}</StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Button
        style={{ width: "100px", marginTop: "20px" }}
        variant="contained"
        color="secondary"
        type="submit"
        onClick={() => navigate(`/editUser/${id}`)}
      >
        Edit Data
      </Button>
    </div>
  );
};

export default View;
