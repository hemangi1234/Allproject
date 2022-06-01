import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/actions";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";


import FormGroup from '@material-ui/core/FormGroup';

import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 100,
    "& > *": {
      margin: theme.spacing(1),
      width: "45ch",
    },
    rooot: {
      display: 'flex',
    },
    formControl: {
      margin: theme.spacing(3),
    },
  },
}));
// const useStyless = makeStyless((theme) => ({
  
// }));


const AddUser = () => {
  const classes = useStyles();
  // const classess = useStyless();
  const [user, setUser] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
    age: "",
    number: "",
    birth_date: "",
    gender: "",
    language: [],
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { name, email, contact, address, age, number, birth_date, gender } = user;
  const handleInputChange = (e) => {
    let { name, value,checked } = e.target;
    if (name === "language") {
      console.log("language",value);
      if (checked === true) {

        user.language.push(value);
        console.log(user.language)
        // setUser({...user});
        
        
      }
      else if (checked === false) {
        let index = user.language.indexOf(value);
        user.language.splice(index,1);
        console.log(user.language)
        // setUser({...user});
      }
      setUser({...user});

    } else{
      setUser({ ...user, [name]: value });
    }
    // setUser({ ...user, [name]: value });
  };

  const handleInputChangeCheckbox = (e) => {
    let {name, value,checked} = e.target;
    console.log(e);
    
    // if (name === "language") {
    //   console.log("language",value);
    //   if (checked === true) {

    //     user.language.push(value);
    //     // setUser({...user});
        
        
    //   }
    //   else if (checked === false) {
    //     let index = user.language.indexOf(value);
    //     user.language.splice(index,1);
    //     // setUser({...user});
    //   }
    //   setUser({...user});
    // } 
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !address || !email || !contact) {
      setError("please input all input field");
    } else {
      dispatch(addUser(user));
      navigate("/");
    }
  };
  return (
    <div>
      <Button
        style={{ width: "100px", marginTop: "20px" }}
        variant="contained"
        color="secondary"
        type="submit"
        onClick={() => navigate("/")}
      >
        Go Back
      </Button>

      <h2>Add User</h2>
      {error && <h3 style={{ color: "red" }}>{error}</h3>}
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          id="standard-basic"
          label="Name"
          value={name}
          type="text"
          onChange={handleInputChange}
          name="name"
        />
        <br />
        <TextField
          id="standard-basic"
          label="Email"
          value={email}
          type="text"
          name="email"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Contact"
          value={contact}
          type="text"
          name="contact"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Address"
          value={address}
          type="text"
          name="address"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Age"
          value={age}
          type="number"
          name="age"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Mobile No."
          value={number}
          type="number"
          name="number"
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Birth-Date"
          value={birth_date}
          type="date"
          name="birth_date"
          onChange={handleInputChange}
        />
        <br />
        <FormControl component="fieldset">
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup
            aria-label="gender"
            name="gender"
            value={gender}
            onChange={handleInputChange}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
        <br />

        <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Choose Your Faviroute Language</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox onChange={handleInputChange} value="Python" name="language" />}
            label="Python"
          />
          <FormControlLabel
            control={<Checkbox onChange={handleInputChange} value="JavaScript" name="language" />}
            label="JavaScript"
          />
          <FormControlLabel
            control={<Checkbox onChange={handleInputChange} value="Html-Css" name="language" />}
            label="Html-Css"
          />
        </FormGroup>
       
      </FormControl>
      <br />
      {/* <FormControl required error={error} component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Pick two</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={gilad} onChange={handleChange} name="gilad" />}
            label="Gilad Gray"
          />
          <FormControlLabel
            control={<Checkbox checked={jason} onChange={handleChange} name="jason" />}
            label="Jason Killian"
          />
          <FormControlLabel
            control={<Checkbox checked={antoine} onChange={handleChange} name="antoine" />}
            label="Antoine Llorca"
          />
        </FormGroup>
        <FormHelperText>You can display an error</FormHelperText>
      </FormControl> */}

        <Button
          style={{ width: "100px" }}
          variant="contained"
          color="primary"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddUser;
