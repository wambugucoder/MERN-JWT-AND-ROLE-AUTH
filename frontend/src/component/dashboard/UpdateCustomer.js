import React, { Component } from 'react';
import {GetSpecificCustomer, EditCustomer} from '../../actions/authActions'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class UpdateCustomer extends Component {
  constructor(props) {
    super(props);
    this.state = { 
    name:this.props.customerlist.name,
email:this.props.customerlist.email
     
   };
   
  }


componentDidMount() {
  this.props.GetSpecificCustomer(this.props.match.params.id);

}
onChange=e=> {
  this.setState({[e.target.id]:e.target.value})
  }
  onSubmit=(e,id)=> {
    e.preventDefault();
    const Namedata={
           name:this.state.name,
          
    };
   
    this.props.EditCustomer(this.props.match.params.id,Namedata);
    this.props.history.push("/userlist")
}
  render() {
    const {user}=this.props.customerlist;
   
    
    return (
      <div class="container">
    
    <form noValidate onSubmit={this.onSubmit}>
                <div className="input-field col s12">
                  <input
                  
                    onChange={this.onChange}
                    value={this.state.name}
                    placeholder={user.name}
                    
                    id="name"
                    type="text"
                   
                  />
                  <label htmlFor="name">Name</label>
                  
                </div>
                <div className="input-field col s12">
                  <input
                  onChange={this.onChange}
                    
                   value={user.email}
                    
                    id="email"
                    type="email"
                   
                  />
                  <label htmlFor="email">Email</label>
                 
                </div>
              
                <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                  <button
                    style={{
                      width: "150px",
                      borderRadius: "3px",
                      letterSpacing: "1.5px",
                      marginTop: "1rem"
                    }}
                    type="submit"
                    className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                  >
                  Update
                  </button>
                </div>
              </form>
      </div>
    );
  }
}
UpdateCustomer.propTypes = {
  EditCustomer:PropTypes.func.isRequired,
 GetSpecificCustomer : PropTypes.func.isRequired,
 auth: PropTypes.object.isRequired,
errors:PropTypes.object.isRequired,
customerlist:PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth:state.auth,
  errors:state.errors,
  customerlist:state.customerlist
});
export default connect(mapStateToProps, 
  {GetSpecificCustomer,EditCustomer})
  (UpdateCustomer)

