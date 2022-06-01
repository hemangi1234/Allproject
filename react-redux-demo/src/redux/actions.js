import * as types from "./actionType";
import axios from "axios";

import { API } from "../Utills/apiUrl";

const getUsers = (users1) => ({
  type: types.GET_USERS,
  payload: users1,
});
const userDeleted = () => ({
    type: types.DELETE_USER,
});

const multipleDeleted = () => ({
    type: types.MULTIPLE_DELETE,
})

const userAdded = () => ({
    type: types.ADD_USER,
})
const userUpdated = () => ({
    type: types.UPDATE_USER,
})
const getUser = (user) => ({
    type: types.GET_SINGLE_USER,
    payload: user,
})
const getfulluserData = (user1) => ({
  type: types.GET_FULL_USER_DATA,
  payload: user1,
})

export const loadUsers = () => {
  // console.log("loadUser")
  return function (dispatch) {
    axios
      .get(`${API}/user`)
      .then((resp) => {
        console.log("resp", resp);
        dispatch(getUsers(resp.data))
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const deleteUser = (id) => {
    return function (dispatch) {
      axios
        .delete(`${API}/user/${id}`)
        .then((resp) => {
          console.log("resp", resp);
          dispatch(userDeleted());
          dispatch(loadUsers());
          
        })
        .catch((error) => {
          console.log(error);
        });
    };
  };

export const multipleDeleteUser = (arr) => {
    return function (dispatch) {
        arr.map((value) =>{
            axios
                .delete(`${API}/user/${value}`)
                .then((resp) => {
                    console.log('resp',resp);
                    dispatch(multipleDeleted());
                    dispatch(loadUsers());
                })
        })
    }


}
export const addUser = (user) => {
    return function (dispatch) {
      axios
        .post(`${API}/user`,user)
        .then((resp) => {
          console.log("resp", resp);
          dispatch(userAdded());
          dispatch(loadUsers());
          
        })
        .catch((error) => {
          console.log(error);
        });
    };
  };
export const updateUser = (user,id) => {
    return function (dispatch) {
      axios
        .put(`${API}/user/${id}`,user)
        .then((resp) => {
          console.log("resp", resp);
          dispatch(userUpdated());
          
          
        })
        .catch((error) => {
          console.log(error);
        });
    };
  };

export const getSingleUser = (id) => {
    return function (dispatch) {
      axios
        .get(`${API}/user/${id}`)
        .then((resp) => {
          console.log("resp", resp);
          dispatch(getUser(resp.data)); 
          
          
        })
        .catch((error) => {
          console.log(error);
        });
    };
  };

export const getFullUserData = (id) => {
    return function (dispatch) {
      axios
        .get(`${API}/user/${id}`)
        .then((resp) => {
          console.log("getFullUserData", resp);
          dispatch(getfulluserData(resp.data)); 
          
          
        })
        .catch((error) => {
          console.log(error);
        });
    };
  };

