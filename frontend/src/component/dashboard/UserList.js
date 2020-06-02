import { DeleteCustomer, Showcustomer} from '../../actions/authActions';
import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class UserList extends Component {
 
  
 async componentDidMount() {
   await this.props.Showcustomer();
 }
 deleteCustomer(id) {
this.props.DeleteCustomer(id);
  window.location.reload()
  
}
viewCustomer(id){
console.log(id);

this.props.history.push(`/update/${id}`)
}
 
  render() {
   const {user}=this.props.customerlist;
   const CL=(
<div className="container">
<div class="center">
 <table class="responsive-table">

 <thead>

<tr>

<th >Name</th>
<th >Active</th>
<th >Email</th>
<th >Actions</th>

</tr>

 </thead>
 <tbody>
   {
    user.map((user)=>
    <tr key={user._id}>
      <td>{user.name}</td>
      <td>{user.active.toString()}</td>
      <td>{user.email}</td>
      <td> <button class="btn"onClick={()=>this.viewCustomer(user._id)}><i class="material-icons">create</i></button> 
    
       <button class="btn"onClick={()=>this.deleteCustomer(user._id)}><i class="material-icons">delete</i></button>
      
      
      </td>
    </tr>
    
    )}

   
 </tbody>
 </table>
</div>
</div>

   )
    
	return(
    <div className="row">
    {
      user.length===0?'NO USERS or server is offline':CL
    }
    </div>
  );
   
  }
}

 
   



UserList.propTypes = {
 Showcustomer:PropTypes.func.isRequired,
 DeleteCustomer:PropTypes.func.isRequired,

 auth:PropTypes.object.isRequired,
 errors:PropTypes.object.isRequired,
customerlist:PropTypes.object.isRequired,

};
const mapStateToProps = state => ({
  auth:state.auth,
  errors:state.errors,
  customerlist:state.customerlist
});
export default connect(mapStateToProps, 
 {Showcustomer,DeleteCustomer})
  (UserList);
