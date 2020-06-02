import { DELETE_CUSTOMER, GET_CUSTOMER_LIST, GET_ERRORS, SET_CURRENT_USER, USER_LOADING, GET_SPECIFIC_CUSTOMER, UPDATE_CUSTOMER } from './types';

import axios from "axios";
import jwt_decode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';

//GOOGLE LOGIN
export const googleLogin = () => dispatch => {
  axios
    .get("/api/users/customer")
    .then(res => {
      //this.setState({ profile: res.data });
      console.log(res.data);
      dispatch({
        type: SET_CURRENT_USER,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err.response);
    });
}
//REGISTER
export const registerUser = (userData,history) =>dispatch=> {
axios
  .post("/api/users/register",userData)
  .then(res =>history.push("/notice") )//On successful registration
  .catch(err =>
    dispatch({
        type: GET_ERRORS,
        payload: err.response.data
    }));
}
// LOGIN
export const loginUser = (userData) =>dispatch=>{
    axios
      .post("api/users/login",userData)
      .then(res =>{
        // Save to localStorage
        // Set token to localStorage
        const {token}=res.data;
        localStorage.setItem("jwtToken",token);
         // Set token to Auth header
         setAuthToken(token);
          // Decode token to get user data
          const decoded=jwt_decode(token);
          dispatch(setCurrentUser(decoded));
      })
      .catch(err =>
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
          }) 
        );
}
// Set logged in user
export const setCurrentUser = decoded => {
    return {
      type: SET_CURRENT_USER,
      payload: decoded
    };
  };
  //LOADING
  export const setUserLoading = () => {
    return {
      type: USER_LOADING
    };
  };
  //LOGOUT
  export const logoutUser = () => dispatch => {
    // Remove token from local storage
    localStorage.removeItem("jwtToken");
    // Remove auth header for future requests
    setAuthToken(false);
    // Set current user to empty object {} which will set isAuthenticated to false
    dispatch(setCurrentUser({}));
  }
  //Verify user email
 export function verifyUser(token) {
return dispatch => {
console.log("put request");
axios
.put(`/api/users/verify/${token}`)
.then(res => {})
.catch(err => console.log(err));
};
 };
  
  //SHOW CUSTOMER LIST
  export const  Showcustomer=()=> dispatch => {
  axios
    .get("/api/users/userlist")
    .then(res =>{
      console.log(res.data);
      dispatch({
        type:GET_CUSTOMER_LIST,
         payload:res.data
        
      })
    } 
      
      )
    .catch(err => console.error(err));
  };
  //Edit customer
  export const EditCustomer=(id,Namedata) =>dispatch=>{
  axios
    .put(`/api/users/update/${id}`,Namedata)
    .then(res =>{
      
   dispatch({
     type:UPDATE_CUSTOMER,
     payload:id
   })
     } )
    .catch(err =>  dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }));
  };
  //Delete Customer
  export const DeleteCustomer =(id) => dispatch => {
   axios
     .delete(`/api/users/delete/${id}`)
     .then(res => {
       console.log(id)
      dispatch({
        type: DELETE_CUSTOMER,
        payload:id
      })
     })
     .catch(err =>  dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }) );
   
  };
  export const GetSpecificCustomer = (id) => dispatch => {
  
 axios
   .get(`/api/users/customer/${id}`)
   .then(res => {
    
    console.log(res.data);
    dispatch({
      type:GET_SPECIFIC_CUSTOMER,
      payload:res.data
    })

   })
   .catch(err => console.error(err));
  };