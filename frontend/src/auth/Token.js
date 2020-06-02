import React, { Component } from 'react';
import { verifyUser } from '../actions/authActions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
class Token extends Component {
 
componentWillMount() {
    this.props.verifyUser(this.props.match.params.token);
    console.log("token",this.props.match.params.token);
}
  render() {
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
      <div className="row">
        <div className="col s12 center-align">
          <h4>
            <b>Congratulations!</b> 
            <p className="flow-text grey-text text-darken-1">
            You can now  <Link to="/login" >SignIn</Link>
             
            </p>
          </h4>
          </div>

          </div></div>
       
    );
  }
}
export default connect(null,
{verifyUser})
(Token);
