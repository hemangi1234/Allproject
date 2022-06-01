import React, { useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useDispatch, useSelector } from "react-redux";
import {deleteUser, loadUsers, multipleDeleteUser} from "../redux/actions";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import {  useNavigate} from "react-router-dom"
import Checkbox from "@material-ui/core/Checkbox/Checkbox";

const useButtonStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(2),
    },
  },
}));
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





const useStyles = makeStyles({
  table: {
    marginTop: 100,
    minWidth: 900,
  },
});

const Home = () => {
  const classes = useStyles();
  const buttonStyle = useButtonStyles();
  let dispatch = useDispatch();
  const { users } = useSelector((state) => state.data);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("are you sure wanted to delete the user ?"))
      dispatch(deleteUser(id));
  };



  const handleMultipleSelectedDelete= (arr) => {
    console.log("arr",arr)
    console.log("action multiple delete user fired")
    dispatch(multipleDeleteUser(arr))

  }
  const arr = []
  const handleChackboxChange = (e) => {
    console.log(e)

    if(e.target.checked === true){
      // arr.push(e.target.value)
      arr.push(e.target.value)
    }


    if(e.target.checked === false){
      let index = arr.indexOf(e.target.value);
      console.log("index", index)
      arr.splice(index,1)

    }

    console.log("arr",arr)
    return arr;
  }

  return (
    <div>
      <div className={buttonStyle.root}>
        <Button variant="contained" color="primary" onClick={() => navigate("/addUser")}>
          Add User
        </Button>
      </div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Select-Row</StyledTableCell>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">Contact</StyledTableCell>
              <StyledTableCell align="center">Address</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>



            {users &&
              users.map((user) => (
                <StyledTableRow key={user.id}>
                  <StyledTableCell component="th" scope="row">
                    <Checkbox value={user.id} onChange={(e) => handleChackboxChange(e)}  />
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {user.name}
                  </StyledTableCell>
                  <StyledTableCell align="center">{user.email}                   </StyledTableCell>
                  <StyledTableCell align="center">
                    {user.contact}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {user.address}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <div className={buttonStyle.root}>
                      <ButtonGroup
                        variant="contained"
                        color="primary"
                        aria-label="contained primary button group"
                      >
                        <Button
                          style={{ marginRight: "5px" }}
                          color="primary"
                          onClick={() => navigate(`/viewUser/${user.id}`)}
                        >
                          View
                        </Button>
                        <Button
                          style={{ marginRight: "5px" }}
                          color="secondary"
                          onClick={() => handleDelete(user.id)}
                        >
                          Delete
                        </Button>
                        <Button color="primary" onClick={() => navigate(`/editUser/${user.id}`)}>Edit</Button>
                      </ButtonGroup>
                    </div>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className={buttonStyle.root}>
        <Button variant="contained" color="primary" onClick={() => handleMultipleSelectedDelete(arr)} >
          Delete Multiple Selected Row
        </Button>
      </div>
      {/*<div className={buttonStyle.root}>*/}
      {/*  <Button variant="contained" color="primary" >*/}
      {/*    Add User*/}
      {/*  </Button>*/}
      {/*</div>*/}
    </div>
  );
};

export default Home;
